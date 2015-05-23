var React = require('react');
var mui = require('../../../node_modules/material-ui/lib/index');

var GetHelpTable = require('../components/get-help-table.jsx');
var Navbar = require('../components/navbar.jsx');
var { AppBar, AppCanvas, Menu, IconButton } = mui;
var Parse = require('parse').Parse;

var HelperList = React.createClass({
	getInitialState: function() {
		return {
			title: "" 
		};
	},
	componentDidMount: function() {
		var self = this;
		var Case = Parse.Object.extend('Case');
		var query = new Parse.Query(Case);
		var id = this.props.params.contentId;
		query.get(id)
			.then(
				function(data) {
					console.log(data.get('time'));
					self.setState({ title: data.get('title') });
					self.refs.table.setState({
						title: data.get('title'),
						category: data.get('category'),
						time: data.get('time'),
						peopleRequired: data.get('peopleRequired'),
						locationPlain: data.get('locationPlain'),
						reward: data.get('reward')
					});
				},
				function(err) {

				}
			);
	},

  render: function() {
    return (
      <AppCanvas>
        <Navbar title={ this.state.title } leftButton="back" rightButton="edit" />
        <GetHelpTable ref="table" />
      </AppCanvas>
    );
  }
  
});

module.exports = HelperList;



