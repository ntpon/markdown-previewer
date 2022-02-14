import React from 'react';
import { BsPencil } from 'react-icons/bs';
function Header() {
  return (
    <header className='header'>
      <div className='brand'>
        <BsPencil />
        <p className='brand__title'>Markdown Previewer</p>
      </div>
    </header>
  );
}

export default Header;
