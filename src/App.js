import React , {Component} from "react";
import TitleSection from "./Sections/TitleSection";
import AboutSection from "./Sections/AboutSection";
import SkillsSection from "./Sections/SkillSection";
import Navigation from "./Sections/Navigation";

import "./App.css";

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      color: "white",
      background: "#004080",
      counter: 0
    };
  }
  changeColor = () => {
    let rang = ["black", "#b3cde0", "orange", "yellow"];
    let zamine_1 = ["#14812c", "#a30522", "#071066"];
    let zamine_2 = ["	#1dd247", "#fa123e", "#0e1ea7"];
    let zamine_3 = ["#58e779", "#fa6c86", "#3f52ee"];
    if (this.state.counter >= 3) {
      this.setState({
        counter: 0,
        color: rang[this.state.counter],
        background_first: "#00FA9A",
        background_second: "#3CB371",
        background_third: "	#90EE90",
      });
    } else{
      this.setState({
        color: rang[this.state.counter],
        background_first: zamine_1[this.state.counter],
        background_second: zamine_2[this.state.counter],
        background_third: zamine_3[this.state.counter],
        counter: this.state.counter + 1
      });
      
    }
      
  };
  render(){
    return (
      <div className="App">
        
        <Navigation />
        <div className="change-color" >
            <img 
            src="./paint-palette.png" alt="" onClick={this.changeColor} 
        ></img>
        </div>
        <TitleSection 
          color={this.state.color}
          background={this.state.background_first} />
        <AboutSection 
         color={this.state.color}
         background={this.state.background_second}/>
        <SkillsSection 
        color={this.state.color}
        background={this.state.background_third}
        />
      </div>
    );
  }
  
}

export default App;
