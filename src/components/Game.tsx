import React from 'react';
import { BareerLayer } from './BareerLayer';
import Controller from './Controller';
import { Playground } from './Playground';

const Game = () => {
	return (
		<main>
			<Playground />
			<BareerLayer />
			<Controller />
		</main>
	);
};

export { Game };
