const baseURL: string = 'http://localhost:8080'
function request (url:string,data:any,method='GET') {
    new Promise((resolve, reject) => {
        uni.request({
            url:baseURL+url,
            data:data,
            method,
            success: (res) => {
                resolve(res)
            },
            fail: (err) => {
                reject(err)
            }
        })
    })
}