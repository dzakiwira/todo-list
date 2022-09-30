import * as Render from './render';

// Modal
const projectModal = document.querySelector('#project-modal');
const openModal = document.querySelector('.add-project');
const closeModal = document.querySelector('.cancel');
const form = document.querySelector('.form');

// Main
const addTask = document.querySelector('.add-task');

// Listeners
form.addEventListener('submit', () => {
    Render.getUserProject();
})

openModal.addEventListener('click', () => {
    form.reset();
    projectModal.showModal();
})

closeModal.addEventListener('click', () => {
    form.reset();
    projectModal.close();
})

