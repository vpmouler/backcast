var VideoListEntryView = Backbone.View.extend({

  // initialize: function() {
  //       _.each(this.collection, function(){
  //       this.render()}, this);
  // }
  // initialize: function() {
  //   this.render();
  // },


  render: function() {
    
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
