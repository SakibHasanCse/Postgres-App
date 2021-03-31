import axios from 'axios'
const API = process.env.REACT_APP_API_URL || 'http://localhost:8080/api'

const composeToken = (token) => token ? { Authorization: `Bearer ${token}` } : {}
const apiCall =
    (url, method, body = {}, token = '') => axios({
        method,
        url: `${API}/${url}`,
        data: body,
        headers: {...composeToken(token) }
    })

export default apiCall