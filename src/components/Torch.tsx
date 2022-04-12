import React from 'react';
import { Rnd } from 'react-rnd';
import { useTorchState, useAppCssState } from '../state';

import classes from './torch.module.css';

interface Props {
	id: string;
	round?: boolean;
	x: number;
	y: number;
	size: string;
}

const Torch = (props: Props) => {
	const { x, y } = props;

	const setCurrentTorch = useTorchState((state) => state.setCurrentTorch);

	const classList = [classes.torch];

	// get the scale value
	const appCssState = useAppCssState((state) => ({
		scale: state.scale,
	}));

	if (props.size) {
		classList.push(classes[props.size]);
	}

	return (
		<Rnd
			onMouseDown={() =>
				setCurrentTorch({
					...props,
					round: !!props.round,
				})
			}
			className={classList.join(' ')}
			default={{ x, y, width: 100, height: 100 }}
			scale={appCssState.scale}
		>
			<div></div>
		</Rnd>
	);
};

export { Torch };
