const redux = require("redux");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
//action
//const action = {};
//action type
const ADD_TASK = "ADD_TASK";
const ADD_COMPLETED = "ADD_COMPLETED";
//action creator
const actionCreator = (task) => {
  return {
    type: ADD_TASK,
    payload: task,
  };
};
const addCompleted = () => {
  return {
    type: "ADD_COMPLETED",
  };
};
const taskState = {
  tasks: [],
};
const completedState = {
  completed: 50,
};
const reducerCompleted = (state = completedState, action) => {
  switch (action.type) {
    case ADD_COMPLETED:
      return {
        ...state,
        completed: state.completed - 1,
      };

    default:
      return state;
  }
};
const reducerTasks = (state = taskState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };

    default:
      return state;
  }
};
const rootReducer = combineReducers({ reducerCompleted, reducerTasks });
const store = createStore(rootReducer);
console.log("initial state", store.getState());
store.subscribe(() => console.log("state updated", store.getState()));
store.dispatch(actionCreator("new task"));
store.dispatch(actionCreator("other task"));
store.dispatch(addCompleted());
store.dispatch(addCompleted());
store.dispatch(addCompleted());
store.dispatch(addCompleted());
