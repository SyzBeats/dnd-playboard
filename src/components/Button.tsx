import React from 'react';
import classes from './button.module.css';

interface Props {
	children: React.ReactNode;
	clickHandler: () => void;
}

const Button = ({ children, clickHandler }: Props) => {
	return (
		<button onClick={clickHandler} className={classes.button}>
			{children}
		</button>
	);
};

export { Button };
