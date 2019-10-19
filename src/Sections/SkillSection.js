import React, { Component } from "react";
import data from "../data.json";
import SkillCard from '../components/SkillCard'
import FullPage from "../components/FullPage";
import './SkillSection.css'

class SkillSection extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <FullPage className="third"
      background={this.props.background} >
        <h1 id="third" style={{color:this.props.color}}>{data.sections[1].title}</h1>
        <div className="card-wrapper">
          {data.sections[1].items.map(eachskill => {
            return (
              <SkillCard skill = {eachskill}/>
            );
          })}
        </div>
      </FullPage>
    );
  }
}

export default SkillSection;