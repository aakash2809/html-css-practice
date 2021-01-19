const btnAdd= document.querySelector(".add-btn");
btnAdd.addEventListener("click",addNew);
addNew=()=>{
    const newDiv =document.createElement("div");
    console.log("add");
    newDiv.classList.add("add-shadow")
    document.body.appendChild(newDiv);

}