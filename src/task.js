export default class Task {
  constructor(taskDesc, date) {
    this.taskDesc = taskDesc;
    this.date = date;
  }

  setTaskDesc(taskDesc) {
    this.taskDesc = taskDesc;
  }

  getTaskDesc() {
    return this.taskDesc;
  }

  setDate(date) {
    this.date = date;
  }

  getDate() {
    return this.date;
  }
}
