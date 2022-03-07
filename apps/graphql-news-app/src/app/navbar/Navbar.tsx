/* eslint-disable-next-line */
import { FC } from 'react';


const Navbar: FC = ({ children }) => {
  return (
    <div className='navbar bg-base-100 shadow-md'>
      <section className='container mx-auto max-w-5xl'>
        <div>
          <a className='btn btn-ghost normal-case text-xl'>My News App</a>
        </div>
        <div className='flex-none'>
          <ul className='menu menu-horizontal p-0'>
            <li><a>Item 1</a></li>
            <li tabIndex={0}>
              <a>
                Parent
                <svg className='fill-current' xmlns='http://www.w3.org/2000/svg' width='20' height='20'
                     viewBox='0 0 24 24'>
                  <path d='M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z' />
                </svg>
              </a>
              <ul className='p-2 bg-base-100 z-50'>
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </li>
            <li><a>Item 3</a></li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
