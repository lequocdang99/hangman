import React from "react";
import "./HangmanDrawing.css";

const HangmanDrawing = (props) => {
  const head = (
    <div
      key='1'
      id='head'
    />
  );
  const body = (
    <div
      key='2'
      id='body'
    />
  );
  const rightArm = (
    <div
      key='3'
      id='rightArm'
    />
  );
  const leftArm = (
    <div
      key='4'
      id='leftArm'
    />
  );
  const rightLeg = (
    <div
      key='5'
      id='rightLeg'
    />
  );
  const leftLeg = (
    <div
      key='6'
      id='leftLeg'
    />
  );
  const bodyPart = [head, body, rightArm, leftArm, leftLeg, rightLeg];
  return (
    <div id='hangmanDrawing'>
      <div id='bodyPart'>{bodyPart.slice(0, props.props.length)}</div>
      <div id='hangStick'>
        <div id='stick1' />
        <div id='stick2' />
        <div id='stick3' />
        <div id='stick4' />
      </div>
    </div>
  );
};

export default HangmanDrawing;
