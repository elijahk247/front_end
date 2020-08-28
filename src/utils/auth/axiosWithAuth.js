import axios from 'axios'

const axiosWithAuth = () => {
    let token = localStorage.getItem('token')
    token = `Bearer ${token}`

    return axios.create({
        baseURL: 'https://medcab-api.herokuapp.com/',
        headers: {
            authorization: token
        }
    })
}

export default axiosWithAuth