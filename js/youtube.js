var views;
var likes;
var comments;
var dislikes;
var favourites;
var vID;
function getVideoId(vID){
$.getJSON("https://www.googleapis.com/youtube/v3/videos?id="+ vID +"&key=AIzaSyCR5In4DZaTP6IEZQ0r1JceuvluJRzQNLE&part=statistics",
function(data) {
  results = data.items[0].statistics.viewCount;
    $('#response').append(results);
    views = data.items[0].statistics.viewCount;
    likes =  data.items[0].statistics.likeCount;
    comments = data.items[0].statistics.commentCount;
    dislikes = data.items[0].statistics.dislikeCount;
    favourites = data.items[0].statistics.favouriteCount;
    //alert(views +"_"+ likes +"_"+ comments +"_"+ dislikes +"_"+ favourites);
    generateChart(views, likes, comments, dislikes, favourites);
  });
}
  function submit(){
     vID = document.getElementById('vID').value;
     vID = vID.split('v=')[1];
      var ampersandPosition = vID.indexOf('&');
      if(ampersandPosition != -1) {
      vID = vID.substring(0, ampersandPosition);
      }
        getVideoId(vID);

 }
function generateChart(views, likes, comments, dislikes, favourites){

  var chart = AmCharts.makeChart( "chartdiv", {
      "type": "pie",
      "theme": "dark",
      "dataProvider": [ {
        "title": "views",
        "value": views
      }, {
        "title": "likes",
        "value": likes
      }, {
        "title": "comments",
        "value": comments
      }, {
        "title": "dislikes",
        "value": dislikes
      },{
        "title": "favourites",
        "value": favourites
      }],
      "titleField": "title",
      "valueField": "value",
      "labelRadius": 5,

      "radius": "42%",
      "innerRadius": "60%",
      "labelText": "[[title]]",
      "export": {
       "enabled": true
      }
  });
 }

 $("#vID").focus();
