import React from 'react'

const Alloptions = (props) => {
    return (
            <div className="option">
                <p className="option__text">{props.index}. {props.optiontext}</p>
                
                <button className="button button--link" onClick={(e) => {
                    props.handleDeleteOptionSingular(props.optiontext)
                }}>
                    Remove
                </button>
            </div>
        

    );
}
export default Alloptions;
// class Alloptions extends React.Component {
//     render() {
//         return (
//             <div>
//                 <button onClick={this.props.handleDeleteOptions}>Remove all</button>
//                 <ol>
//                     {this.props.options.map((opt) => <li key={opt}>{opt}</li>)}
//                 </ol>
//             </div>

//         );
//     }
// }
