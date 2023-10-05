const resolvedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = { "message": "delayed success!" }
            resolve(success);
        }, 500);
    })
}

const rejectedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject({ "error": "delayed exception!" });
        }, 500);
    })
}

resolvedPromise().then(result1 => {
    console.log(result1);
    rejectedPromise()
        .then(data => {
        })
        .catch(error => {
            // Handle rejected data
            console.log(error);
        });
});
