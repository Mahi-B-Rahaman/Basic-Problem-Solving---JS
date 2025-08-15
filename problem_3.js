// return Grade upon Marks

let mark = 58;

function grade(mark) {
  if (mark >= 80) return 'A+';
  if (mark < 80 && mark >= 75) return 'A';
  if (mark < 75 && mark >= 70) return 'A-';
  if (mark < 70 && mark >= 65) return 'B+';
  if (mark < 65 && mark >= 60) return 'B';
  if (mark < 60 && mark >= 55) return 'B-';
  if (mark < 55 && mark >= 50) return 'C+';
  if (mark < 50 && mark >= 45) return 'C';
  if (mark < 45 && mark >= 40) return 'D';
  if (mark < 40) return 'RETAKE';
}
console.log(grade(mark));
