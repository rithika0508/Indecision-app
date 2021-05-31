import React from 'react';
import Modal from 'react-modal';

const Optionmodel = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        onRequestClose={props.clearselectedOption}
        ariaHideApp={false}
        contentLabel="Selected Option"
        closeTimeoutMS={200}
        className="model">
        <h2 className="model__title">Selected Option</h2>
        <h3 className="model__body">{props.selectedOption && <p>{props.selectedOption}</p>}</h3>
        <button onClick={props.clearselectedOption}>okay</button>
    </Modal>
)
export default Optionmodel;