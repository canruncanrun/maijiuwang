import axios from 'axios'
// import { Loading } from 'element-ui';

let loadingInstance = null;
// 显示
function showLoading() {
    // loadingInstance = Loading.service({
    //     lock: true,
    //     text: '正在拼命加载中',
    //     spinner: 'el-icon-loading',
    //     background: 'rgba(0, 0, 0, 0.7)'
    // });
    return "   "
}
// 关闭
function closeLoading() {
    // loadingInstance.close();
}
// 创建axios实例
const request = axios.create({
    baseURL: 'https://www.maijiuwang.com/api',// 所有的请求地址前缀部分(没有后端请求不用写)
    timeout: 80000, // 请求超时时间(毫秒)
    withCredentials: true,// 异步请求携带cookie
    // headers: {
    // 设置后端需要的传参类型
    // 'Content-Type': 'application/json',
    // 'token': x-auth-token',//一开始就要token
    // 'X-Requested-With': 'XMLHttpRequest',
    // },
})
 
// request拦截器
request.interceptors.request.use(
    config => {
        // 如果你要去localStor获取token
        // let token = localStorage.getItem("x-auth-token");
        // if (token) {
                //添加请求头
                // config.headers["Authorization"]="Bearer "+ token
        // }
        showLoading();

        return config
    },
    error => {
        // 对请求错误做些什么
        Promise.reject(error)
    }
)
 
// response 拦截器
request.interceptors.response.use(
    response => {
        // 对响应数据做点什么
        closeLoading();
        return response.data
    },
    error => {  
        // 对响应错误做点什么
        closeLoading();
        return Promise.reject(error)
    }
)
export default request