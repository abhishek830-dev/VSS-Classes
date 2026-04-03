const string = "ankita";
const count = {};
function countInString(string){
for (let i=0; i<string.length; i++) {
    if (count[string[i]]) {
        count[string[i]]++;
    }
    else {
        count[string[i]] = 1;
    }
}
return count;
}
console.log(countInString(string));
