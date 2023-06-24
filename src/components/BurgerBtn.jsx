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
  width: 35px;
  height: 30px;
  margin: 10px 10px;
  position: relative;
  cursor: pointer;
  display: inline-block;
  z-index: 5;
}
.nav-icon-8 span{
  background-color: #D9A712;
  position: absolute;
  transition: .3s cubic-bezier(.8, .5, .2, 1.4);
  width:100%;
  height: 4px;
}
.nav-icon-8 span:nth-child(1){
  top:0px;
  left: 0px;
}
.nav-icon-8 span:nth-child(2){
  top:13px;
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

/* export default function BurgerBtn(props) {
  return (
    <Burger>
      <div onClick={props.handleClick} className={`icon nav-icon-5 ${props.clicked ? "open" : ""}`}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </Burger>
  );
}

const Burger = styled.div`
  .nav-icon-5 {
    width: 35px;
    height: 30px;
    margin: 10px 10px;
    position: relative;
    cursor: pointer;
    display: inline-block;
  }
  .nav-icon-5 span {
    background-color: #D9A712;
    position: absolute;
    transition: 0.3s cubic-bezier(0.8, 0.5, 0.2, 1.4);
    width: 100%;
    height: 4px;
    transition-duration: 500ms;
  }
  .nav-icon-5 span:nth-child(1) {
    top: 0px;
    left: 0px;
  }
  .nav-icon-5 span:nth-child(2) {
    top: 13px;
    left: 0px;
    opacity: 1;
  }
  .nav-icon-5 span:nth-child(3) {
    bottom: 0px;
    left: 0px;
  }
  .nav-icon-5:not(.open):hover span:nth-child(1) {
    transform: rotate(-3deg) scaleY(1.1);
  }
  .nav-icon-5:not(.open):hover span:nth-child(2) {
    transform: rotate(3deg) scaleY(1.1);
  }
  .nav-icon-5:not(.open):hover span:nth-child(3) {
    transform: rotate(-4deg) scaleY(1.1);
  }
  .nav-icon-5.open span:nth-child(1) {
    transform: rotate(45deg);
    top: 13px;
  }
  .nav-icon-5.open span:nth-child(2) {
    opacity: 0;
  }
  .nav-icon-5.open span:nth-child(3) {
    transform: rotate(-45deg);
    top: 13px;
  }
`; */
