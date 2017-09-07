var VideoListView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('sync',this.render,this);
  },


  render: function() {
    this.$el.children().detach();
    this.collection.each(function(ele, index) {
      new VideoListEntryView({ model: ele }).render();
    });
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
