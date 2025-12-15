import axios from "axios";

// EFINE FIRST
const API_URL = "http://localhost:5000/api/students";

// GET all students
export const getStudents = () => {
  return axios.get(API_URL);
};

// CREATE student
export const createStudent = (student) => {
  return axios.post(API_URL, student);
};

// GET student by id
export const getStudentById = (id) => {
  return axios.get(`${API_URL}/${id}`);
};

// UPDATE student
export const updateStudent = (id, student) => {
  return axios.put(`${API_URL}/${id}`, student);
};

// DELETE student
export const deleteStudent = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};
