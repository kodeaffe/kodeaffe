extern crate env_logger;
extern crate handlebars_iron as hbs;
extern crate ini;
extern crate iron;
extern crate mount;
extern crate router;
extern crate serde;
extern crate serde_json;
extern crate staticfile;


mod routes;


use std::ops::Deref;

use ini::Ini;
use iron::prelude::Iron;


const INIFILE: &'static str = "conf.ini";


fn main() {
    env_logger::init().unwrap();
    let conf = Ini::load_from_file(INIFILE).unwrap();
    let conf_general = conf.section(Some("general".to_owned())).unwrap();
    let host = conf_general.get("host").unwrap();

    println!("Server running at {}", host);
    Iron::new(routes::get(&conf)).http(host.deref()).unwrap();
}
