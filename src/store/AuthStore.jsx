import { create } from "zustand";
import { supabase } from "../supabase/supabaseClients";

export const useAuthStore = create((set) => ({
  isAuth: false,
  user: null,

  signInWithGoogle: async () => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
      });

      if (error) throw new Error("Ha ocurrido un error durante la autenticación");

      // No devuelve el usuario inmediatamente, lo buscamos después
      const { data: userData } = await supabase.auth.getUser();
      set({ isAuth: true, user: userData.user });

      return userData.user;
    } catch (error) {
      console.error(error.message);
    }
  },

  fetchUser: async () => {
    const { data: userData } = await supabase.auth.getUser();
    if (userData?.user) {
      set({ isAuth: true, user: userData.user });
    }
  },

  signOut: async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw new Error("Error durante el cierre de sesión");

    set({ isAuth: false, user: null });
  },
}));
