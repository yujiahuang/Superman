var React = require('react');
var mui = require('../../../node_modules/material-ui/lib/index');

var EditTable = require('../components/edit-table.jsx');
var Navbar = require('../components/navbar.jsx');
var { AppBar, AppCanvas, Menu, IconButton } = mui;

var HelperList = React.createClass({

  render: function() {

    return (
      <AppCanvas>
        <Navbar title="發送求救訊號" />
        <EditTable gender="female" />
      </AppCanvas>
    );
  }
  
});

module.exports = HelperList;



