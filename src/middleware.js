import {
  GO,
  GO_BACK,
  GO_FORWARD,
  PUSH,
  REPLACE,
} from "./redux-first-routing/constants.js";

const routerMiddleware = (history) => () => (next) => (action) => {
  switch (action.type) {
    case PUSH:
      history.push(action.payload);
      break;
    case REPLACE:
      history.replace(action.payload);
      break;
    case GO:
      history.go(action.payload);
      break;
    case GO_BACK:
      history.goBack();
      break;
    case GO_FORWARD:
      history.goForward();
      break;
    default:
      return next(action);
  }
};

export default routerMiddleware;
