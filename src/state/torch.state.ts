import { Torch } from '../types/interfaces';

/**
 *
 * @param torch the current torch
 */
const getIncreasedTorchSize = (torch: Torch) => {
	switch (torch.size) {
		case 'tiny': {
			return { ...torch, size: 'small' };
		}

		case 'small': {
			return { ...torch, size: 'medium' };
		}

		case 'medium': {
			return { ...torch, size: 'big' };
		}

		case 'big': {
			return { ...torch, size: 'large' };
		}

		case 'large': {
			return { ...torch, size: 'small' };
		}

		default: {
			return { ...torch };
		}
	}
};

const getDecreasedTorchSize = (torch: Torch) => {
	switch (torch.size) {
		case 'tiny': {
			return { ...torch, size: 'large' };
		}

		case 'small': {
			return { ...torch, size: 'tiny' };
		}

		case 'medium': {
			return { ...torch, size: 'small' };
		}

		case 'big': {
			return { ...torch, size: 'medium' };
		}

		case 'large': {
			return { ...torch, size: 'big' };
		}

		default: {
			return { ...torch };
		}
	}
};

export default { getIncreasedTorchSize, getDecreasedTorchSize };
