var React = require('react');
var mui = require('../../../node_modules/material-ui/lib/index');

var FontIcon = mui.FontIcon;
var TextField = mui.TextField;

var categories = require('../variables.jsx').categories;

var IconTable = React.createClass({

  render: function() {

    return (
      <div className="edit-table">
        <div className="get-help-title">
          <span className={ "fa fa-user " + this.props.gender } />
          <TextField hintText="你遇到了什麼困難呢？" />
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
          <TextField
            hintText="說得更清楚些吧！"
            multiLine={true} />
        </div>
        <div className="get-help-time">
          <span className="fa fa-clock-o" />
          <TextField
            hintText="今天 12:00"
            defaultValue="今天 12:00" />
        </div>
        <div className="get-help-people" >
          <span className="fa fa-group" />
          <span>
            需要
            <TextField
              hintText="1"
              defaultValue="1"/>
            名超人
          </span>
        </div>
        <div className="get-help-reward" >
          <span className="fa fa-gift" />
          <TextField
            hintText="一杯星巴克"
            defaultValue="一杯星巴克"/>
        </div>
        <div className="get-help-location">
          <span className="fa fa-map-marker" />
          <span className="location">(自動定位 OAO)</span>
        </div>
      </div>
    );
  }
});

module.exports = IconTable;



