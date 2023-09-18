import * as React from 'react';
import Header from './header';
import Footer from './footer';
import Sidebar from './sidebar';

import './styles/global.css'

const Layout = ({ children }) => {
  return (
    <div>
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