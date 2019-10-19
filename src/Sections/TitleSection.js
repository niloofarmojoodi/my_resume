import React, { Component } from "react";
import data from "../data.json";
import FullPage from "../components/FullPage";
import ArrowDown from "../components/ArrowDown";
import { SocialIcon } from "react-social-icons";
import { Link, Element } from "react-scroll";
import SnowStorm from 'react-snowstorm';
import "./TitleSection.css";


class TitleSection extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
        <FullPage className="first1"
         background={this.props.background} >
          <SnowStorm />
          <h1 id="home" style={{color:this.props.color}}>{data.title}</h1>
          <h2 id="subtitle" style={{color:this.props.color}}>{data.subtitle}</h2>
          <div>
            {Object.keys(data.links).map(key => {
              return <SocialIcon className="icon" url={data.links[key]} />;
            })}
          </div>
          <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={136}
          duration={530}
          onSetActive={this.handleSetActive}
        >
          <ArrowDown/>
        </Link>

        <Element name="about" className="element"/>

        </FullPage>
        
        
      
    );
  }
}

export default TitleSection;
