import axios from './index'
// let base = "http://localhost:3020"
let base = 'http://www.mirenol.com:3020'
const gl_ajax = requestData => {
    !requestData.catchStatus ? requestData.catchStatus = [] : "";
    requestData.senderr === undefined ? requestData.senderr = true : ""
    return axios({
        method: requestData.method,
        url: requestData.url,
        data: requestData.method != "get" ? requestData.data : "",
        params: requestData.method == "get" ? requestData.data : ""
    })
        .then(res => {
            requestData.success ? requestData.success(res) : "";

        })
        .catch(err => {
            console.log(err)
        });
};
export { gl_ajax, base }