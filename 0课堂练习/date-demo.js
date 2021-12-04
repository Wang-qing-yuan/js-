// let date1 = new Date();
// console.log(date1);
// console.log(typeof date1);

// const date2 = new Date("2021/10/16 11:09:12");
// const date3 = new Date("2021/10/16");
// const date4 = new Date("Sat Oct 16 2021 10:53:09 GMT+800(中国标准时间)");
// console.log(date2.getFullYear());
// console.log(date2.getMonth());
// console.log(date2.getDate());
// console.log(
//   `${date2.getFullYear()}年${date2.getMonth()}月${date2.getDate()}日`
// );

/**
 * 日期格式化
 * 格式要求：2021年10月16日 1-：52：12 星期六
 */
// function formatDate(date) {
//   let date = new Date()
//   let year = date.getFullYear()
//   let month = date.getMonth() + 1
//   let day = date.getDate()
//   let hour = date.getHours()
//   let minute = date.getMinutes()
//   let second = date.getSeconds()

//   hour = hour < 10 ? '0' + hour : hour //补零操作
//   minute = minute < 10 ? '0' + minute : minute
//   second = second < 10 ? '0' + second : second

//   let weekArr = [
//     "星期日",
//     "星期六",
//     "星期五",
//     "星期四",
//     "星期三",
//     "星期二",
//     "星期一",
//   ]
//   let week = date.getDay();
//   console.log(week)

//   let result = `${year}年${month}月${day}日${hour}小时${minute}分${second}秒 ${weekArr[week]}`
//   return result
// }
// console.log(formatDate())
// function formaDate() {
//   let date = new Date();
//   let year = date.getFullYear();
//   let month = date.getMonth() + 1;
//   let day = date.getDate();
//   let hour = date.getHours();
//   let minute = date.getMinutes();
//   let second = date.getSeconds();
//   hour = hour < 10 ? "0" + hour : hour;
//   minute = minute < 10 ? "0" + minute : minute;
//   second = second < 10 ? "0" + second : second;
//   let weekArr = [
//     "星期日",
//     "星期一",
//     "星期二",
//     "星期三",
//     "星期四",
//     "星期五",
//     "星期六",
//   ];
//   let week = date.getDay();
//   console.log(week);
//   let result = `${year}年${month}月${day}日 ${hour}:${minute}:${second} ${weekArr[week]}`;
//   return result;
// }
// console.log(formaDate());
/e/.test("The best things in life are free!")