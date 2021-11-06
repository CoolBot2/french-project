import { width } from "dom-helpers";
import React from "react";
import ButtonList from "./ButtonList";
import Search from "./Search";
import "./PicList.css";
const PicList = () => {
  const ColoredLine = ({ color }) => (
    <hr
      style={{
        color: color,
        backgroundColor: color,
        height: 1,
        width: "80%",
        opacity: "0.4",
        transform: "translateY(5px)",
      }}
    />
  );
  const style = {
    position: "relative",
    backgroundColor: "#DDE7FB",
    width: "80%",
    height: "200px",
    transform: "translateX(13%)",
    zIndex: "500000",
  };
  return (
    <div style={style}>
      <Search />

      <ButtonList />
      <ColoredLine color="#AA98AB" />
    </div>
  );
};

export default PicList;
