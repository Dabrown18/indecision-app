import React, { Component } from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
	<Modal
		isOpen={!!props.selectedOption}
		onRequestClose={props.handleModal}
		contentLabel="Selected Option"
		closeTimeoutMS={200}
		className="modal"
	>
		<h3 className="modal_title">Selected Item</h3>
		{props.selectedOption && <p className="modal_body">{props.selectedOption}</p>}
		<button className="button" onClick={props.handleModal}>Okay</button>
	</Modal>
);

export default OptionModal;