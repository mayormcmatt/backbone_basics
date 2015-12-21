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
// render individual list item
app.TodoView = Backbone.View.extend({
    tagName: 'li',
    template: _template($('#todoItemTemplate').html()),
    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        return this; //enable chained calls
    }
});

// render full ToDo list, calling TodoView for each
app.AppView = Backbone.View.extend ({
    el: '#todoList',
    initialize: function () {
        this.input = this.$('#new-todo');
        app.todoList.on('add', this.addAll, this);
        app.todoList.on('reset', this.addAll, this);
        app.todoList.fetch;
    }, //more to come
