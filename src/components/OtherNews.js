import React from 'react'; 
import {other_news} from '../assets/data'; 
import SingleOtherNewsItem from './SingleOtherNewsItem';

const OtherNews = () => {
  return (
    <section className='section-other-news section-padding-m padding-bottom-m'>
      <div className='container'>
        <div className='flex'>
          {other_news.map((item, index) => (
            <SingleOtherNewsItem item={item} key={item.id} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default OtherNews
