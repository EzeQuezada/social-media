
import { create } from "zustand";
import { supabase } from "../supabase/supabaseClients";

export const useAuthStore = create((send) => ({
  isAuth: false,
  signInWithGoogle: async () => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
      });
      if (error)
        throw new Error("A ocurrido un error durante la autenticación");
      set({ isAuth: true });
      return data;

    } catch (error) {}

  },
  signOut: async()=>{
    const { error} = await supabase.auth.signOut();
    set({isAuth: false})
    if (error)
        throw new Error("A ocurrido un error durante el cierre de sesion");
  },
}));