//Source:https://bit.ly/3hEZdCl
//Add the key-value pair to the object.
const indexOn = (arr, key) =>
    arr.reduce((obj, v) => {
        const { [key]: id, ...data } = v;
        obj[id] = data;
        return obj;
    }, {});

console.log(indexOn([
    { id: 10, name: 'apple' },
    { id: 20, name: 'orange' }
], x => x.id));
