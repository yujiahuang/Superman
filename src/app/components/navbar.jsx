var React = require('react');
var mui = require('../../../node_modules/material-ui/lib/index');

var MenuItem = mui.MenuItem;
var Toolbar = mui.Toolbar;
var ToolbarGroup = mui.ToolbarGroup;
var FontIcon = mui.FontIcon;
var LeftNav = mui.LeftNav;

var right_buttons = require('../variables.jsx').right_buttons;

var Navigation = require('react-router').Navigation;

var Navbar = React.createClass({

  mixins: [Navigation],

  render: function() {

    var menuItems = [
      { route: 'help-list', text: '幫助身旁的人' },
      { route: 'get-help', text: '發送求救訊號' },
      { type: MenuItem.Types.SUBHEADER, text: '個人資料' },
      { route: 'root', text: '登出' },
    ];

    var RightButton;
    if (this.props.hasOwnProperty('rightButton')) {

      var icon = right_buttons[this.props.rightButton];
      console.log(icon);

      RightButton = (
        <ToolbarGroup key={2} float="right" className="nav-button">
          <FontIcon className={"fa fa-" + icon }/>
        </ToolbarGroup>
      );
    }

    return (
      <Toolbar>
        <ToolbarGroup key={0} float="left" className="nav-button">
          <FontIcon className="fa fa-bars" onTouchTap={this.showLeftNavClick} />
          <LeftNav ref="leftNav" docked={false} menuItems={menuItems} onChange={this.leavePage} />
        </ToolbarGroup>
        <ToolbarGroup className="toolbar-title" key={1} float="left">
          <span>{this.props.title}</span>
        </ToolbarGroup>
        {RightButton}
      </Toolbar>
    );
  },
  showLeftNavClick: function() {
    this.refs.leftNav.toggle();
  },
  leavePage: function(e, selectedIndex, menuItem) {
    console.log(menuItem);
    this.transitionTo(menuItem.route);
  }
  
});

module.exports = Navbar;



