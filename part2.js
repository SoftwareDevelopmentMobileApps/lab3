var tasks = [];
function addTask(task) {
    tasks.push(task);
    console.log("Item: " + task + " has been added to Tasks.");
    return tasks.length;
}
function listAllTasks() {
    tasks.forEach(function (item) {
        console.log(item);
    });
}
function deleteTask(task) {
    var index = tasks.indexOf(task);
    if (index > -1) {
        tasks.splice(index, 1);
        console.log("Item: " + task + " has been removed from Tasks.");
    }
    else {
        console.log("Item: " + task + " is not in Tasks.");
    }
    return tasks.length;
}
addTask("Part A");
addTask("Part B");
listAllTasks();
deleteTask("Part B");
deleteTask("Part 5");
