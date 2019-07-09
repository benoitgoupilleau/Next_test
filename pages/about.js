import styled from 'styled-components';

import Layout from '../components/Layout';

const ImageWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  div {
    max-width: 450px;
  }

  img {
    padding: 0 5px;
  }
`;

export default () => (
  <Layout>
    <h1>About</h1>
    <p>This boilerplate uses Nextjs, React v16.8 and Styled components</p>
    <ImageWrapper>
      <div>
        <img src="/static/jslogo.png" alt="js" height="150px" />
        <img src="/static/react.png" alt="js" height="150px" />
        <img src="/static/nextjs.png" alt="js" height="150px" />
        <img src="/static/styled.png" alt="js" height="150px" />
      </div>
    </ImageWrapper>
  </Layout>
);
