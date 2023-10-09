import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import * as styles from "./styles/bio.module.css";

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
          }
          description
        }
      }
    }
  `);

  const { author } = data.site.siteMetadata;
  const { description } = data.site.siteMetadata;
  return (
    <div className={styles.bio}>
      <h3 className={styles.bio__title}>
        <FontAwesomeIcon icon={faUserCircle} /> プロフィール
      </h3>

      <p className={styles.bio__name}>
        Written by <strong>{author.name}</strong>
      </p>
      <p className={styles.bio__description}>{description}</p>

      <div className={styles.bio__icon_wrapper}>
        <a className={styles.bio__icon} href="https://twitter.com/emu_engineer">
          <img
            className={styles.bio__icon_image}
            alt="Twitter"
            src="https://img.shields.io/badge/twitter-%231DA1F2.svg?&style=for-the-badge&logo=twitter&logoColor=white"
          />
        </a>
        <a className={styles.bio__icon} href="https://www.instagram.com/panpea.em/?next=%2F">
          <img
            className={styles.bio__icon_image}
            alt="Github"
            src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white"
          />
        </a>
        {/* <a className={styles.bio__icon} href="https://qiita.com/rpf-nob">
          <img
            className={styles.bio__icon_image}
            alt="Qiita"
            src="https://img.shields.io/badge/qiita-55C500.svg?&style=for-the-badge&logo=qiita&logoColor=white"
          />
        </a>
        <a className={styles.bio__icon} href="https://zenn.dev/rpf_nob">
          <img
            className={styles.bio__icon_image}
            alt="Zenn"
            src="https://img.shields.io/badge/Zenn-3EA8FF.svg?&style=for-the-badge&logo=Zenn&logoColor=white"
          />
        </a> */}
      </div>
    </div>
  );
};

export default Bio;