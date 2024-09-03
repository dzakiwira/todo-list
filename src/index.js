import * as Render from "./render";

// Modal
const projectModal = document.querySelector("#project-modal");
const openProjectModal = document.querySelector(".add-project");
const closeProjectModal = document.querySelector(".cancel-project");
const projectForm = document.querySelector(".project-form");

// Modal
const taskModal = document.querySelector("#task-modal");
const openTaskModal = document.querySelector(".add-task");
const closeTaskModal = document.querySelector(".cancel-task");
const taskForm = document.querySelector(".task-form");

// Listeners
projectForm.addEventListener("submit", () => {
  Render.getUserProject();
});

openProjectModal.addEventListener("click", () => {
  projectForm.reset();
  projectModal.showModal();
});

closeProjectModal.addEventListener("click", () => {
  projectForm.reset();
  projectModal.close();
});

taskForm.addEventListener("submit", () => {
  Render.getUserTask();
});

openTaskModal.addEventListener("click", () => {
  taskForm.reset();
  taskModal.showModal();
});

closeTaskModal.addEventListener("click", () => {
  taskForm.reset();
  taskModal.close();
});
