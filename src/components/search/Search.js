import React from "react";
import "./Search.css";
import Header from "../header/Header";
import LeftMenu from "../leftMenu/LeftMenu";
import { useSelector } from "react-redux";

const Search = () => {
  const { albums } = useSelector((state) => state.data);
  return (
    <div className="search">
      <div className="leftMenu">
        <LeftMenu />
      </div>
      <div className="rightMenu">
        <div className="header">
          <Header />
        </div>
        <div className="albums">
          {albums.map((el) => (
            <div className="album-card">
              <h2>{el.name}</h2>
              <img src={el.img} alt=" none" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
