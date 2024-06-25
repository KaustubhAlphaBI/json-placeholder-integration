'use client';

import { useEffect } from 'react';
import UserCard from './UserCard';
import { type Users } from '@/types';
import { useSearchContext } from '@/context/searchContext';
import { userContext } from '@/context/userContext';

interface UserListParams {
	users: Users;
}

export default function UserList({ users }: UserListParams) {
	return (
		<div className='gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
			{users.map((user) => (
				<UserCard key={user.id} user={user} />
			))}
		</div>
	);
}
