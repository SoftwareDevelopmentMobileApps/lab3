import {TodoInterface} from './interface';

class Todo implements TodoInterface{
    tasks:Array<string> = [];

    addTask(task:string):number{
        this.tasks.push(task);
        console.log("Item: "+task+" has been added to Tasks.");
        return this.tasks.length;
    }

    listAllTasks():void{
       this.tasks.forEach(function(item){
            console.log(item);
        })
    }

    deleteTask(task:string):number{
        let index = this.tasks.indexOf(task);
    
        if(index > -1){
            this.tasks.splice(index, 1);
            console.log("Item: "+task+ " has been removed from Tasks.")
        } else{
            console.log("Item: "+task+" is not in Tasks.")
        }
        return this.tasks.length;
    }
}

let myTodo = new Todo();
myTodo.addTask("Q1");
myTodo.addTask("Q2");

myTodo.listAllTasks();

myTodo.deleteTask("Q1");
myTodo.deleteTask("Q5");