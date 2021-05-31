import React from 'react';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import AddOption from './AddOption';
import Optionmodel from './Optionmodel';

export default class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedoption: undefined
    }
    componentDidMount = () => {
        try {
            const json = localStorage.getItem('options')
            const options = JSON.parse(json)
            if(options) {
            this.setState(() => ({ options }))
        }
        
        } catch (error) {
            //do nothing
        }
    }
    componentDidUpdate = (prevProps, prevState) => {
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options', json)
        }
    }
    //handle delete options
    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }))
    }
    handleDeleteOptionSingular = (opt) =>  {
        const options = this.state.options.filter((option) => option !== opt)
        this.setState(() => ({ options }))
    }
    handlePick = () => {
        const randomOpt = Math.floor(Math.random() * this.state.options.length)
        const option = this.state.options[randomOpt]
        this.setState(() => ({ selectedoption: option }))
    }
    handleAddOption = (option) => {
        if (!option) {
            return 'Enter valid value to add Item'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'The Item already exist'
        }
        this.setState((prevState) => ({ options: prevState.options.concat(option) }))
    }
    clearselectedOption = () => {
        this.setState(() => ({ selectedoption: undefined }))
    }
    render = () => {
        const subtitle = 'Put your life in the hands of a computer'
        return (
            <div>
                <Header subtitle={subtitle} />
                <div className="container">
                    <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick} />
                    <div className="widget">
                    <Options option={this.state.options} handleDeleteOptions={this.handleDeleteOptions} handleDeleteOptionSingular={this.handleDeleteOptionSingular} />
                    <AddOption options={this.state.options} handleAddOption={this.handleAddOption} />
                    </div>
                    </div>
                <Optionmodel selectedOption={this.state.selectedoption} clearselectedOption={this.clearselectedOption}/>
                
                </div>
        );
    }
}