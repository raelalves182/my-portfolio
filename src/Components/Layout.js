import React from 'react';
import Rael from '../Assets/rael.jpg';

const Layout = () => {
  return (
    <section className='container'>
      <div className='content'>
        <img src={Rael} alt='Logo' width={96} height={96}/>
        <div>
          <h1>Israel <span className='color'>27</span></h1>
          <p className='color'>Brazil</p>
        </div>
        <article className='article'>
          <ul>
            <li>
              80K
              <span>Followers</span>
            </li>
            <li>
              803K
              <span>Likes</span>
            </li>
            <li>
              1.4K
              <span>Photos</span>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Layout;
