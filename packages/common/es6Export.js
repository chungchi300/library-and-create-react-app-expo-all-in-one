export function testEs6() {
  return "Test Es6 returning";
}

export function testSpreadOperator() {
  let a = {
    dd: "dd",
    ee: "ee"
  };
  let b = {
    bbb: "Search me by spread operator",
    ccc: "ddd"
  };
  return { ...a, ...b };
}
