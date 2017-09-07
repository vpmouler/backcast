var VideoListView = Backbone.View.extend({

  initialize: function() {
    // console.log('this .collection', this.collection)
    // access videoListEntry's render function and invoke it
      // console.log('hiasdfasdf', this.prototype.VideoListEntry)
    this.collection.on('sync',this.render,this);
  },


  render: function() {
    this.$el.children().detach();

    // console.log(VideoListEntryView.render)
    
    // for (var i = 0; i < 5; i ++ ) {
    //   window.VideoListEntryView.prototype.render();
    // }
    this.collection.each(function(ele, index) {
      new VideoListEntryView({ model: ele }).render();
    });
    // _.each(this.collection, function(model) {
    // //   console.log('within each');
    //   console.log(model)
    //   // new VideoListEntryView(model).render();
    // //   console.log('inside render this',this);
    // //   console.log('inside render this.proto',this.prototype)
    // //   this.VideoListEntryView.prototype.render();
    //     // window.VideoListEntryView.prototype.render();
    // },this);
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
