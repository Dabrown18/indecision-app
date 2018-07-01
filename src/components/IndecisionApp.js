import React from 'react';

import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';

// STATELESS FUNCTIONAL COMPONENT
export default class IndecisionApp extends React.Component {
	state = {
		options: [],
		selectedOption: undefined
	};

	handleModal = () => {
		this.setState(() => ({ selectedOption: undefined }))
	};

	// DELETING ALL OPTIONS IN ARRAY
	handleDeleteOptions = () => {
		this.setState(() => ({ options: []}));
	};

	// DELETING SPECIFIC OPTIONS IN ARRAY
	handleDeleteOption = (optionToRemove) => {
		this.setState((prevState) => ({
			options: prevState.options.filter((option) => optionToRemove !== option)
		}))
	};

	handleAddOption = (option) => {

		if(!option) {
			return 'Enter valid value to add item';
		} else if (this.state.options.indexOf(option) > -1) {
			return 'This option already exist';
		}

		this.setState((prevState) => ({ options: prevState.options.concat(option)}));
	};

	handlePick = () => {
		const randomNumber = Math.floor(Math.random() * this.state.options.length);
		const option = this.state.options[randomNumber];
		this.setState(() => ({
			selectedOption: option
		}))
	};

	// FETCHING DATA
	componentDidMount() {
		try {
			const json = localStorage.getItem('options');
			const options = JSON.parse(json);

			if(options) {
				this.setState(() => ({ options }));
			}
		} catch(e) {

		}
	}

	// SAVING DATA
	componentDidUpdate(prevProps, prevState) {
		if(prevState.options.length !== this.state.options.length) {
			const json = JSON.stringify(this.state.options);
			localStorage.setItem('options', json);
		}
	}


	componentWillUnmount() {
		console.log('CWP')
	}

	render() {
		const subtitle = 'Put your life in the hands of a computer';
		const options = ['Thing one', 'Thing two', 'Thing four'];

		return (
			<div>
				<Header subtitle={subtitle} />
				<Action
					hasOptions={this.state.options.length > 0}
					handlePick={this.handlePick}
				/>
				<Options
					options={this.state.options}
					handleDeleteOptions={this.handleDeleteOptions}
					handleDeleteOption={this.handleDeleteOption}
				/>
				<AddOption
					handleAddOption={this.handleAddOption}
				/>
				<OptionModal
					selectedOption={this.state.selectedOption}
					handleModal={this.handleModal}
				/>
			</div>
		);
	}
}

