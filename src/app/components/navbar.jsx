var React = require('react');
var mui = require('../../../node_modules/material-ui/lib/index');

var MenuItem = mui.MenuItem;
var Toolbar = mui.Toolbar;
var ToolbarGroup = mui.ToolbarGroup;
var FontIcon = mui.FontIcon;
var LeftNav = mui.LeftNav;

var Navbar = React.createClass({

  render: function() {

    var menuItems = [
      { route: 'get-started', text: 'Get Started' },
      { route: 'css-framework', text: 'CSS Framework' },
      { route: 'components', text: 'Components' },
      { type: MenuItem.Types.SUBHEADER, text: 'Resources' },
      { 
        type: MenuItem.Types.LINK, 
        payload: 'https://github.com/callemall/material-ui', 
        text: 'GitHub' 
      },
      { 
        text: 'Disabled', 
        disabled: true 
      },
      { 
        type: MenuItem.Types.LINK, 
        payload: 'https://www.google.com', 
        text: 'Disabled Link', 
        disabled: true 
      }
    ];

    return (
      <Toolbar>
        <ToolbarGroup key={0} float="left">
          <FontIcon className="fa fa-bars" onTouchTap={this.showLeftNavClick} />
          <LeftNav ref="leftNav" docked={false} menuItems={menuItems} />
        </ToolbarGroup>
        <ToolbarGroup className="toolbar-title" key={1} float="left">
          <span>{this.props.title}</span>
        </ToolbarGroup>
        <ToolbarGroup key={2} float="right">
          <FontIcon className="fa fa-location-arrow"/>
        </ToolbarGroup>
      </Toolbar>
    );
  },
  showLeftNavClick: function() {
    this.refs.leftNav.toggle();
  }
  
});

module.exports = Navbar;



