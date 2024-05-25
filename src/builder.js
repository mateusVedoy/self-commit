const commander = require('./commander.js')

const commandArr = []

module.exports = {

    withCommand: (command) => {
        if (command)
            commandArr.push(command)
    },

    build: () => {
        for(let command of commandArr)
            commander.executor(command)
    }
}

