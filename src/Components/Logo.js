import React, { Component } from "react";
import styled, { css } from "styled-components";
import { responsiveFontSizes } from "@material-ui/core";

function Index(props) {
  return (
    <Ellipse2Stack >
      <svg
        viewBox="0 0 466.64 515.14"
        style={{
          top: 0,
          left: 38,
          width: 400,
          height: 520,
          position: "absolute",
          responsiveFontSizes
        }}
      >
        <ellipse
          strokeWidth={1}
          fill="rgba(74,144,226,1)"
          cx={233}
          cy={258}
          rx={233}
          ry={258}
        ></ellipse>
      </svg>
      <svg
        viewBox="0  327.82 328.09"
        style={{
          top: 97,
          left: 61,
          width: 328,
          height: 328,
          position: "relative"
        }}
      >
        <ellipse
          strokeWidth={1}
          fill="rgba(255,255,255,1)"
          cx={164}
          cy={164}
          rx={163}
          ry={164}
        ></ellipse>
      </svg>
      <Moonlay width="100%">moonlay</Moonlay>
    </Ellipse2Stack>
  );
}

const Moonlay = styled.span`
  font-family: Roboto;
  top: 224px;
  left: 83px;
  color: rgba(74,144,226,1);
  position: absolute;
  font-size: 74px;
  font-weight: 500;
  font-style: normal;
`;

const Ellipse2Stack = styled.div`
  
  height: 52px;
  width: 100%;
  position: relative;
`;

export default Index;
