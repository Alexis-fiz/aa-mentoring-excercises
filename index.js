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
  
  function markTaskAsCompleted(task) {
    const button = document.getElementById(TASKS[task].divId);
    if (!button) return;
    button.classList.add('infinity-stone-completed');
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

  function getCompletedTasksFromStorage() {
    return JSON.parse(localStorage.getItem('completedTasks')) || [];
  }
  
  function setTaskCompletedInStorage(task) {
    localStorage.setItem(
      'completedTasks',
      JSON.stringify([...getCompletedTasksFromStorage(), task])
    );
  }
  
  function createEventListeners() {
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
      window.addEventListener(
        'resize',
        () => onCompleteTask('realityStone'),
        options
      );
    }
    if (!completedTasks.includes('powerStone')) {     
      TASKS.powerStone.element.addEventListener(
        'mouseover',
        () => onCompleteTask('powerStone'),
        options
      );
    }
    if (!completedTasks.includes('timeStone')) {
      window.addEventListener('load', () => onCompleteTask('timeStone'), options);
    }
    if (!completedTasks.includes('soulStone')) {
      TASKS.soulStone.element.addEventListener(
        'focus',
        () => onCompleteTask('soulStone'),
        options
      );
    }
  }
  
  getCompletedTasksFromStorage().forEach(markTaskAsCompleted);
  onAllTasksCompleted();
  createEventListeners();
  