import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import Persostu from 'src/views/pages/role/personel_student';

const Backoffice = () => {
  const [status, setStatus] = useState('');
  const [name, setName] = useState('');
  const [UserStudent, setUserStudent] = useState(null);
  const [UserTeacher, setUserTeacher] = useState(null);

    // -------------------- getCookie
    // const username = Cookies.get('._jwtUsername');
    // const role = Cookies.get('._jwtRole');
    // // ===============================

  useEffect(() => {
    const username = Cookies.get('._jwtUsername');
    const role = Cookies.get('._jwtRole');

    axios
      .post('http://localhost:3200/api/verify_authen', {
        token: username,
        tokenRole: role,
      })
      .then(data => {
        // set username && Role
        setName(data.data.User);
        setStatus(data.data.stateRole);
      });
  }, []);

  useEffect(() => {
    if (status !== undefined) {
      if (status === 'นักศึกษา') {
        setUserStudent(status);
      }
      if (status === 'อาจารย์') {
        setUserTeacher(status);
      }
    }
    console.log(55555);
  }, [status]);

  return (
    <>
      {UserStudent ? (
        <div style={{ padding: '0px 5% 0px 5%' }}>
          <Persostu idrmutl={name} />
          <Box>
            Hello
          </Box>
        </div>
      ) : null}
      {UserTeacher ? (
        <div>
          {/* ส่วนที่ต้องการให้แสดงเมนูหน้าที่อาจารย์เห็น */}
          <p>This is the menu for teachers</p>
        </div>
      ) : null}
    </>
  );
};

export default Backoffice;
