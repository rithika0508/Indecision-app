class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props)
        this.handleVisibilityToggle=this.handleVisibilityToggle.bind(this)
        let details='Here are the details you want'
        this.details=details
        this.state={
            visibility: !details
        }
    }
    handleVisibilityToggle() {
        
        this.setState((prevState) => {
            return {
                visibility:!prevState.visibility
            }
        })
        
    }
    render() {
        return (<div>
            <h1>Visibility Toggle</h1>
            <button onClick={this.handleVisibilityToggle}>{ this.state.visibility? 'Hide details' : 'View details' }</button>
            {this.state.visibility && <p>{this.details}</p>}
        </div>);
    }
}
ReactDOM.render(<VisibilityToggle/>, document.getElementById('app'))




















// console.log('built-it.js is working')

// let details;

// const Hidedetails = () => {
//     details=''
//     renderTemplate()
// }
// const ShowDetails = () => {
//     details = 'These are the details u want!'
//     renderTemplate()
// }

// const appRoot = document.getElementById('app')
// const renderTemplate = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             {details ? <button onClick={Hidedetails}>Hide Details</button> : <button onClick={ShowDetails}>Show Details</button>}
//             {details && <p>{details}</p>}
//         </div>
//         );
    
//     ReactDOM.render(template, appRoot)
// }

// renderTemplate()
