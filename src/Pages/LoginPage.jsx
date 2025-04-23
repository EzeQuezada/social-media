import styled from "styled-components";
import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa"; // You'll need to install react-icons
import { useAuthStore } from "../store/AuthStore";

export const Login = () => {
  const { signInWithGoogle } = useAuthStore();

  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogle();
      console.log("Successfully logged in with Google");
    } catch (error) {
      console.error("Error logging in with Google:", error);
    }
  };

  return (
    <Container>
      <LoginCard>
        <h1>Login</h1>
        <LoginForm>
          <InputGroup>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" />
          </InputGroup>
          <InputGroup>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" />
          </InputGroup>
          <LoginButton type="button">Login</LoginButton>
          
          <Divider>
            <span>Or login with</span>
          </Divider>
          
          <SocialLoginContainer>
            <SocialButton 
              type="button"
              onClick={handleGoogleLogin} 
              color="#DB4437"
            >
              <FaGoogle />
              <span>Google</span>
            </SocialButton>
            <SocialButton 
              type="button"
              onClick={() => console.log("Facebook login not implemented")} 
              color="#4267B2"
            >
              <FaFacebook />
              <span>Facebook</span>
            </SocialButton>
            <SocialButton 
              type="button"
              onClick={() => console.log("Twitter login not implemented")} 
              color="#1DA1F2"
            >
              <FaTwitter />
              <span>Twitter</span>
            </SocialButton>
          </SocialLoginContainer>
        </LoginForm>
      </LoginCard>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const LoginCard = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  width: 100%;
  max-width: 400px;
  
  h1 {
    text-align: center;
    margin-bottom: 1.5rem;
    color: #333;
  }
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  
  label {
    font-size: 0.9rem;
    font-weight: 500;
  }
  
  input {
    padding: 0.75rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
    
    &:focus {
      outline: none;
      border-color: #4285f4;
    }
  }
`;

const LoginButton = styled.button`
  background-color: #4285f4;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.75rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  margin-top: 0.5rem;
  
  &:hover {
    background-color: #3367d6;
  }
`;

const Divider = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;
  
  &::before, &::after {
    content: "";
    flex: 1;
    border-bottom: 1px solid #ddd;
  }
  
  span {
    padding: 0 10px;
    color: #777;
    font-size: 0.9rem;
  }
`;

const SocialLoginContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
`;

const SocialButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: ${props => props.color || "#333"};
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.75rem;
  flex: 1;
  cursor: pointer;
  font-size: 0.9rem;
  
  &:hover {
    opacity: 0.9;
  }
`;
