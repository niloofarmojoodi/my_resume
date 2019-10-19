import React , {Component} from 'react';
import './SkillCard.css';

class FullPage extends Component{
    render(){
        const {skill} = this.props
        return(
            <div className="carddd">
                <div className="image-wrapper">
                  <img id="img" src={skill.content.image}></img>
                </div>

                <div className="skill-title-wrapper">
                  <h4>{skill.content.title}</h4>
                </div>
           </div>
        );
    }
}

export default FullPage;