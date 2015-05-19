var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var mui = require('../../../node_modules/material-ui/lib/index');
var { AppBar, AppCanvas, Menu, IconButton } = mui;

var Layout = React.createClass({

  render: function() {

    return (
      <RouteHandler />
    );
  }

});

module.exports = Layout;
