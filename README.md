As mentioned, Avengers infinity war is a story of events, cookies and local storage. So it's your time to shine! Marvel was very kind and provided us with the `<script />` of the movie. Sadly, some pieces got erased, and we need your help restoring it. Complete the following tasks and watch the story unveil before your eyes!

# Task 1: Collect all infinity stones

The story needs you to collect all the infinity stones. In the UI, you can find 6 buttons, each for each stone. Time to start acting, open up `index.js`.

Each stone needs a unique task to be performed in order to collect it.

- The space stone needs the user to hit the spacebar once
- The mind stone needs the user to click on it
- The reality stone needs the window to resize
- The power stone needs the cursor to pass on top of it
- The time stone needs the window to load
- The soul stone needs the user to focus on it.

1. Add the correct event listeners in the create event listeners function. Use the `onCompleteTask` function as the listener's callback (watch out for the args)!
2. Write the `getCompletedTasksFromStorage` and `setTaskCompletedInStorage` functions to store and get the completed tasks from the storage.

# Task 2: It's snapping time

Now that you have all the infinity stones, it's time to action! You can log in using two roles:

- username: thanos - password: thanos
- username: avengers - password: avengers

1. Add two event listeners on the username and password inputs that clear the error's content when they're focused.
2. Add two event listeners on the username and password inputs that run the validation functions when they lose focus.
3. Add an event listener to submit the function, running the `onSubmit` function.
4. Add the correct event listeners to the `onSubmit` function to run the `onSnap function` when the button is called.
5. Write the code for the `saveAvengersOnStorage` function to save the Avengers on storage.
6. Write the code for the `displayAvengers` function to read the avengers from the storage, and add under the `avengersContainer` div this code for each avenger:
   `<div class="card">`
   `<p class="avenger-text">${avenger}</p>`
   `</div>`

Are you ready for this adventure? Avengers, ASSEMBLE!
