
# React/Redux Seed


## Problems

- wondering why I get a warning about propType

WORK_AROUND: connect empty state to your components like so:

```js
[...]
import {connect} from 'react-redux';

@connect((state) => ({}))
class MyComponent extends Component {
[...]
```


- wondering why the render method for Login gets called 5 times
- wondering why the render method for Home gets called 2 times





## The error in the console.log

```text
Warning: Failed propType: Required prop `state` was not specified in `Home`. Check the render method of `RoutingContext`.
Warning: Failed propType: Required prop `actions` was not specified in `Home`. Check the render method of `RoutingContext`.
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

## redux-forms

> the login component looks pretty good. your rendering questions are more about react-router. although one thing to know about is that when you are using redux-devtools, it will replay every action every time it gets an action, which will probably cause many re-renders.
>
>-- erikras of redux-form -- after a code review

I removed redux-devtools but my problems persist.


## redux-router

I examined the example app that comes with redux-router and it only renders components once.
I will remove redux-forms from the mix to see if that corrects the problem.

The basic example with redux router shows then using the `connect` function to connect state
to the App component and no other components.  To be more precise it shows them mapping an empty state like so:

### Work-Around for the warning problem

```js
[...]
import {connect} from 'react-redux';

@connect((state) => ({}))
class App extends Component {
[...]
```

I tried adding an empty state to my components (which makes them smart components - which I don't want),
and the warning went away.

















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
