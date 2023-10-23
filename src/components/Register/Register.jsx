import { Link } from "react-router-dom";
import { useState } from "react";

function Register({ onRegister }) {
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

    onRegister({
      password: password,
      email: email,
    });
  }

  return (
    <div className="auth">
      <h2 className="auth__title">Регистрация</h2>
      <form className="auth__form" onSubmit={handleSubmit}>
        <input
          id="1"
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
          id="2"
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
          aria-label="Кнопка регистрации в приложение"
        >
          Зарегистрироваться
        </button>
        <p className="auth__yet">
          Уже зарегистрированы?{" "}
          <Link className="auth__link" to="/sign-in">
            Войти
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
