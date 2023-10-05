const fs = require('fs');
const path = require('path');
const logDirectory = path.join(__dirname, 'Log');
if (fs.existsSync(logDirectory)) {
    fs.readdir(logDirectory, (err, files) => {
        if (err) {
            return;
        }
        files.forEach(file => {
            console.log("delete files..." + file);
            fs.unlinkSync(path.join(logDirectory, file));
        });
        fs.rmdirSync(logDirectory);
    });
} else {
    fs.mkdirSync(logDirectory);
    for (let i = 0; i <= 9; i++) {
        const fileName = `log${i}.txt`;
        const textToWrite = "Hi, how are you?";
        // fs.writeFile(fileName, textToWrite)
        const filePath = path.join(logDirectory, fileName);
        fs.writeFileSync(filePath, fileName + textToWrite);
        console.log(fileName);
    }
}

