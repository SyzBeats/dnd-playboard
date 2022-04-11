import React from 'react';
import Draggable from 'react-draggable';

import { useTorchState } from '../state';
import { Button } from './Button';

import classes from './controller.module.css';

const Controller = () => {
	const addTorch = useTorchState(state => state.addTorch);
	const removeTorch = useTorchState(state => state.removeTorch);
	const currentTorch = useTorchState(state => state.currentTorch);

	const handleAddTorch = () => {
		addTorch({
			id: `torch-${Math.random()}`,
			x: 0,
			y: 0,
			round: false,
			size: 'small',
		});
	};

	const handleRemoveTorch = () => {
		if (!currentTorch) {
			return;
		}

		removeTorch(currentTorch.id);
	};

	const handleIncreaseContainerSize = () => {
		// add 20vh to the container height
	};

	return (
		<Draggable axis="both">
			<div className={classes.controller}>
				<Button clickHandler={() => handleAddTorch()}>+</Button>
				<Button clickHandler={() => handleRemoveTorch()}>X</Button>
				<Button clickHandler={() => null}>inc</Button>
				<Button clickHandler={() => null}>dec</Button>
				<Button clickHandler={() => null}>test</Button>
			</div>
		</Draggable>
	);
};

export default Controller;
