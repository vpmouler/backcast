var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(exampleVideoData);
    this.render();
    new SearchView({model: Video, collection:this.videos});
    new VideoListView({model: Video, collection: this.videos});
    new VideoPlayerView({model: Video, collection:this.videos});
  },


  render: function() {
    this.$el.html(this.template());
    // console.log('inside AppView, this:', this)
    return this;
  },

  template: templateURL('src/templates/app.html')

});

/*

initialize other views in Apview init

*/