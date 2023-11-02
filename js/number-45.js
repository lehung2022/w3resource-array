const unique_Elements = arr => [...new Set(arr)];
console.log(unique_Elements([1, 2, 2, 3, 4, 4, 5]));
console.log(unique_Elements([1, 2, 3, 4, 5]));
console.log(unique_Elements([1, -2, -2, 3, 4, -5, -6, -5]));
