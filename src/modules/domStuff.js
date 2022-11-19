import { DomRenders } from "./domRenders";

let domRender = DomRenders();

//show add project form
let addProjectBtn = (() => {
  const addBtn = document.querySelector(".addProjectBtn");
  const addProject = document.querySelector(".project-form");
  const addTaskBtn = document.querySelector(".addTask");
  const closeAddTask = document.querySelector(".close");
  const addTask = document.querySelector(".addTodo");
  addBtn.addEventListener("click", () => {
    domRender.showProjectAddForm();
  });

  addProject.addEventListener("submit", (e) => {

    const name = document.querySelector("#projectIp");
    domRender.appendProject(name.value)
    domRender.hideProjectForm();
    e.preventDefault();
  });

  addTaskBtn.addEventListener("click", () => {
    console.log("clicked");
    domRender.showTaskModal();
  });

  closeAddTask.addEventListener("click", () => {
    domRender.hideTaskModal();
  });

  addTask.addEventListener("submit", () => {
    domRender.hideTaskModal();
  });
})();
