import axios from 'axios'

const axiosWithAuth = () => {
    let token = localStorage.getItem('token')

    token =  `Bearer ${token}`

    return axios.create({
        baseURL: 'http://localhost:3000',
        headers: {
            authorization: token
        }
    })
}

export default axiosWithAuth