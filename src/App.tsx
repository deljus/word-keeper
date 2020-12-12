import React, { FC } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { IndexPage } from './pages';
import NavBar, { Nav, NavLink } from './components/NavBar';

const App: FC = () => {
  const { t } = useTranslation();

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
          <Route path="/">
            <IndexPage />
          </Route>
        </Switch>
      </>
    </BrowserRouter>
  );
};

export default App;
