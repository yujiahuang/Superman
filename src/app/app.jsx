(function () {
  var React = require('react');
  var Router = require('react-router');
  var AppRoutes = require('./app-routes.jsx');
  var injectTapEventPlugin = require('react-tap-event-plugin');
  var Parse = require('parse').Parse;
  var APP_KEY = 'uWLq7DHTAeBWeuOyM9DPkXY2zjZij4HsLEMMMqK7';
  var API_KEY = 'yyoiZuZMWqFjrCbCfdf0Q2dKg0B5YyVQgpXuMxCP';
  //Needed for React Developer Tools
  window.React = React;
  Parse.initialize(APP_KEY, API_KEY);

  //Needed for onTouchTap
  //Can go away when react 1.0 release
  //Check this repo:
  //https://github.com/zilverline/react-tap-event-plugin
  injectTapEventPlugin();

  // Render the main app react component into the document body. 
  // For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
  Router
    // Runs the router, similiar to the Router.run method. You can think of it as an 
    // initializer/constructor method.
    .create({
      routes: AppRoutes,
      scrollBehavior: Router.ScrollToTopBehavior
    })
    // This is our callback function, whenever the url changes it will be called again. 
    // Handler: The ReactComponent class that will be rendered  
    .run(function (Handler) {
      React.render(<Handler/>, document.body);
    });

})();