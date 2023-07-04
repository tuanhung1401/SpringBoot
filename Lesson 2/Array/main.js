const grades = [
  { name: "John", grade: 8, sex: "M" },
  { name: "Sarah", grade: 12, sex: "F" },
  { name: "Bob", grade: 16, sex: "M" },
  { name: "Johnny", grade: 2, sex: "M" },
  { name: "Ethan", grade: 4, sex: "M" },
  { name: "Paula", grade: 18, sex: "F" },
  { name: "Donald", grade: 5, sex: "M" },
  { name: "Jennifer", grade: 13, sex: "F" },
  { name: "Courtney", grade: 15, sex: "F" },
  { name: "Jane", grade: 9, sex: "F" },
];

// Tính thứ hạng trung bình của cả lớp
function averageGrade() {
  const sum = grades.reduce((total, student) => total + student.grade, 0);
  return sum / grades.length;
}

console.log("Thứ hạng trung bình của cả lớp:", averageGrade());

// Tính thứ hạng trung bình của nam trong lớp
function averageMaleGrade() {
  const maleGrades = grades.filter((student) => student.sex === "M");
  const sum = maleGrades.reduce((total, student) => total + student.grade, 0);
  return sum / maleGrades.length;
}

console.log("Thứ hạng trung bình của Nam trong lớp:", averageMaleGrade());

// Tính thứ hạng trung bình của nữ trong lớp
function averageFemaleGrade() {
  const femaleGrades = grades.filter((student) => student.sex === "F");
  const sum = femaleGrades.reduce((total, student) => total + student.grade, 0);
  return sum / femaleGrades.length;
}

console.log("Thứ hạng trung bình của Nữ trong lớp:", averageFemaleGrade());

// Tìm học viên Nam có thứ hạng cao nhất trong lớp
function highestMaleGrade() {
  const maleGrades = grades.filter((student) => student.sex === "M");
  const highestGrade = Math.max(...maleGrades.map((student) => student.grade));
  return maleGrades.find((student) => student.grade === highestGrade);
}

console.log("Hcoj viên Nam có điểm cao nhất:", highestMaleGrade());

// Tìm học viên Nữ có thứ hạng cao nhất trong lớp
function highestFemaleGrade() {
  const femaleGrades = grades.filter((student) => student.sex === "F");
  const highestGrade = Math.max(
    ...femaleGrades.map((student) => student.grade)
  );
  return femaleGrades.find((student) => student.grade === highestGrade);
}

console.log("Học viên Nữ có điểm cao nhất:", highestFemaleGrade());

// Tìm học viên Nam có thứ hạng thấp nhất trong lớp
function lowestMaleGrade() {
  const maleGrades = grades.filter((student) => student.sex === "M");
  const lowestGrade = Math.min(...maleGrades.map((student) => student.grade));
  return maleGrades.find((student) => student.grade === lowestGrade);
}

console.log("Học viên Nam có điểm thấp nhất:", lowestMaleGrade());

// Tìm học viên Nữ có thứ hạng thấp nhất trong lớp
function lowestFemaleGrade() {
  const femaleGrades = grades.filter((student) => student.sex === "F");
  const lowestGrade = Math.min(...femaleGrades.map((student) => student.grade));
  return femaleGrades.find((student) => student.grade === lowestGrade);
}

console.log("Học viên nữ có điểm thấp nhất:", lowestFemaleGrade());

// Thứ hạng cao nhất của cả lớp
function highestGrade() {
  const highest = Math.max(...grades.map((student) => student.grade));
  return highest;
}

console.log("Điểm cao nhất của lớp:", highestGrade());

// Thứ hạng thấp nhất của cả lớp
function lowestGrade() {
  const lowest = Math.min(...grades.map((student) => student.grade));
  return lowest;
}

console.log("Điểm thấp nhất của lớp:", lowestGrade());

// Lấy ra danh sách tất cả học viên Nữ trong lớp
function getFemaleStudents() {
  const femaleStudents = grades.filter((student) => student.sex === "F");
  return femaleStudents;
}

console.log("Danh sách học viên:", getFemaleStudents());

// Sắp xếp tên học viên theo chiều tăng dần của bảng chữ cái
function sortByName() {
  const sortedNames = grades.map((student) => student.name).sort();
  return sortedNames;
}

console.log("Danh sách học viên theo bảng chữ cái:", sortByName());

// Sắp xếp thứ hạng học viên theo chiều giảm dần
function sortByGradeDescending() {
  const sortedGrades = grades.sort((a, b) => b.grade - a.grade);
  return sortedGrades;
}

console.log("Thứ hạng học viên theo chiều giảm dần:", sortByGradeDescending());

// Lấy ra học viên Nữ có tên bắt đầu bằng “J”
function getFemaleStudentsStartingWithJ() {
  const femaleStudents = grades.filter(
    (student) => student.sex === "F" && student.name.startsWith("J")
  );
  return femaleStudents;
}

console.log(
  'Học viên Nữ có tên bắt đầu bằng "J":',
  getFemaleStudentsStartingWithJ()
);

// Lấy ra top 5 người có thứ hạng cao nhất trong lớp
function getTopStudents(count) {
  const sortedGrades = grades.sort((a, b) => b.grade - a.grade);
  return sortedGrades.slice(0, count);
}

console.log("Top 5 Học viên:", getTopStudents(5));
