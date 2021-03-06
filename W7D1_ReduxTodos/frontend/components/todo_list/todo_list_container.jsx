// import react from 'react';
import { connect } from 'react-redux';
import { allTodos } from '../../../reducers/selectors';
import {receiveTodos, receiveTodo } from '../../../actions/todo_actions';
import TodoList from './todo_list';

const mapStateToProps = state => ({
  todos: allTodos(state)
}); // return what's in body implicitly with (), POJO

// alternative 
// const mapStateToProps = state => {
//   return { todos: allTodos(state) }
// };


const mapDispatchToProps = dispatch => ({
  receiveTodo: todo => dispatch(receiveTodo(todo))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
