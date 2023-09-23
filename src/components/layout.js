import * as React from 'react';
import Header from './header';
import Footer from './footer';
import Sidebar from './sidebar';
import {Helmet} from "react-helmet";

import './styles/global.css'

const Layout = ({ children }) => {
  return (
    <div>
      <Helmet>
      <meta name="viewport" content="width=device-width,initial-scale=1"/>
      </Helmet>
      <Header />
      <div className = 'main'>
        <div className='contents'>
          {children}
        </div>
        <div className='sidebar'> 
        <Sidebar />
        </div>
        
      </div>
      
      
      <Footer />
    </div>
  );
};

export default Layout;