var express = require('express'); // node recognizes this - knows it's in 'node_modules'
//get express "npm init" gets express and creates package.json file - later we added 'start' which will allow the 'npm start' in Terminal

// terminal 'npm install express' creates node_modules folder - whole bunch of files - one called express
// 'npm install express' moved express into folder, express requires a bunch of files (but --save adds dependencies code)
// node does not like capitals in file names // node and npm are downloaded together now
// npm install --save - this puts the dependencies in json file- don't need to install all node modules

// now dont upload all node modules to github for example
// they can now do 'npm install' - which looks for json and dependencies and will download all of them (see json file and node_modules folder)

// dont do 'git add .' so we create '.gitignore' file(in in it just says 'node_modules' which means it ignores that when commit to git)
// when commit to gihub, should only be a few files if did .gitignore correctly

// app is an pbject  // app.use means use function every time a request comes in
var app = express(); //object app=application
// the require function takes in 'express' into var express which passes into var app//
// so now var app contains all of express - an express object I suppose

// use method on app var which took in express
// static method on express object passes in 'public' folder
// what we are running is looking for a static file in folder public
app.use(express.static('public')); // runs each time a request is made
// first request comes from browser


app.use(bodyParser.urlencoded({extended: true}));
var bodyParser = require('body-parser'); // added this later

var songList = [
  {
    title: 'We did not start the fire',
    artist: 'Billy Joel'
  },
  {
    title: 'Ring of Fire',
    artist: 'Johnny Cash'
  }
];

//we need to be ready for get requests that aren't for static files
// ??? we never got to the req, res
//  '/songs' creates a url path (used to be an actual file or folder)
// saying get from that path, function sent is songList
/// client writes GET request
// ??? app.use and app.get are BOTH GET REQUESTS
//and while app.use responds to unseen BROWSER request, app.get responds to internal request? from client file - something that control and create
app.get('/songs', function(req, res){  // this matches client.js ajax GET
  res.send(songList); // this ends up in response of ajax success call
});

app.post('/newSong', function(req, res){
  var newSong = req.body;  //this is data tjanks to line 10: app.use(bodyParser.urlencoded({extended: true}));
if (newSong.artist !== "Justing Bieber") {
  songList.push(newSong);
  console.log(songList);
  res.sendStatus(200);
}else {
  res.sendStatus(500);
}

});

app.listen(3000); // runs one time at very beginning but doesn't stop
