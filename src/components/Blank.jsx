import React, { useState } from 'react';
import NavList from './NavList';
import LiList from './LiList';

// export default function Blank(){
const MenuButton = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      <button onClick={handleClick}>Menu</button>
      {showMenu && (
        <ul>
            <li>nmvhjv</li>
            <li>kvjh</li>
            <li>iohiugi</li>
        </ul>
      )}
    </div>
  );
};
export default MenuButton

