import React, { FC } from 'react';
import cn from 'classnames';
import { NavLink as BaseNavLink } from 'react-router-dom';
import { NavBarProps, NavLinkProps, NavProps } from './types';

import styles from './navbar.module.css';

const NavBar: FC<NavBarProps> = ({ children, className }) => (
  <header className={cn(styles.navBar, className)}>{children}</header>
);

export const Nav: FC<NavProps> = ({ children, className }) => (
  <div className={cn(styles.nav, className)}>{children}</div>
);

export const NavLink: FC<NavLinkProps> = ({ children, className, to }) => (
  <BaseNavLink className={cn(styles.navLink, className)} to={to}>
    {children}
  </BaseNavLink>
);

export default NavBar;
