var Todo = /** @class */ (function () {
    function Todo() {
        this.tasks = [];
    }
    Todo.prototype.addTask = function (task) {
        this.tasks.push(task);
        console.log("Item: " + task + " has been added to Tasks.");
        return this.tasks.length;
    };
    Todo.prototype.listAllTasks = function () {
        this.tasks.forEach(function (item) {
            console.log(item);
        });
    };
    Todo.prototype.deleteTask = function (task) {
        var index = this.tasks.indexOf(task);
        if (index > -1) {
            this.tasks.splice(index, 1);
            console.log("Item: " + task + " has been removed from Tasks.");
        }
        else {
            console.log("Item: " + task + " is not in Tasks.");
        }
        return this.tasks.length;
    };
    return Todo;
}());
var myTodo = new Todo();
myTodo.addTask("Q1");
myTodo.addTask("Q2");
myTodo.listAllTasks();
myTodo.deleteTask("Q1");
myTodo.deleteTask("Q5");
