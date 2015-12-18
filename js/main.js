// create namespace for todo app
var app = {}

// MODELS
app.Todo = Backbone.Model.extend({
    defaults: {
        title: '',
        completed: false
    }
});

// COLLECTIONS
app.TodoList = Backbone.Collection.extend({
    model: app.Todo,
    localStorage: new Store("backbone-todo")
});

// instance of collection
app.todoList = new app.TodoList();

// VIEWS
// complete below, erase this comment
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

app.todoView = Backbone.View.extend({
    tagName: 'li',
    template: _.template($('#todoItemTemplate').html()),
    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
});
