// document.getElementById('owl').onclick = function(){
//     alert("Hello");
// }

//type,timestamp,defaultPrevented
//target, toelement, srcElement, currentTarget,
//clientX,clientY,screenX,screenY
//bubbles,cancelable,ctrlKey,shiftKey,keyCode

// document.getElementById('owl').addEventListener("click",function(e){
//     console.log(e);
    // console.log(e.timeStamp);
    // console.log(e.clientX);
// })

// document.getElementById('images').addEventListener("click",function(e){
//     console.log("inside ul clicked");
// },true) //false is default

// document.getElementById('owl').addEventListener("click",function(e){
//     console.log("owl clicked");
// },true)
//if they are false the output will be "owl clicke" & "inside ul clicked" because false value based on eventbubbling like bubble does from bottom to top they worked as same

//if we doesn't want event bubbling then we simply used e.stopPropagation()

// document.getElementById('google').addEventListener("click",function(e){
//     e.preventDefault();
//     e.stopPropagation()
//     console.log("google is clicked");
// },false)

//remove a parent node

document.querySelector('#images').addEventListener("click",function(e){
    console.log(e.target.parentNode);
    let removeit =e.target.parentNode
    removeit.remove()
    // OR
    removeit.parentNode.removeChild(removeit)
})