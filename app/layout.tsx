import { JSX } from 'react';
import { AgDSWrapper } from './AgDSWrapper';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Home | Agriculture Design System',
	description: 'Welcome to Ag DS',
};

export default function Layout({ children }: { children: JSX.Element }) {
	return (
		<html lang="en">
			<body>
				<AgDSWrapper>{children}</AgDSWrapper>
			</body>
		</html>
	);
}
