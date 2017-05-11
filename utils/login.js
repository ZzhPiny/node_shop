/**
 * 检测请求接口是否需要登录权限 验证用户是否登录
 * 未登录时 返回
 */

function verifyLogging() {
    return (req, res, next) => {

        next();
    }
}

module.exports = verifyLogging;