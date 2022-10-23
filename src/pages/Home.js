import React from 'react'; 
import Header from '../components/Header';
import NewsMain from '../components/NewsMain';
import OtherNews from '../components/OtherNews';


const Home = () => {
  return (
    <>
      <Header />
      <main>
        <NewsMain />
        <OtherNews />
      </main>
    </>
  )
}

export default Home
