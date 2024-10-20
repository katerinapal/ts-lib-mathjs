describe(
  "../evaluationProjects/ts-lib-mathjs/lib/expression/node/ConstantNode.js:159:38:167:3",
  () => {
    test("invoc-loc:258:12:258:34-test:0", () => {
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/filtered-test-modules/ts-lib-mathjs-test-code-merged-entryfile.js:4:1:4:33
      var math = require("../index.js");
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/filtered-test-modules/ts-lib-mathjs-test-code-merged-entryfile.js:6:1:6:52
      var ConstantNode = math.expression.node.ConstantNode;
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/filtered-test-modules/ts-lib-mathjs-test-code-merged-entryfile.js:181:7:181:33
      var a = new ConstantNode(2);
      var this_obj = a;
      var arg0 = undefined;
      var actualResult = this_obj._toString(arg0);
      var expectedResult = "2";
      expect(expectedResult).toBe(actualResult);
    });
  }
);

