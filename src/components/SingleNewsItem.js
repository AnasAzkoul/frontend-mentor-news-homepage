import React from 'react'; 
import { Link } from 'react-router-dom';

const SingleNewsItem = ({item}) => {
  return (
    <div className='news-item'>
      <h3 className='news-item__title'>
        <Link>{item.title}</Link>
      </h3>
      <p className='news-item__para'>{item.desc}</p>
    </div>
  );
}

export default SingleNewsItem
