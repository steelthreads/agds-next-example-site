import { JSX } from 'react';
import { AgDsWrapper } from './AgDsWrapper';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Home | Agriculture Design System',
	description: 'Welcome to Ag DS',
};

export default function Layout({ children }: { children: JSX.Element }) {
	return (
		<html lang="en">
			<body>
				<AgDsWrapper>{children}</AgDsWrapper>
			</body>
		</html>
	);
}
