import * as TodosActions from './actions';

const calcProps = (patch: any) => {
  const list = patch.list || [];
  const complete = list.filter((todo: any) => todo.status === 'complete').length;
  const incomplete = Math.max(0, list.length - complete);
  return {
    ...patch,
    complete,
    incomplete,
  };
};

const actuallyCreateTodo = (ctx: any, action: any) => {
  const state = ctx.getState();
  action.status = 'incomplete';
  action.id = state.id++;

  const stateToPatch = calcProps({
    list: [...state.list, { ...action }],
  });

  return ctx.patchState(stateToPatch);
};

export const setCurrentTodo = (ctx: any, action: any) => {
  return ctx.patchState({
    currentTodo: action.todo,
  });
};

export const createTodo = (ctx: any, action: any) => {
  ctx.dispatch(new TodosActions.SetCurrentTodo(''));
  if (action.delay) {
    setTimeout(() => {
      actuallyCreateTodo(ctx, action);
    }, 3000);
  } else {
    actuallyCreateTodo(ctx, action);
  }
};

export const updateTodo = (ctx: any, action: any) => {
  const updatedList = ctx
    .getState()
    .list.map((todo: any) =>
      !isNaN(todo.id) && todo.id === action.id ? { ...todo, ...action } : todo
    );

  const stateToPatch = calcProps({
    list: updatedList,
  });

  return ctx.patchState(stateToPatch);
};

export const removeTodo = (ctx: any, action: any) => {
  ctx.patchState(
    calcProps({
      list: ctx.getState().list.filter((todo: any) => todo.id !== action.id),
    })
  );
};
