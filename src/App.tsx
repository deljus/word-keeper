import React, { FC } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Provider } from 'react-redux'
import { IndexPage, FavoritePage } from './pages';
import NavBar, { Nav, NavLink } from './components/NavBar';

const App: FC = () => {
  const { t } = useTranslation();

  return (
      <Provider>
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
      </Provider>
  );
};

export default App;
