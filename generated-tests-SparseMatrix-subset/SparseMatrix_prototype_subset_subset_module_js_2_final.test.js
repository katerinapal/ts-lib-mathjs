describe(
  "../evaluationProjects/ts-lib-mathjs/lib/type/matrix/subset_module.js:9:20:88:3",
  () => {
    test("invoc-loc:244:16:244:65-test:0", () => {
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/filtered-test-modules/ts-lib-mathjs-test-code-merged-entryfile.js:2:1:2:30
      var math = require("../index");
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/lib/type/matrix/SparseMatrix.js:7:1:7:57
      var _setsubset = require("../lib/type/matrix/subset_module.js")._setsubset;
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/filtered-test-modules/ts-lib-mathjs-test-code-merged-entryfile.js:3:1:3:22
      var index = math.index;
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/filtered-test-modules/ts-lib-mathjs-test-code-merged-entryfile.js:5:1:5:41
      var SparseMatrix = math.type.SparseMatrix;
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/filtered-test-modules/ts-lib-mathjs-test-code-merged-entryfile.js:1087:7:1090:8
      var m = new SparseMatrix([
              [0, 0],
              [0, 1]
            ]);
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/filtered-test-modules/ts-lib-mathjs-test-code-merged-entryfile.js:1092:7:1092:34
      var invArg3_00 = index(2, 2);
      var this_obj = invArg3_00;
      var arg0 = m;
      var arg1 = invArg3_00;
      var arg2 = 2;
      var arg3 = 1;
      var actualResult = _setsubset(arg0, arg1, arg2, arg3);
      expect(actualResult._values["0"]).toBe(1);
      expect(actualResult._values["1"]).toBe(1);
      expect(actualResult._values["2"]).toBe(1);
      expect(actualResult._values["3"]).toBe(1);
      expect(actualResult._values["4"]).toBe(1);
      expect(actualResult._values["5"]).toBe(2);
      expect(actualResult._index["0"]).toBe(2);
      expect(actualResult._index["1"]).toBe(1);
      expect(actualResult._index["2"]).toBe(2);
      expect(actualResult._index["3"]).toBe(0);
      expect(actualResult._index["4"]).toBe(1);
      expect(actualResult._index["5"]).toBe(2);
      expect(actualResult._ptr["0"]).toBe(0);
      expect(actualResult._ptr["1"]).toBe(1);
      expect(actualResult._ptr["2"]).toBe(3);
      expect(actualResult._ptr["3"]).toBe(6);
      expect(actualResult._size["0"]).toBe(3);
      expect(actualResult._size["1"]).toBe(3);
    });
  }
);

