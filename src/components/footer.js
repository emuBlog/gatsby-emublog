import * as React from 'react';
import { useStaticQuery, graphql,Link } from 'gatsby';
import * as styles from './styles/footer.module.css'
import './styles/global.css'

const Footer = () => {
  const data = useStaticQuery(
    graphql`
      query{
        site{
          siteMetadata{
            author{
              name
            }
          }
        }
      }
    `
  );
  return (
    <footer>
      <div className={styles.footer}>
        <div className={styles.notes}>
          <ul>
            <li><Link to="/privacypolicy">プライバシーポリシー</Link></li>
            <li><Link to="/disclaimer">免責事項</Link></li>
            <li></li>
          </ul>
        </div>
        © {data.site.siteMetadata.author.name} {new Date().getFullYear()}
      </div>
    </footer>
  );
};

export default Footer;