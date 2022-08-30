function destroyer(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let z = 1; z < arguments.length; z++) {
      if (arr[i] == arguments[z]) {
        arr.splice(i, 1);
      }
    }
    arr.splice(i, 1);
  }
  return arr;
}

console.log(destroyer([2, 3, 2, 3], 2, 3));
