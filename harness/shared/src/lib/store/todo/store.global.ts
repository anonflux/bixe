import { Store } from '@bixe/store';
import { TodoState } from './state';
import { getStoreConfig } from './store.config';

export const TodoStoreGlobal = new Store<TodoState>(
  getStoreConfig()
);
