describe(
  "../evaluationProjects/ts-lib-mathjs/lib/utils/number.js:10:20:12:1",
  () => {
    test("invoc-loc:56:21:56:37-test:0", () => {
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/lib/type/complex/Complex.js:3:1:3:53
      var isNumber = require("../lib/utils/number").isNumber;
      var options = null;
      var arg0 = undefined;
      var actualResult = isNumber(arg0);
      var expectedResult = false;
      expect(expectedResult).toBe(actualResult);
    });

    test("invoc-loc:56:21:56:37-test:1", () => {
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/lib/type/complex/Complex.js:3:1:3:53
      var isNumber = require("../lib/utils/number").isNumber;
      var arg0 = 3;
      var actualResult = isNumber(arg0);
      var expectedResult = true;
      expect(expectedResult).toBe(actualResult);
    });

    test("invoc-loc:56:21:56:37-test:2", () => {
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/lib/type/complex/Complex.js:3:1:3:53
      var isNumber = require("../lib/utils/number").isNumber;
      var arg0 = 4;
      var actualResult = isNumber(arg0);
      var expectedResult = true;
      expect(expectedResult).toBe(actualResult);
    });

    test("invoc-loc:56:21:56:37-test:3", () => {
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/lib/type/complex/Complex.js:3:1:3:53
      var isNumber = require("../lib/utils/number").isNumber;
      var arg0 = 15;
      var actualResult = isNumber(arg0);
      var expectedResult = true;
      expect(expectedResult).toBe(actualResult);
    });

    test("invoc-loc:56:21:56:37-test:4", () => {
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/lib/type/complex/Complex.js:3:1:3:53
      var isNumber = require("../lib/utils/number").isNumber;
      var arg0 = 5;
      var actualResult = isNumber(arg0);
      var expectedResult = true;
      expect(expectedResult).toBe(actualResult);
    });
  }
);

