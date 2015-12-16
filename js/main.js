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

// create namespace for todo app
var app = {}

app.Todo = Backbone.Model.extend({
    defaults: {
        title: '',
        completed: false
    }
});


app.TodoList = Backbone.Collection.extend({
    model: app.Todo,
    localStorage: new Store("backbone-todo")
});

app.todoList = new app.TodoList();
