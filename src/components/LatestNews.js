import React from 'react';
import {latest_news} from '../assets/data';
import SingleNewsItem from './SingleNewsItem';

const LatestNews = () => {
  return (
    <aside className='news-latest'>
      <h2 className='news-latest__header'>New</h2>
      {latest_news.map((item) => <SingleNewsItem item={item} key={item.id}/>)}
    </aside>
  );
}

export default LatestNews
