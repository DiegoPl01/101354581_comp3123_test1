const mixedArray = ["PIZZA", 10, true, 25, false, "Wings"]

const lowerCaseWords = (mixedArray) =>
    new Promise((resolv, reject) => {
        if (!mixedArray || mixedArray.length === 0 || !Array.isArray(mixedArray)) reject("Invalid input. Modify the array please.");
        resolv(mixedArray.filter((item) => isNaN(item)).map((word) => word.toLowerCase()));
    });

lowerCaseWords(mixedArray)
    .then((resolv) => console.log(resolv))
    .catch((err) => console.log(err));
