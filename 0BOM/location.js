console.log(location.href);
let info = location.href;
console.log(info);
let btn = document.getElementById("btn");
btn.onclick = function () {
  // location.href='https://www.baidu.com'
  location.href = "./index.html";
  //   location.hash = "./Location对象.html";
};

document.write("<br>跳转：" + location.href + "<br>");
document.write("返回url中#后面的内容:" + location.hash+ "<br>");
document.write("主机名（包括端口）：" + location.host+ "<br>");
document.write("主机名：" + location.hostname + "<br>");
document.write("url中的路径部分：" + location.pathname+ "<br>");
document.write("协议：" + location.protocol+ "<br>");
document.write("查询：" + location.search+ "<br>");
