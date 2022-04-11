import React from 'react';
import Draggable from 'react-draggable';
import { IoFlashlightSharp, IoTrash, IoAdd, IoRemove } from 'react-icons/io5';
import { useAppCssState, useTorchState } from '../state';
import { Button } from './Button';

import classes from './controller.module.css';

const Controller = () => {
	const torchState = useTorchState(state => ({
		addTorch: state.addTorch,
		removeTorch: state.removeTorch,
		currentTorch: state.currentTorch,
	}));

	const appCssState = useAppCssState(state => ({
		scale: state.scale,
		setScale: state.setScale,
	}));

	const handleAddTorch = () => {
		torchState.addTorch({
			id: `torch-${Math.random()}`,
			x: 25,
			y: 25,
			round: false,
			size: 'small',
		});
	};

	const handleRemoveTorch = () => {
		if (!torchState.currentTorch) {
			return;
		}

		torchState.removeTorch(torchState.currentTorch.id);
	};

	const handleSetScale = (operator: 'increment' | 'decrement') => {
		if (operator === 'increment') {
			appCssState.setScale(appCssState.scale + 0.3);
		}

		if (operator === 'decrement') {
			appCssState.setScale(appCssState.scale - 0.3);
		}
	};

	return (
		<Draggable axis="both">
			<div className={classes.controller}>
				<Button clickHandler={() => handleAddTorch()}>
					<IoFlashlightSharp size={'20px'} />
				</Button>
				<Button clickHandler={() => handleRemoveTorch()}>
					<IoTrash size={'20px'} />
				</Button>
				<Button clickHandler={() => handleSetScale('increment')}>
					<IoAdd size={'20px'} />
				</Button>
				<Button clickHandler={() => handleSetScale('decrement')}>
					<IoRemove size={'20px'} />
				</Button>
				<Button clickHandler={() => null}>test</Button>
			</div>
		</Draggable>
	);
};

export default Controller;
