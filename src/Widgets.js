import React from 'react';
import './Widgets.css';
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className='widgets_article'>
            <div className='widgets_articleLeft'>
                <FiberManualRecordIcon />
            </div>
            <div className='widgets_articleRight'>
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    );
  return (
    <div className='widgets'>
      <div className='widgets_header'>
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle('RERIT wins award for best Innovation', 'Top-news - 9998 readers' )}
      {newsArticle('React: The best javaScript framework', 'Top-news - 9009 readers' )}
      {newsArticle('Software Enginerring: Tech news', 'Top-news - 7998 readers' )}
      {newsArticle('Why Redux', 'Top-news - 4808 readers' )}
      {newsArticle('The fire in firebase', 'Top-news - 998 readers' )}
      {newsArticle('Health is wealth', 'Top-news - 277 readers' )}
    </div>
  )
}

export default Widgets
