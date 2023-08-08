// Sidebar.js
import React from 'react';
import MainMenu from './mainmenu';
import Navigation from '../../../navigation/vertical/index' // import ฟังก์ชัน navigation ที่ให้มา

function Sidebar({ userPermissions }) {
  // เรียกใช้งาน navigation โดยส่ง userPermissions เพื่อคืนค่าเมนูที่ผู้ใช้งานมีสิทธิ์
  const menuItems = Navigation(userPermissions);

  return (
    <div>
      <MainMenu menuItems={menuItems} />
      {/* ส่วนอื่น ๆ ของ Sidebar */}
    </div>
  );
}

export default Sidebar;
