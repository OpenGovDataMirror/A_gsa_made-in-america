import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

// eslint-disable-next-line import/no-unresolved
import { UsaAccordionModule, USWDSDropdownModule } from 'uswds-components'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppComponent } from './app.component'
import { ThemeSwitcherModule } from './shared/theme-switcher/theme-switcher.module'
import { SearchResultModule } from './search-result/search-result.module'
import { SearchUrgentModule } from './search-urgent/search-urgent.module'
import { PaginationComponent } from './pagination/pagination.component'

@NgModule({
  declarations: [AppComponent, PaginationComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ThemeSwitcherModule,
    USWDSDropdownModule,
    UsaAccordionModule,
    SearchResultModule,
    SearchUrgentModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [PaginationComponent],
})
export class AppModule {}
