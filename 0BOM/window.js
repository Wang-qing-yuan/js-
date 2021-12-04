let a1 = document.getElementsByTagName('a')[0]
let a2 = document.getElementsByTagName('a')[1]
a1.onclick =setTimeout(function(){
    let json={
        "name":"helloworld",
        "fullscreen":"no",
        "location":"no",
        "width":"200px",
        "height":"150px",
        "top":"100px",
        "left":"50px"
    }
    let newWindow =window.open("https://www.baidu.com","_blank",json)
    newWindow.moveTo(500,500)
    
},3000)


a2.onclick = function(){
    window.close()
}