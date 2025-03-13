const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
function addTask() {
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else {
        let li = document.createElement("li")
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let dropdown = document.createElement("select");
        dropdown.addEventListener("change", function(e){
            if(e.target.value === "Todo") {
                li.style.color = "Red";
                li.style.textDecoration = "none";
            }
            else if(e.target.value === "In Progress") {
                li.style.color = "blue";
                li.style.textDecoration = "none"
            }
            else{
                li.style.color = "violet";
                li.style.textDecoration = "line-through";
                li.classList.toggle("checked");
            }
        });
        // let option1 = document.createElement("option");
        // option1.value = "todo";
        // option1.innerText = "Todo";
        // dropdown.appendChild(option1);

        
        // let option2 = document.createElement("option");
        // option2.value = "inprogress";
        // option2.innerText = "In progress";
        // dropdown.appendChild(option2);
        // let option3 = document.createElement("option");
        // option3.value = "completed";
        // option3.innerText = "Completed";
        // dropdown.appendChild(option3);
        // using foreach loop
        const options = ["Todo", "In Progress", "Completed"];
        options.forEach((option)=>{
            let optionCreate = document.createElement("option");
            optionCreate.innerText = option;
            dropdown.appendChild(optionCreate);
        })
            li.appendChild(dropdown);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
    filterTask();
}
listContainer.addEventListener("click", function (e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
});
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
    filterTask();
}
showTask();
function filterTask() {
    const filterText = searchBox.value.toLowerCase();
    const tasks = listContainer.getElementsByTagName("li");
    Array.from(tasks).forEach((task) => {
        const taskText = task.innerText.toLowerCase();
        if (taskText.includes(filterText)) {
            task.style.display = "";
        }
        else{
            task.style.display = "none";
        }
    });
}
searchBox.addEventListener("input", filterTask);
showTask();