import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

const useStore = create(
  persist(
    devtools(set => ({
      user: null,
      user_location: 'Select your address',
      signIn: user => set(() => ({ user })),
      setUserLocation: location => set(() => ({ user_location: location })),
    })),
    {name : 'userdata'}
  ),
);

export default useStore;
