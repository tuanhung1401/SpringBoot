// const findMax = (arr) => {
//     let max = arr[0];
//     for(let i = 1; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     return max;
// }

// console.log(findMax([3,283,179,9]));

// const findMin = (arr) => {
//     let min = arr[0];
//     for(let i = 1; i < arr.length; i++) {
//         if (arr[i] < min) {
//             min = arr[i];
//         }
//     }
//     return min;
// }

// console.log(findMin([3,283,179,9]));

// const getRemainder = (arr) => {
//     let remainderArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         remainderArr.push(arr[i] % 2);
//     }
//     return remainderArr;
// }

// console.log(getRemainder([3,283,179,9]));

// const repeatString = (str) => {
//     const result = [];
//     for (let i = 0; i < 10; i++) {
//         result.push(str);
//     }
//     return result;
// }

// console.log(repeatString(["hello"]));

// const checkInArray = (arr, item) => {
//     return arr.includes(item);
// }

// console.log(checkInArray([3,283,179,9],4));

// const getGreaterElement = (arr, item) => {
//     let result = [];
//     for (let i = 0; i < arr.length; i++){
//         if(item < (arr[i])){
//             result.push(arr[i]);
//         }
//     } return result;
// }

// console.log(getGreaterElement([3,283,179,9],100));

// const generateHexColor = () => {
//     let hex = "#";
//     for (let i = 0; i < 6; i++) {
//         hex += (Math.floor(Math.random() * 16)).toString(16);
//     } return hex;
// }

// console.log(generateHexColor);

let products = [
    {
        name: "Iphone 13 Pro Max", // Tên sản phẩm
        price: 3000000, // Giá mỗi sản phẩm
        brand: "Apple", // Thương hiệu
        count: 2, // Số lượng sản phẩm trong giỏ hàng
    },
    {
        name: "Samsung Galaxy Z Fold3",
        price: 41000000,
        brand: "Samsung",
        count: 1,
    },
    {
        name: "IPhone 11",
        price: 15500000,
        brand: "Apple",
        count: 1,
    },
    {
        name: "OPPO Find X3 Pro",
        price: 19500000,
        brand: "OPPO",
        count: 3,
    },
]

1. 
products.forEach(product => {
        console.log(`${product.name} - ${product.price} - ${product.brand} - ${product.count}`);
    });

2. 
let totalPrice = 0;
products.forEach(product => {
    totalPrice += product.price * product.count;
});
console.log(totalPrice);


3. 
let appleProducts = products.filter(product => product.brand === "Apple");
console.log(appleProducts);

4.
let expensiveProducts = products.filter(product => product.price > 20000000);
console.log(expensiveProducts);

5.
let proProducts = products.filter(product => product.name.toLowerCase().includes("pro"));
console.log(proProducts);

6. 
products.push({
    name: "Huawei P40 Pro",
    price: 18500000,
    brand: "Huawei",
    count: 1,
})
console.log(products);

7. 
let newProducts = products.filter(product => product.brand !== "Samsung");
console.log(newProducts);

8.
