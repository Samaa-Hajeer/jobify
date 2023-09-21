import React from "react";
import Wrapper from "../wrappers/Navbar";
import { FaAlignLeft } from "react-icons/fa";
import { Logo } from "./index";
import { useDashboardContext } from "../../pages/DashboardLayout";
import { LogoutContainer } from "./index";
import { ThemeToggle } from "./index";
const Navbar = () => {
  const { user, toggleSidebar } = useDashboardContext();

  return (
    <Wrapper>
      <div className="nav-center">
        <button type="button" className="toggle-btn" onClick={toggleSidebar}>
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h4 className="logo-text">dashboard</h4>
        </div>
        <div className="btn-container">
          <ThemeToggle />
          <LogoutContainer />
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
