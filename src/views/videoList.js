var VideoListView = Backbone.View.extend({

  initialize: function() {
    // this.collection.on('sync',this.render,this);
    // console.log(this.$el);
    // new VideoListEntryView({model: exampleVideoData, collection: exampleVideoData})
    this.render();
  },


  render: function() {
    this.$el.children().detach();
    // _.each(this.collection, function(ele) {
    //   new VideoListEntryView({ model: ele }
    // })
    this.collection.each(function(ele) {
      // console.log('ele',  ele)
      new VideoListEntryView({ model: ele }).render();
    });
    var x = this.$el.html(this.template());
    $('body').append(x);
    return this;
    // return $(`<div>HIHIHIHIHI</div>`)
  },

  template: templateURL('src/templates/videoList.html')

});
// $('body').append(`<span>HIHIHI</span>`)
// $('body').append(VideoListView.render())
/*

add el to each view


*/