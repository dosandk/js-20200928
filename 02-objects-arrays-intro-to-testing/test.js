describe("Logical Operators", function () {

  it("returnTrue0", function () {
    assert(returnTrue0(true));
  });

  it("returnTrue1", function () {
    assert(returnTrue1("fooo"));
  });

  it("returnTrue2", function () {
    assert(returnTrue2(NaN));
  });

  it("returnTrue3", function () {
    assert(returnTrue3([], 0, []));
  });

  it("returnTrue4", function () {
    assert(returnTrue4(2 ** 53 - 1));
  });

  it("returnTrue5", function () {
    assert(returnTrue5([0]));
  });

  it("returnTrue6", function () {
    assert(returnTrue6([0]));
  });

  it("returnTrue7", function () {
    assert(returnTrue7(-0, 0));
  });

});
