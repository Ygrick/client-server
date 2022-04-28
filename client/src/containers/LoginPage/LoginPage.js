import { useHistory } from "react-router";
import React, { Fragment, useState } from "react";
import "./LoginPage.css";

export const LoginPage = ({
  setIsLoggedIn,
  setUserName,
  setIsAdmin
}) => {

  const history = useHistory()

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginChange = (e) => {
    setLogin(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleLogIn = async e => {
    e.preventDefault();
    // const response = await fetch("http://localhost:3001/user", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(login)
    //   });

    if (login === 'admin') {
      if (password === '123456'){
        setIsAdmin(1);
        localStorage.setItem('isLoggedIn', true);
        localStorage.setItem('userName', login);
        setUserName(login);
        setIsLoggedIn(true);
        history.push('/');
      }
      else {
        alert('Введите правильный логин или пароль!');
        return false
      }
    }
    else if (login === 'user') {
      if (password === '123456'){
        setIsAdmin(0);
        localStorage.setItem('isLoggedIn', true);
        localStorage.setItem('userName', login);
        setUserName(login);
        setIsLoggedIn(true);
        history.push('/');
      }
      else {
        alert('Введите правильный логин или пароль!');
        return false
      }
    }

  }

  return (
    <h1>
      <form className="loginForm" onSubmit={handleLogIn}>
        <h2>Авторизация</h2>
        <div>
          <input
            className="loginFormInput"
            type="text"
            placeholder="Логин"
            onChange={handleLoginChange}
            value={login}
            required
          />
        </div>
        <div>
          <input
            className="loginFormInput"
            type="password"
            placeholder="Пароль"
            onChange={handlePasswordChange}
            value={password}
            required
          />
        </div>
        <div>
          <button className="blackBtn" type="submit">
            Войти
          </button>
        </div>
      </form>
    </h1>
  );
};
