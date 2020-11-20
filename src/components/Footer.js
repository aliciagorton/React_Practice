import React from 'react';
import './Footer.css';
// import { Button } from './Button';
import { Link } from 'react-router-dom';
// import { srConfig, email } from '@config';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-sub-container'>
        <p className='footer-heading'>
            Designed & Built by Alicia Gorton
        </p>
        {/* <a className="email-link" href={`mailto:${email}`}>
              Say Hello
        </a> */}
        <p className='footer-text'>
            Find me here:
        </p>
        {/* <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div> */}
      </section>
      <section className='social-media'>
        <div className='social-media-wrap'>    
          <div className='social-icons'>
            {/* <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </Link> */}
            <Link
              className='social-icon-link github'
              to='/'
              target='_blank'
              aria-label='Github'
            >
              <i className='fab fa-github' />
            </Link>
            <Link
              className='social-icon-link LinkedIn'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </Link>
            
          </div>
        </div>
        <small className='website-rights'>MIT © 2020</small>
      </section>
    </div>
  );
}

export default Footer;
