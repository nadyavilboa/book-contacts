import Login from '../../pages/login/login';
import Main from '../../pages/main/main';
import NotFound from '../../pages/not-found/not-found';
import PrivateRoute from '../private-route/private-route';
import { AppRoute, AuthorizationStatus } from '../../const/const';
import { useAppDispatch } from '../../hooks';
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchContacts } from '../../store/contacts-process/contacts-process';
import { fetchCheckAuth } from '../../store/user-process/user-process';

import './App.css';


function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
    dispatch(fetchCheckAuth());
  }, [dispatch]);

  return (
    <Routes>
      <Route
        path={AppRoute.SignIn}
        element={<Login />}
      />
      <Route
        path={AppRoute.Contacts}
        element={
          <PrivateRoute
            authorizationStatus={AuthorizationStatus.Auth}
          >
            <Main />
          </PrivateRoute>
        }
      />
      <Route
        path="*"
        element={<NotFound />}
      />
    </Routes>
  );
}

export default App;
