import { Component, Input } from '@angular/core'

@Component({
  selector: 'search-result',
  templateUrl: './search-result.component.html',
  styles: [],
})
export class SearchResultComponent {
  @Input() data: number
}
