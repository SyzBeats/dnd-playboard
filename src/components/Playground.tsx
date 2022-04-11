import React, { useState } from 'react';
import classes from './playground.module.css';
import { Torch } from './Torch';

import { useTorchState } from '../state';

const Playground = () => {
	const torches = useTorchState(state => state.torches);

	return (
		<div>
			<div className={classes.layer}>
				{torches.map(torch => (
					<Torch id={torch.id} key={torch.id} x={torch.x} y={torch.y} round={torch.round} size={torch.size} />
				))}
			</div>
			<div className={classes.playground} />
		</div>
	);
};

export { Playground };
