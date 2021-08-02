const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY ="todos";
let toDos = [];



function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));//스트링으로 저장 .parse() array로
}

function deleteTodo(event){
    const li = event.target.parentElement;//날아온 event가 가리키는 것(button)의 부모(li)저장
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos();
    li.remove();//삭제
    //localStorage.removeItem(TODOS_KEY,)
}

function paintToDo(newToDo){
    const li = document.createElement("li");
    li.id = newToDo.id;
    const span = document.createElement("span");
    span.innerText = newToDo.text;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click",deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);

}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        text:newToDo,
        id:Date.now(),
    };
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);//paintToDo({text:"a", id:12314454})
}
