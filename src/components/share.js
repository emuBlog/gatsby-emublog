import React from "react"
import { 
    FacebookShareButton, 
    FacebookIcon, 
    LineShareButton, 
    LineIcon,
    LinkedinShareButton, 
    LinkedinIcon,
    TwitterShareButton,
    TwitterIcon
  } from 'react-share';
  
  // SNSシェアボタンセクション
  // title : 記事タイトル
  // articleUrl : 記事URL
  const Share = ({title
  , articleUrl}) => {
    return (
      <div>
        <FacebookShareButton url={articleUrl}>
          <FacebookIcon size={50} round />
        </FacebookShareButton>
  
        <LineShareButton url={articleUrl} >
          <LineIcon size={50} round />
        </LineShareButton>
  
        {/* <LinkedinShareButton url={articleUrl} >
          <LinkedinIcon title={title} size={50} round />
        </LinkedinShareButton> */}
  
        <TwitterShareButton title={title} via="@inouetakumon" url={articleUrl} >
          <TwitterIcon size={50} round />
        </TwitterShareButton>
      </div>
    )
  }
  export default Share ;