function moveOver (arr,position) {
if (position === 'end') {
    let temp = arr.shift();
    arr.push(temp);
}

if (position === 'start') {
    let temp = arr.pop();
    arr.unshift(temp);
}
    console.log(arr);
}
moveOver([1,2,3,4], 'end');
moveOver([1,2,3,4], 'start');
