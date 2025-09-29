const inputTask = document.getElementById("inputTask");
const sendTask = document.getElementById("sendTask");
const taskList = document.querySelector(".taskList");

const addTask = () => {
  const item = document.createElement("div");
  item.className = "task";
  item.innerHTML = `<p class="description">${inputTask.value}</p><input type="button" value="&#65794" class="delete">`;
  taskList.appendChild(item);
  inputTask.value = "";
};

taskList.addEventListener("click", function (event) {
  let target = event.target;
  if (target.tagName && ".delete") {
    target.closest(".task").remove();
  }
});

sendTask.addEventListener("click", () => {
  addTask();
});

inputTask.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});
