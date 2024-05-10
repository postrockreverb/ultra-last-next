# ultra-last-next

ultra-last-next is a boilerplate framework for web development.
It provides minimal server architecture, build of client static,
and it can be modified in any way to suit needs.

## Features
* Dockerized
* Translations
* Static build
* Multiple entry points

## Requirements
- node
- yarn
- docker-compose

## Setup
1. `make init`
2. open `http://localhost:40003/`

## Make commands
- `init` - runs container, installs dependencies, builds translations and static;
- `watch (w)` - runs static watcher;
- `build (b)` - builds translations and static;
- `build-translations (bt)` - builds translations;
- `build-static` - builds static;
- `restart-nginx (rn)` - restarts nginx container;
- `shell (s)` - opens php container's shell (use to install dependencies).

## License

MIT