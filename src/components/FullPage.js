import React , {Component} from 'react';
import './FullPage.css';

class FullPage extends Component{
    constructor(props) {
        super(props);
        this.state = {};
      }
    render(){
        const {children} = this.props
        return(
            <div className={`fullPage ${this.props.className || '' }`} style={{
                backgroundColor:this.props.background
            }}>
                {children}
       
            </div>

        );
    }
}

export default FullPage;