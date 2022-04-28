import './BlogPage.css';
import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodos";

export const BlogPage = ({ isAdmin }) => {

  return (
    <div className='blogPage'>

      {isAdmin && (
          <h1>Панель Администратора</h1>
        )}
      {isAdmin || (
          <h1>Панель пользователя</h1>
      )}
      <InputTodo isAdmin={isAdmin} />
      <ListTodos isAdmin={isAdmin} />
    </div>
  );
};
