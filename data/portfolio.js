/* portfolio for kodeaffe.de */
exports.portfolio = [
  {
    year: '2013',
    items: [
      {
        header: 'Python Developer at txtr.com',
        start: '2012-07',
        end: '',
        link_href: 'http://de.txtr.com',
        link_text: 'website',
        description: 'Improved the performance and internal architecture of a large legacy web application with dependencies to other in-house applications. Notably, moving from Jython to cPython and reworking the URL configuration system.',
        technologies: ['Python', 'Django', 'HTML', 'CSS', 'JQuery', 'MySQL'],
        status: 'ongoing employment'
      },
      {
        header: 'Rewrite of kodeaffe.de (2013-01)',
        link_href: 'http://kodeaffe.de',
        link_text: 'website',
        description: 'Implemented kodeaffe.de using a homebrew system based on <a href="http://expressjs.com/">express.js</a>',
        technologies: ['Express.js', 'Javascript', 'HTML', 'CSS', 'Jade'],
        status: 'online'
      }
    ]
  },

  {
    year: '2012',
    items: [
      {
        header: 'jw2html',
        start: '2012-08',
        end: '2012-11',
        link_href: 'https://github.com/marmorkuchen/jw2html',
        link_text: 'github',
        description: 'A little tool to download issues of the <a href="http://jungle-world.com">Jungle World</a> and compress into single HTML file, so it can be easily converted to epub',
        technologies: ['Python', 'BeautifulSoup', 'HTML'],
        status: 'online'
      },
      {
        header: 'shenmartav.ge',
        start: '2012-03',
        end: '2012-11',
        link_href: 'http://shenmartav.ge',
        link_text: 'website',
        description: 'Development of a website to watch representative (in)action  in collaboration with <a href="http://transparency.ge">Transparency International Georgia</a> (TIG) and <a href="http://cipdd.org">Caucasus Institute for Peace Democracy and Development</a> (CIPDD). Representatives of National Parliament, Tbilisi City Hall + Ajara Supreme Council are watched, pulling in data from various TIG + CIPDD projects: voting behaviour + presence, income declarations, parliament alerts, questions, etc.',
        technologies: ['Python', 'Django', 'HTML', 'CSS', 'JQuery', 'PostgreSQL'],
        status: 'online'
      }
    ]
  },

  {
    year: '2011',
    items: [
      {
        header: 'Lead Developer at Transparency International Georgia',
        start: '2011-11',
        end: '2012-04',
        link_href: 'http://transparency.ge/en',
        link_text: 'transparency.ge',
        description: '<ul> <li>redeveloping TI Georgia\'s <a href="http://transparency.ge">website</a></li> <li>maintaining and enhancing the backend to <a href="http://parliament.transparency.ge/subscribe/?lang=en">Parliament Alert service</a></li> <li>graphical visualisation of <a href="http://transparency.ge/mediaownership/en/index.html">georgian advertising sector</a></li> <li>maintaining and enhancing a scraper of <a href="https://github.com/tigeorgia/Declaration.ge-PDF-Scraper">government income declarations</li> </ul>',
        technologies: ['PHP', 'Drupal', 'Python', 'Django', 'RapidSMS', 'D3', 'SVG', 'Javascript', 'CouchDB'],
        status: 'online'
      },
      {
        header: 'Kartuli Flash',
        start: '2011-09',
        link_href: '/kartuliflash',
        link_text: 'learn',
        description: 'A little application to learn georgian letters by flash cards (mediocre user interface).',
        technologies: ['HTML', 'CSS', 'JQuery'],
        status: 'online'
      },
      {
        header: 'Padding for owncloud crypto library',
        start: '2011-08',
        link_href: 'projects/owncloud/lib_crypt.php.diff',
        link_text: 'patch',
        description: 'Patch to introduce 8-byte padding into <a href="http://owncloud">owncloud\'s</a> crypto library. This is a precursor to implement server-side encryption.',
        technologies: ['PHP', 'owncloud'],
        status: 'ignored'
      },
      {
        header: 'Age Verification Module',
        start: '2011-06',
        link_href: 'projects/uc_checkout_validate/uc_checkout_agevalidate.diff',
        link_text: 'patch',
        description: 'Patch to make the <a href="http://www.ubercart.org/project/uc_checkout_agevalidate">Age Verification Module</a> work again on current <a href="http://ubercart.org">Ubercart (2.4)</a> on current <a href="http://drupal.org">Drupal 6 (6.22)</a>',
        technologies: ['PHP', 'Ubercart', 'Drupal'],
        status: 'released'
      },
      {
        header: 'WeatherPad',
        start: '2011-06',
        link_href: 'https://github.com/marmorkuchen/weathermashup',
        link_text: 'github',
        description: 'Ad-hoc one weekend team coding (see <a href="http://rhok.org">Random Hacks of Kindness</a>) of a weather mashup to aggregate different weather sources into one website to compare forecasts and warnings. <a href="http://www.rhok.org/solutions/weatherpad">RHoK Solution</a>.',
        technologies: ['Python', 'Flask', 'HTML', 'CSS', 'JQuery'],
        status: 'prototype'
      },
      {
        header: 'Vegopolis',
        start: '2011-01',
        end: '2011-10',
        link_href: 'http://vegopolis.ru',
        link_text: 'website',
        description: 'Improvement of the current website and development of new features for a website advocating Vegetarianism and Veganism (for a russian-speaking audience).',
        technologies: ['Python', 'Django', 'HTML', 'CSS', 'JQuery'],
        status: 'online'
      },
      {
        header: '22D',
        start: '2011-01',
        link_href: 'http://www.22dmusic.com/22D/index.php',
        link_text: 'website',
        description: 'Development of a CMS for a music publisher\'s website in collaboration with <a href="http://silverspoon.de" title="silverspoon.de">silverspoon.de</a>',
        technologies: ['PHP', 'CodeIgniter', 'SQLite', 'HTML', 'CSS', 'JQuery'],
        status: 'online'
      }
    ]
  },
  {
    year: '2010',
    items: [
      {
        header: 'lalala.com.au',
        start: '2010-11',
        link_href: 'http://www.lalala.com.au',
        link_text: 'website',
        description: 'Development of a CMS for a music producer\'s website in collaboration with <a href="http://silverspoon.de" title="silverspoon.de">silverspoon.de</a>',
        technologies: ['PHP', 'CodeIgniter', 'SQLite', 'HTML', 'CSS', 'JQuery'],
        status: 'online'
      },
      {
        header: 'Spacebears',
        start: '2010-07',
        link_href: '/spacebears',
        link_text: 'game',
        description: 'A demo to showcase HTML5',
        technologies: ['HTML', 'CSS', 'Javascript'],
        status: 'online'
      }
    ]
  },
  {
    year: '2009',
    items: [
      {
        header: 'mldata.org',
        start: '2009-09',
        end: '2010-06',
        link_href: 'http://mldata.org',
        link_text: 'website',
        description: 'Development of mldata.org, a machine learning data set repository, a collaboration between TU Berlin, University of Southampton and others.',
        technologies: ['Python', 'Django', 'HTML', 'CSS', 'JQuery'],
        status: 'online'
      },
      {
        header: 'shannoncallahan.de',
        start: '2009-07',
        link_href: 'http://shannoncallahan.de',
        link_text: 'website',
        description: 'Development of a CMS for an artist\'s website in collaboration with <a href="http://silverspoon.de" title="http://silverspoon.de">silverspoon.de</a>.',
        technologies: ['PHP', 'CodeIgniter', 'SQLite', 'HTML', 'CSS', 'JQuery'],
        status: 'online'
      },
      {
        header: 'Galway Social Space',
        start: '2009-06',
        end: '2010-01',
        link_href: '',
        link_text: '',
        description: 'Administration of the Linux workstations in the Galway Social Space, Galway, Ireland.',
        technologies: ['Linux'],
        status: 'shut down'
      },
      {
        header: 'GNOME Screensaver time display',
        start: '2009-05',
        link_href: 'http://bugzilla.gnome.org/show_bug.cgi?id=582292',
        link_text: 'bug report / patch',
        description: 'With this patch, GNOME Screensaver will show the current time when the login box is presented to the user.',
        technologies: ['C', 'GTK', 'GNOME'],
        status: 'pending'
      },
      {
        header: 'stephangenze.de',
        start: '2009-02',
        link_href: 'http://stephangenze.de',
        link_text: 'website',
        description: 'Development of a CMS for an artist\'s website in collaboration with <a href="http://silverspoon.de" title="http://silverspoon.de">silverspoon.de</a>.',
        technologies: ['PHP', 'CodeIgniter', 'SQLite', 'HTML', 'CSS', 'JQuery'],
        status: 'online'
      },
      {
        header: 'DEFY Jump Bridge Calculator',
        start: '2009-01',
        link_href: '/projects/eve/jbcalc.html',
        link_text: 'calculator',
        description: 'This tool calculates the liquid ozone consumption of your ship when using a jump bridge. It features short-cut distances for DEFY jump bridges. Do not worry if this does not make any sense to you. :)',
        technologies: ['HTML', 'CSS', 'Javascript'],
        status: 'online'
      }
    ]
  },
  {
    year: '2008',
    items: [
      {
        header: 'groundcrew.us',
        start: '2008-06',
        end: '2009-01',
        link_href: 'https://github.com/marmorkuchen/groundcrew-viewer',
        link_text: 'github',
        description: 'Participiation in the development of groundcrew: it can involve you in a million different kinds of things in your community, from pick-up sports games, to volunteering, to giant art projects.',
        technologies: ['Ruby', 'Rails', 'JQuery'],
        status: 'online'
      },
      {
        header: 'EVESkillCheck',
        start: '2008-05',
        end: '2009-02',
        link_href: 'http://sourceforge.net/projects/eveskillcheck',
        link_text: 'project page',
        description: 'This tool checks your character\'s remaining skill training time, using EVE\'s API. It also shows you the name of the skill and to which level it is trained. Available as command-line application and GNOME applet.',
        technologies: ['Python', 'EVE API', 'GTK', 'GNOME'],
        status: 'released'
      }
    ]
  },
  {
    year: '2007',
    items: [
      {
        header: 'denyhosts for logwatch',
        start: '2007-12',
        link_href: '/projects/logwatch_denyhosts-0.1.tar.bz2',
        link_text: 'download',
        description: 'This set of files implements a plugin for <a href="http://www.logwatch.org">logwatch</a> to make use of the logfiles generated by <a href="http://denyhosts.sf.net">denyhosts</a>.',
        technologies: ['logwatch', 'denyhosts', 'Perl'],
        status: 'released'
      },
      {
        header: 'Shogun Toolbox',
        start: '2007-10',
        end: '2009-02',
        link_href: 'http://shogun-toolbox.org',
        link_text: 'website',
        description: 'Participiation in the development of SHOGUN, a new machine learning toolbox with focus on large scale kernel methods and especially on Support Vector Machines (SVM) with focus to bioinformatics.',
        technologies: ['C++', 'Python', 'Matlab', 'Octave', 'R', 'swig'],
        status: 'released'
      },
      {
        header: 'Script the Deutsche Telekom',
        start: '2007-10',
        link_href: '/projects/telekom.tar.bz2',
        link_text: 'download',
        description: 'Two scripts to automate access to <a href="http://t-home.de/tools/tvorteil">Tvorteil</a> and <a href="https://vhd.t-com.de">VHD portal</a>. They might not work out of the box for you, because they just got ripped out of another system. And of course, you need regular logins to Telekom\'s servers...',
        technologies: ['PHP', 'Curl'],
        status: 'released'
      },
      {
        header: 'Debian package  for calcurse',
        start: '2007-08',
        link_href: '',
        link_text: '',
        description: 'Development of a Debian package for <a href="http://culot.org/calcurse/index.html">calcurse</a>, a text-based personal organiser.',
        technologies: ['Debian', 'C', 'ncurses'],
        status: 'pending'
      },
      {
        header: 'tymar.com',
        start: '2007-03',
        end: '2007-07',
        link_href: 'http://tymar.com/engineering.php',
        link_text: 'website',
        description: '<ul><li>Implementation of a Python application to automatically move sites between exchanges in Nokia\'s ActioNet.</li><li>Security fix-up of various servers: user roles, SSH public key authentication.</li><li>Implementation of an SNMP monitoring system on various servers.</li><li>Refactoring and proof-reading of router software for Nokia\'s ActioNet and Fleetlink.</li><li>Various bugfixes and small features implemented in client\'s CRM system (SugarCRM).</li></ul>',
        technologies: ['Python', 'PHP', 'SNMP', 'SSH'],
        status: 'released'
      },
      {
        header: 'Drupal hidden.module',
        start: '2007-03',
        link_href: 'http://groups.drupal.org/node/3116',
        link_text: 'website',
        description: 'A module for Drupal 5.1 to hide (in the sense of Indymedia) nodes and comments.',
        technologies: ['PHP', 'Drupal'],
        status: 'released'
      },
      {
        header: 'Couchsurfing user profile export',
        start: '2007-02',
        link_href: 'http://groups.google.com/group/cs-ridesurf-dev/files',
        link_text: 'files',
        description: 'A set of scripts to export user profile data from Couchsurfing into a microformat and to import that data into an internal format for Ridesurf.',
        technologies: ['PHP', 'Ruby', 'microformats'],
        status: 'released'
      }
    ]
  },
  {
    year: '2006',
    items: [
      {
        header: 'Arpretrieval - a Python module',
        start: '2006-07',
        link_href: '/projects/arpretrieval-20060713.tar.bz2',
        link_text: 'download',
        description: '<a href="http://python.org">Python</a> module to retrieve the MAC address from a host\'s given IP address.',
        technologies: ['Python', 'IP', 'Ethernet'],
        status: 'released'
      },
      {
        header: 'afidmobile.com',
        start: '2006-06',
        end: '2006-09',
        link_href: 'http://afidmobile.com',
        link_text: 'website',
        description: 'Development of a web- and SMS-based messaging platform.',
        technologies: ['PHP', 'AJAX', 'HTML', 'Javascript'],
        status: 'released'
      },
      {
        header: 'dada2drupal',
        start: '2006-06',
        link_href: '/projects/dada2drupal-20060708.tar.bz2',
        link_text: 'download',
        description: 'A database conversion script from <a href="http://dadaimc.org">DadaIMC 0.98</a> to <a href="http://drupal.org">Drupal 4.72</a>.',
        technologies: ['Python', 'DadaIMC', 'Drupal'],
        status: 'released'
      },
      {
        header: 'Oblong Internet Cafe',
        start: '2006-05',
        end: '2007-07',
        link_href: '',
        link_text: '',
        description: 'Administration of the Linux workstations and servers in the Oblong Internet Cafe, Te Aro, Wellington, NZ.',
        technologies: ['Linux', 'Xen'],
        status: 'shut down'
      }
    ]
  },
  {
    year: '2005',
    items: [
      {
        header: 'libiptables',
        start: '2005-12',
        link_href: '/projects/linblock/libiptables-ipv4-perl_0.98-3_i386.deb',
        link_text: 'download',
        description: '<a href="http://www.debian.org">Debian</a> package which contains a Perl module for manipulating iptables rules. This package is needed for linblock. You can also <a href="/projects/linblock/">get the complete sources</a>.',
        technologies: ['Debian', 'Perl'],
        status: 'testing'
      },
      {
        header: 'linblock',
        start: '2005-12',
        link_href: '/projects/linblock/linblock_1.0-1_all.deb',
        link_text: 'download',
        description: '<a href="http://www.debian.org">Debian</a> package to automatically download antip2p blacklist + install into Linux\'s IPTables. You can also <a href="/projects/linblock/">get the complete sources</a>.',
        technologies: ['Debian', 'Perl'],
        status: 'testing'
      },
      {
        header: 'GNU/Linux on an MSI S270W',
        start: '2005-11',
        end: '2007-11',
        link_href: '',
        link_text: '',
        description: 'Report about GNU/Linux on an MSI S270W.',
        technologies: ['Linux'],
        status: 'lost'
      },
      {
        header: 'Road GmbH',
        start: '2005-10',
        end: '2006-01',
        link_href: '',
        link_text: '',
        description: 'Development of a Linux-based VPN system for the remote control of a smartphone named HandyPC.',
        technologies: ['Linux', 'OpenVPN'],
        status: 'offline'
      },
      {
        header: 'QPSPManager Debian',
        start: '2005-09',
        end: '2005-11',
        link_href: '/projects/pspmanager/qpspmanager_1.2.1-2_i386.deb',
        link_text: 'download',
        description: 'Package for easier un-/install of qpspmanager under <a href="http://www.debian.org">Debian GNU/Linux</a>.',
        technologies: ['Debian'],
        status: 'pending'
      },
      {
        header: 'QPSPManager Upstream',
        start: '2005-09',
        end: '2005-11',
        link_href: 'projects/pspmanager/pspversion.patch',
        link_text: 'patch',
        description: 'Small patch to determine amateurishly the version of the attached Playstation Portable in order to disable some features of <a href="http://qpspmanager.sf.net">QPSPManager</a>.',
        technologies: ['C++', 'QT'],
        status: 'released'
      },
      {
        header: 'Xtops.de',
        start: '2005-08',
        end: '2006-01',
        link_href: 'http://xtops.de',
        link_text: 'website',
        description: 'Installation, configuration and modification of Linux on mobile systems.',
        technologies: ['Debian', 'Linux', 'Laptop'],
        status: 'online'
      },
      {
        header: 'Wireless Geek @ Geekcorps Mali',
        start: '2005-04',
        end: '2005-08',
        link_href: '',
        link_text: '',
        description: 'Linux and Wireless Geek for Geekcorps in Mali.',
        technologies: ['Linux', 'WLAN'],
        status: 'offline'
      },
      {
        header: 'wik2dict',
        start: '2005-04',
        link_href: '',
        link_text: '',
        description: '<a href="http://www.debian.org">Debian</a> maintenance of a package to convert databases from the Wik-family (Wikipedia, Wiktionary, etc.) to dict.',
        technologies: ['Debian'],
        status: 'offline'
      }
    ]
  },
  {
    year: '2004',
    items: [
      {
        header: 'motylek Praha',
        start: '2004-12',
        stop: '2005-02',
        link_href: 'http://motylek.com',
        link_text: 'website',
        description: 'Development of a tourism website.',
        technologies: ['PHP', 'PostgreSQL'],
        status: 'online'
      },
      {
        header: 'XScreensaver BSOD',
        start: '2004-09',
        link_href: '/projects/analogtv.c.diff',
        link_text: 'patch',
        description: 'When the Apple II emulation of the BSOD starts to emulate the display of a distorted analogue TV, CPU usage rises to 100% on my PowerBook. This little patch introduces a 1 microsecond sleep (it did not seem to make a difference if set to 500 or anything below). Note that this is not a fix, merely a hack.',
        technologies: ['C'],
        status: 'pending'
      },
      {
        header: 'USBView (GTK2 version)',
        start: '2004-04',
        end: '2004-06',
        link_href: '/projects/usbview-2.0pre2.tar.gz',
        link_text: 'download',
        description: 'USBView is a small application to make all devices attached to the USB visible. Unfortunately, upstream recently told me that there exists some GTK2 port in his repository and some discussions revealed that the interface to USB devices provided by sysfs will probably never show the information as complete as proc. Nevertheless, this version features: <ul> <li>GTK2 port</li> <li>sysfs support</li> <li>I18N support for: de, cs</li> <li>.desktop file and icon</li> </ul> ',
        technologies: ['C', 'GTK', 'USB'],
        status: 'pending, semi-rejected'
      },
      {
        header: 'Linux kernel patch for sysfs',
        start: '2004-06',
        link_href: '/projects/linux/fs_sysfs_inode.diff',
        link_text: 'patch',
        description: 'When a node is added to sysfs (e.g. a device plugged in via USB), the filesystem fails to make this change visible in the parent directory\'s ctime/mtime. This is in contrast to removing a device, because in that case, sysfs makes use of the function simple_unlink from fs/libfs.c which takes care of that. Instead of using simple_link from fs/libfs.c on creation, sysfs implements its own mechanism. This patch hooks into the function sysfs_create and sets the ctime and the mtime of the parent to CURRENT_TIME.',
        technologies: ['C', 'Linux'],
        status: 'included in Linux kernel 2.6.8'
      },
      {
        header: 'wmbatppc',
        start: '2004-02',
        link_href: '/projects/wmbatppc/wmbatppc.xosd.diff',
        link_text: 'patch',
        description: '<code>wmbatppc</code> is similar to <code>wmacpi</code> but for powerpc. It proves to be handling xosd issues not well if something fails. The whole program barfed on me, because libxosd tried to load some fonts it could not find due to problems with my locale (Xlib does not support de_DE.UTF8). This patch warns about xosd errors and disables xosd features at run-time. The homepage of wmbatppc can be found <a href="http://jblache.nerim.net/wmbatppc/">here</a> (<a href="http://titelou.free.fr/wmbatppc/">homepage</a>).',
        technologies: ['C'],
        status: 'included in version 2.4'
      },
      {
        header: 'irda-utils',
        start: '2004-01',
        end: '2005-03',
        link_href: 'http://packages.qa.debian.org/i/irda-utils.html',
        link_text: 'website',
        description: '<a href="http://www.debian.org">Debian</a> maintenance of <a href="http://www.hpl.hp.com/personal/Jean_Tourrilhes/IrDA/IrDA.html">irda-utils</a>, a package with tools to access and connect IrDA devices.',
        technologies: ['Debian', 'IrDA'],
        status: 'released'
      }
    ]
  },
  {
    year: '2003',
    items: [
      {
        header: 'AlBook',
        start: '2003-12',
        end: '2005-09',
        link_href: '/projects/albook/',
        link_text: 'directory',
        description: 'Latest addition: <a href="projects/albook/fluxbox_0.9.13-1_powerpc.deb">fluxbox 0.9.13</a> compiled for powerpc. Some stuff like kernel .config, System.map and .deb for a PowerBook G4 (Aluminium).',
        technologies: ['Debian', 'PowerPC'],
        status: 'released'
      },
      {
        header: 'yafc Patch #1',
        start: '2003-12',
        link_href: '/projects/yafc/yafc.lsminusa.diff',
        link_text: 'patch',
        description: '<code>yafc</code> makes false assumptions about the behaviour of real life FTP servers. In this case, it believes to get _all_ files from the server when issueing &quot;LIST&quot;, but this is not true for at least proFTPd 1.2.[59] which does not serve the hidden dot files. This patch makes &quot;ls -a&quot; work again. Also check the <a href="http://bugs.debian.org/cgi-bin/bugreport.cgi?bug=232012">Debian bug page</a>.',
        technologies: ['C'],
        status: 'included in 1.1'
      },
      {
        header: 'yafc Patch #2',
        start: '2003-12',
        link_href: '/projects/yafc/yafc.lfs-powerpc.diff',
        link_text: 'patch',
        description: 'A small patch which reintroduces a fixed version of 10_lfs.dpatch which seems to be necessary if you want to up-/download already existing files to/from a FTP server if you are on _PowerPC_. Otherwise, yafc will segfault. Check the <a href="http://yafc.sourceforge.net">homepage of yafc</a> and the <a href="http://bugs.debian.org/cgi-bin/bugreport.cgi?bug=222632">Debian bug page</a>.',
        technologies: ['C'],
        status: 'included in 1.1'
      },
      {
        header: 'pop3browser',
        start: '2003-11',
        link_href: '/projects/pop3browser.range.diff',
        link_text: 'patch',
        description: 'This patch introduces ranges when (un)deleting mails, like &quot;del 1-3 5 9-12&quot;. <code>pop3browser</code> does not seem to have a homepage, so perhaps you might have a look at the <a href="http://packages.qa.debian.org/p/pop3browser.html">Debian page</a>.',
        technologies: ['Perl'],
        status: 'included in 0.3.1'
      },
      {
        header: 'cdw',
        start: '2003-06',
        end: '2004-01',
        link_href: 'http://cdw.sourceforge.net',
        link_text: 'website',
        description: 'Testing and translation into German. CDW is a frontend to cdrecord/mkisofs for the console, based on ncurses.',
        technologies: ['C', 'gettext'],
        status: 'released'
      },
      {
        header: 'wmacpi',
        start: '2003-04',
        end: '2007-02',
        link_href: 'http://packages.qa.debian.org/w/wmacpi.html',
        link_text: 'website',
        description: '<a href="http://www.debian.org">Debian</a> maintenance of a <a href="http://www.windowmaker.org">Windowmaker</a> Dockapplet to visualize ACPI information.',
        technologies: ['Debian'],
        status: 'released'
      },
      {
        header: 'acpi.sf.net',
        start: '2003-02',
        end: '2006-02',
        link_href: 'http://acpi.sf.net',
        link_text: 'website',
        description: 'Development and Maintenance of the website of the ACPI4Linux project.',
        technologies: ['XHTML', 'CSS', 'PHP', 'MySQL'],
        status: 'released'
      }
    ]
  },
  {
    year: '2002',
    items: [
      {
        header: 'wmacpi',
        start: '2002-12',
        link_href: '/projects/wmacpi/wmacpi-1.34.diff',
        link_text: 'patch',
        description: 'Small patch to check the presence of batteries in /proc/acpi/battery more properly and thus making wmacpi useful for my Toshiba. The patch has been sent to upstream, but no answer yet. Apply with <code>patch -p0 &lt; wmacpi-1.34.diff</code> in the directory above <code>wmacpi-1.34/</code>. See the <a href="http://www.ne.jp/asahi/linux/timecop/">homepage</a> for more info. <b>UPDATE:</b> Meanwhile, someone more determined has decided to take over the package (with my support as Debian maintainer), check wmacpi-ng, alias wmacpi-2.0 at <a href="http://himi.org/wmacpi-ng/">himi.org</a>.',
        technologies: ['C', 'Windowmaker'],
        status: 'pending'
      },
      {
        header: 'gtk2-engines-cleanice',
        start: '2002-11',
        end: '2005-03',
        link_href: 'http://packages.qa.debian.org/g/gtk2-engines-cleanice.html',
        link_text: 'website',
        description: '<a href="http://www.debian.org">Debian</a> maintenance of a GTK 2.x theme engine, containing 4 different styles.',
        technologies: ['Debian', 'autoconf'],
        status: 'released'
      },
      {
        header: 'gtk2-engines-magicchicken',
        start: '2002-11',
        end: '2005-03',
        link_href: 'http://packages.qa.debian.org/g/gtk2-engines-magicchicken.html',
        link_text: 'website',
        description: '<a href="http://www.debian.org">Debian</a> maintenance of a GTK 2.x theme engine, containing 3 different styles.',
        technologies: ['Debian', 'autoconf'],
        status: 'released'
      },
      {
        header: 'Xtops.de',
        start: '2002-10',
        end: '2005-03',
        link_href: 'http://xtops.de',
        link_text: 'website',
        description: 'Installation, configuration and modification of Linux on mobile systems.',
        technologies: ['Debian', 'Linux', 'Laptop'],
        status: 'online'
      },
      {
        header: 'xpenguins-applet Debian',
        start: '2002-10',
        end: '2005-03',
        link_href: 'http://packages.qa.debian.org/x/xpenguins-applet.html',
        link_text: 'website',
        description: '<a href="http://www.debian.org">Debian</a> maintenance of a GNOME applet for xpenguins, see the <a href="http://xpenguins.seul.org">homepage of xpenguins</a> for more info.',
        technologies: ['Debian', 'autoconf'],
        status: 'released'
      },
      {
        header: 'xpenguins-applet Upstream',
        start: '2002-10',
        end: '2005-03',
        link_href: 'http://xpenguins.seul.org',
        link_text: 'website',
        description: 'Port of the applet to GNOME2.<br /> You can download the release 2.1.1 <a href="http://xpenguins.seul.org/xpenguins-applet-2.1.1.tar.gz">as a tarball</a> or as <a href="http://packages.debian.org/stable/gnome/xpenguins-applet.html">Debian package</a>.',
        technologies: ['C', 'GTK', 'GNOME', 'autoconf'],
        status: 'released'
      },
      {
        header: 'NeverwinterNights Model Viewer',
        start: '2002-08',
        end: '2002-10',
        link_href: '/projects/nwnmv/index.php',
        link_text: 'website',
        description: 'Model viewer for the Aurora models from NeverwinterNights.',
        technologies: ['C', 'GTK', 'OpenGL', 'autoconf'],
        status: 'unfinished'
      },
      {
        header: 'bubblemon',
        start: '2002-05',
        link_href: 'projects/bubblemon/uptime-patch-1.4',
        link_text: 'website',
        description: 'Patch for bubblemon 1.4 to display the uptime of the system.',
        technologies: ['C', 'Windowmaker'],
        status: 'ignored'
      },
      {
        header: 'Toshiba S3000-601',
        start: '2002-02',
        end: '2003-12',
        link_href: '',
        link_text: '',
        description: 'A report about <a href="http://www.debian.org">Debian GNU/Linux</a> on the <a href="http://newsletter.toshiba-tro.de/main/index.html">Toshiba Satellite 3000-601</a>.',
        technologies: ['Linux', 'Laptop'],
        status: 'lost'
      },
      {
        header: 'KVorbisComment',
        start: '2002-02',
        link_href: 'projects/KVorbisComment/index.php',
        link_text: 'website',
        description: 'A simple <a href="http://www.vorbis.com">OggVorbis</a> tag-editor for KDE.',
        technologies: ['C++', 'QT', 'KDE'],
        status: 'released'
      }
    ]
  },
  {
    year: '2001',
    items: [
      {
        header: 'JOggEncode',
        start: '2001-06',
        link_href: 'projects/JOggEncode.jar',
        link_text: 'download',
        description: 'A platform-independant encoder for <a href="http://www.vorbis.com">OggVorbis</a>, a free audio codec.',
        technologies: ['Java', 'Swing'],
        status: 'unfinished'
      }
    ]
  },
  {
    year: '2000',
    items: [
      {
        header: 'defcom',
        start: '2000-01',
        end: '2002-07',
        link_href: '',
        link_text: '',
        description: 'Systems Administration and Lead web developer at defcom.de, e.g. mtv.de, ottifanten.de or fettesbrot.de.',
        technologies: ['Linux', 'PHP', 'MySQL', 'HTML', 'Javascript'],
        status: 'offline'
      }
    ]
  },
  {
    year: '1999',
    items: [
      {
        header: 'MCY.com',
        start: '1999-06',
        end: '1999-11',
        link_href: '',
        link_text: '',
        description: 'Web developer at MCY.com',
        technologies: ['Linux', 'PHP', 'MySQL', 'HTML', 'Javascript'],
        status: 'offline'
      }
    ]
  },
  {
    year: '1998',
    items: [
      {
        header: 'Max-Bürger-Zentrum',
        start: '1998-05',
        end: '1999-04',
        link_href: '',
        link_text: '',
        description: 'Zivildienstleistender in the computer centre of the Max-Bürger-Zentrum. ',
        technologies: ['Linux', 'Windows', 'Perl', 'HTML', 'PC'],
        status: 'offline'
      }
    ]
  },
  {
    year: '1995',
    items: [
      {
        header: 'Traineeship Mathematisch-Technischer Informatiker',
        start: '1995-10',
        end: '1998-03',
        link_href: 'http://www.cms.hu-berlin.de',
        link_text: 'website',
        description: 'Trainee in the computer centre of the HU Berlin.',
        technologies: ['Linux', 'Windows', 'PHP', 'Sybase', 'HTML', 'Javascript', 'Java', 'C', 'C++', 'Fortran', 'PC'],
        status: 'online'
      }
    ]
  }
]
