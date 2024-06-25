import { create } from 'zustand';

interface SearchContext {
  q: string,
  setQuery: (query: string) => void
}

export const useSearchContext = create<SearchContext>((set) => ({
  q: "",
  setQuery: (query) => set({ q: query })
}))
