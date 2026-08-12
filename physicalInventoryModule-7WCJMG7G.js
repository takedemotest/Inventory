import * as e from "@angular/core";
var i = class n {
    static \u0275fac = function (t) { return new (t || n); };
    static \u0275cmp = e.\u0275\u0275defineComponent({ type: n, selectors: [["physical-inventory"]], decls: 6, vars: 0, template: function (t, a) {
            t & 1 && (e.\u0275\u0275domElementStart(0, "p"), e.\u0275\u0275text(1, "Categories: Feed / Seed, Fertilizer, Medicine, Equipment, Fuel."), e.\u0275\u0275domElementEnd(), e.\u0275\u0275domElementStart(2, "p"), e.\u0275\u0275text(3, ` Core Metrics Tracked: Current Quantity, Reorder Level / Threshold, Unit (kg, L, Vials, Units).
`), e.\u0275\u0275domElementEnd(), e.\u0275\u0275domElementStart(4, "p"), e.\u0275\u0275text(5, ` Primary Statuses: OK, Low Stock, Out of Stock, Maintenance Due.
`), e.\u0275\u0275domElementEnd());
        }, encapsulation: 2 });
};
export { i as PhysicalInventoryComponent };
