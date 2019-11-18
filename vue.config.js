module.exports = {
    devServer: {
        open: true,
        proxy: {
            '/api': {
                target: 'http://10.20.152.62:9000'
                // target: 'localhost:9000'
            }
        }
    }
}