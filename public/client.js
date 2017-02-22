$(document).ready(function(){
  console.log('jquery was correctly sourced');
getAllSongs();
function getAllSongs(){
  $.ajax({
    type: 'GET',
    url: '/songs', // matches app,js response
    success: function(response) { // this is songList array of objects of songs
      console.log('response', response); // now have array on front end - songList
    },
    error: function(error){
      console.log('error', error);
    }
  });
} // getAllSongs function

  $('#addSongButton').on('click', function(){
    var newSongTitle = $('#title').val();// get input from view
    var newSongArtist = $('#artist').val(); //add to vars
    var newSongObject = {
      title: newSongTitle, //now vars in objects
      artist: newSongArtist
    };
    console.log(newSongObject);
    $.ajax({
      type: 'POST',
      url: '/newSong',  // if the browswer goes to /newSong
      data: newSongObject, // becomes req.body
      success: function(response){
        console.log('response', response);
        getAllSongs();

      }, error: function(error){
        console.log('error', error);
      }

    }); // ajax aDDING = POST
  }); //end click

});
