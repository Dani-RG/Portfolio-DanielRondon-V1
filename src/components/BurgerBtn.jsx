import React from "react";
import styled from "styled-components";

export default function BurgerBtn(props) {
  return (
    <Burger>
      <div
        onClick={props.handleClick}
        className={`icon nav-icon-8 ${props.clicked ? "open" : ""}`}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </Burger>
  );
}

const Burger = styled.div`
  .nav-icon-8{
  width: 25px;
  height: 16px;
  margin: 0 15px;
  position: relative;
  cursor: pointer;
  display: inline-block;
  z-index: 5;
}
.nav-icon-8 span{
  background-color: #D9A712;
  position: absolute;
  transition: .3s cubic-bezier(.8, .5, .2, 1.4);
  width: 100%;
  height: 2px;
}
.nav-icon-8 span:nth-child(1){
  top:0px;
  left: 0px;
}
.nav-icon-8 span:nth-child(2){
  top:7px;
  left: 0px;
}
.nav-icon-8 span:nth-child(3){
  bottom:0px;
  left: 0px;
}
.nav-icon-8:not(.open):hover span:nth-child(1){
  transform: scaleX(.8);
}
.nav-icon-8:not(.open):hover span:nth-child(2){
  transform: scaleX(.5);
}
.nav-icon-8:not(.open):hover span:nth-child(3){
  transform: scaleX(.8);
}
.nav-icon-8.open span:nth-child(1){
  top: 13px;
}
.nav-icon-8.open span:nth-child(2){
  top:13px;
}
.nav-icon-8.open span:nth-child(3){
  top: 13px;
}
`;
