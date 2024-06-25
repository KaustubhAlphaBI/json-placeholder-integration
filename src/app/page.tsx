'use client';

import UserList from '@/components/UserList';
import { useSearchContext } from '@/context/searchContext';
import { userContext } from '@/context/userContext';
import { useEffect } from 'react';

export default function Home() {
	const data = userContext((p) => p.users);
	const queryParam = useSearchContext((d) => d.q);
	const fetchUserBasedOnQueryParam = userContext(
		(partial) => partial.fetchUserBasedOnQueryParam
	);

	useEffect(() => {
		fetchUserBasedOnQueryParam(queryParam);
	}, [fetchUserBasedOnQueryParam, queryParam]);

	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-4 md:p-16 lg:p-24'>
			<UserList users={data as any} />
		</main>
	);
}
