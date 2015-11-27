# Weather

An app that shows the weather at various cities around the US

## Installation

To install locally

* With node 4.2 and bower installed
* cd to project directory
* Run `npm install`
* Run  `bower install`
* Run `npm run build && npm start`
* Go to `http://localhost:8080` in your browser

To pull the docker image from docker hub

* Run `docker pull mattbanister/weather`
* Then `docker run -p 0.0.0.0:8080:8080 mattbanister/weather`
* The site should be available from a host browser at `http://[docker machine vm ip]:8080`

To build the docker image

* cd to project directory
* Run `docker build -t mattbanister/weather .`
* After building run `docker run -p 0.0.0.0:8080:8080 mattbanister/weather`
* You can retrieve the ip of your current docker vm with `$(docker-machine ip [machine name])`
* The site should be available from a host browser at `http://[docker machine vm ip]:8080`
* Test with `curl http://$(docker-machine ip [machine name]):8080`

## Testing

Run `npm run test`

## TODO

* Instrument code with isparta as preloader in order to have coverage on es6/jsx code rather than transpiled code