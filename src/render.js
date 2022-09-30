import Project from "./projects";
import Task from "./task";
import Todo from "./todo";

export function loadProjects(projects) {
    projects.getProjects().forEach((project) => {
        const projectSidebarDiv = document.querySelector('.projects'); 
        const newProject = document.createElement('div');
        newProject.textContent = project.getName();
        projectSidebarDiv.appendChild(newProject);
    });
}

export function loadTasks(projectName) {

}
