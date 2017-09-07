var Video = Backbone.Model.extend({

  // url: 'https://www.googleapis.com/youtube/v3/search',

  initialize: function(video) {
    // override youtube's complex id field
    this.set('id', video.id.videoId);
  },

  select: function() {
    this.trigger('selesct', this);
  }

});
