import React from "react";
import Header from "../header/Header";
import Main from "../main/Main";
import LeftMenu from "../leftMenu/LeftMenu";
import './Home.css'
import Modal from "../modal/Modal";
import {useState }from "react";

const Home = () => {
    const [modal, setModal] = useState(false)

  return (
    <div className="home">
      <div className="leftMenu">
        <LeftMenu 
        setModal={setModal}/>
      </div>
      <div className="rightMenu">
        <Header />
        <Main />
        {
          modal &&
          <Modal 
          setModal={setModal}/>
        }
      </div>
    </div>
  );
};

export default Home;
