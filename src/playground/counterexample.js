class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.handleSubtractOne=this.handleSubtractOne.bind(this)
        this.handleAddOne=this.handleAddOne.bind(this)
        this.resetCount=this.resetCount.bind(this)
        this.state={
            count: 0
        }
    }
    componentDidMount() {
        const json = localStorage.getItem('count')
        const count = parseInt(json)
        if(!isNaN(count)) {
            this.setState(() => ({ count }))
        }
        
    }
    componentDidUpdate(prevProps, prevState) {
        const json = JSON.stringify(this.state.count)
        localStorage.setItem('count', json)
    }
    handleAddOne() {
        this.setState((oldState) => {   //setstate chnages the values and even renders
            return {
                count:oldState.count+1
            }
        })
        // this.setState({
        //     count:5
        // })
    }
    handleSubtractOne() {
        this.setState((oldState) => {
            return {
                count: oldState.count-1
            }
        })
    }
    resetCount() {
        this.setState(() => {  //functional states are synchronous
            return {
                count:0
            }
        })
        // this.setState((prevState) => {
        //     return {
        //         count: prevState.count+1
        //     }
        // })
        
        // this.setState({  //object states are asynchronous
        //     count:0
        // })
        // this.setState({
        //     count:this.state.count+1
        // })
    }
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleSubtractOne}>-1</button>
                <button onClick={this.resetCount}>reset</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter count={2}/>, document.getElementById('app'), () => {
    console.log('DOM rendered!')
})





// let count = 0
// const addOne = () => {
//     count++;
//     renderCounterApp()
// }
// const minusOne = () => {
//     count--;
//     renderCounterApp()
// }
// const resetFunction = () => {
//     count = 0;
//     renderCounterApp()
// }





// const renderCounterApp = () => {
//     //event listeners and attributes
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={resetFunction}>Reset</button>
//         </div>
//     );
    
//     ReactDOM.render(templateTwo, appRoot);  // we can even mention callback here as third argument
// }

// renderCounterApp()