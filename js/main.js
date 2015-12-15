var AppView = Backbone.View.extend({
    el: $('#contentContainer'),
    template: _.template("<h3>Hello <%= who %></h3>"),
    initialize: function() {
        this.render();
    },
    render: function() {
        this.$el.html(this.template({who: 'Matt!'}));
    }
});

// initialize the view
var appView = new AppView();
