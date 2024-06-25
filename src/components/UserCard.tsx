import { User } from '@/types'

interface UserCardParams {
  user: User
}

export default function UserCard({ user }: UserCardParams) {
  return (
    <div className="block max-w-xl p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{user.name}</p>
      <p className="font-normal text-gray-700 dark:text-gray-400">{user.username}</p>
      <p className="font-normal text-gray-700 dark:text-gray-400">{user.email}</p>
    </div>
  )
}