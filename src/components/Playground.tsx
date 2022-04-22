import React from 'react';
import classes from './playground.module.css';
import { Torch } from './Torch';

import { useTorchState, useAppCssState } from '../state';

const Playground = () => {
	const { torches } = useTorchState(state => ({ torches: state.torches }));

	const appState = useAppCssState(state => ({
		previewMode: state.previewMode,
	}));

	return (
		<>
			<div className={classes.layer}>
				{torches.map(torch => {
					return <Torch id={torch.id} key={torch.id} x={torch.x} y={torch.y} round={torch.round} size={torch.size} />;
				})}
			</div>
			{!appState.previewMode && <div className={classes.playground} />}
		</>
	);
};

export { Playground };
