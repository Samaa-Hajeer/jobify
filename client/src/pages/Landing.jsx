import React from "react";
import {Logo} from '../assets/components/index'
import main from "../assets/images/main.svg";
import { Link } from "react-router-dom";
import StyledWrapper from "../assets/wrappers/LandingPage.js";

const Landing = () => {
  return (
    <StyledWrapper>
      <nav>
<Logo />
      </nav>
      <div className="container page">
      <div className='info'>
          <h1>
            Job <span>tracking</span> app
          </h1>
          <p>
            I'm baby wayfarers hoodie next level taiyaki brooklyn cliche blue
            bottle single-origin coffee chia. Aesthetic post-ironic venmo,
            quinoa lo-fi tote bag adaptogen everyday carry meggings +1 brunch
            narwhal.
          </p>
          <Link to="/register" className='btn register-link'>Register</Link>
          <Link to="/login"className='btn'>Login</Link>
        </div>
        <img src={main} alt="job hunt"className='img main-img' />
      </div>
    </StyledWrapper>
  );
};

export default Landing;
