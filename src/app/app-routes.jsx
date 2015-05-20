var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var Redirect = Router.Redirect;
var DefaultRoute = Router.DefaultRoute;

// Here we define all our material-ui ReactComponents.
var Layout = require('./pages/layout.jsx');
var HelpListPage = require('./pages/help-list-page.jsx');
var GetHelpPage = require('./pages/get-help-page.jsx');
var HelpContentPage = require('./pages/help-content-page.jsx');

var AppRoutes = (
  <Route name="root" path="/" handler={Layout}>
    <Route name="home" handler={HelpListPage} />
    <Route name="help-list" handler={HelpListPage} />
    <Route name="get-help" handler={GetHelpPage} />
    <Route name="help-content" handler={HelpContentPage} />
    <DefaultRoute handler={HelpListPage}/>
  </Route>
);

module.exports = AppRoutes;
