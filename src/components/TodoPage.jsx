import React from 'react';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

const TodoPage = () => {
  // You can define any additional logic or state specific to the TodoPage component here

  return (
    <div className="bg-[#172842] min-h-screen py-2 flex justify-center">
      <div className="w-full max-w-2xl mx-4 md:mx-auto shadow-md rounded-lg px-4 py-3 text-white">
        <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
        <div className="mb-4">
          {/* Todo form goes here */}
          <TodoForm />
        </div>
        <div className="flex flex-wrap gap-y-3">
          {/* Loop and Add TodoItem here */}
          {/* Sample todo items for demonstration */}
          <TodoItem todo={{ id: 1, title: 'Sample Todo 1', completed: false }} />
          <TodoItem todo={{ id: 2, title: 'Sample Todo 2', completed: true }} />
          {/* You can replace these with actual todos from your context */}
        </div>
      </div>
    </div>
  );
};

export default TodoPage;
