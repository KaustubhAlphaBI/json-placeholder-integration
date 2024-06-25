import axios from '@/libs/axios';
import { create } from 'zustand';
import { z } from 'zod';
import { userSchema } from '@/validators/userSchema';

type User = z.infer<typeof userSchema>[]

interface UserContext {
  users: User[],
  loading: boolean,
  setUsers: (users: User[]) => void
  fetchUserBasedOnQueryParam: (query: string) => void
}

export const userContext = create<UserContext>((set, ) => ({
  users: [],
  loading: true,
  setUsers: (users) => set({ users, loading: false }),
  fetchUserBasedOnQueryParam: async (query) => {
    try {
      set({ loading: true, users: [] })
  
      const response = await axios.get('/users', {
        params: { q: query }
      })
  
      set({loading: false, users: response.data})
    } catch (err) {
      console.log("error")
    }
  }
}))
