let id=0;
function addTask(){
    //getting the value from the input
    let task = document.getElementById('task').value;
    if(task === ""){
        alert("enter task on to do list");
    }else{
        displayTask(task);//display name
        document.getElementById('task').value="";//clear input 
    }
}
function deleteTask(id){
    let task = document.getElementById(id).remove();
    `<li id="${id}"> 
    <div><i class="fa-solid fa-bars"></i> ${task}</div>
    <button class= dltbtn onclick="deleteTask(${id})"><i class="fa-solid fa-trash-can"></i></button>
    </li>`;
    deleteTask(task);
}
function displayTask(task){
    id++;
    document.getElementById('task-list').innerHTML +=`
    <li id="${id}"> 
    <div><i class="fa-solid fa-bars"></i> ${task}</div>
    <button class= dltbtn onclick="deleteTask(${id})"><i class="fa-solid fa-trash-can"></i></button>
    </li>`;
} 