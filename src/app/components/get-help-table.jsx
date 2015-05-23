var mui = require('../../../node_modules/material-ui/lib/index');
var React = require('react');

var FontIcon = mui.FontIcon;
var TextField = mui.TextField;

var categories = require('../variables.jsx').categories;

var GetHelpTable = React.createClass({
  getInitialState: function() {
    return {
      title: "",
      time: "",
      category: "",
      peopleRequired: null,
      reward: "",
      locationPlain: ""
    };
  },

  render: function() {
    //console.log(this.props);
    console.log(this.state);
    return (
      <div className="get-help plain-text-block">
        <div className="get-help-title">
          <span className={ "fa fa-user " + this.props.gender } />
          <div className="get-help-category">
            <span>分類：</span>
            <span className={ "tag " + "crap" }>
              <FontIcon className={ "fa fa-" + "motorcycle" } />
              <span>{ this.state.category }</span>
            </span>
          </div>
        </div>
        <div className="get-help-description">
          <span className="fa fa-comment" />
          <div className="plain-text">{this.state.title}</div>
        </div>
        <div className="get-help-time">
          <span className="fa fa-clock-o" />
          <div className="plain-text">{ this.state.time.toString() }</div>
        </div>
        <div className="get-help-people" >
          <span className="fa fa-group" />
          <div className="plain-text">需要 { this.state.peopleRequired } 名超人</div>
        </div>
        <div className="get-help-reward" >
          <span className="fa fa-gift" />
          <div className="plain-text">{ this.state.reward }</div>
        </div>
        <div className="get-help-location">
          <span className="fa fa-map-marker" />
          <div className="plain-text">{ this.state.locationPlain }</div>
        </div>
      </div>
    );
  }
});

module.exports = GetHelpTable;



