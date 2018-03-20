var tasksNum = 0; // number of user tasks

function addTask() {
    var taskText = document.getElementById('task');
    if (taskText.value === "") {return}
    var taskTable = document.getElementById("tasksTable");

    var newTaskRow = taskTable.insertRow(-1);
    var newTask = newTaskRow.insertCell(0);
    newTaskRow.addEventListener('click', changeState);
    newTaskRow.classList.toggle('todo');
    newTask.innerHTML = taskText.value;
    taskText.value = '';
    ++tasksNum;
    updateTasksNum();
    filter();
}

function changeState() {
    if (this.classList == 'todo') {
        --tasksNum;
    } else {
        ++tasksNum;
    }

    this.classList.toggle('done');
    this.classList.toggle('todo');

    updateTasksNum();
    filter();
}

function updateTasksNum() {
    var header = document.getElementById('taskNum');

    header.innerHTML = 'You have ' + tasksNum + ' things to do';
}

function filter() {
    var i = 0;
    var filterState = document.getElementById('filter').value;

    var tasksDone = document.getElementsByClassName('done');
    var tasksToDo = document.getElementsByClassName('todo');

    switch (filterState) {
        case ("Done tasks"):
            for (i = 0; i < tasksDone.length; ++i) {
                tasksDone[i].style.display = '';
            }
            for (i = 0; i < tasksToDo.length; ++i) {
                tasksToDo[i].style.display = 'none';
            }
            break;

        case ("ToDo tasks"):
            for (i = 0; i < tasksDone.length; ++i) {
                tasksDone[i].style.display = 'none';
            }
            for (i = 0; i < tasksToDo.length; ++i) {
                tasksToDo[i].style.display = '';
            }
            break;

        default:
            for (i = 0; i < tasksDone.length; ++i) {
                tasksDone[i].style.display = '';
            }
            for (i = 0; i < tasksToDo.length; ++i) {
                tasksToDo[i].style.display = '';
            }
    }
}

function clearDone() {
    var tasksDone = document.getElementsByClassName('done');

    while (tasksDone.length > 0) {
        tasksDone[0].parentElement.removeChild(tasksDone[0]);
    }
}