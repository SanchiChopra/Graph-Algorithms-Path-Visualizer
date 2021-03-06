import React, { Component } from "react";

import "./Node.css";

/*
React compoenent used to represent the Nodes in the generated page.
*/
export default class Node extends Component {
  nodeType = node => {
    const type = node.isEnd
      ? "node-end"
      : node.isStart
      ? "node-start"
      : node.isWall
      ? "node-wall"
      : " ";
    return type;
  };

  render() {
    const {
      col,
      row,
      isEnd,
      isStart,
      isVisited,
      isWall,
      onMouseDown,
      onMouseEnter,
      onMouseUp,
      weight
    } = this.props;
    return (
      <div className="node-box">
        <div
          id={`node-${row}-${col}`}
          className={`node ${this.nodeType(this.props)}`}
          onMouseDown={() => onMouseDown(row, col)}
          onMouseEnter={() => onMouseEnter(row, col)}
          onMouseUp={() => onMouseUp()}
        >
          <p>{weight}</p>
        </div>
      </div>
    );
  }
}
