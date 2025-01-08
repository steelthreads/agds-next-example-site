import { JSX } from 'react';
import { AgDSWrapper } from './AgDSWrapper';
import { Metadata } from 'next';
import { RootStyleRegistry } from './RootStyleRegistry';

export const metadata: Metadata = {
	title: 'Home | Agriculture Design System',
	description: 'Welcome to Ag DS',
};

export default function Layout({ children }: { children: JSX.Element }) {
	return (
		<html lang="en">
			<body>
				<RootStyleRegistry>
					<AgDSWrapper>{children}</AgDSWrapper>
				</RootStyleRegistry>
			</body>
		</html>
	);
}
