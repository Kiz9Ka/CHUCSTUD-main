import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  teachers: []
};

const TeachersSlice = createSlice({
    name: 'teachers',
    initialState,
    reducers: {
      setAllTeachers: (state, action) => {
        state.teachers = action.payload;
      },
      updateTeacherData: (state, action) => {
        const { teacherId, newData } = action.payload;
        const teacherIndex = state.teachers.findIndex((teacher) => teacher._id === teacherId);
        if (teacherIndex !== -1) {
          state.teachers[teacherIndex] = { ...state.teachers[teacherIndex], ...newData };
        }
      },
    },
  });

export default TeachersSlice.reducer;
export const { setAllTeachers, updateTeacherData } = TeachersSlice.actions;
