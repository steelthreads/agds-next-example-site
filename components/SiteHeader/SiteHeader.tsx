'use client';

import { usePathname } from 'next/navigation';
import { Logo } from '@ag.ds-next/react/ag-branding';
import { Stack } from '@ag.ds-next/react/stack';
import { Header } from '@ag.ds-next/react/header';
import { MainNav } from '@ag.ds-next/react/main-nav';

const NAV_LINKS = [{ label: 'Home', href: '/' }];

export const SiteHeader = () => {
	const pathname = usePathname();

	return (
		<Stack palette="dark">
			<Header
				background="bodyAlt"
				logo={<Logo />}
				heading="Agriculture Design System"
				subline="Design System for the Export Service"
				badgeLabel="Beta"
			/>
			<MainNav
				id="main-nav"
				items={NAV_LINKS}
				activePath={pathname}
				secondaryItems={[
					{
						label: 'Github',
						href: 'https://github.com/agriculturegovau/agds-next-starter-kit',
					},
				]}
			/>
		</Stack>
	);
};
