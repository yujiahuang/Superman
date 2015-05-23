var React = require('react');
var mui = require('../../../node_modules/material-ui/lib/index');

var MenuItem = mui.MenuItem;
var FontIcon = mui.FontIcon;

var categories = require('../variables.jsx').categories;
var Parse = require('parse').Parse;

var IconTable = React.createClass({

  getInitialState: function() {
    return {
      menuData: [
        { title: '求好心壯丁幫我搬家', gender: 'female', reward: '一杯星巴克', distance: 0.3, category: '運輸' },
        { title: '微積分家教', gender: 'female', reward: '手作蛋糕', distance: 0.1, category: '教學' },
        { title: '電腦開不起來', gender: 'female', reward: '手作好人卡', distance: 0.25, category: '科技' },
        { title: '炸蝦飯', gender: 'male', reward: 'kiss', distance: 0.65, category: '餐點' },
        { title: '落鏈 QAQ', gender: 'female', reward: '五十嵐飲料', distance: 0.03, category: '修理' },
        { title: '填問卷', gender: 'female', reward: '200P幣', distance: 0.15, category: '其他' }
      ]
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
            category: '餐點'
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



