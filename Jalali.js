const englishDigits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

function toPersianDigits(str) {
  return str.toString().replace(/\d/g, (d) => persianDigits[Number(d)]);
}

function toEnglishDigits(str) {
  return str.toString().replace(/[۰۱۲۳۴۵۶۷۸۹]/g, (d) => englishDigits[persianDigits.indexOf(d)]);
}

console.log(toEnglishDigits("Salam ۱۲۳"));
console.log(toPersianDigits("Salam 123"));
