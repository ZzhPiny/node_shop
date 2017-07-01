module.exports = {
    OK: 0, // 正常
    SERVICE_ERROR: -1, // 服务器错误
    OPERATION_ERROR: -2, // 操作错误
    INVALID_RESPONSE: -3, // 返回无效
    NEED_LOGIN: 1, // 需要登录
    TOKEN_INVALID: 1001, // 验证失效，需要重新登录 
}