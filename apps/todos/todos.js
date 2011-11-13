// ==========================================================================
// Project:   Todos
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals Todos */

Todos = SC.Application.create();

Todos.Todo = SC.Object.extend({
  title: null,
  isDone: false
});

Todos.todoListController = SC.ArrayController.create({
  // Initialize the array controller with an empty array.
  content: []
});

SC.ready(function() {
  Todos.mainPane = SC.TemplatePane.append({
    layerId: 'todos',
    templateName: 'todos'
  });
});
