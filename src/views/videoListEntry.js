var VideoListEntryView = Backbone.View.extend({

  initialize: function() { 
    // this.$el.on('click', this.model.selectk())
    // this.render();
  },

  render: function() {
    console.log(this.$el)
    $('body').append(this.$el.html(this.template(this.model.attributes)));
    
    // return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});


