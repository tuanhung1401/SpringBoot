console.log("Hello world");

// alert("Xin chào");

// document.write("Hello");

// Khai báo biến và không gán giá trị cho biến
// let age;
// age = 35;

// // Khai báo biến và gán giá trị cho biến
// let email = "hien@techmaster.vn";

// console.log("age: ", age);
// console.log("email: ", email);

function checkMark(mark) {
    if (mark >= 85) {
        return 'A';
    } else if (70 <= mark && mark < 85) {
        return 'B';
    } else if (40 <= mark && mark < 70) {
        return 'C';
    } else {
        return 'D';
    }
}

function greaterNumber(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

