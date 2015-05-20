var mui = require('../../../node_modules/material-ui/lib/index');
var React = require('react');

var FontIcon = mui.FontIcon;
var TextField = mui.TextField;

var categories = require('../variables.jsx').categories;

var GetHelpTable = React.createClass({

  render: function() {

    return (
      <div className="get-help plain-text-block">
        <div className="get-help-title">
          <span className={ "fa fa-user " + this.props.gender } />
          <div className="get-help-category">
            <span>分類：</span>
            <span className={ "tag " + "crap" }>
              <FontIcon className={ "fa fa-" + "motorcycle" } />
              <span>運輸</span>
            </span>
          </div>
        </div>
        <div className="get-help-description">
          <span className="fa fa-comment" />
          <div className="plain-text">今天很想哭很想哭很想哭很想哭很想哭很想哭很想哭很想哭很想哭很想哭很想哭很想哭很想哭很想哭很想哭很想哭很想哭很想哭很想哭</div>
        </div>
        <div className="get-help-time">
          <span className="fa fa-clock-o" />
          <div className="plain-text">今天 12:00</div>
        </div>
        <div className="get-help-people" >
          <span className="fa fa-group" />
          <div className="plain-text">需要 1 名超人</div>
        </div>
        <div className="get-help-reward" >
          <span className="fa fa-gift" />
          <div className="plain-text">一杯星巴克</div>
        </div>
        <div className="get-help-location">
          <span className="fa fa-map-marker" />
          <div className="plain-text">(自動定位 OAO)</div>
        </div>
      </div>
    );
  }
});

module.exports = GetHelpTable;



