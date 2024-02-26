const TASKS = {
    spaceStone: {
      element: document.getElementById('space-stone'),
      divId: 'space-stone',
    },
    mindStone: {
      element: document.getElementById('mind-stone'),
      divId: 'mind-stone',
    },
    realityStone: {
      element: document.getElementById('reality-stone'),
      divId: 'reality-stone',
    },
    powerStone: {
      element: document.getElementById('power-stone'),
      divId: 'power-stone',
    },
    timeStone: {
      element: document.getElementById('time-stone'),
      divId: 'time-stone',
    },
    soulStone: {
      element: document.getElementById('soul-stone'),
      divId: 'soul-stone',
    },
  };
  
  function getCompletedTasksFromStorage() {
    // TODO
    return JSON.parse(localStorage.getItem('completedTasks')) || [];
  }
  
  function setTaskCompletedInStorage(task) {
    // TODO
    localStorage.setItem(
      'completedTasks',
      JSON.stringify([...getCompletedTasksFromStorage(), task])
    );
  }
  
  function markTaskAsCompleted(task) {
    const div = document.getElementById(TASKS[task].divId);
    if (!div) return;
    div.classList.add('infinity-stone-completed');
    // TODO: add the class infinity-stone-completed
  }
  
  function onCompleteTask(task) {
    setTaskCompletedInStorage(task);
    markTaskAsCompleted(task);
    onAllTasksCompleted();
  }
  
  function onAllTasksCompleted() {
    const areAllTasksCompleted = Object.keys(TASKS).every((task) =>
      getCompletedTasksFromStorage().includes(task)
    );
    if (areAllTasksCompleted) window.location.href = 'form.html';
  }
  
  function createEventListeners() {
    // TODO
    const options = { once: true };
    const completedTasks = getCompletedTasksFromStorage();
    if (!completedTasks.includes('spaceStone')) {
      window.addEventListener(
        'keydown',
        (e) => {
          if (e.key === ' ') onCompleteTask('spaceStone');
        },
        options
      );
    }
    if (!completedTasks.includes('mindStone')) {
      TASKS.mindStone.element.addEventListener(
        'click',
        () => onCompleteTask('mindStone'),
        options
      );
    }
    if (!completedTasks.includes('realityStone')) {
      TASKS.realityStone.element.addEventListener(
        'mouseover',
        () => onCompleteTask('realityStone'),
        options
      );
    }
    if (!completedTasks.includes('powerStone')) {
      window.addEventListener(
        'resize',
        () => onCompleteTask('powerStone'),
        options
      );
    }
    if (!completedTasks.includes('timeStone')) {
      window.addEventListener('load', () => onCompleteTask('timeStone'), options);
    }
    if (!completedTasks.includes('soulStone')) {
      TASKS.soulStone.element.addEventListener(
        'click',
        () => onCompleteTask('soulStone'),
        options
      );
    }
  }
  
  getCompletedTasksFromStorage().forEach(markTaskAsCompleted);
  onAllTasksCompleted();
  createEventListeners();
  