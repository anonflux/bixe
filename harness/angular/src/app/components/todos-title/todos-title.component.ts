import { Component, Input } from '@angular/core';
import { TodoState } from '@bixe/harness/shared';

@Component({
  selector: 'bixe-todos-title',
  templateUrl: './todos-title.component.html',
})
export class TodosTitleComponent {
  @Input() state: TodoState = {} as TodoState;
}
