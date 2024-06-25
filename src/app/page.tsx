'use client';

import axios from '@/libs/axios';
import { useCallback, useEffect } from 'react';
import Loading from '@/components/Loading';
import UserList from '@/components/UserList';
import { useSearchContext } from '@/context/searchContext';
import { userContext } from '@/context/userContext';
import toast from 'react-hot-toast';

export default function Home() {
	const data = userContext((p) => p.users);
	const loading = userContext((p) => p.loading);
	const queryParam = useSearchContext((d) => d.q);
	const setUser = userContext((p) => p.setUsers);

	const fetchUserBasedOnQueryParam = useCallback(
		async (queryParam: string) => {
			try {
				const response = await axios.get('/users', {
					params: { q: queryParam },
				});

				setUser(response.data);
			} catch (err) {
				setUser([]);
				toast.error('Something went wrong');
			}
		},
		[setUser]
	);

	useEffect(() => {
		fetchUserBasedOnQueryParam(queryParam);
	}, [fetchUserBasedOnQueryParam, queryParam]);

	if (loading) {
		return (
			<main className='flex min-h-screen flex-col items-center justify-center p-4 md:p-16 lg:p-24 w-full'>
				<Loading />
			</main>
		);
	}

	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-4 md:p-16 lg:p-24'>
			<UserList users={data as any} />
		</main>
	);
}
