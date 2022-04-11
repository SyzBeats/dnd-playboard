import React from 'react';
import { useAppCssState } from '../state';
import { Button } from './Button';
import { VscOpenPreview } from 'react-icons/vsc';

import classes from './preview.module.css';

const PreviewToggle = () => {
	const appCssState = useAppCssState(state => ({
		preview: state.previewMode,
		setPreviewMode: state.setPreviewMode,
	}));

	const handleTogglePreview = () => {
		appCssState.setPreviewMode(!appCssState.preview);
	};

	return (
		<span className={classes.toggle}>
			<Button clickHandler={() => handleTogglePreview()}>
				<VscOpenPreview size={'20px'} />
			</Button>
		</span>
	);
};

export { PreviewToggle };
