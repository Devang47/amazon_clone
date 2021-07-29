import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

const useAuthStore = create(
  persist(
    devtools(set => ({
      user: null,
      user_location: 'Select your address',
      signIn: user => set(() => ({ user })),
      setUserLocation: location => set(() => ({ user_location: location })),
    })),
  ),
);

export default useAuthStore;
