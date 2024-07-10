import axios from 'axios';
axios.defaults.baseURL = 'https://preguntados-api.vercel.app';

export const getQuestions = (diff) => { 

    return axios.get(`/api/questions?difficulty=${diff}`)

}

export const getDifficulty = () => {
    return axios.get('/api/difficulty')
}

export const postAnswer = (questionId, option) => {
    const res = axios.post('/api/answer', {questionId, option}).then((response) => {
        return response
    });
    return res
}