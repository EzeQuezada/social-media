// pages/CreatePostPage.jsx
import { useState } from "react";
import { supabase } from "../supabase/supabaseClients";
import styled from "styled-components";

export const CreatePostPage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.from("posts").insert([
      { title, content }
    ]);
    if (error) {
      alert("Error al crear publicación");
    } else {
      alert("¡Publicación creada!");
      setTitle("");
      setContent("");
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <h2>Crear una nueva publicación</h2>
      <input
        type="text"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Contenido"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">Publicar</button>
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
  }
`;
