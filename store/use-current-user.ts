import { User } from "@/libs/auth";
import { create } from "zustand";

interface CurrentUser {
  currentUser: User | null;
  setCurrentUser: (user: User) => void;
  clearCurrentUser: () => void;
}

function getUserFromLocalStorage(): User | null {
  if (typeof window !== "undefined") {
    const user = localStorage.getItem("currentUser");
    return user ? JSON.parse(user) : null;
  }
  return null;
}

const useCurrentUser = create<CurrentUser>((set) => ({
  currentUser: getUserFromLocalStorage(),
  setCurrentUser: (user: User) => {
    localStorage.setItem("currentUser", JSON.stringify(user));
    set({ currentUser: user });
  },
  clearCurrentUser: () => {
    localStorage.removeItem("currentUser");
    set({ currentUser: null });
  },
}));

export default useCurrentUser;
