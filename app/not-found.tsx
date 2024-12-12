'use client';

import { H1 } from '@ag.ds-next/react/heading';
import { Text } from '@ag.ds-next/react/text';
import { PageContent } from '@ag.ds-next/react/content';
import { AppLayout } from '../components/AppLayout';
import { DocumentTitle } from '../components/DocumentTitle';

function NotFoundPage() {
	return (
		<>
			<DocumentTitle title="Error 404" />
			<AppLayout>
				<PageContent>
					<H1>Error 404</H1>
					<Text as="p">We could not find this page.</Text>
				</PageContent>
			</AppLayout>
		</>
	);
}

export default NotFoundPage;
