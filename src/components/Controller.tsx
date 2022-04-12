import React from 'react';
import { Rnd } from 'react-rnd';
import { IoFlashlightSharp, IoTrash, IoAdd, IoRemove } from 'react-icons/io5';
import { useAppCssState, useTorchState } from '../state';
import { Button } from './Button';

import classes from './controller.module.css';

const Controller = () => {
	// torch state handler
	const torchState = useTorchState((state) => ({
		addTorch: state.addTorch,
		removeTorch: state.removeTorch,
		currentTorch: state.currentTorch,
	}));

	// app state handler
	const appCssState = useAppCssState((state) => ({
		scale: state.scale,
		setScale: state.setScale,
	}));

	/**
	 * @description adding a new torch with default values
	 */
	const handleAddTorch = () => {
		torchState.addTorch({
			id: `torch-${Math.random()}`,
			x: 25,
			y: 25,
			round: false,
			size: 'small',
		});
	};

	/**
	 * @description removing a torch from the playground
	 * by clicking the button on the panel
	 */
	const handleRemoveTorch = () => {
		if (!torchState.currentTorch) {
			return;
		}

		torchState.removeTorch(torchState.currentTorch.id);
	};

	/**
	 * @description changing the size of field
	 * @param operator decide if the scale should be increased or decreased
	 */
	const handleSetScale = (operator: 'increment' | 'decrement') => {
		if (operator === 'increment') {
			appCssState.setScale(appCssState.scale + 0.3);
		}

		if (operator === 'decrement') {
			appCssState.setScale(appCssState.scale - 0.3);
		}
	};

	return (
		<Rnd className={classes.controller} enableResizing={false}>
			<div className={classes.container}>
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
			</div>
		</Rnd>
	);
};

export default Controller;
