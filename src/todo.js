import Project from "./projects";
import Task from "./task";

export default class Todo {
    constructor() {
        this.projects = [];
    }

    addProject(newProject) {
        this.projects.push(newProject);
    }

    getProjects() {
        return this.projects;
    }
    
    deleteProject(projectName) {
        const projectToDel = this.projects.find(project => project.getName() === projectName);
        this.projects.splice(this.projects.indexOf(projectToDel), 1);
    }

}