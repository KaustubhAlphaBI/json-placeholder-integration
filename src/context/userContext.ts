import axios from '@/libs/axios';
import { create } from 'zustand';
import { z } from 'zod';
import { userSchema } from '@/validators/userSchema';

type User = z.infer<typeof userSchema>[]

interface UserContext {
  users: User[]
  setUsers: (users: User[]) => void
  fetchUserBasedOnQueryParam: (query: string) => void
}

export const userContext = create<UserContext>((set) => ({
  users: [],
  setUsers: (users) => set({ users }),
  fetchUserBasedOnQueryParam: async (query) => {
    const users = await axios.get('/users', {
      params: { q: query }
    })

    set({ users: users.data })
  }
}))
