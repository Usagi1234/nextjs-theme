// MainMenu.js
import React from 'react';

function MainMenu({ menuItems }) {
  return (
    <div>
      <ul>
        {menuItems.map((item, index) => (
          <li key={index}>
            <a href={item.path}>
              {item.icon && <item.icon />} {/* แสดงไอคอนถ้ามี */}
              <span>{item.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MainMenu;