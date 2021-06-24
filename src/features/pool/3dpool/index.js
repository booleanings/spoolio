import React from "react";
import './qube.css';

function Pool3D() {
  return (
    <div class="qube-perspective">
      <ul id="cube1" class="qube">
            <li class="front"></li>
            <li class="left"></li>
            <li class="back"></li>
            <li class="right"></li>
            <li class="top"></li>
            <li class="bottom"></li>
        </ul>
    </div>
  );
}

export default Pool3D;
