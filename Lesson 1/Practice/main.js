// Bài 1. Viết function truyền vào 1 chuỗi bất kỳ, hãy sao chép chuỗi đó lên 10 lần.

// Ví dụ : repeatString(“a”) => Kết quả trả về là “aaaaaaaaaa”

const repeatString = str => {
    let result = '';
    for (let i = 0; i < 10; i++){
        result += str;
    } 
    return result;
}

console.log(repeatString('a'));

// Bài 2. Viết function truyền vào 1 chuỗi bất kỳ, hãy viết hàm có tác dụng sao chép đó chuỗi
//  lên 10 lần, ngăn cách nhau bởi dấu gạch ngang.
// Ví dụ: repeatString(“a”) => Kết quả trả về là “a-a-a-a-a-a-a-a-a-a”

const repeatString2 = str => {
    let result = '';
    for (let i = 0; i < 10; i++){
        result += str + '-';
    } 
    return result.slice(0, -1);
}

console.log(repeatString2('a'));

// Bài 3. Viết function truyền vào 1 chuỗi bất kỳ và 1 số nguyên dương n > 1, hãy viết hàm có tác dụng
//  sao chép đó chuỗi lên n lần, ngăn cách nhau bởi dấu gạch ngang.

const repeatString3 = (str,n) => {
    let result = '';
    for (let i = 0; i < n; i++) {
        result += str + '-';
    }
    return result.slice(0, -1);
}

console.log(repeatString3('a', 5));

// Bài 4. Tính tổng các số chia hết cho 5 từ 0 -> 100

const sumDivisibleBy5 = () => {
    let sum = 0;
    for (let i = 0; i <= 100; i++) {
        if (i % 5 == 0) {
            sum += i;
        }
    }
    return sum;
}

console.log(sumDivisibleBy5);

// Bài 5: Viết hàm tính thể tích hình cầu, với tham số truyền vào là bán kính của hình cầu.
const volumOfSphere = r => {
    let V = (4/3)*Math.PI*Math.pow(r,3);
    
}

