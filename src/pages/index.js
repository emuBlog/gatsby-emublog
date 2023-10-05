import * as React from 'react';
import Layout from '../components/layout';
import PostList  from '../components/postlist'
import Seo from '../components/seo';

const IndexPage = ({data}) => {
  return (
    <Layout>
      <PostList />
      
    </Layout>
    
  );
};


export default IndexPage;

export const Head = () => <Seo/>