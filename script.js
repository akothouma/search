const button1=document.getElementById("icon")
button1.addEventListener("click", function(){
    makeActive()
   })
   

function makeActive(){
    const gerrit=document.getElementById("form")
    gerrit.classList.add("active")

}
