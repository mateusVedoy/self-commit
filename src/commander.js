const { exec } = require('child_process');

module.exports = {
    executor: (command) => {
        if (!command)
            return "command cannot be empty"
        
        exec(command, handler)
    }
}

const handler = (err, stdout, stderr) => {

    if (err) {
        console.error(`Error executing command: ${err.message}`);
        return
    }

    if (stderr) {
        console.error(`Error output: ${stderr}`);
        return;
    }

    if (stdout)
        console.log(`console output: ${stdout}`);
    else
        console.log(`command executed without response`)
}