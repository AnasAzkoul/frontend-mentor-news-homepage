import React from 'react'; 
import NewsPrimary from './NewsPrimary';
import LatestNews from './LatestNews';


const NewsMain = () => {
  return (
    <section className='section-news-main section-padding-m'>
      <div className='container'>
        <div className='page-grid'>
          <NewsPrimary />
          <LatestNews />
        </div>
      </div>
    </section>
  );
}

export default NewsMain
