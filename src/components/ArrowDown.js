import React, { Component } from "react";


class ArrowDown extends Component {
  render() {
    return (
      <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        background: this.props.background
      }}
    >
        <img
          src="down2.png"
          style={{
            maxWidth: "30px",
            marginTop:"100px",
            transform: "translateY(-45px)"
          }}
        />
      
    </div>
      
    );
  }
}

export default ArrowDown;

