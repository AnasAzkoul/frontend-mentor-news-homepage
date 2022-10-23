import React from 'react'; 
import web3 from '../assets/images/image-web-3-desktop.jpg'; 
import { Link } from 'react-router-dom';

const NewsPrimary = () => {
  return (
    <article className='news-primary'>
      
      <figure className='news-primary__img'>
        <img src={web3} alt='' />
      </figure>
      
      <h1 className='primary-heading col-1-to-4'>
        The bright future of web 3.0?
      </h1>
      
      <div className='news-description col-5-to-10'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
          distinctio accusamus dolore voluptates voluptatibus blanditiis dicta
          soluta quae ea fuga. Accusantium earum mollitia hic culpa ullam rerum
          odio repellat suscipit?
        </p>
        <Link className='btn-primary primary-link'>Read More</Link>
      </div>
      
    </article>
  );
}

export default NewsPrimary
