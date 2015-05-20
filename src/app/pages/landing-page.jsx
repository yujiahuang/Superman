var React = require('react');
var mui = require('../../../node_modules/material-ui/lib/index');

var { AppBar, AppCanvas, Menu, IconButton } = mui;

var Landing = React.createClass({

  render: function() {

    return (
      <AppCanvas>
        <div className="background" />
        <div className="help-others-btn">
          <div className="help-num">689</div>
          <div className="postfix">位市民需要協助</div>
        </div>
        <div className="instruction">
          <span className="fa fa-arrow-up" />
          <span>立刻去幫助他們吧！</span>
        </div>
        <div className="get-help-btn">
          我需要超人的協助！
        </div>
      </AppCanvas>
    );
  }
  
});

module.exports = Landing;