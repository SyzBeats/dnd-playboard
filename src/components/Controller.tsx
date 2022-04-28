import React from 'react';
import { IoFlashlightSharp, IoTrash, IoAdd, IoRemove, IoShapes } from 'react-icons/io5';
import { GiBrickWall } from 'react-icons/gi';
import { VscOpenPreview } from 'react-icons/vsc';

import { useAppCssState, useTorchState, useBareerState } from '../state';
import { Button } from './Button';

import classes from './controller.module.css';

const Controller = () => {
	// torch state handler
	const torchState = useTorchState(state => ({
		add: state.addTorch,
		remove: state.removeTorch,
		current: state.currentTorch,
		toggleShape: state.toggleCurrentTorchShape,
	}));

	// Bareer state handler
	const bareerState = useBareerState(state => ({
		add: state.addBareer,
		current: state.currentBareer,
	}));

	// App state handler
	const appCssState = useAppCssState(state => ({
		scale: state.scale,
		setScale: state.setScale,
		preview: state.previewMode,
		setPreviewMode: state.setPreviewMode,
	}));

	/**
	 * @description adding a new torch with default values
	 */
	const handleAddTorch = () => {
		torchState.add({
			name: `${Math.random()}`,
			id: `torch-${Math.random()}`,
			x: 25,
			y: 25,
			round: true,
			size: 'small',
		});
	};

	/**
	 * @description adding a new torch with default values
	 */
	const handleAddBareer = () => {
		bareerState.add({
			name: `${Math.random()}`,
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
		if (!torchState.current) {
			return;
		}

		torchState.remove(torchState.current.id);
	};

	/**
	 * @description calculate the correct position of the torch
	 * @param axis x or y
	 * @returns the correct position on the current axis
	 */
	const calcCorrectedPosition = (axis: number) => {
		return (axis - 50 * appCssState.scale) / appCssState.scale;
	};

	const handleDragTorch = (e: React.MouseEvent) => {
		// add torch on new position
		torchState.add({
			name: `${Math.random()}`,
			id: `torch-${Math.random()}`,
			x: calcCorrectedPosition(e.clientX),
			y: calcCorrectedPosition(e.clientY),
			round: true,
			size: 'small',
		});
	};

	const handleDragBareer = (e: React.MouseEvent) => {
		// add torch on new position
		bareerState.add({
			name: `${Math.random()}`,
			id: `torch-${Math.random()}`,
			x: calcCorrectedPosition(e.clientX),
			y: calcCorrectedPosition(e.clientY),
			round: true,
			size: 'small',
		});
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

	/**
	 * @description toggle the preview mode on and off
	 */
	const handleTogglePreview = () => {
		appCssState.setPreviewMode(!appCssState.preview);
	};

	/**
	 * @description toggle the shape of the current torch
	 */
	const handleToggleShape = () => {
		if (!torchState.current) {
			return;
		}

		torchState.toggleShape(torchState?.current?.id);
	};

	return (
		<nav className={classes.wrapper}>
			<div className={classes.container}>
				<Button clickHandler={() => handleAddTorch()} draggable dragHandler={e => handleDragTorch(e)}>
					<IoFlashlightSharp size={'20px'} />
				</Button>
				<Button clickHandler={() => handleRemoveTorch()}>
					<IoTrash size={'20px'} />
				</Button>
				<Button clickHandler={() => handleAddBareer()} draggable dragHandler={e => handleDragBareer(e)}>
					<GiBrickWall size={'20px'} />
				</Button>
				<Button clickHandler={() => handleToggleShape()}>
					<IoShapes size={'20px'} />
				</Button>
				<Button clickHandler={() => handleSetScale('increment')}>
					<IoAdd size={'20px'} />
				</Button>
				<Button clickHandler={() => handleSetScale('decrement')}>
					<IoRemove size={'20px'} />
				</Button>
				<Button clickHandler={() => handleTogglePreview()}>
					<VscOpenPreview size={'20px'} />
				</Button>
			</div>
		</nav>
	);
};

export default Controller;
