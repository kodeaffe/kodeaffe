use hbs::{HandlebarsEngine, DirectorySource};
use ini::Ini;
use iron::prelude::*;
use mount::Mount;
use staticfile::Static;
use router::Router;

use std::error::Error;
use std::path::Path;


mod views;


fn add_dynamic(conf: &Ini, mount: &mut Mount) {
    let conf_template = conf.section(Some("template".to_owned())).unwrap();
    let dir = conf_template.get("dir").unwrap();
    let suffix = conf_template.get("suffix").unwrap();
    let templates = Box::new(DirectorySource::new(dir, suffix));
    let mut hbse = HandlebarsEngine::new();

    hbse.add(templates);
    if let Err(r) = hbse.reload() {
        panic!("{}", r.description());
    }

    // Configure router for dynamic pages
    let mut router = Router::new();
    let conf_url = conf.section(Some("url".to_owned())).unwrap();
	let url_index = conf_url.get("index").unwrap();
    router.get(url_index, views::index, "index");
	let url_portfolio = conf_url.get("portfolio").unwrap();
    router.get(url_portfolio, views::portfolio, "portfolio");
	let url_kartuliflash = conf_url.get("kartuliflash").unwrap();
    router.get(url_kartuliflash, views::kartuliflash, "kartuliflash");
	let url_spacebears = conf_url.get("spacebears").unwrap();
    router.get(url_spacebears, views::spacebears, "spacebears"); 

    // Chain handlebars middleware to router
    let mut chain = Chain::new(router);
    chain.link_after(hbse);

    // Mount dynamic pages at root
    mount.mount("/", chain);
}


fn add_static(conf: &Ini, mount: &mut Mount) {
    let conf_dir = conf.section(Some("dir".to_owned())).unwrap();
    let conf_url = conf.section(Some("url".to_owned())).unwrap();

	// cannot overload "/" with static dir
    let dir_static = conf_dir.get("static").unwrap();
	let url_static = conf_url.get("static").unwrap();
	mount.mount(url_static, Static::new(Path::new(dir_static)));
}


pub fn get(conf: &Ini) -> Mount {
	// Use mount to add router and static files
	let mut mount = Mount::new();
    add_dynamic(&conf, &mut mount);
    add_static(&conf, &mut mount);
    return mount;
}
