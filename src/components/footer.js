import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import {footer} from './styles/footer.module.css'
import './styles/global.css'

const Footer = () => {
  const data = useStaticQuery(
    graphql`
      query{
        site{
          siteMetadata{
            Author
          }
        }
      }
    `
  );
  return (
    <footer>
      <div className={footer}>© {data.site.siteMetadata.Author} {new Date().getFullYear()}</div>
    </footer>
  );
};

export default Footer;