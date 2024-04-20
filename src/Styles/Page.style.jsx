import styled, { css } from 'styled-components';

// Colors and media sizes setup
const colors = {
    background: '#1C1C1C',
    textColor: '#FFFFFF',
    buttonBg: '#333333',
    buttonHover: '#edb818',
    primary: '#edb818',
};

const sizes = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
};

const media = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
    @media (min-width: ${sizes[label]}) {
      ${css(...args)}
    }
  `;
    return acc;
}, {});

// Styled components
export const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${colors.background};
  font-family: 'Rubik', sans-serif;
  min-height: 100vh;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  color: ${colors.textColor};

  ${media.tablet`
    padding: 40px;
  `}
`;

export const ProfilePic = styled.img`
  border-radius: 50%;
  width: 120px;
  height: 120px;
  margin-bottom: 16px;
  border: 5px solid ${colors.primary};
`;

export const Company = styled.h1`
  color: ${colors.primary};
  margin-bottom: 8px;
  font-size: 2rem;
 font-family: "Lexend Mega", sans-serif;
  font-optical-sizing: auto;
  font-weight: 900;
  font-style: normal;
  text-align: center;

  ${media.tablet`
    font-size: 2.5rem;
  `}
`;

export const Tagline = styled.h2`
  color: ${colors.textColor};
  font-weight: normal;
  text-align: center;
  margin-bottom: 24px;
  padding: 0 5%;
  font-size: 1rem;

  ${media.tablet`
    font-size: 1.25rem;
  `}
`;
// Wrapper for icons to add more styling and interaction
export const IconLink = styled.a`
  color: inherit;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px; // Adds space between icon and text
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1); // Enlarge icons a bit on hover
  }
`;
export const IconWrapper = styled.div`
  // If you want a special styling for icons wrapper
  display: grid;
  justify-content: space-evenly;
  width: 100%;
  margin-bottom: 1rem;
`;


export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 24px;

  && > a {
    margin: 0 8px;
    color: ${colors.textColor};
    text-decoration: none;

    &:hover {
      color: ${colors.buttonHover};
    }
  }
`;

export const ButtonLinks = styled.a`
  background-color: ${colors.buttonBg};
  color: ${colors.textColor};
  text-decoration: none;
  padding: 10px 20px;
  margin: 8px 0;
  text-align: center;
  width: 90%;
   min-width: 320px;
  border-radius: 25px;
  box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out, transform 0.3s ease;

  &:hover {
    background-color: ${colors.buttonHover};
    color: ${colors.background};
    transform: translateY(-2px);
  }&:active {
    background-color: #ff0000c9;
    color: ${colors.background};
    transform: translateY(-2px);
  }
`;

export const Footer = styled.footer`
  color: ${colors.textColor};
  font-size: 0.75rem;
  margin-top: auto;
  text-align: center;
  padding: 20px;
  width: 100%;

  ${media.tablet`
    font-size: 1rem;
  `}
`;
