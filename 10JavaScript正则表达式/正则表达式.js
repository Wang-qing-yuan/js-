/* //search() 方法使用正则表达式
var str = "Visit w3cschool!"; 
var n = str.search(/w3cschool/i);
console.log(n)

//检索字符串中w3cschool的子字符串
var n = str.search(/w3cschool/);


//replace() 方法使用正则表达式
var str = "Visit Microsoft!";
var res = str.replace(/microsoft/i, "w3cschool")
console.log(res)

//replace() 方法将接受字符串作为参数
var str = "Visit Microsoft!";
var res = str.replace("Microsoft", "w3cschool")

//使用test()
var patt = /e/;
patt.test("The best things in life are free!")
console.log(patt.test())  */


 /e/.exec("The best things in life are free!")
console.log(/e/.exec())   

var patt1 = new RegExp("e");
console.log(patt1.test("The best things in life are free"));
 patt1.compile("d"); 
 console.log(patt1.test("The best things in life are free"))




