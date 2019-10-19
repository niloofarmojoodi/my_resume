import React, { Component } from "react";
import data from "../data.json";
import FullPage from "../components/FullPage";

import {  Element } from "react-scroll";
import './AboutSection.css'


class AboutSection extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <FullPage className="second" background={this.props.background } >
        <h1 id="second" style={{ color: this.props.color }} >{data.sections[0].title}</h1>
        <p>{data.sections[0].items[0].content}</p>
        

        <Element name="skills" className="element"/>
      </FullPage>
    );
  }
}

export default AboutSection;