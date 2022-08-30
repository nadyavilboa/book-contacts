import cn from 'classnames';
import {FormEvent, useRef, useState} from 'react';
import { Container } from '@mui/material';
import SearchAppBar from '../../components/search-app-bar/search-app-bar';
import './login.css';

const REGEX_EMAIL = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const REGEX_PASSWORD = /(?=.*?[A-Za-z])(?=.*?[0-9])/;

const EMAIL_ERROR = 'E-mail должен содержать символы "@" и ".", разделяемые буквами и/или цифрами, например email23@mail.ru';
const PASSWORD_ERROR = 'Пароль должен содержать как минимум одну цифру и одну букву';

enum ValidateValues {
  Unknown = 'Unknown',
  Correct = 'Correct',
  Uncorrect = 'Uncorrect',
}

function Login(): JSX.Element {
  const [validateStatus, setValidateStatus] = useState({
    email: ValidateValues.Unknown,
    password: ValidateValues.Unknown,
  });

  const isCorrect = () => Object.values(validateStatus)
    .every((el) => el === ValidateValues.Correct);

  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  //const dispatch = useAppDispatch();

  const handleloginChange = () => {
    if (loginRef.current !== null) {
      const isValid = REGEX_EMAIL.test(loginRef.current.value);
      isValid ?
        setValidateStatus({...validateStatus, email: ValidateValues.Correct}) :
        setValidateStatus({...validateStatus, email: ValidateValues.Uncorrect});
    }
    return validateStatus;
  };

  const handlePasswordChange = () => {
    if (passwordRef.current !== null) {
      const isValid = REGEX_PASSWORD.test(passwordRef.current.value);
      isValid ?
        setValidateStatus({...validateStatus, password: ValidateValues.Correct}) :
        setValidateStatus({...validateStatus, password: ValidateValues.Uncorrect});
    }
    return validateStatus;
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current !== null &&
      passwordRef.current !== null &&
      isCorrect()) {
    //   dispatch(fetchLogin({
    //     login: loginRef.current.value,
    //     password: passwordRef.current.value,
    //   }));
    //   dispatch(redirectToRoute(AppRoute.Contacts));
    }
  };

  return (
    <div className="page page--login">
      <SearchAppBar />
      <main className="page__main page__main--login">
        <Container 
          sx = {{
            display: 'flex',
            height: '100vh',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <div className="login container">
            <section className="login-section">
              <h1 className="login__title">Sign in</h1>
              <form
                className="login__form form"
                action="#"
                method="post"
                onSubmit={handleSubmit}
              >
                <div className="login__input-container">
                  <div className="login__input-wrapper form__input-wrapper">
                    <label className="form__label">E-mail</label>
                    <input
                      ref={loginRef}
                      className={cn('login__input', 'form__input', { 'error-input':  validateStatus.email === ValidateValues.Uncorrect })}
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                      onChange={handleloginChange}
                    />
                  </div>
                  {validateStatus.email === ValidateValues.Uncorrect && (
                    <p className="error-text">
                      {EMAIL_ERROR}
                    </p>
                  )}
                </div>
                <div className="login__input-container">
                  <div className="login__input-wrapper form__input-wrapper">
                    <label className="form__label form__label--password">Password</label>
                    <input
                      ref={passwordRef}
                      className={cn('login__input', 'form__input', { 'error-input': validateStatus.password === ValidateValues.Uncorrect })}
                      type="password"
                      name="password"
                      placeholder="Password"
                      required
                      onChange={handlePasswordChange}
                    />
                  </div>
                  {validateStatus.password === ValidateValues.Uncorrect && (
                    <p className="error-text">
                      {PASSWORD_ERROR}
                    </p>
                  )}
                </div>
                <button className="login__submit form__submit button" type="submit">Sign in</button>
              </form>
            </section>
          </div>
        </Container>

      </main>
    </div>
  );
}

export default Login;
