import { createSlice } from '@reduxjs/toolkit';

const initialValue: {courseId:string,courseName:string,
  student:{id:number,page:number,nisitId:string,firstname:string,lastname:string,work:number,mid:number,final:number,grade:string}[]}= {
  courseId:'',
  courseName:'',
  student:[],
};

export const Slice = createSlice({
  name: 'data',
  initialState: initialValue,
  reducers: {
    addCourse: (state, action) => {
      // console.log(action.payload)
      state.courseId = action.payload.courseId;
      state.courseName = action.payload.courseName;
      // console.log(state.courseId)
      // console.log(state.courseName)
      // console.log(action.payload)
      // console.log(action.payload.courseName)
    },
    addStudent: (state, action:{payload:{id:number,page:number,nisitId:string,firstname:string,lastname:string,work:number,mid:number,final:number,grade:string}[],type:string}) => {
      // console.log(action.payload)
      state.student = action.payload
      // return action.payload
      // console.log(state.student)
    }
  },
});

export const { addCourse,addStudent } = Slice.actions;
export default Slice.reducer;