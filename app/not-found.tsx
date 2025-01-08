import { H1 } from '@ag.ds-next/react/heading';
import { Text } from '@ag.ds-next/react/text';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Page not found | Agriculture Design System',
	description: 'This page does not exist',
};

export default function NotFoundPage() {
	return (
		<>
			<H1>Error 404</H1>
			<Text as="p">We could not find this page.</Text>
		</>
	);
}
