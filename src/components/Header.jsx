import React from "react";

import { Logo } from "./Logo";
import { Nav } from "./Nav";

export const Header = () => (
  <header className = "header">
    <Logo/>
    <Nav/>
  </header>
);