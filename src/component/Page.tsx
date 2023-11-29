import React from 'react';
import Student from './Student';
import { current } from '@reduxjs/toolkit';

const Page = ({ student, changeEach, currentPage}) => {
    
  let components = []
  student.map((item)=>{
    if(item.page==currentPage){
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
    }
  })

  return (
    components
  );
};

export default Page