var SearchView = Backbone.View.extend({

  initialize: function() {
    this.render();
  },


  render: function() {
    $('body').append(this.$el.html(this.template(this.model.attributes)));
    // return this;
  },

  template: templateURL('src/templates/search.html')

});
