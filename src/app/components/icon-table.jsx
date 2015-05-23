var React = require('react');
var mui = require('../../../node_modules/material-ui/lib/index');

var MenuItem = mui.MenuItem;
var FontIcon = mui.FontIcon;
var Navigation = require('react-router').Navigation;

var categories = require('../variables.jsx').categories;
var Parse = require('parse').Parse;

var IconTable = React.createClass({

  mixins: [Navigation],

  getInitialState: function() {
    return {
      menuData: []
    };
  },
  componentDidMount: function() {
    console.log(this.changeRoute);
    var Case = Parse.Object.extend('Case');
    var query = new Parse.Query(Case);
    var self = this;
    query.find()
      .then(function(results) {
        console.log(results);
        results.forEach(function(result) {
          self.state.menuData.push({
            id: result.id,
            title: result.get('title'), 
            gender: result.get('gender'),
            reward: result.get('reward'),
            distance: 0,
            category: result.get('category')
          });
        });
        self.forceUpdate();
      }, function(err) {

      });
  },
  viewHelp: function(id) {
    var self = this;
    return () => {
      self.transitionTo('/help-content/' + id)
    };
  },
  render: function() {
    var self = this;
    var menuItems = this.state.menuData.map(function(d){
      console.log(d.gender);
      var background = {
        backgroundRepeat: 'no-repeat',
        backgroundImage: 'url(./images/' + d.gender + '.png)',
        backgroundPosition: 'center left',
        backgroundSize: '12px 100%'
      };
      return (
        <div onClick={ self.viewHelp(d.id) } className="item-table" style={ background }>
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



