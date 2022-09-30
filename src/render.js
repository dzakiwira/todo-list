import Project from "./projects";
import Task from "./task";
import Todo from "./todo";

const projectList = new Todo();

projectList.addProject(new Project('Project 1', 'Test test test test'));
projectList.addProject(new Project('Project 2', 'Test test test test'));

loadProjects(projectList);

export function loadProjects(projects) {
    const projectSidebarDiv = document.querySelector('.projects'); 
    projectSidebarDiv.innerHTML = '';

    projects.getProjects().forEach((project, index) => {
        const newProject = document.createElement('div');
        newProject.classList.add('project-nav');
        newProject.dataset.value = index;
        newProject.addEventListener('click', () => {
            loadMain(project)
        });
        newProject.textContent = project.getName();
        project.addTask(new Task('Example Task', 'Jan 1 2023'));
        project.addTask(new Task('Example Task 2', 'Jan 1 2023'));
        projectSidebarDiv.appendChild(newProject);
    });

    console.log(projectList);
}

function loadMain(project) {
    const mainTitle = document.querySelector('.main-title');
    const mainDesc = document.querySelector('.main-desc');
    
    mainTitle.textContent = project.getName();
    mainDesc.textContent = project.getDesc();
    loadTasks(project);
}

function loadTasks(project) {
    const mainContent = document.querySelector('.main-content');
    mainContent.innerHTML = '';

    project.getTaskList().forEach((task, index) => {
        const newTask = document.createElement('div');
        
        newTask.classList.add('task');
        newTask.dataset.value = index
        newTask.textContent = task.getTaskDesc();
        mainContent.appendChild(newTask);
    });
};

export function getUserProject() {
    const projectName = document.getElementById('project').value;
    const projectDesc = document.getElementById('description').value;
    
    addNewProject(projectName, projectDesc);
    loadProjects(projectList);
}

function addNewProject(projectName, projectDesc) {
    projectList.addProject(new Project(projectName, projectDesc));
}