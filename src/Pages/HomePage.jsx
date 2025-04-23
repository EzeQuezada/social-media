// pages/HomePage.jsx
import { useEffect, useState } from "react";
import { supabase } from "../supabase/supabaseClients";
import styled from "styled-components";

export const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      let { data, error } = await supabase.from("posts").select("*");
      if (!error) setPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <PageContainer>
      <Header>
        <h1>Social Media Feed</h1>
      </Header>
      <PostContainer>
        {posts.length === 0 ? (
          <EmptyState>No hay publicaciones disponibles</EmptyState>
        ) : (
          posts.map((post) => (
            <PostCard key={post.id}>
              <PostHeader>
                <Avatar>
                  {post.author ? post.author.charAt(0).toUpperCase() : "U"}
                </Avatar>
                <AuthorInfo>
                  <AuthorName>{post.author || "Usuario"}</AuthorName>
                  <PostDate>{formatDate(post.created_at)}</PostDate>
                </AuthorInfo>
              </PostHeader>
              <PostTitle>{post.title}</PostTitle>
              <PostContent>{post.content}</PostContent>
              <PostFooter>
                <ActionButton>
                  <i className="far fa-heart"></i> Me gusta
                </ActionButton>
                <ActionButton>
                  <i className="far fa-comment"></i> Comentar
                </ActionButton>
                <ActionButton>
                  <i className="far fa-share-square"></i> Compartir
                </ActionButton>
              </PostFooter>
            </PostCard>
          ))
        )}
      </PostContainer>
    </PageContainer>
  );
};

// Función auxiliar para formatear fechas
const formatDate = (dateString) => {
  if (!dateString) return "Fecha desconocida";
  const date = new Date(dateString);
  return date.toLocaleDateString('es-ES', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
};

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 2rem;
  
  h1 {
    color: #333;
    font-size: 2.5rem;
  }
`;

const PostContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  padding: 1rem;
`;

const EmptyState = styled.div`
  grid-column: 1 / -1;
  text-align: center;
  padding: 3rem;
  background: #f9f9f9;
  border-radius: 8px;
  font-size: 1.2rem;
  color: #666;
`;

const PostCard = styled.div`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }
`;

const PostHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #f0f0f0;
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #3498db;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin-right: 0.8rem;
`;

const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const AuthorName = styled.span`
  font-weight: bold;
  color: #333;
`;

const PostDate = styled.span`
  font-size: 0.8rem;
  color: #888;
`;

const PostTitle = styled.h3`
  padding: 0.8rem 1rem 0;
  margin: 0;
  color: #333;
  font-size: 1.3rem;
`;

const PostContent = styled.p`
  padding: 0.5rem 1rem 1rem;
  color: #555;
  line-height: 1.5;
`;

const PostFooter = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 0.8rem;
  border-top: 1px solid #f0f0f0;
  background-color: #f9f9f9;
`;

const ActionButton = styled.button`
  background: none;
  border: none;
  color: #666;
  font-size: 0.9rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.5rem;
  border-radius: 4px;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #eaeaea;
    color: #3498db;
  }
  
  i {
    font-size: 1rem;
  }
`;
