const input = [1, 4, 6, 10, 3, 10, 11, 2, 4, 2, 222, 222, 2, 220]

// find :- maxNo, secondMaxNo, thirdMaxNo 

let maxNo = input[0];
let secondMaxNo = "";
let thirdMaxNo = "";

for (let i=1; i < input.length; i++) {
    const currVal = input[i];   // 4
    if (currVal > maxNo) {  // 4>1, 6>4, 10>6, 3>10, 11>10, 2>11, 4>11, 2, 222>11, 222>222, 220>222
        thirdMaxNo = secondMaxNo;  // "" | 1 | 4 | 6 | 10 | 
        secondMaxNo = maxNo;       // 1  | 4 | 6 | 10| 11 | 
        maxNo = currVal;           // 4  | 6 | 10| 11| 222| 
    }
    else if (currVal > secondMaxNo && currVal < maxNo) {
        thirdMaxNo = secondMaxNo;
        secondMaxNo = currVal;
    }
    else if (currVal > thirdMaxNo && currVal < maxNo) {
        thirdMaxNo = currVal;
    }
}
console.log({maxNo, secondMaxNo, thirdMaxNo});