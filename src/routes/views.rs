use hbs::handlebars::to_json;
use hbs::Template;
use ini::Ini;
use iron::prelude::*;
use iron::status;
use serde_json::value::{Value, Map};


// TODO: figure out how to use a global config object or supply args to views
const INIFILE: &'static str = "conf.ini";


fn get_default_context(page_name: &str, url_key: &str) -> Map<String, Value> {
    let mut context = Map::new();
    let conf = Ini::load_from_file(INIFILE).unwrap();
    let conf_url = conf.section(Some("url".to_owned())).unwrap();
    let conf_general = conf.section(Some("general")).unwrap();
	let site_domain = conf_general.get("site_domain").unwrap();

	let title = page_name.to_owned() + " @" + site_domain;
    context.insert("title".to_string(), to_json(&title));

    let protocol = conf_general.get("protocol").unwrap().to_string();
	let canonical = protocol + site_domain + conf_url.get(url_key).unwrap();
	context.insert("canonical".to_string(), to_json(&canonical));

	let url_index = conf_url.get("index").unwrap();
	context.insert("url_index".to_string(), to_json(&url_index));
	let url_portfolio = conf_url.get("portfolio").unwrap();
	context.insert("url_portfolio".to_string(), to_json(&url_portfolio));
	let url_kartuliflash = conf_url.get("kartuliflash").unwrap();
	context.insert("url_kartuliflash".to_string(), to_json(&url_kartuliflash));
	let url_spacebears = conf_url.get("spacebears").unwrap();
	context.insert("url_spacebears".to_string(), to_json(&url_spacebears));

	return context;
}


/// index page
pub fn index(_: &mut Request) -> IronResult<Response> {
	let mut context = get_default_context("home", "index");
	context.insert("active_index".to_string(), to_json(&"true"));

    let template = "views/index";
    Ok(Response::with((status::Ok, Template::new(template, context))))
}


pub fn portfolio(_: &mut Request) -> IronResult<Response> {
	let mut context = get_default_context("portfolio", "portfolio");
	context.insert("active_portfolio".to_string(), to_json(&"true"));

    let template = "views/portfolio";
    Ok(Response::with((status::Ok, Template::new(template, context))))
}


pub fn kartuliflash(_: &mut Request) -> IronResult<Response> {
	let mut context = get_default_context("kartuliflash", "kartuliflash");
	context.insert("active_kartuliflash".to_string(), to_json(&"true"));

    let template = "views/kartuliflash";
    Ok(Response::with((status::Ok, Template::new(template, context))))
}


pub fn spacebears(_: &mut Request) -> IronResult<Response> {
	let mut context = get_default_context("spacebears", "spacebears");
	context.insert("active_spacebears".to_string(), to_json(&"true"));

    let template = "views/spacebears";
    Ok(Response::with((status::Ok, Template::new(template, context))))
}
