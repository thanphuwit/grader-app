import { createSlice } from '@reduxjs/toolkit';

const initialValue = {
  courseId:'',
  courseName:'',
  student:'',
};

export const slice = createSlice({
  name: 'data',
  initialState: initialValue,
  reducers: {
    addCourse: (state, action) => {
      state.courseId = action.payload.courseId;
      state.courseName = action.payload.courseName;
      // console.log(state.courseId)
      // console.log(state.courseName)
      // console.log(action.payload)
      // console.log(action.payload.courseName)
    },
  },
});

export const { addCourse } = slice.actions;
export default slice.reducer;