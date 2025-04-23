// pages/CreatePostPage.jsx
import { useState, useEffect } from "react";
import { supabase } from "../supabase/supabaseClients";
import styled from "styled-components";

export const CreatePostPage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get the current user session
    const getUser = async () => {
      const { data: { session }, error } = await supabase.auth.getSession();
      
      if (error) {
        console.error("Error fetching user:", error);
      } else if (session) {
        setUser(session.user);
      }
      
      setLoading(false);
    };

    getUser();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!user) {
      alert("Debes iniciar sesión para crear una publicación");
      return;
    }
    
    const { error } = await supabase.from("posts").insert([
      {
        title,
        content,
        user_id: user.id,
      }
    ]);
    
    if (error) {
      alert("Error al crear publicación: ", error.message);
    } else {
      alert("¡Publicación creada!");
      setTitle("");
      setContent("");
    }
  };

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <h2>Crear una nueva publicación</h2>
      {!user && (
        <div className="error-message">
          Debes iniciar sesión para crear una publicación
        </div>
      )}
      <input
        type="text"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        disabled={!user}
      />
      <textarea
        placeholder="Contenido"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        disabled={!user}
      />
      <button type="submit" disabled={!user}>Publicar</button>
    </FormContainer>
  );
};

const FormContainer = styled.form`
  max-width: 600px;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  input, textarea {
    padding: 1rem;
    font-size: 1rem;
    border-radius: 6px;
    border: 1px solid #ddd;
  }

  button {
    background: #f00;
    color: white;
    padding: 0.75rem;
    border: none;
    font-size: 1rem;
    border-radius: 6px;
    cursor: pointer;
    
    &:disabled {
      background: #ccc;
      cursor: not-allowed;
    }
  }
  
  .error-message {
    color: #f00;
    padding: 0.5rem;
    background-color: #ffeeee;
    border-radius: 4px;
    text-align: center;
  }
`;
