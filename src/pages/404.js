import React, { useEffect } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  useEffect(() => {
    ;["left", "right"].forEach(side => {
      document
        .querySelector(".bojack")
        .addEventListener("mousemove", function (event) {
          var eye = document.querySelector(`.bojack__eye--${side}`)
          console.log(eye)
          let rect = eye.getBoundingClientRect()
          let win = eye.ownerDocument.defaultView
          var x =
            rect.left + win.pageXOffset + eye.getBoundingClientRect().width / 2
          var y =
            rect.top + win.pageYOffset + eye.getBoundingClientRect().height / 2
          var rad = Math.atan2(event.pageX - x, event.pageY - y)
          var rot = rad * (180 / Math.PI) * -1
          eye.style.transform = "rotate(" + rot + "deg)"
        })
    })
  }, [])

  return (
    <div>
      <SEO title="404: Not Found" />
      <div
        dangerouslySetInnerHTML={{
          __html: `<html>
    <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
            href="https://fonts.googleapis.com/css2?family=Indie+Flower"
            rel="stylesheet"
        />
        <style>
            *,
*:after,
*:before {
    box-sizing: border-box;
    content: '';
}
*:before,
*:after {
    position: absolute;
}
body {
    background: radial-gradient(circle at 50%, #a537fd, transparent), #639;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    font-family: 'Indie Flower', cursive;
}
.bojack {
    height: 300px;
    width: 300px;
    margin: auto;
    margin-top: 7em;
    margin-bottom: 5em;
    position: relative;
    transition: transform 0.25s ease;
}

@media (min-width: 768px) and (min-height: 550px) {
    .bojack {
        transform: scale(1.75);
    }
}
.bojack * {
    position: absolute;
}
.bojack__ear-left {
    height: 65px;
    width: 25px;
    border: 2px solid #000;
    left: 50%;
    top: 2px;
    transform: translate(-47px, 0);
    z-index: 4;
    background: #8b5347;
    border-radius: 10px 15px 1px 15px/32px 64px 1px 30px;
    clip-path: polygon(
        0 0,
        0 65px,
        12px 65px,
        15px 60px,
        23px 46px,
        25px 47px,
        25px 0
    );
    -webkit-clip-path: polygon(
        0 0,
        0 65px,
        12px 65px,
        15px 60px,
        23px 46px,
        25px 47px,
        25px 0
    );
}
.bojack__ear-left:before {
    height: 47px;
    width: 20px;
    left: -7px;
    top: 11px;
    border: 2px solid #000;
    border-radius: 1px 12px 10px 1px/1px 32px 19px 1px;
    clip-path: polygon(13px 6px, 20px 0, 20px 47px, 15px 43px);
    -webkit-clip-path: polygon(13px 6px, 20px 0, 20px 47px, 15px 43px);
}
.bojack__ear-right {
    top: 5px;
    z-index: 4;
    left: 50%;
}
.bojack__ear-right:before {
    height: 66px;
    width: 28px;
    border: 2px solid #000;
    transform: translate(19px, 0);
    background: #8b5347;
    border-radius: 20px 1px 1px 1px/58px 1px 1px 1px;
    clip-path: polygon(0 0, 20px 0, 20px 4px, 20px 80%, 0 100%);
    -webkit-clip-path: polygon(0 0, 20px 0, 20px 4px, 20px 80%, 0 100%);
}
.bojack__ear-right:after {
    background: #8b5347;
    height: 71px;
    width: 28px;
    transform: translate(19px, -3px);
    border: 2px solid #000;
    border-radius: 1px 13px 26px 1px/1px 50px 22px 1px;
    clip-path: polygon(19px 3px, 20px 90%, 100% 100%, 100% 12px);
    -webkit-clip-path: polygon(19px 3px, 20px 90%, 100% 100%, 100% 12px);
}
.bojack__hair {
    background: #000;
}
.bojack__hair:after,
.bojack__hair:before {
    background: #000;
}
.bojack__hair--left-1 {
    height: 10px;
    width: 10px;
    left: 50%;
    top: 50%;
    transform: translate(-49px, -45px) rotate(10deg);
}
.bojack__hair--left-1:before {
    height: 5px;
    width: 20px;
    top: -2px;
    left: -5px;
    border-radius: 100%;
    transform: translate(-2px, 0px) rotate(50deg);
}
.bojack__hair--left-1:after {
    height: 5px;
    width: 20px;
    top: -15px;
    left: -9px;
    border-radius: 100%;
    transform: translate(-2px, 0) rotate(62deg);
}
.bojack__hair--left-2 {
    height: 55px;
    width: 9px;
    left: 50%;
    top: 50%;
    border-radius: 100%;
    transform: translate(-46px, -87px) rotate(-12deg);
}
.bojack__hair--left-2:before {
    height: 20px;
    width: 20px;
    top: -5px;
    left: 8px;
    transform: rotate(12deg);
}
.bojack__hair--left-2:after {
    background: #000;
    width: 6px;
    height: 22px;
    border-radius: 100%;
    transform: translate(53px, -37px) rotate(-41deg);
}
.bojack__hair--top-1 {
    left: 50%;
    top: 10%;
    height: 63px;
    width: 8px;
    z-index: 3;
    border-radius: 100%;
    transform: translate(-5px, -14px) rotate(17deg);
}
.bojack__hair--top-1:before {
    height: 30px;
    width: 6px;
    border-radius: 100%;
    transform: rotate(-20deg) translate(0px, 20px);
}
.bojack__hair--top-1:after {
    border-radius: 100%;
    height: 56px;
    width: 10px;
    transform: rotate(-22deg) skewY(10deg) translate(8px, 9px);
}
.bojack__hair--top-2 {
    left: 50%;
    top: 10%;
    z-index: 3;
    height: 20px;
    width: 8px;
    border-radius: 1px 1px 30px 10px/1px 1px 56px 36px;
    transform: translate(-22px, 5px) rotate(10deg);
}
.bojack__hair--top-2:after {
    height: 17px;
    width: 44px;
    transform: rotate(-23deg) translate(-1px, -9px);
}
.bojack__hair--top-2:before {
    height: 50px;
    width: 9px;
    border-radius: 1px 1px 8px 5px/1px 1px 35px 35px;
    transform: translate(8px, -17px) rotate(1deg);
    clip-path: inset(15% 0 0 0);
    -webkit-clip-path: inset(15% 0 0 0);
}
.bojack__hair--top-3 {
    left: 50%;
    top: 10%;
    z-index: 6;
    height: 23px;
    width: 7px;
    border-radius: 7px 1px 1px 7px/9px 1px 1px 11px;
    transform: translate(-14px, -13px) rotate(90deg) skewY(25deg);
}
.bojack__hair--top-3:before {
    background: #000;
    width: 12px;
    height: 18px;
    border-radius: 100%;
    transform: skewY(-25deg) translate(5px, -25px) rotate(12deg);
}
.bojack__hair--top-3:after {
    width: 7px;
    height: 24px;
    border-radius: 8px 1px 1px 8px/15px 1px 1px 22px;
    transform: skewY(-25deg) translate(-1px, -23px) rotate(-12deg);
}
.bojack__hair--top-4 {
    left: 50%;
    top: 10%;
    height: 48px;
    width: 9px;
    z-index: 6;
    border-radius: 1px 1px 9px 3px/1px 1px 20px 21px;
    transform: rotate(-8deg) translate(5px, 5px);
}
.bojack__hair--top-4:after {
    height: 42px;
    width: 8px;
    border-radius: 1px 1px 6px 3px/1px 1px 20px 16px;
    transform: rotate(-10deg) translate(8px, 1px);
}
.bojack__hair--top-4:before {
    height: 32px;
    width: 8px;
    background: #000;
    border-radius: 100%;
    transform: rotate(-20deg) translate(13px, -1px);
}
.bojack__hair--right-1 {
    left: 50%;
    top: 50%;
    width: 8px;
    height: 30px;
    border-radius: 100%;
    transform: translate(41px, -97px) rotate(11deg);
}
.bojack__hair--right-1:before {
    height: 30px;
    width: 6px;
    border-radius: 2px 3px 1px 1px/10px 20px 1px 1px;
    top: 16px;
    left: 6px;
    transform: rotate(7deg);
}
.bojack__hair--right-1:after {
    height: 20px;
    width: 4px;
    top: 27px;
    left: 12px;
    transform: rotate(-29deg);
    clip-path: polygon(0 0, 100% 0, 100% 54%, 0 91%);
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 54%, 0 91%);
}
.bojack__ear-line {
    height: 47px;
    width: 10px;
    border: 2px solid #000;
    transform: translate(30px, 11px);
    border-radius: 15px 1px 1px 15px/45px 1px 1px 35px;
    clip-path: polygon(0 0, 4px 8px, 6px 100%, 0 100%);
    -webkit-clip-path: polygon(0 0, 4px 8px, 6px 100%, 0 100%);
}
.bojack__chin {
    width: 60px;
    height: 60px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 48px);
    z-index: 4;
}
.bojack__chin--1 {
    height: 100%;
    width: 100%;
    border: 2px solid #000;
    border-radius: 1px 1px 30px 32px/1px 1px 34px 38px;
    clip-path: polygon(0 40px, 60px 45px, 60px 60px, 0 60px);
    -webkit-clip-path: polygon(0 40px, 60px 45px, 60px 60px, 0 60px);
}
.bojack__chin--2 {
    height: 20px;
    width: 23px;
    top: 50%;
    left: 50%;
    transform: translate(-33px, -10px) rotate(-65deg);
    border: 2px solid #000;
    border-radius: 11px 1px 1px 1px/13px 1px 1px 1px;
    clip-path: polygon(0 0, 70% 0, 0% 63%);
    -webkit-clip-path: polygon(0 0, 70% 0, 0% 63%);
}
.bojack__chin--3 {
    height: 40px;
    width: 30px;
    border: 2px solid #000;
    top: 50%;
    left: 50%;
    border-radius: 0px 16px 1px 1px/0px 26px 1px 1px;
    transform: translate(-1px, -15px) rotate(84deg);
    clip-path: polygon(6px 0, 30px 15px, 30px 0);
    -webkit-clip-path: polygon(6px 0, 30px 15px, 30px 0);
}
.bojack__base {
    width: 108px;
    background: #8b5347;
    height: 80px;
    left: 50%;
    top: 47%;
    transform: translate(-50%, -50%);
    border-radius: 20px 14px 36px 36px/30px 30px 40px 40px;
    border: 2px solid #000;
    z-index: 2;
}
.bojack__base:after {
    background: #8b5347;
    width: 94px;
    height: 20px;
    top: -4px;
    left: 6px;
}
.bojack__crown {
    width: 100px;
    height: 40px;
    left: 50%;
    top: 20%;
    transform: translate(-49px, 3px);
    border-radius: 8px 10px 9px 14px/26px 19px 20px 27px;
    background: #8b5347;
    border: 2px solid #000;
    opacity: 0;
}
.bojack__forehead {
    width: 100px;
    height: 40px;
    left: 50%;
    top: 20%;
    transform: translate(-49px, 14px);
    border-radius: 8px 10px 9px 9px/26px 19px 20px 27px;
    background: #8b5347;
    border: 2px solid #000;
}
.bojack__forehead:before {
    content: '';
    background: #8b5347;
    border-left: 2px solid #000;
    height: 42px;
    width: 57px;
    top: -34px;
    left: 7px;
    transform: rotate(16deg);
}
.bojack__forehead:after {
    content: '';
    background: #8b5347;
    border-right: 2px solid #000;
    height: 42px;
    width: 57px;
    top: -34px;
    left: 32px;
    transform: translate(5px, 14px) rotate(-14deg);
}
.bojack__forehead-square {
    height: 55px;
    width: 25px;
    background: #000;
    top: 73px;
    left: 138px;
    z-index: 6;
    clip-path: polygon(49% 0, 100% 54%, 55% 100%, 0 53%);
    -webkit-clip-path: polygon(49% 0, 100% 54%, 55% 100%, 0 53%);
}
.bojack__forehead-square:after {
    background: #fff;
    clip-path: polygon(49% 0, 100% 54%, 55% 100%, 0 53%);
    -webkit-clip-path: polygon(49% 0, 100% 54%, 55% 100%, 0 53%);
    height: 100%;
    width: 100%;
    transform: scale(0.86);
}
.bojack__eyebrows {
    z-index: 6;
    height: 2px;
    width: 17px;
    top: 90px;
    left: 107px;
    background: #000;
    transform: rotate(-8deg);
}
.bojack__eyebrows:after {
    height: 2px;
    width: 17px;
    top: 9px;
    left: 70px;
    background: #000;
    transform: rotate(19deg);
}
.bojack__eye-signs-left {
    height: 30px;
    width: 30px;
    border: 5px double #000;
    border-radius: 100%;
    top: 100px;
    left: 101px;
    z-index: 100;
    clip-path: polygon(13px 20px, 26px 17px, 30px 30px, 21px 27px, 11px 27px);
    -webkit-clip-path: polygon(13px 20px, 26px 17px, 30px 30px, 21px 27px, 11px 27px);
}

.bojack__eye-signs-right {
    height: 30px;
    width: 30px;
    top: 96px;
    left: 170px;
    border: 5px double #000;
    border-radius: 100%;
    z-index: 100;

    transform-origin: bottom left;
    transform: rotate(8deg);
    clip-path: polygon(5px 20px, 21px 24px, 22px 26px, 7px 30px);
    -webkit-clip-path: polygon(5px 20px, 21px 24px, 22px 26px, 7px 30px);
}
.bojack__eye {
    background: #fff;
    border: 2px solid #000;
    z-index: 7;
}
.bojack__eye--left {
    height: 21px;
    width: 21px;
    border-radius: 100%;
    top: 102px;
    left: 104px;
}
.bojack__eye--left:before {
    background: #000;
    border-radius: 100%;
    height: 7px;
    width: 7px;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -43%);
}
.bojack__eye--right {
    height: 20px;
    width: 20px;
    border-radius: 100%;
    top: 101px;
    left: 178px;
}
.bojack__eye--right:before {
    background: #000;
    border-radius: 100%;
    height: 7px;
    width: 7px;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -43%);
}
.bojack__nose {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
}
.bojack__snout {
    width: 58px;
    height: 90px;
    background: #8b5347;
    top: 50%;
    left: 50%;
    transform: translate(-49%, -25%);
    border-radius: 4px 6px 5px 8px/30px 40px 18px 50px;
    border: 2px solid #000;
    clip-path: polygon(0 12%, 100% 12%, 100% 82%, 0 76%);
    -webkit-clip-path: polygon(0 12%, 100% 12%, 100% 82%, 0 76%);
}
.bojack__nose-filler {
    height: 10px;
    width: 2px;
    background: #000;
    top: 50%;
    left: 50%;
    transform: translate(-30px, 45px) rotate(17deg);
    transform-origin: bottom;
}
.bojack__nostrils {
    background: #8b5347;
    height: 25px;
    width: 68px;
    top: 50%;
    left: 50%;
    transform: translate(-47%, 50px);
    z-index: 2;
    border: 2px solid #000;
    border-radius: 7px 10px 4px 6px/11px 12px 9px 14px;
    clip-path: polygon(
        0px 2px,
        8px 4px,
        59px 15px,
        60px 0px,
        100% 0,
        100% 100%,
        65px 100%,
        63px 17px,
        7px 17px,
        0 100%,
        0 0
    );
    -webkit-clip-path: polygon(
        0px 2px,
        8px 4px,
        59px 15px,
        60px 0px,
        100% 0,
        100% 100%,
        65px 100%,
        63px 17px,
        7px 17px,
        0 100%,
        0 0
    );
}
.bojack__nostril-left {
    height: 14px;
    width: 13px;
    background: #000;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) translate(-19px, 64px);
    z-index: 12;
    border-radius: 7px 14px 1px 8px/12px 18px 1px 8px;
}
.bojack__nostril-left:before {
    content: '';
    background: #000;
    height: 10px;
    width: 9px;
    top: 10px;
    left: 4px;
    border-radius: 100%;
}
.bojack__nostril-left:after {
    content: '';
    border: 2px solid #000;
    height: 25px;
    width: 20px;
    border-radius: 1px 7px 7px 1px/1px 16px 13px 1px;
    clip-path: polygon(16px 0, 16px 3px, 20px 0px, 20px 25px, 15px 21px);
    -webkit-clip-path: polygon(
        16px 0,
        16px 3px,
        20px 0px,
        20px 25px,
        15px 21px
    );
}
.bojack__nostril-right {
    height: 12px;
    width: 14px;
    background: #000;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) translate(22px, 66px);
    z-index: 12;
    border-radius: 15px 6px 9px 1px/17px 7px 10px 1px;
}
.bojack__nostril-right:before {
    content: '';
    background: #000;
    height: 10px;
    width: 11px;
    top: 9px;
    left: 0px;
    border-radius: 2px 7px 8px 7px/2px 4px 7px 11px;
}
.bojack__nostril-right:after {
    content: '';
    border: 2px solid #000;
    height: 25px;
    width: 20px;
    top: -3px;
    left: -8px;
    border-radius: 7px 1px 1px 7px/14px 1px 1px 14px;
    clip-path: polygon(0 0, 5px 4px, 5px 23px, 0 30px);
    -webkit-clip-path: polygon(0 0, 5px 4px, 5px 23px, 0 30px);
}
.bojack__neck {
    width: 110px;
    background: #8b5347;
    top: 50%;
    left: 50%;
    transform: translate(-48%, 0%) rotate(1deg);
    height: 100px;
    clip-path: polygon(0 0, 95% 0, 101% 93%, 85% 100%, 0 90%);
    -webkit-clip-path: polygon(0 0, 95% 0, 101% 93%, 85% 100%, 0 90%);
    z-index: 1;
}
.bojack__neck:before {
    content: '';
    left: 0;
    height: 74%;
    top: 0;
    width: 2px;
    background: #000;
}
.bojack__neck:after {
    content: '';
    width: 2px;
    height: 74%;
    top: 0;
    right: 3px;
    background: #000;
    transform: rotate(-4deg);
}
.bojack__triangle {
    height: 103px;
    width: 44px;
    background: #fff;
    z-index: 5;
    top: 50%;
    left: 50%;
    transform: translate(-21px, -5px);
    background: #000;
    clip-path: polygon(
        22px 0,
        44px 80px,
        44px 103px,
        0px 104px,
        1px 80px,
        21px 0
    );
    -webkit-clip-path: polygon(
        22px 0,
        44px 80px,
        44px 103px,
        0px 104px,
        1px 80px,
        21px 0
    );
    border-radius: 1px 1px 23px 20px/1px 1px 18px 25px;
    overflow: hidden;
}
.bojack__triangle-inner {
    background: #fff;
    height: 100%;
    width: 100%;
    border-radius: 1px 1px 23px 20px/1px 1px 18px 25px;
    transform: scale(1);
    border: 2px solid #000;
    clip-path: polygon(50% 5px, 24px 15px, 110% 100%, -5% 100%);
    -webkit-clip-path: polygon(50% 5px, 24px 15px, 110% 100%, -5% 100%);
    overflow: hidden;
}
.bojack__nose-splodge {
    background: #e5aed1;
    border-radius: 100%;
}
.bojack__nose-splodge--1 {
    height: 47px;
    width: 12px;
    bottom: -7px;
    left: 32%;
}
.bojack__nose-splodge--2 {
    height: 45px;
    width: 10px;
    bottom: -6px;
    left: 16%;
}
.bojack__nose-splodge--3 {
    height: 46px;
    width: 10px;
    bottom: -5px;
    left: 2%;
}
.bojack__nose-splodge--4 {
    height: 60px;
    width: 11px;
    bottom: -22px;
    left: 54%;
}
.bojack__nose-splodge--5 {
    height: 60px;
    width: 11px;
    bottom: -20px;
    left: 74%;
}
.bojack__chest {
    width: 125px;
    height: 65px;
    background: #8b5347;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 65px);
    border: 2px solid #000;
    border-radius: 10px 10px 60px 60px/10px 10px 60px 60px;
}
.bojack__mouth {
    width: 44px;
    height: 44px;
    z-index: 11;
    top: 50%;
    left: 50%;
    transform: translate(-48%, 54px);
}
.bojack__mouth:after {
    content: '';
    height: 20px;
    width: 20px;
    left: 50%;
    top: 50%;
    border: 2px solid #000;
    transform: translate(-35px, 4px) rotate(41deg);
    border-radius: 4px 12px 1px 1px/4px 14px 1px 1px;
    clip-path: polygon(0 4px, 100% 3px, 100% 0, 0 0);
    -webkit-clip-path: polygon(0 4px, 100% 3px, 100% 0, 0 0);
}
.bojack__mouth:before {
    content: '';
    height: 20px;
    width: 20px;
    left: 50%;
    top: 50%;
    border: 2px solid #000;
    transform: translate(16px, 4px) rotate(-41deg);
    border-radius: 14px 7px 1px 1px/20px 7px 1px 1px;
    clip-path: polygon(50% 0, 50% 50%, 100% 17%, 100% 0);
    -webkit-clip-path: polygon(50% 0, 50% 50%, 100% 17%, 100% 0);
}

.body {
    background-color: #fff0f0;
    color: #ff6e6e;
    font-family: 'Indie Flower';
    font-weight: 100;
    margin: 0;
}


.flex-center {
    align-items: center;
    justify-content: center;
    transition: transform 0.25s ease;
}

.position-r {
    position: relative;
}

.code {
    border-right: 3px solid;
    font-size: 55px;
    padding: 0 10px 0 10px;
    text-align: center;
}

.message {
    font-size: 60px;
    text-align: center;
    color: black;
}

@keyframes typing {
    from {
        width: 0;
    }
    to {
        width: 50%;
    }
}
@keyframes blink-caret {
    from,
    to {
        border-color: transparent;
    }
    50% {
        border-color: black;
    }
}
        </style>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    </head>
    <body>
        <div calss="body" style="margin-top: 0px;">
            <div class="flex-center position-r full-height">
                <div class="message">
                    404 NOT FOUND
                </div>
            </div>
        </div>
        <div>
            <div class="bg"></div>
            <div class="bojack">
                <div class="bojack__hair bojack__hair--top-1"></div>
                <div class="bojack__hair bojack__hair--top-2"></div>
                <div class="bojack__hair bojack__hair--top-3"></div>
                <div class="bojack__hair bojack__hair--top-4"></div>
                <div class="bojack__hair bojack__hair--left-1"></div>
                <div class="bojack__hair bojack__hair--left-2"></div>
                <div class="bojack__hair bojack__hair--right-1"></div>
                <div class="bojack__base"></div>
                <div class="bojack__ear-left"></div>
                <div class="bojack__ear-right">
                    <div class="bojack__ear-line"></div>
                </div>
                <div class="bojack__forehead"></div>
                <div class="bojack__forehead-square"></div>
                <div class="bojack__eyebrows"></div>
                <div class="bojack__eye bojack__eye--left"></div>
                <div class="bojack__eye bojack__eye--right"></div>
                <div class="bojack__eye-signs-left"></div>
                <div class="bojack__eye-signs-right"></div>
                <div class="bojack__crown"></div>
                <div class="bojack__neck"></div>
                <div class="bojack__nose">
                    <div class="bojack__snout"></div>
                    <div class="bojack__nostrils"></div>
                    <div class="bojack__nostril-left"></div>
                    <div class="bojack__nostril-right"></div>
                    <div class="bojack__nose-filler"></div>
                    <div class="bojack__chin">
                        <div class="bojack__chin--1"></div>
                        <div class="bojack__chin--2"></div>
                        <div class="bojack__chin--3"></div>
                    </div>
                    <div class="bojack__mouth"></div>
                    <div class="bojack__triangle">
                        <div class="bojack__triangle-inner">
                            <div
                                class="bojack__nose-splodge bojack__nose-splodge--1"
                            ></div>
                            <div
                                class="bojack__nose-splodge bojack__nose-splodge--2"
                            ></div>
                            <div
                                class="bojack__nose-splodge bojack__nose-splodge--3"
                            ></div>
                            <div
                                class="bojack__nose-splodge bojack__nose-splodge--4"
                            ></div>
                            <div
                                class="bojack__nose-splodge bojack__nose-splodge--5"
                            ></div>
                        </div>
                    </div>
                </div>
                <div class="bojack__chest"></div>
            </div>
        </div>
        <div calss="body">
            <div class="flex-center position-r full-height">
                <div class="message" style="padding: 10px">
                    Lookin' around ?
                </div>
            </div>
        </div>
    </body>
</html>`,
        }}
      />
    </div>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
