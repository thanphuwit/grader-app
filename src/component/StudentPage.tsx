import React from 'react';
import Student from './Student';

const StudentPage = ({ student, changeEach, currentPage}) => {
    
  let components = []
  student.map((item)=>{
    if(item.page==currentPage){
      components.push(
      <Student
        key={item.id}
        id={item.id}
        page={item.page}
        nisitId={item.nisitId}
        firstname={item.firstname}
        lastname={item.lastname}
        mid={item.mid}
        final={item.final}
        changeEach={changeEach}
      />)
    }
  })

  return (
    components
  );
};

export default StudentPage