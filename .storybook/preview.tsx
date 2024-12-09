import { Preview } from '@storybook/react';
import { Core } from '@ag.ds-next/react/core';
import { Box } from '@ag.ds-next/react/box';
import { theme } from '@ag.ds-next/react/ag-branding';

export const parameters = {
	actions: {},
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};

const preview: Preview = {
	parameters,
	decorators: [
		(Story, context) => {
			const palette = context.globals.palette;
			return (
				<Core theme={theme}>
					<Box
						width="100%"
						minHeight="100vh"
						palette={palette}
						background="body"
					>
						<Story />
					</Box>
				</Core>
			);
		},
	],
};

export default preview;
