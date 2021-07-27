import create from 'zustand';
import {devtools} from 'zustand/middleware'

const useStore = create(devtools(set => ({
  signIn: false,
  userName: '',
  user_location: 'Select your address',
  locationBox: false,
  toggleSignIn: () => set(state => ({ signIn: !state.signIn })),
  setUserName: name => set(() => ({ userName: name })),
  setLocationBox: val => set(() => ({ locationBox: val })),
  setUserLocation: location => set(() => ({ user_location: location })),
})))

export default useStore;
