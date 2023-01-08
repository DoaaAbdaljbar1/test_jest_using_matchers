const mytest = require("./say_s");

test(" check if my array first element is larger than 1"
, () => {
for (let i = 0; i < mytest.length; i++) {
expect(mytest[0]).toBeLessThanOrEqual(3)
}
});
test(" check if my String have substring inside it"
, () => {
let fullName = "ahmad Mohammad ali"
expect(fullName).toMatch(/ahmad/)
});