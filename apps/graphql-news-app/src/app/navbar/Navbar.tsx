/* eslint-disable-next-line */
import { FC } from 'react';
import RfhLogo from '../RfhLogo';


const Navbar: FC = ({ children }) => {
  return (
    <div className='navbar bg-base-100 shadow-md h-20'>
      <section className='container mx-auto max-w-5xl'>
        <div>
          {/*<a className='btn btn-ghost normal-case text-xl'>GraphQL News App</a>*/}
            <RfhLogo />
        </div>
        <div className='flex-none ml-4'>
          <ul className='menu menu-horizontal p-0'>
            <li><a>Evenementen</a></li>
            <li tabIndex={0}>
              <a>
                Nieuws
                <svg className='fill-current' xmlns='http://www.w3.org/2000/svg' width='20' height='20'
                     viewBox='0 0 24 24'>
                  <path d='M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z' />
                </svg>
              </a>
              <ul className='p-2 bg-base-100 z-50'>
                <li><a>Corona</a></li>
                <li><a>Sierteelt</a></li>
              </ul>
            </li>
            <li><a>Storingen</a></li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
