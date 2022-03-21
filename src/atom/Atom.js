import { atom } from "recoil";

const listPageReLoading = atom({
    key: 'listPageReLoading', 
    default: false,
  });
  
const focusNav = atom({
  key: 'focusNav', 
  default: "",
});

export { listPageReLoading, focusNav };