import * as ut from "../../unit-testing"

test("return button html element", () => {
   expect(ut.button("test").tagName).toBe("BUTTON");
})