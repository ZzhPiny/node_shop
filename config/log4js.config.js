const config = {
    appenders: [
        {
            type: 'console',
            category: "console"
        }, //控制台输出
        {
            type: "dateFile",
            filename: 'logs/access',
            pattern: "_yyyyMMdd.log",
            alwaysIncludePattern: true,
            backups: 4,
            // category: 'dateFileLog'
        } //日期文件格式
    ],
    replaceConsole: true,   //替换console.log
};

module.exports = config;
