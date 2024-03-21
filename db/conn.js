const mongoose = require('mongoose')

async function main() {

    try {
        await mongoose.connect(process.env.API)
        console.log('banco ok');
    } catch (error) {
        console.log('erro: ' +  error);
    }

}

module.exports = main 