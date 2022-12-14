import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'usa-pagination',
  templateUrl: './pagination.component.html',
  styles: [],
})
export class PaginationComponent implements OnInit {
  @Input() current: number

  @Input() last: number

  @Output() movePage = new EventEmitter<boolean>()

  renderedButtons: number[]

  static handleButtonValues = (buttonValues, updatedButtons) => {
    if (buttonValues > 3) {
      return updatedButtons
    }
    if (buttonValues > 2) {
      return updatedButtons
    }
    return []
  }

  ngOnInit(): void {
    this.renderedButtons = PaginationComponent.handleButtonValues(
      this.last,
      [2, 3]
    )
  }

  ngDoCheck() {
    this.renderedButtons = PaginationComponent.handleButtonValues(
      this.last,
      this.renderedButtons
    )
  }

  goTo(index) {
    this.current = index
    window.scroll(0, 0)

    if ([1, 2].includes(this.current)) {
      this.renderedButtons = PaginationComponent.handleButtonValues(
        this.last,
        [2, 3]
      )
    } else if ([this.last, this.last - 1].includes(this.current)) {
      this.renderedButtons =
        this.last > 3 ? [this.last - 2, this.last - 1] : [2]
    } else {
      this.renderedButtons = [this.current - 1, this.current, this.current + 1]
    }
    this.movePage.emit(index)
  }
}
