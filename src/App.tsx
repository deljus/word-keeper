import React, { FC, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Provider, useDispatch } from 'react-redux';
import { IndexPage, FavoritePage } from './pages';
import store from './core/store';
import { initAppAction, leaveAppAction } from './core/actions/sagas';
import NavBar, { Nav, NavLink } from './components/NavBar';
import useBeforeUnLoad from './hooks/useBeforeUnLoad';

const App: FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  useBeforeUnLoad(() => {
    dispatch(leaveAppAction());
  });

  useEffect(() => {
    dispatch(initAppAction());
  }, []);

  return (
    <BrowserRouter>
      <>
        <NavBar>
          <Nav>
            <NavLink exact to="/">
              {t('pages.main')}
            </NavLink>
            <NavLink exact to="/starred">
              {t('pages.starred')}
            </NavLink>
          </Nav>
        </NavBar>
        <Switch>
          <Route exact path="/">
            <IndexPage />
          </Route>
          <Route exact to="/starred">
            <FavoritePage />
          </Route>
        </Switch>
      </>
    </BrowserRouter>
  );
};

const StoredApp: FC = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default StoredApp;
