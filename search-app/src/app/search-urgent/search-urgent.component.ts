import { Component, Input } from '@angular/core'

@Component({
  selector: 'search-urgent',
  templateUrl: './search-urgent.component.html',
  styles: [],
})
export class SearchUrgentComponent {
  @Input() data: number
}
