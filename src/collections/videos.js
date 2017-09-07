var Videos = Backbone.Collection.extend({

  model: Video

  // fetch: 

});

var searchVideos = function(arg) {
  $.ajax({
    type: 'GET',
    data: {
      query: 'cats',
      maxResults: 5,
      key: 1234,
      FORMAT: 5
    },
    success: function(a) {
      console.log(a)
      console.log(arg)
      console.log('success ajax');
    },
    error: function() {
      console.log('ERROR ajax')
    }
  })
};