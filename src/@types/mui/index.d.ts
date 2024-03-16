import '@mui/material/styles/createPalette';
import '@mui/material/styles/createTheme';
import '@mui/material/Button';
import '@mui/material/Badge';

type TGradientType = {start: string; end: string};
type TShadowsType = {
	header: string;
	toolbar: string;
	login: string;
	customers: string;
};

declare module '@mui/material/styles/createPalette' {
	interface PaletteColor {
		gradient?: TGradientType;
	}

	interface SimplePaletteColorOptions {
		gradient?: TGradientType;
	}

	interface PaletteOptions {
		chat?: {
			private: string;
			admin: string;
			voyeur: string;
			group: string;
			message: {
				guest: {
					background: string;
				};
				model: {
					background: string;
				};
			};
			media: {
				preview: {
					backdrop: string;
				};
			};
		};
		light?: PaletteColorOptions;
		steel?: PaletteColorOptions;
		shadows?: TShadowsType;
	}

	interface Palette {
		light?: PaletteColor;
	}
}

declare module '@mui/material/styles/createTheme' {
	interface ThemeOptions {
		gradient: (gradient?: TGradientType) => string;
	}

	interface Theme {
		gradient: (gradient?: TGradientType) => string;
	}
}

declare module '@mui/material/Button' {
	interface ButtonPropsSizeOverrides {
		huge: true;
	}

	interface ButtonPropsColorOverrides {
		light: true;
	}

	interface ButtonClasses {
		sizeHuge: string;
		outlinedSizeHuge: string;
		textLight: string;
	}
}

declare module '@mui/material/ToggleButton' {
	interface ToggleButtonPropsSizeOverrides {
		tiny: true;
		huge: true;
	}
}

declare module '@mui/material/Checkbox' {
	interface CheckboxPropsSizeOverrides {
		tiny: true;
	}
}

declare module '@mui/material/Badge' {
	interface BadgePropsVariantOverrides {
		'online-status': true;
		'new-message': true;
		'new-chat': true;
		'unseen-count': true;
	}
}

declare module '@mui/material/Chip' {
	interface ChipPropsVariantOverrides {
		success: true;
		price: true;
	}
}
