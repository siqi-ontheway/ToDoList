## Recorded Demo Video
https://drive.google.com/file/d/1gaIPr5t3Y_-3KT9GEMCd2EZ3fWHjB8tQ/view?usp=sharing
## Running the project
 - Install node.js and npm
 - git clone this repository
 - Install libraries  **yarn add react-beautiful-dnd**, **npm install @auth0/auth0-react**
 - Start app **yarn start**
 - Go to http://localhost:3000# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Features
- User can add and delete tasks
- Users can mark tasks as complete
- Users can edit incomplete tasks
- Users can filter tasks by status
- Persistence of data
- User authentication
- Users can move tasks up and down

## Technical Details
In this project I mainly use React hooks, so useEffect and useState in the ToDoList.js to manipuilate todo list. Inside TodoList component, there are two other component ToDoForm and ToDos. ToDoForm is used for adding items. ToDos is used to cache/store items for displaying, editing and deleting.

To add/edit/delete items, I used the array todos to store the newly added, edited or deleted items.

To make up item as complete, I used the onClick event so that when I click on the item, item property todo.isComplete will be changed to !todo.isComplete.

To filter item status (complete/in progress), I created a filter with three status "All", "In Progress" and "Completed" and apply the active filter to the todo items before the map functionality.

To drag and drop items, I used React DnD library - DragDropContext, Droppable and Draggable tags to wrap todo items. React DnD is a set of React utilities to help you build complex drag and drop interfaces while keeping your components decoupled. Please refer to the official document here: https://react-dnd.github.io/react-dnd/about

To achieve persistence of data, I used localStorage to store todos locally whenever the app is reloaded. The main function used is 
```
useEffect(()=>{
    getLocalTodo();
  },[]);
  useEffect(()=>{
    saveLocalTodos();
  },[todos]);
```

To authenticate users, I used auth0 https://auth0.com/ to realize the feature for user login, logout and signup. If you want to use this functionality, probably you will need to register and auth0 account from the link above and get your own Domain and clientID to make it work.
## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
