import React, { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Grid, { Col, Row } from "./components/Grid";
import NavBar, { Nav, NavLink } from "./components/NavBar";

const App: FC = () => {
  const { t } = useTranslation();

  return (
    <BrowserRouter>
      <NavBar>
        <Nav>
          <NavLink to="/">{t("pages.main")}</NavLink>
          <NavLink to="/starred">{t("pages.starred")}</NavLink>
        </Nav>
      </NavBar>
    </BrowserRouter>
  );
};

export default App;
