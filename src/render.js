import Project from "./projects";
import Task from "./task";
import Todo from "./todo";

const projectList = new Todo();

let currentProject = "";

projectList.addProject(new Project("Shopping List", "For halloween party"));
projectList.addProject(
  new Project("LeetCode", "Interview coming up must be competent"),
);

loadProjects(projectList);

export function loadProjects(projects) {
  const projectSidebarDiv = document.querySelector(".projects");
  projectSidebarDiv.innerHTML = "";

  projects.getProjects().forEach((project, index) => {
    const newProject = document.createElement("div");
    newProject.classList.add("project-nav");
    newProject.dataset.value = index;
    newProject.addEventListener("click", () => {
      currentProject = project.getName();
      loadMain(project);
    });
    newProject.textContent = project.getName();
    projectSidebarDiv.appendChild(newProject);
  });
  console.log(projectList);
}

function loadMain(project) {
  const mainTitle = document.querySelector(".main-title");
  const mainDesc = document.querySelector(".main-desc");

  mainTitle.textContent = project.getName();
  mainDesc.textContent = project.getDesc();
  mainDesc.style.borderBottom = "solid";
  loadTasks(project);
}

function loadTasks(project) {
  const mainContent = document.querySelector(".main-content");
  mainContent.innerHTML = "";

  project.getTaskList().forEach((task, index) => {
    const newTask = document.createElement("div");
    newTask.classList.add("task");
    newTask.dataset.value = index;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "task-status";
    checkbox.id = "task-status";

    const taskDesc = document.createElement("div");
    taskDesc.textContent = task.getTaskDesc();
    taskDesc.contentEditable = "true";

    const taskDate = document.createElement("div");
    taskDate.classList.add("task-date");
    taskDate.textContent = task.getDate();

    const deleteTask = document.createElement("div");
    deleteTask.classList.add("delete-task");
    deleteTask.innerHTML +=
      '<span class="material-symbols-outlined">delete</span>';

    const leftTask = document.createElement("div");
    leftTask.classList.add("left-task");
    const rightTask = document.createElement("div");
    rightTask.classList.add("right-task");

    leftTask.appendChild(checkbox);
    leftTask.appendChild(taskDesc);
    rightTask.appendChild(taskDate);
    rightTask.appendChild(deleteTask);
    newTask.appendChild(leftTask);
    newTask.appendChild(rightTask);
    mainContent.appendChild(newTask);
  });
}

export function getUserProject() {
  const projectName = document.getElementById("project").value;
  const projectDesc = document.getElementById("description").value;

  addNewProject(projectName, projectDesc);
  loadProjects(projectList);
}

function addNewProject(projectName, projectDesc) {
  projectList.addProject(new Project(projectName, projectDesc));
}

export function getUserTask() {
  const taskDesc = document.getElementById("todo").value;
  const taskDate = document.getElementById("due-date").value;

  addNewTask(taskDesc, taskDate);
  loadTasks(projectList.getProject(currentProject));
}

function addNewTask(taskDesc, date) {
  projectList.getProject(currentProject).addTask(new Task(taskDesc, date));
}
