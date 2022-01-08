import axios from '../axios'

const handleLoginApi = (email, password) => {
    return axios.post('/api/login', { email, password });
}
const getAllUsers = (inputId) => {
    return axios.get(`/api/getAllUser?id=${inputId}`);
}
const createNewUserService = (data) => {
    console.log('check data from service: ', data);
    return axios.post('/api/create-new-user', data)
}
const deleteUserService = (userId) => {
    return axios.delete('/api/delete-user', {
        data: {
            id: userId
        }
    });
}
const editUserService = (inputData) => {
    return axios.put('/api/editUser', inputData);
}
const getAllcodeService = (inputType) => {
    return axios.get(`/api/allcode?type=${inputType}`);
}
const getTopDoctorHomeService = (limit) => {
    return axios.get(`api/top-doctor-home?limit = ${limit}`);
}
const getAllDoctors = () => {
    return axios.get(`api/get-all-doctors`);
}
const saveDetailDoctorService = (data) => {
    return axios.post('/api/save-infor-doctors', data)
}
const getDetailInforDoctor = (inputId) => {
    return axios.get(`/api/get-detail-doctor?id=${inputId}`)
}
const saveBulkScheduleDoctor = (data) => {
    return axios.post('/api/bulk-create-schedule', data)
}
export { handleLoginApi, getAllUsers, createNewUserService, deleteUserService, editUserService, getAllcodeService, getTopDoctorHomeService, getAllDoctors, saveDetailDoctorService, getDetailInforDoctor, saveBulkScheduleDoctor };