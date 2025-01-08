'use client';

import { ReactNode } from 'react';
import { theme } from '@ag.ds-next/react/ag-branding';
import { Core } from '@ag.ds-next/react/core';
import { PageContent } from '@ag.ds-next/react/content';
import { AppLayout } from '../components/AppLayout';
import { LinkComponent } from '../components/LinkComponent';

export const AgDSWrapper = ({ children }: { children: ReactNode }) => {
	return (
		<Core theme={theme} linkComponent={LinkComponent}>
			<AppLayout>
				<PageContent>{children}</PageContent>
			</AppLayout>
		</Core>
	);
};
