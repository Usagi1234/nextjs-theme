import Axios from 'axios';

export const addStudent = (id, stuName, stuLname, stuNick, stuId, stuRmail, stuStatus, curriculumId, studygroupId, stuBirthday, stuSex, stuNationality, stuReligion, setStudents) => {
  Axios.post('http://localhost:3200/api/v1/studentinsert', {
    Id: id,
    stu_name: stuName,
    stu_lname: stuLname,
    stu_nick: stuNick,
    stu_id: stuId,
    stu_rmail: stuRmail,
    stu_status: stuStatus,
    curriculum_id: curriculumId,
    studygroup_id: studygroupId,
    stu_birthday: stuBirthday,
    stu_sex: stuSex,
    stu_nationality: stuNationality,
    stu_religion: stuReligion,
  }).then((response) => {
    if (response.data === 'Student added') {
      const newStudent = {
        nastu_nameme: 'stu_name',
        stu_lname: 'stu_lname',
        stu_nick: 'stu_nick',
        stu_id: 'stu_id',
        stu_rmail: 'stu_rmail',
        stu_status: 'stu_status',
        curriculum_id: 'curriculum_id',
        studygroup_id: 'studygroup_id',
        stu_birthday: 'stu_birthday',
        stu_sex: 'stu_sex',
        stu_nationality: 'stu_nationality',
        stu_religion: 'stu_religion',
      };
      setStudents(prevStudents => [...prevStudents, newStudent]);
    }
  });
};

export const updateStudent = (
  id,
  stuName,
  stuLname,
  stuNick,
  stuId,
  stuRmail,
  stuStatus,
  curriculumId,
  studygroupId,
  stuBirthday,
  stuSex,
  stuNationality,
  stuReligion,
) => {
  Axios.post('http://localhost:3200/api/v1/studentupdate', {
    Id: id,
    stu_name: stuName,
    stu_lname: stuLname,
    stu_nick: stuNick,
    stu_id: stuId,
    stu_rmail: stuRmail,
    stu_status: stuStatus,
    curriculum_id: curriculumId,
    studygroup_id: studygroupId,
    stu_birthday: stuBirthday,
    stu_sex: stuSex,
    stu_nationality: stuNationality,
    stu_religion: stuReligion,
  }).then();
};

export const deletedstudent = (stuID) => {
  Axios.post('http://localhost:3200/api/v1/Studentdelete', { Id: stuID });
};

export const student = (Id) => {
  Axios.post('http://localhost:3200/api/v1/student', { Id });
};

export const getCurriculums = (curriculumsId) => {
  Axios.post('http://localhost:3200/api/v1/curriculum', { curriculumsId });
};
