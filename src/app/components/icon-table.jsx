var React = require('react');
var mui = require('../../../node_modules/material-ui/lib/index');

var MenuItem = mui.MenuItem;
var FontIcon = mui.FontIcon;

var categories = require('../variables.jsx').categories;
var Parse = require('parse').Parse;

var IconTable = React.createClass({

  getInitialState: function() {
    return {
      menuData: []
    };
  },
  componentDidMount: function() {
    var Case = Parse.Object.extend('Case');
    var query = new Parse.Query(Case);
    var self = this;
    query.find()
      .then(function(results) {
        console.log(results);
        results.forEach(function(result) {
          self.state.menuData.push({
            title: result.get('title'), 
            gender: 'female',
            reward: result.get('reward'),
            distance: 0,
            category: result.get('category')
          });
          self.forceUpdate();
        });
      }, function(err) {

      });
  },
  render: function() {

    var menuItems = this.state.menuData.map(function(d){

      return (
        <div className="item-table">
          <div className={"help-category fa fa-" + categories[d.category].icon + " " + categories[d.category].color } />
          <div className="help-content" >
            <div className="help-title">{d.title}</div>
            <div className="help-subtitle">
              <FontIcon className={"fa fa-user " + d.gender} />
              <span className="reward">{d.reward}</span>
              <span className="distance">{d.distance * 1000}m</span>
            </div>
          </div>
        </div>
      );
    });
    

    return (
      <div>
        {menuItems}
      </div>
    );

  }
  
});

module.exports = IconTable;



