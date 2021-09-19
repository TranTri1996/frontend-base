const logger = store => next => action => {
  // eslint-disable-next-line no-console
  console.group(action.type);
  let result = next(action);
  // eslint-disable-next-line no-console
  console.log('next state', store.getState());
  // eslint-disable-next-line no-console
  console.groupEnd();
  return result;
};

export default logger;