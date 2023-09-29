import { StoreConfig } from '@bixe/package';
import * as TodosActions from './actions';
import * as TodosHandlers from './handlers';
import { TodoState } from './state';

const storeDefinition = {
  name: TodosActions.Intent,
  initialState: new TodoState(),
  selectors: {
    complete$: (state: TodoState) => state.complete,
    incomplete$: (state: TodoState) => state.incomplete,
  },
  handlers: {
    [TodosActions.CreateTodo.Type]: TodosHandlers.createTodo.bind(this),
    [TodosActions.UpdateTodo.Type]: TodosHandlers.updateTodo.bind(this),
    [TodosActions.SetCurrentTodo.Type]: TodosHandlers.setCurrentTodo.bind(this),
    [TodosActions.RemoveTodo.Type]: TodosHandlers.removeTodo.bind(this),
  },
} as any;


export const getStoreConfig = (scope?: string) => {

  if (scope) {
    storeDefinition.scope = scope;
  }

  return new StoreConfig(storeDefinition);
}