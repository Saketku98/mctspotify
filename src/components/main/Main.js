import React, { useState } from 'react';
import "./Main.scss";
import { useSelector , useDispatch} from "react-redux";
import {buttonFocus } from "../../dataSlice";

const Main = () => {
  const { musicData } = useSelector((state) => state.data);
  const dispatch = useDispatch()
  const [buttonName, setButtonName] = useState([])

  const handleButtonFocus = (el) => {
    dispatch(buttonFocus(el))
    setButtonName([...buttonName, el.name])
  }

  return (
    <div className="main">
      <p className="aText"> A ALBUM</p>
      <div className="aAlbum">
        {musicData
          .filter((el) => el.album === "A Albümü")
          .map((el) => (
            <div className="music-card">
              <img src={el.img} alt='aaa' />
              <h2>{el.name}</h2>
              <h3>{el.singer}</h3>
              <p>{el.date}</p>
              <button disabled={buttonName.includes(el.name) ? true : false} onClick={() => (handleButtonFocus(el))}>Çalma Listesin Ekle</button>
            </div>
          ))}
      </div>
      <p className="bText"> B ALBUM</p>
      <div className="bAlbum">
        {musicData
          .filter((el) => el.album === "B Albümü")
          .map((el) => (
            <div className="music-card">
              <img src={el.img} alt=' aa'/>
              <h2>{el.name}</h2>
              <h3>{el.singer}</h3>
              <p>{el.date}</p>
              <button disabled={buttonName.includes(el.name) ? true : false} onClick={() => (handleButtonFocus(el))}>Çalma Listesin Ekle</button>
            </div>
          ))}
      </div>
      <p className="cText"> C ALBUM</p>
      <div className="cAlbum">
        {musicData
          .filter((el) => el.album === "C Albümü")
          .map((el) => (
            <div className="music-card">
              <img src={el.img} alt=' a' />
              <h2>{el.name}</h2>
              <h3>{el.singer}</h3>
              <p>{el.date}</p>
              <button disabled={buttonName.includes(el.name) ? true : false} onClick={() => (handleButtonFocus(el))}>Çalma Listesin Ekle</button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Main;
