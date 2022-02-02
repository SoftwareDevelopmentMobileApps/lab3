let tasks:Array<string> = [];

function addTask(task:string):number{
    tasks.push(task);
    console.log("Item: "+task+" has been added to Tasks.");
    return tasks.length;
}

function listAllTasks():void{
    tasks.forEach(function(item){
        console.log(item);
    })
}

function deleteTask(task:string):number{
    let index = tasks.indexOf(task);

    if(index > -1){
        tasks.splice(index, 1);
        console.log("Item: "+task+ " has been removed from Tasks.")
    } else{
        console.log("Item: "+task+" is not in Tasks.")
    }
    return tasks.length;
}

addTask("Part A");
addTask("Part B");

listAllTasks();

deleteTask("Part B");
deleteTask("Part 5");
