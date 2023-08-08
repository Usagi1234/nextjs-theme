// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Box } from 'mdi-material-ui';

// function Personelstudent(props) {
//     const { idrmutl } = props;
//     const [ShowUser, SetShowUser] = useState('');
//     const [DATE, SetDATE] = useState('');
  
//     //   console.log(username);
//     useEffect(() => {
//       axios
//         .post('http://localhost:3200/api/ReadStudent', {
//           username: idrmutl,
//         })
//         .then((data) => {
//           SetShowUser(data.data[0]);
//           SetDATE(data.data[0].brithday);
//         });
//     }, [idrmutl]);
//     const originalDate = new Date(DATE);
//     const convertedDate = originalDate.toLocaleString('th-TH', {
//       day: 'numeric',
//       month: 'long',
//       year: 'numeric',
//     });
//     return(
//         <Box />
//     )
// }

// export default Personelstudent();