var VideoPlayerView = Backbone.View.extend({

  initialize: function() {
    console.log(this)
    this.collection.on('change:select', this.render());
  },


  render: function() {
    this.$el.html('<div class="loading">Please wait...</div>');
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
