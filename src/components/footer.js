import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import {footer} from './styles/footer.module.css'
import './styles/global.css'
import {Helmet} from "react-helmet";

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
      <Helmet>
      <meta name="viewport" content="width=device-width,initial-scale=1"/>
      </Helmet>
      <div className={footer}>© {data.site.siteMetadata.Author} {new Date().getFullYear()}</div>
    </footer>
  );
};

export default Footer;