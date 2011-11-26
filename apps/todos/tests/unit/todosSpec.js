describe('Todos.todoListController', function() {
  describe('#createTodo', function() {
    var createTodoSpy, title, todo, todoHash;

    beforeEach(function() {
      title = 'title';
      todoHash = {title: title};
      createTodoSpy = spyOn(Todos.Todo, 'create').andCallThrough();
      Todos.todoListController.createTodo(title);

      var length = Todos.todoListController.get('content').length;
      todo = Todos.todoListController.get('content').get(length-1);
    });

    afterEach(function () {
      // clean up after each spec run
      Todos.todoListController.removeObject(todo);
    });

    it('creates a todo with the passed in title', function() {
      expect(createTodoSpy).toHaveBeenCalledWith({title: title});
    });

    it('adds that todo to it\'s content', function() {
      expect(Todos.todoListController.get('content')).toContain(todo);
    });
  });
});

