import { Directive, inject } from "@angular/core";
import { GridComponent } from "@progress/kendo-angular-grid";
import { GroupInfoService } from "@progress/kendo-angular-grid/grouping/group-info.service";
import { SelectionService } from "@progress/kendo-angular-grid/selection/selection.service";

@Directive({
  selector: "kendo-grid[grid-directive]"
})
export class GridDirective {

  constructor(private readonly kendoGrid: GridComponent) {

    const test = inject(GridComponent)
    console.debug("GridDirective _GridComponent_ compare instance => ", this.kendoGrid === test);
    console.debug("GridDirective _GridComponent_ compare type => ", GridComponent === this.kendoGrid.constructor);

    const test1 = GroupInfoService;
    const selectionServiceFromGrid = this.kendoGrid["selectionService"];
    const selectionServiceFromGridSelectionServiceCtor = inject(selectionServiceFromGrid.constructor);
    const selectionServiceFromType = inject(SelectionService, { optional: true });

    console.debug("GridDirective _SelectionService_ of grid => ", this.kendoGrid["selectionService"]);
    console.debug("GridDirective _SelectionService_ inject from grid selectionService constructor => ", selectionServiceFromGridSelectionServiceCtor);
    console.debug("GridDirective _SelectionService_ inject from _SelectionService_ type => ", selectionServiceFromType);
    console.debug("GridDirective _SelectionService_ compare instance => ", selectionServiceFromGrid === selectionServiceFromGridSelectionServiceCtor);
    console.debug("GridDirective _SelectionService_ compare type => ", SelectionService === selectionServiceFromGrid.constructor);
  }
}
