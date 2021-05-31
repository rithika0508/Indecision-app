import React from 'react';
import Alloptions from './Alloptions'
const Options = (props) => 
    (
        <div>
            <div className="widget-header">
                <h3 className="widget-header__title">Your Options</h3>
                <button className="button button--link" onClick={props.handleDeleteOptions}>Remove all</button>
            </div>
            
            <p className="widget-selector" >{props.option.length ===0? 'Please add an option to get started' : 'Here are your options '}</p>
            
            {props.option.map((opt, index) => <Alloptions key={opt} optiontext={opt} handleDeleteOptionSingular={props.handleDeleteOptionSingular} index={index+1}/>)}
            
        </div>
    );

export default Options
// class Options extends React.Component {
//     render() {
//         return (
//             <div>
//                 <p>{this.props.option.length}</p>
//                 Here are your options
//                 <Alloptions options={this.props.option} handleDeleteOptions={this.props.handleDeleteOptions}/>
//             </div>
//         );
//     }
// }
