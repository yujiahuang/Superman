var React = require('react');
var mui = require('../../../node_modules/material-ui/lib/index');

var MenuItem = mui.MenuItem;
var Toolbar = mui.Toolbar;
var ToolbarGroup = mui.ToolbarGroup;
var FontIcon = mui.FontIcon;
var LeftNav = mui.LeftNav;

var { leftButtons, rightButtons } = require('../variables.jsx');

var Navigation = require('react-router').Navigation;

var Navbar = React.createClass({

  mixins: [Navigation],

  getInitialState: function() {
    return {
      left: ''
    };
  },

  render: function() {

    var menuItems = [
      { route: 'help-list', text: '幫助身旁的人' },
      { route: 'get-help', text: '發送求救訊號' },
      { type: MenuItem.Types.SUBHEADER, text: '個人資料' },
      { route: 'root', text: '登出' },
    ];

    var rightButton;
    if (this.props.hasOwnProperty('rightButton')) {

      var icon = rightButtons[this.props.rightButton];

      rightButton = (
        <ToolbarGroup key={2} float="right" className="nav-button">
          <FontIcon className={"fa fa-" + icon } onTouchTap={() => this.transitionTo('/help-map')}/>
        </ToolbarGroup>
      );
    }

    var leftButton;
    if (this.props.hasOwnProperty('leftButton')) {

      var icon = leftButtons[this.props.leftButton];

      leftButton = (
        <ToolbarGroup key={0} float="left" className="nav-button">
          <FontIcon className={"fa fa-" + icon } onTouchTap={() => this.transitionTo('/help-list')} />
        </ToolbarGroup>
      );
    } else {
      leftButton = (
        <ToolbarGroup key={0} float="left" className="nav-button">
          <FontIcon className="fa fa-bars" onTouchTap={this.showLeftNavClick} />
          <LeftNav ref="leftNav" docked={false} menuItems={menuItems} onChange={this.leavePage} />
        </ToolbarGroup>
      );
    }

    return (
      <Toolbar>
        { leftButton }
        <ToolbarGroup className="toolbar-title" key={1} float="left">
          <span>{this.props.title}</span>
        </ToolbarGroup>
        { rightButton }
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



