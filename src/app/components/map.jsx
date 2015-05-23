var React = require('react');
var mui = require('../../../node_modules/material-ui/lib/index');

var MenuItem = mui.MenuItem;
var FontIcon = mui.FontIcon;

var categories = require('../variables.jsx').categories;
var Parse = require('parse').Parse;

var map;
var bounds;

var IconTable = React.createClass({

  getInitialState: function() {
    return {
      menuData: []
    };
  },
  initialize: function() {
    var myPlace = new google.maps.LatLng(25.018553,121.536357)

    var mapOptions = {
      zoom: 16,
      center: myPlace,
      mapTypeId: 'roadmap'
    }

    // Display a map on the page
    map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

    var iAmHere = new google.maps.Marker({
      position: myPlace,
      map: map,
      title: 'I am Here',
      zoom: 16
    });

    bounds = new google.maps.LatLngBounds();
  },

  componentDidMount: function() {

    this.initialize();
    var Case = Parse.Object.extend('Case');
    var query = new Parse.Query(Case);
    var self = this;
    var location = [];
    var locationPlain = [];

    query.find()
      .then(function(results) {
        console.log(results);
        location = results.map(function(result){return result.get('location')});
        locationPlain = results.map(function(result){ return result.get('locationPlain')});
        
        title = results.map(function(result){return result.get('title')});
        reward = results.map(function(result){return result.get('reward')});
        category = results.map(function(result){return result.get('category')});

        // var infoWindowContent = title + category + reward;

        // Display multiple markers on a map
        var infoWindow = new google.maps.InfoWindow(), marker, i;

        for(i = 0; i < location.length; i++){
          console.log(location[i]._latitude, location[i]._longitude);
          var position = new google.maps.LatLng(location[i]._latitude, location[i]._longitude);
          bounds.extend(position);

          console.log("cate", categories[category[i]])

          marker = new google.maps.Marker({
            position: position,
            map: map, 
            title: locationPlain[i],
            zoom: 16,
            icon: {
              url: categories[category[i]].url
            }
          });

          // Allow each marker to have an info window
          google.maps.event.addListener(marker,'click', (function(marker, i){
            return function(){
              console.log(i, title[i], category[i], reward[i])
              var infoWindowContent = "<p>"+title[i]+'<p>'+category[i]+'<\p>'+reward[i];
              // var infoWindowContent = "xDDD"
              console.log(infoWindowContent);
              infoWindow.setContent(infoWindowContent);
              infoWindow.open(map, marker);
            }
          })(marker, i));

          // Automatically center the map fitting all markers on the screen
          map.fitBounds(bounds);
        }

        // Override our map zoom level once our fitBounds function runs (Make sure it only runs once)
        var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event){
          this.setZoom(14);
          google.maps.event.removeListener(boundsListener);
        });

      }, function(err) {

      });

  },

  render: function() {
    return (
      <div>
        <div id="map-canvas" style={{ height: "100%", width: "100%"}}></div>
      </div>
    );

  }
  
});

module.exports = IconTable;



