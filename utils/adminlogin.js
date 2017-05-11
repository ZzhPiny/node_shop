
function verifyAdminLogging() {

    return (req, res, next) => {

        next();
    }
}

module.exports = verifyAdminLogging;