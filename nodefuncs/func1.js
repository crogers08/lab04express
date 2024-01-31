
const sortStrByAlpha = (data) => {

    let arrString = data.split(" ");

    arrString.sort();

    let alphaString = "";

    arrString.forEach(word => {
        alphaString += `${word} `;
    });

    return alphaString;
};

let mysort = sortStrByAlpha('john is a junior javascript developer');
// console.log(mysort);

const strReverse = (data) => {

    let arrString = data.split("");
    arrString.reverse();
    let rString = "";

    arrString.forEach(character => {
        rString += `${character}`;
    });

    return rString;
};

let myrevsort = strReverse('john is a junior javascript developer');
// console.log(myrevsort);

const sortNum = (data, type) => {
    let numString = data.toString();
    let arrNum = numString.split("");
    if (type ==="reverse") {
        arrNum.reverse();
    } else if (type ==="sort") {
        arrNum.sort();
    } else console.log("Error in argument"); 
    
    let newNum = "";

    arrNum.forEach(num => {
        newNum += `${num} `;
    });

    return newNum;    
};


console.log(sortNum(14598345,"reverse"));
console.log(sortNum(14598345,"sort"));
console.log(sortNum(14598345,"soRt"));