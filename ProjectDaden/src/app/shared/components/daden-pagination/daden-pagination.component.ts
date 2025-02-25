import { Component, computed, EventEmitter, Input, input, Output, output, signal, Signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'daden-pagination',
  imports: [],
  templateUrl: './daden-pagination.component.html',
  styleUrl: './daden-pagination.component.scss'
})
export class DadenPaginationComponent {

  totalItems = input<number>(100);
  itemsPerPage = input<number>(10);
  pageChange = output<number>();

  // @Input() totalItems: number = 0; // Total number of items
  // @Input() itemsPerPage: number = 10; // Number of items per page
  // @Output() pageChange = new EventEmitter<number>(); // Event emitter for page change

  currentPage: WritableSignal<number> = signal<number>(1); // Current page

  totalPages: Signal<number> = computed(() => {
    return Math.ceil(this.totalItems() / this.itemsPerPage());
  });

  // get totalPages(): number {
  //   return Math.ceil(this.totalItems() / this.itemsPerPage());
  // }

  goToPage(page: number) {
    if (page < 1 || page > this.totalPages()) return; // Validate page number
    this.currentPage.set(page); // Set the current page page;
    this.pageChange.emit(this.currentPage()); // Emit the new page number
  }

  nextPage() {
    this.goToPage(this.currentPage() + 1);
  }

  prevPage() {
    this.goToPage(this.currentPage() - 1);
  }
}
