import create from 'zustand'

const useStore = create((set) => ({
  currentAccount: "all",
  writeWriteup: false,
  detailWriteups: "",
  setCurrentAccount: (value) => set({currentAccount: value}),
  setWriteWriteup: (value) => set({writeWriteup: value}),
  setDetailWriteups: (value) => set({detailWriteups: value}),
}))

export default useStore;