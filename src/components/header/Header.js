import React from "react";
import "./Header.css";
import {filterTitle} from "../../dataSlice"
import { useDispatch } from 'react-redux'

const Header = () => {
const dispatch = useDispatch()

  
  return (
    <div className="header">
      <div className="directionKey">
      <button className="left-button">
      <svg role="img" height="16" width="16" aria-hidden="true" class="Svg-sc-ytk21e-0 lmlFMn IYDlXmBmmUKHveMzIPCF" viewBox="0 0 16 16" data-encore-id="icon"><path d="M11.03.47a.75.75 0 0 1 0 1.06L4.56 8l6.47 6.47a.75.75 0 1 1-1.06 1.06L2.44 8 9.97.47a.75.75 0 0 1 1.06 0z"></path></svg>
      </button>
      <button className="right-button">
      <svg role="img" height="16" width="16" aria-hidden="true" class="Svg-sc-ytk21e-0 lmlFMn IYDlXmBmmUKHveMzIPCF" viewBox="0 0 16 16" data-encore-id="icon"><path d="M4.97.47a.75.75 0 0 0 0 1.06L11.44 8l-6.47 6.47a.75.75 0 1 0 1.06 1.06L13.56 8 6.03.47a.75.75 0 0 0-1.06 0z"></path></svg>
      </button>
      </div>
      <div className="search">        
      <input  
        type="text"
        placeholder="Search music !!!"
        onChange={(e) => dispatch(filterTitle(e.target.value))}/> 
      </div>
      <div className="membership">
        <button className="register">Sign Up</button>
        <button className="session">Log in</button>
      </div>
    </div>
  );
};

export default Header;
