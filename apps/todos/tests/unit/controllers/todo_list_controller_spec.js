describe('Todos.todoListController', function() {
  describe('#createTodo', function() {
    var createTodoSpy, title, todo, todoHash;

    beforeEach(function() {
      title = 'title';
      todoHash = {title: title};
      createTodoSpy = spyOn(Todos.Todo, 'create').andCallThrough();
      Todos.todoListController.createTodo(title);

      // This should always be 1
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

  describe("remaining", function() {
    var createTodoSpy, title, firstTodo, secondTodo, todoHash;
    beforeEach(function() {
      
      // clear any previous todos created
      var length = Todos.todoListController.get('content').length;
      var i = 0;
      for (i = 0 ; i < length; i++) {
        var removeTodo = Todos.todoListController.get('content').get(i);
        Todos.todoListController.removeObject(removeTodo);
      }
      
      title = 'title';
      todoHash = {title: title};
      createTodoSpy = spyOn(Todos.Todo, 'create').andCallThrough();
      Todos.todoListController.createTodo(title);
      Todos.todoListController.createTodo(title);
      firstTodo = Todos.todoListController.get('content').get(0);
      secondTodo = Todos.todoListController.get('content').get(1);
    });

    afterEach(function () {
      // clean up after each spec run
      Todos.todoListController.removeObject(firstTodo);
      Todos.todoListController.removeObject(secondTodo);
    });

    it("should calculate number of remaining items", function() {
      expect(Todos.todoListController.remaining()).toEqual(2);
    });

  });
});

