As we mentioned, Avengers infinity war is practically a story of events, cookies and local storage. So it's your time to shine. Marvel was very kind and provided us with the `<script />` of the movie. Sadly, some pieces got erased and we need your help to restore it. Complete the following tasks and watch the story unveil before your eyes!

# Task 1: Collect all infinity stones
The story begins with the goal of collecting all the infinity stones. In the UI you can find 6 buttons, each one for each stone. Time to start acting, open up `index.js`.

Each stone needs a unique task to be performed, in order to collect it.
- The space stone needs the user to hit the spacebar once
- The mind stone needs the user to click one it (since some minds just click...)
- The reality stone needs the window to resize
- The power stone needs the cursor to pass on top of it
- The time stone needs the window to load
- The soul stone needs the user to really focus on it.

Once a task has been completed run the `onCompleteTask` function with the task name as an argument. Additionally, change the `markTaskAsCompleted` function to add the 'infinity-stone-completed' class on the completed button.

Finally, since you can't lose your progress you need to amend the `getCompletedTasksFromStorage` and `setTaskCompletedInStorage` functions to store the completedTasks in the storage.

# Task 2: It's snapping time
Now that you have all the infinity stones, it's time to get into action. Pick your role:
- username: thanos - password: thanos
- username: avengers - password: avengers

First of all, we need to make sure you can log in. On the form
- Make sure when you focus on the username and password fields, that it gets empty
- Make sure when you lose focus from the fields, that the valiUsername and validPassword functions run

Important! A function needs to submit, so make sure that when the function gets submited, the `onSubmit` function gets called. Speaking of `onSubmit` you might need to some changes there as well. As you can see it creates a button for the user depending on their role... but the button is not listening to anything! Make sure that the button calls the `onSnap` function when clicked.

The `onSnap` function is what truly matters: it can either cut the world in half, or restore it... well that's what it's supposed to be doing anyway... as right now it is not saving anything in the storage. So change the `saveAvengersOnStorage` function to store the avengers on the storage.

Finally, we need to see what we created! That means finalising the `displayAvengers` function. We need this function to:
- Read the avengers from the storage
- For each avengers we want to create a div of the following structure: 
   `<div class="card">`
        `<p class="avenger-text">${avenger}</p>`
    `</div>`
- Finally, append these divs on the `avengersContainer` div

