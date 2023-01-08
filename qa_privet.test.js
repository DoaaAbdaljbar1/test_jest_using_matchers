const myDataCheck = require("./qa_privet");
test("to check if the length of my array is 7 "
, () => {
expect(myDataCheck.length).toBe(7);
});
test("to check if my array contains the name ofahmad"
, () => {
expect(myDataCheck).toContain("ahmad");
});
test("to check if my array dose not contains thename abed"
, () => {
expect(myDataCheck).not.toContain("abed");
});
test(" tocheck if my array dosent have any number inside it"
, () => {
for (let i = 0; i < myDataCheck.length; i++) {
expect(isNaN(myDataCheck[i])).toBe(true)}
});