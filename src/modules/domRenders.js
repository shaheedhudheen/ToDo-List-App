import projectSvg from "../assets/paperclip.svg";

const DomRenders = () => {
  const projectForm = document.querySelector(".project-form");
  const addBtn = document.querySelector(".addProjectBtn");
  const todoModal = document.querySelector(".modal-container");

  const projectList = document.querySelector(".projectList");

  const showProjectAddForm = () => {
    projectForm.style.visibility = "visible";
    addBtn.style.display = "none";
  };

  const hideProjectForm = () => {
    projectForm.style.visibility = "hidden";
    addBtn.style.display = "block";
  };

  const showTaskModal = () => {
    todoModal.style.display = "block";
  };
  const hideTaskModal = () => {
    todoModal.style.display = "none";
  };

  const appendProject = (projectName) => {
    let list = document.createElement("li");

    list.innerHTML = `<img src="${projectSvg}"/> ${projectName}`;
    list.classList.add("project", "sidebar-item");

    projectList.appendChild(list);
  };


  return {
    showProjectAddForm,
    hideProjectForm,
    showTaskModal,
    hideTaskModal,
    appendProject,
  };
};

export { DomRenders };
