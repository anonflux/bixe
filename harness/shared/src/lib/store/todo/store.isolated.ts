import { Store } from '@bixe/package';
import { TodoState } from './state';
import { getStoreConfig } from './store.config';

export const TodoStoreIsolated = new Store<TodoState>(
  getStoreConfig('isolated')
);
