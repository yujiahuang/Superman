var React = require('react');
var mui = require('../../../node_modules/material-ui/lib/index');

var { AppBar, AppCanvas, Menu, IconButton } = mui;
var Navigation = require('react-router').Navigation;

var Landing = React.createClass({

  mixins: [Navigation],

  render: function() {

    return (
      <AppCanvas>
        <div className="background" />
        <div className="help-others-btn" onTouchTap={() => this.changeRoute('help-list')}>
          <div className="help-num">689</div>
          <div className="postfix">位市民需要協助</div>
        </div>
        <div className="instruction">
          <span className="fa fa-arrow-up" />
          <span>立刻去幫助他們吧！</span>
        </div>
        <div className="get-help-btn" onTouchTap={() => this.changeRoute('get-help')}>
          我需要超人的協助！
        </div>
      </AppCanvas>
    );
  },
  changeRoute: function(new_route){
    this.transitionTo(new_route);
  }
  
});

module.exports = Landing;