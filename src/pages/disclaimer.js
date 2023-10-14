import * as React from 'react';
import Layout from '../components/layout';

const _ = require("lodash")

const Disclaimer = () => {
  return (
    <Layout>
      {/* <GatsbyImage image={image} alt="Hero Image" /> */}
      <h1 className='pagetitle'>免責事項</h1>
      <div className='body'>
      当ブログからのリンクやバナーなどで移動したサイトで提供される情報、サービス等について一切の責任を負いません。<br/><br/>
      また当ブログのコンテンツ・情報について、できる限り正確な情報を提供するように努めておりますが、正確性や安全性を保証するものではありません。情報が古くなっていることもございます。<br/><br/>
      当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。<br/>
      </div>      
    </Layout>
  );
};

export default Disclaimer;