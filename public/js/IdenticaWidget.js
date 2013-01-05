String.implement({
    tweetify: function() {
        return this.replace(/(https?:\/\/\S+)/gi,'<a href="$1">$1</a>').replace(/(^|\s)@(\w+)/g,'$1<a href="http://twitter.com/$2">@$2</a>').replace(/(^|\s)#(\w+)/g,'$1<a href="http://search.twitter.com/search?q=%23$2">#$2</a>');
    },
    dentify: function(server) {
        return this.replace(/(https?:\/\/\S+)/gi,'<a href="$1">$1</a>').replace(/(^|\s)@(\w+)/g,'$1<a href="'+server+'/$2">@$2</a>').replace(/(^|\s)#(\w+)/g,'$1<a href="'+server+'/search/notice?q=%23$2&search=Search">#$2</a>').replace(/(^|\s)!(\w+)/g,'$1<a href="'+server+'/group/$2">!$2</a>');
    }
});

var IdenticaWidget = new Class({
    Implements: [Options, Events],
    options: {
        follow_text: "Follow me on identi.ca",
        server: "http://identi.ca",
        api_path: "api/",
        msg_count: "3",
        user_name: "derschreckliche",
        timeline: "user_timeline",
        avatar: "top",
        avatar_size: "50",
        container: $("identica_widget"),
        service: "identi.ca"    //supported services: "identi.ca", "twitter.com", "status.net"(options.server required)
    },
    initialize: function(options){
        if(options.service == "twitter.com") {
            options.follow_text = (options.follow_text == null) ? "Follow me on twitter.com" : options.follow_text ;
            options.server = (options.server == null) ? "http://twitter.com" : options.server ;
            options.api_path = (options.api_path == null) ? "" : options.api_path ;
        } else if(options.service == "identi.ca") {
            options.follow_text = (options.follow_text == null) ? "Follow me on identi.ca" : options.follow_text ;
            options.server = (options.server == null) ? "http://identi.ca" : options.server ;
            options.api_path = (options.api_path == null) ? "api/" : options.api_path ;
        } else {
            //custom status.net instance
            //please set server and api_path manually
        }
        this.setOptions(options);
        TwApiReq = new Request.JSONP({
            url: this.options.server+'/'+this.options.api_path+"/statuses/"+this.options.timeline+".json?screen_name="+this.options.user_name+"&count="+this.options.msg_count,
            onComplete: function(data){
                this.options.container.getChildren().dispose();
                link = new Element('a', {
                    'href': this.options.server+'/'+this.options.user_name,
                    'id': 'follow-me-link',
                    'html': this.options.follow_text+'<br/>'
                });
                if(this.options.avatar == "top") {
                    av_image = new Element('img', {
                        'src': data[0].user.profile_image_url,
                        'width': this.options.avatar_size,
                        'height': this.options.avatar_size,
                        'class': 'micro-avatar',
                        'style': 'float:left'
                    });
                    av_image.inject(link, 'top');
                }
                link.inject(this.options.container, 'top');

                ul = new Element('ul', {
                    'style': 'clear:left'
                });
                ul.inject(this.options.container, 'bottom');
                data.each(function(status){
                    if(this.options.service == "twitter.com"){
                        html_to_inject = status.text.tweetify();
                    } else {
                        html_to_inject = status.text.dentify(this.options.server);
                    }
                    if(this.options.avatar == 1) {
                        link = '<a href="'+this.options.server+'/'+status.user.screen_name+'"><img src="'+status.user.profile_image_url
                                +'" width="'+this.options.avatar_size+'" height="'+this.options.avatar_size+'" class="micro-avatar" style="float:left;" /></a>';
                        html_to_inject = link + html_to_inject;
                    }
                    var li_elem = new Element('li', {
                        'html': html_to_inject,
                        'style': 'clear:left;'
                    });
                    li_elem.inject(ul);
                }.bind(this));
            }.bind(this)
        });

        TwApiReq.send();
    }
});
