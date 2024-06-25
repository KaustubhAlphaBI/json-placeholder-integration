'use client';

import UserCard from './UserCard';
import { type Users } from '@/types';
import { useSearchContext } from '@/context/searchContext';

interface UserListParams {
	users: Users;
}

export default function UserList({ users }: UserListParams) {
	const queryParam = useSearchContext().q;

	if (users.length == 0) {
		return <div>No users found with the search term: {queryParam}</div>;
	}

	return (
		<div className='gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
			{users.map((user) => (
				<UserCard key={user.id} user={user} />
			))}
		</div>
	);
}
