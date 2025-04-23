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
    <PostContainer>
      {posts.map((post) => (
        <PostCard key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </PostCard>
      ))}
    </PostContainer>
  );
};



const PostContainer = styled.div`
  padding: 2rem;
  display: grid;
  gap: 1rem;
`;

const PostCard = styled.div`
  background: #fff;
  padding: 1rem;
  border-radius: 6px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
`;
