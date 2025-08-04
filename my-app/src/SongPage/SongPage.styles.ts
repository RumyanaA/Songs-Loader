import styled from 'styled-components';
import bgImage from '../assets/background.png';

export const BackgroundWrapper = styled.div`
  background-image: url(${bgImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
`;

export const Page = styled.div`
padding:24px;
display: flex;
justify-content: flex-start;
gap:140px;
`
