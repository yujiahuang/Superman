var React = require('react');
var mui = require('../../../node_modules/material-ui/lib/index');

var GetHelpTable = require('../components/get-help-table.jsx');
var Navbar = require('../components/navbar.jsx');
var { AppBar, AppCanvas, Menu, IconButton } = mui;

var HelperList = React.createClass({

  render: function() {

    return (
      <AppCanvas>
        <Navbar title="{ Title }"/>
        <GetHelpTable gender="female" />
      </AppCanvas>
    );
  }
  
});

module.exports = HelperList;



