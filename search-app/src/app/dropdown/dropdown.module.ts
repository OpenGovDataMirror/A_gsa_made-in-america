import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
// eslint-disable-next-line import/no-unresolved
import { USWDSDropdownModule } from 'uswds-components'
import { DropdownComponent } from './dropdown.component'

@NgModule({
  imports: [CommonModule, USWDSDropdownModule],
  declarations: [DropdownComponent],
  exports: [DropdownComponent],
})
export class DropdownModule {}
