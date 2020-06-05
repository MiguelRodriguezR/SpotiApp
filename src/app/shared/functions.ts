import {from} from "rxjs/index";
import {bufferCount} from "rxjs/internal/operators";

export function createGrid(service, parent) {
  service.subscribe((rel: any) => {
    parent.columns = [];
    const ent = rel;
    const colQuantity = Math.floor(parent.container.nativeElement.offsetWidth / parent.cardWidth);
    const sizeArray = Math.ceil(ent.length / colQuantity);
    from(ent).pipe(bufferCount(sizeArray)).subscribe(col => {
      parent.columns.push(col);
    });
  }, err => {
  }, () => {
    parent.service.loading = false;
  });
}
