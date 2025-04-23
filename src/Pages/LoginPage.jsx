import styled, { keyframes } from "styled-components";
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
      <LoginWrapper>
        <ImageSection>
          <AnimatedImage src="https://img.freepik.com/free-vector/social-media-network-concept-illustration_114360-1119.jpg" alt="Social Media Illustration" />
          <ImageOverlay>
            <h2>Connect with us</h2>
            <p>Join our community and stay connected</p>
          </ImageOverlay>
        </ImageSection>
        
        <LoginCard>
          <h1>Login</h1>
          <LoginForm>    
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
                color="#3b5998"
              >
                <FaFacebook />
                <span>Facebook</span>
              </SocialButton>
              
              <SocialButton 
                type="button"
                color="#1DA1F2"
              >
                <FaTwitter />
                <span>Twitter</span>
              </SocialButton>
            </SocialLoginContainer>
          </LoginForm>
        </LoginCard>
      </LoginWrapper>
    </Container>
  );
};

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const float = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 1rem;
`;

const LoginWrapper = styled.div`
  display: flex;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 900px;
  height: 550px;
  background-color: white;
  
  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

const ImageSection = styled.div`
  flex: 1;
  position: relative;
  overflow: hidden;
  background-color: #4285f4;
  
  @media (max-width: 768px) {
    height: 200px;
  }
`;

const AnimatedImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  animation: ${float} 6s ease-in-out infinite;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
  color: white;
  animation: ${fadeIn} 1s ease-out;
  
  h2 {
    margin: 0 0 0.5rem;
    font-size: 1.8rem;
  }
  
  p {
    margin: 0;
    font-size: 1rem;
    opacity: 0.9;
  }
`;

const LoginCard = styled.div`
  flex: 1;
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  animation: ${fadeIn} 0.8s ease-out;
  
  h1 {
    text-align: center;
    margin-bottom: 1.5rem;
    color: #333;
    font-size: 2rem;
  }
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
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
      box-shadow: 0 0 0 2px rgba(66, 133, 244, 0.2);
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
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #3367d6;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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
  gap: 0.8rem;
  
  @media (max-width: 480px) {
    flex-direction: column;
  }
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
  transition: all 0.3s ease;
  
  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  svg {
    font-size: 1.2rem;
  }
`;
