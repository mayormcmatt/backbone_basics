var AppView = Backbone.View.extend({
    el: '#contentContainer',
    initialize: function() {
        this.render();
    },
    render: function() {
        this.$el.html("Hello World");
    }
});

var appView = new AppView();
