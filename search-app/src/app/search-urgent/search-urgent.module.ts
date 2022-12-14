import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
// eslint-disable-next-line import/no-unresolved
import { UsaAccordionModule } from 'uswds-components'
import { SearchUrgentComponent } from './search-urgent.component'

@NgModule({
  imports: [CommonModule, UsaAccordionModule],
  declarations: [SearchUrgentComponent],
  exports: [SearchUrgentComponent],
})
export class SearchUrgentModule {}
