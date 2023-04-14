// https://www.maijiuwang.com/api/pc/get_banner
import http from'./request'
export const reqindex = () => {
    return http.get('/pc/get_banner')
}