import React from 'react'

const SingleOtherNewsItem = ({item, index}) => {
  return (
    <article className='other-news-item'>
      <figure className='other-news-item__img'>
        <img src={item.img} alt={item.title} />
      </figure>

      <div className='other-news-item__info'>
        <p className='news_num'>0{index + 1}</p>
        <h4 className='title'>{item.title}</h4>
        <p className='desc'>{item.desc}</p>
      </div>
    </article>
  );
}

export default SingleOtherNewsItem
