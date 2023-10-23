import { useState } from "react";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    onLogin({
      password: password,
      email: email,
    });
  }

  return (
    <div className="auth">
      <h2 className="auth__title">Вход</h2>
      <form className="auth__form" onSubmit={handleSubmit}>
        <input
          id="3"
          className="auth__input"
          name="email"
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={handleEmailChange}
        />
        <p className="auth__error"></p>
        <input
          id="4"
          className="auth__input"
          name="password"
          type="password"
          placeholder="Пароль"
          required
          value={password}
          onChange={handlePasswordChange}
        />
        <p className="auth__error"></p>
        <button
          className="auth__submit-button"
          type="submit"
          aria-label="Кнопка входа в приложение"
        >
          Войти
        </button>
      </form>
    </div>
  );
}

export default Login;
