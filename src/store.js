import create from 'zustand';

const useStore = create(set => ({
    signIn : false,
    userName : '',
    toggleSignIn : () => set((state) => ({signIn : !state.signIn})),
    setUserName: (name) => set(() => ({userName : name}))

}))

export default useStore