const TASKS = {
    spaceStone: {
        element: document.getElementById("space-stone"),
        divId: "space-stone",
        eventType: "click",
    },
    mindStone: {
        element: document.getElementById("mind-stone"),
        divId: "mind-stone",
        eventType: "click",
    },
    realityStone: {
        element: document.getElementById("reality-stone"),
        divId: "reality-stone",
        eventType: "mouseover",
    },
    powerStone: {
        element: document.getElementById("power-stone"),
        divId: "power-stone",
        eventType: "click",
    },
    timeStone: {
        element: document.getElementById("time-stone"),
        divId: "time-stone",
        eventType: "click",
    },
    soulStone: {
        element: document.getElementById("soul-stone"),
        divId: "soul-stone",
        eventType: "click",
    },
}


function getCompletedTasksFromStorage() {
    return JSON.parse(localStorage.getItem('completedTasks')) || []
}

function setTaskCompletedInStorage(task) {
    localStorage.setItem('completedTasks', JSON.stringify([...getCompletedTasksFromStorage(), task]))
}

function areAllTasksCompleted() {
    return Object.keys(TASKS).every((task => getCompletedTasksFromStorage().includes(task)))
}

function markTaskAsCompleted(task) {
    const div = document.getElementById(TASKS[task].divId)
    if(!div) return
    div.classList.add('infinity-stone-completed')
}

function onCompleteTask(task) {
    const tasksOnStorage = getCompletedTasksFromStorage()
    if(tasksOnStorage.includes(task)) return
    setTaskCompletedInStorage(task)
    markTaskAsCompleted(task)
    if(areAllTasksCompleted()) window.location.href = "form.html"
}

function init() {
    getCompletedTasksFromStorage().forEach(markTaskAsCompleted)

    Object.keys(TASKS).forEach(task => {
        const { element, eventType } = TASKS[task]
        if(!element) return

        element.addEventListener(eventType, () => {
            onCompleteTask(task)
        },{ once: true})
    })
}

init()
