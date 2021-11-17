

if (process.env.NODE_ENV === 'production') {
    module.exports = require('./prod');
} else {
        module.exports = require('./dev');
}

//mongodb+srv://jannickportfolio:Rasengan1991@cluster0.eqe2n.mongodb.net/portfolioDb?retryWrites=true&w=majority