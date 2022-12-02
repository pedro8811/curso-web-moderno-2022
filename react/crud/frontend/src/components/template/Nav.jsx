import React from "react";
import './Nav.css'
import NavItem from "./NavItem";

export default props => 
  <aside className="menu-area">
    <nav className="menu">
        <NavItem icon="home" text="Início" to="/"></NavItem>
        <NavItem icon="users" text="Usuários" to="/users"></NavItem>
    </nav>
  </aside>