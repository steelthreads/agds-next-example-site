'use client';

import { ReactNode } from 'react';
import { RootStyleRegistry } from './RootStyleRegistry';
import { Core } from '@ag.ds-next/react/core';
import { AppLayout } from '../components/AppLayout';
import { PageContent } from '@ag.ds-next/react/content';
import { theme } from '@ag.ds-next/react/ag-branding';
import { LinkComponent } from '../components/LinkComponent';

export const AgDSWrapper = ({ children }: { children: ReactNode }) => {
	return (
		<RootStyleRegistry>
			<Core theme={theme} linkComponent={LinkComponent}>
				<AppLayout>
					<PageContent>{children}</PageContent>
				</AppLayout>
			</Core>
		</RootStyleRegistry>
	);
};
