import React from 'react';
import { useBareerState } from '../state';
import { Bareer } from './Bareer';
import classes from './bareer.module.css';

const BareerLayer = () => {
	const bareerState = useBareerState(state => ({
		bareers: state.bareeres,
	}));

	return (
		<section className={classes.layer}>
			{bareerState.bareers.map(bareer => (
				<Bareer x={bareer.x} y={bareer.y} key={bareer.id} id={bareer.id} round={bareer.round} size={bareer.size} />
			))}
		</section>
	);
};

export { BareerLayer };
