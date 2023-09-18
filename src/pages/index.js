import * as React from 'react';
import Layout from '../components/layout';
import PostList  from '../components/postlist'

const IndexPage = ({data}) => {
  return (
    <Layout>
      <PostList />
      
    </Layout>
    
  );
};


export default IndexPage;