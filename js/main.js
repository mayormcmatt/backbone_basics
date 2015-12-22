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
    },
    events: {
        'keypress new-todo': 'createToDoOnEnter'
    },
    createToDoOnEnter: function(e) {
        if (e.which !== 13 || !this.input.val().trim()) {
            return;
        }
        app.todoList.create(this.newAttributes());
        this.input.val(''); // clean input field
    },
    addOne function (todo) {
        var view = new.app.TodoView({model: Todo});
        $('#todoList').append(view.render().el);
    },
    function addAll () {
        this.$('#todoList').html(''); // clean up todo list
        app.todoList.each(addOne, this);
    },
    newAttributes: function () {
        return {
            title: this.input.val().trim,
            completed: false
        }
    }
});

// INITIALIZE
app.appView = new.AppView();
