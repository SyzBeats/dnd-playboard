import React from 'react';
import Draggable from 'react-draggable'; // Both at the same time
import { useTorchState } from '../state';

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
	const setCurrentTorch = useTorchState(state => state.setCurrentTorch);

	const classList = [classes.torch];

	if (props.round) {
		classList.push(classes.round);
	}

	if (props.size) {
		classList.push(classes[`size-${props.size}`]);
	}

	return (
		<Draggable
			onMouseDown={() =>
				setCurrentTorch({
					...props,
					round: !!props.round,
				})
			}
			axis="both"
			defaultPosition={{ x, y }}
		>
			<div className={classList.join(' ')}></div>
		</Draggable>
	);
};

export { Torch };
