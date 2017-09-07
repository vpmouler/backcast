var VideoPlayerView = Backbone.View.extend({

  // el: '#videoPlayer',

  initialize: function() {
    this.collection.on('change:select', this.render());
    this.render();
  },


  render: function() {
    $('body').append(this.$el.html(this.template(this.model.attributes)));
    // $('body').append(this.$el.html('<div class="loading">Please wait...</div>'));
    // return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
