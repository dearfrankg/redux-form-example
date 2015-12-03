
# React/Redux Seed


## Problems

- wondering why I get a warning about propType
- wondering why the render method for Login gets called 5 times
- wondering why the render method for Home gets called 2 times


__console.log__

```text
warning.js?8a56:45 Warning: Failed propType: Required prop `actions` was not specified in `Home`. Check the render method of `RoutingContext`.
warning.js?8a56:45 Warning: Failed propType: Required prop `actions` was not specified in `Home`. Check the render method of `RoutingContext`.
LOGIN Object {history: Object, location: Object, params: Object, route: Object, routeParams: Object…}
LOGIN Object {history: Object, location: Object, params: Object, route: Object, routeParams: Object…}
LOGIN Object {history: Object, location: Object, params: Object, route: Object, routeParams: Object…}
LOGIN Object {history: Object, location: Object, params: Object, route: Object, routeParams: Object…}
LOGIN Object {history: Object, location: Object, params: Object, route: Object, routeParams: Object…}
HOME Object {history: Object, location: Object, params: Object, route: Object, routeParams: Object…}
HOME Object {history: Object, location: Object, params: Object, route: Object, routeParams: Object…}
LOGIN Object {history: Object, location: Object, params: Object, route: Object, routeParams: Object…}
LOGIN Object {history: Object, location: Object, params: Object, route: Object, routeParams: Object…}
LOGIN Object {history: Object, location: Object, params: Object, route: Object, routeParams: Object…}
LOGIN Object {history: Object, location: Object, params: Object, route: Object, routeParams: Object…}
LOGIN Object {history: Object, location: Object, params: Object, route: Object, routeParams: Object…}
HOME Object {history: Object, location: Object, params: Object, route: Object, routeParams: Object…}
HOME Object {history: Object, location: Object, params: Object, route: Object, routeParams: Object…}
```



## Build System Features

- Currently it is on react 0.14.3
- Leverages seed project [webpack-express-boilerplate][seed]
- react hot loader
- sass support
- development build produces files only in memory and watches
- production injects links with revision for minified JS and CSS into index.html


Not supported:

- CSS modules - read about them [here](http://glenmaddern.com/articles/css-modules)

[seed]:https://github.com/christianalfoni/webpack-express-boilerplate.git
