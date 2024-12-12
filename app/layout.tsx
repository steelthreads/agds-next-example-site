import { JSX } from 'react';
import { AgDsWrapper } from './AgDsWrapper';

// export const metadata: Metadata = {
// 	title: 'Home',
// 	description: 'Welcome to Ag DS',
// };

export default function Layout({ children }: { children: JSX.Element }) {
	return (
		<html lang="en">
			<body>
				<AgDsWrapper>{children}</AgDsWrapper>
			</body>
		</html>
	);
}
