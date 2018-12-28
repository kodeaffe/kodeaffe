README
======

This is the rust/iron version of kodeaffe.de made in July 2016. It also a rust
pet project to learn the language, so please bear with me.

The project is currently built on `iron` 0.3.0, because 0.4.0 depends on
`hyper` 0.9.10 which fails to compile due to issues with crate `url`.

This code is licensed under GPL v3, see the file LICENSE for more details


Run
----

$ cargo run --release

The default in conf.ini will make the web server bind to port 3000.


Deployment
----------

The repo comes with files for `supervisor` and `systemd` to run the app at
boot.

Enjoy,
 kodeaffe
