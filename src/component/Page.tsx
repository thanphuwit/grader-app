import React from 'react';
import Student from './Student';

const Page = ({ student, changeEach }) => {
    
    if(student.length>10){
        components=[]
    }
    

  let components = []
  student.map(item => (
    components.push(<Student
        id={item.id}
        page={item.page}
        nisitId={item.nisitId}
        firstname={item.firstname}
        lastname={item.lastname}
        mid={item.mid}
        final={item.final}
        changeEach={changeEach}
        />)
  ))

  return (
    components
  );
};

export default Page