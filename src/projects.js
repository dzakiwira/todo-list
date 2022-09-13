export default class Project {
    constructor (name, desc) {
        this.name = name;
        this.desc = desc;
        this.taskList = [];
    }

    setName(name) {
        this.name = name;
    }

    setDesc(desc) {
        this.desc = desc;
    }

    addTask(task) {
        this.taskList.push(task);
    }

    deleteTask(delTask) {
        this.taskList = this.taskList.filter(task => task !== delTask);
    }

    getName() {
        return this.name;
    }

    getDesc() {
        return this.desc;
    }

    gettaskList() {
        return this.taskList;
    }
}