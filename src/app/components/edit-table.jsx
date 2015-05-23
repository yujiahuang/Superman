var React = require('react');
var mui = require('../../../node_modules/material-ui/lib/index');

var FontIcon = mui.FontIcon;
var TextField = mui.TextField;
var RaisedButton = mui.RaisedButton;
var DropDownMenu = mui.DropDownMenu;
var categories = require('../variables.jsx').categories;
var Parse = require('parse').Parse;
var itemlist=[];
var EditTable = React.createClass({
  getInitialState: function() {
    item = [];
    for(var x in categories) {
      itemlist.push({
        text: x,
        color:categories[x].color,
        icon:categories[x].icon,
      });
    }
    return {
      title: "",
      description: "",
      time: null,
      category: "運輸",
      gender: "female",
      peopleRequired: null,
      reward: "",
      location: new Parse.GeoPoint(30.0,-20.0),
      locationPlain: "QQ"
    };
  },
  handleChange: function(field) {
    var self = this;
    return function(event) {
      if(field == 'time') self.state[field] = new Date(event.target.value);
      else if(field == 'peopleRequired') self.state[field] = Number(event.target.value);
      else self.state[field] = event.target.value;
      self.forceUpdate();
      console.log(self.state);
    };
  },
  categoryChange: function(e, index, menuItem){
    this.state.category = menuItem.text;
    this.forceUpdate();
  },
  sendData: function() {
    var Case = Parse.Object.extend('Case');
    var myCase = new Case();
    for(var key in this.state) myCase.set(key,this.state[key]);
    myCase.save(null,{
      success: function(myCase){
        console.log('save success '+myCase.id);
      },
      error:function(myCase,error){
        console.log('save failed '+error.message);
      }
    });
  },
  render: function() {
    var categoryItem = categories[this.state.category];
    return (
      <div className="edit-table get-help">
        <div className="get-help-title">
          <span className={ "fa fa-user " + this.props.gender } />
          <TextField hintText="你遇到了什麼困難呢？" onChange={this.handleChange('title')}/>
        </div>
        <div className="get-help-category">
          <span className={"fa fa-"+categoryItem.icon} style={{ backgroundColor: categoryItem.colorCode }}/>
          <DropDownMenu menuItems={itemlist} onChange={this.categoryChange} />
        </div>
        <div className="get-help-description">
          <span className="fa fa-comment" />
          <TextField
            onChange={this.handleChange('description')}
            hintText="說得更清楚些吧！"
            multiLine={true} />
        </div>
        <div className="get-help-time">
          <span className="fa fa-clock-o" />
          <TextField
            onChange={this.handleChange('time')}
            hintText="例如：今天 12:00" />
        </div>
        <div className="get-help-people" >
          <span className="fa fa-group" />
          <span>
            需要
            <TextField
              onChange={this.handleChange('peopleRequired')}
              hintText="0" />
            名超人
          </span>
        </div>
        <div className="get-help-reward" >
          <span className="fa fa-gift" />
          <TextField
            onChange={this.handleChange('reward')}
            hintText="例如：一杯星巴克" />
        </div>
        <div className="get-help-location">
          <span className="fa fa-map-marker" />
          <div className="plain-text">(自動定位 OAO)</div>
        </div>
        <div className="get-help-button">
          <RaisedButton label="Send" primary={true} onClick={this.sendData}/>
        </div>
      </div>
    );
  }
});

module.exports = EditTable;
