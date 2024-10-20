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
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/filtered-test-modules/ts-lib-mathjs-test-code-merged-entryfile.js:1105:7:1108:8
      var m = new SparseMatrix([
              [0, 0],
              [0, 0]
            ]);
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/filtered-test-modules/ts-lib-mathjs-test-code-merged-entryfile.js:1110:7:1110:30
      var invArg4_000 = [0, 2];
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/filtered-test-modules/ts-lib-mathjs-test-code-merged-entryfile.js:1111:7:1111:44
      var invArg4_00 = index(0, invArg4_000);
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/filtered-test-modules/ts-lib-mathjs-test-code-merged-entryfile.js:1112:7:1112:29
      var invArg4_01 = [1, 2];
      var this_obj = invArg4_01;
      var arg0 = m;
      var arg1 = invArg4_00;
      var arg2 = [1, 2];
      var arg3 = undefined;
      var actualResult = _setsubset(arg0, arg1, arg2, arg3);
      expect(actualResult._values["0"]).toBe(1);
      expect(actualResult._values["1"]).toBe(2);
      expect(actualResult._index["0"]).toBe(0);
      expect(actualResult._index["1"]).toBe(0);
      expect(actualResult._ptr["0"]).toBe(0);
      expect(actualResult._ptr["1"]).toBe(1);
      expect(actualResult._ptr["2"]).toBe(2);
      expect(actualResult._size["0"]).toBe(2);
      expect(actualResult._size["1"]).toBe(2);
    });

    test("invoc-loc:244:16:244:65-test:1", () => {
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/filtered-test-modules/ts-lib-mathjs-test-code-merged-entryfile.js:1:1:1:30
      var assert = require('assert');
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/filtered-test-modules/ts-lib-mathjs-test-code-merged-entryfile.js:2:1:2:30
      var math = require("../index");
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/lib/type/matrix/SparseMatrix.js:7:1:7:57
      var _setsubset = require("../lib/type/matrix/subset_module.js")._setsubset;
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/filtered-test-modules/ts-lib-mathjs-test-code-merged-entryfile.js:3:1:3:22
      var index = math.index;
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/filtered-test-modules/ts-lib-mathjs-test-code-merged-entryfile.js:5:1:5:41
      var SparseMatrix = math.type.SparseMatrix;
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/filtered-test-modules/ts-lib-mathjs-test-code-merged-entryfile.js:1105:7:1108:8
      var m = new SparseMatrix([
              [0, 0],
              [0, 0]
            ]);
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/filtered-test-modules/ts-lib-mathjs-test-code-merged-entryfile.js:1110:7:1110:30
      var invArg4_000 = [0, 2];
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/filtered-test-modules/ts-lib-mathjs-test-code-merged-entryfile.js:1111:7:1111:44
      var invArg4_00 = index(0, invArg4_000);
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/filtered-test-modules/ts-lib-mathjs-test-code-merged-entryfile.js:1112:7:1112:29
      var invArg4_01 = [1, 2];
      var this_obj = invArg4_01;
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/filtered-test-modules/ts-lib-mathjs-test-code-merged-entryfile.js:1113:7:1113:38
      m.subset(invArg4_00, invArg4_01);
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/filtered-test-modules/ts-lib-mathjs-test-code-merged-entryfile.js:1114:7:1119:10
      assert.deepEqual(
              m.toArray(), 
              [
                [1, 2],
                [0, 0]
              ]);
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/filtered-test-modules/ts-lib-mathjs-test-code-merged-entryfile.js:1121:7:1121:31
      var invArg5_1000 = [0, 2];
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/filtered-test-modules/ts-lib-mathjs-test-code-merged-entryfile.js:1122:7:1122:45
      var invArg5_10 = index(1, invArg5_1000);
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/filtered-test-modules/ts-lib-mathjs-test-code-merged-entryfile.js:1123:7:1123:29
      var invArg5_11 = [3, 4];
      var this_obj = invArg5_11;
      var arg0 = m;
      var arg1 = invArg5_10;
      var arg2 = [3, 4];
      var arg3 = undefined;
      var actualResult = _setsubset(arg0, arg1, arg2, arg3);
      expect(actualResult._values["0"]).toBe(3);
      expect(actualResult._values["1"]).toBe(1);
      expect(actualResult._values["2"]).toBe(4);
      expect(actualResult._values["3"]).toBe(2);
      expect(actualResult._index["0"]).toBe(1);
      expect(actualResult._index["1"]).toBe(0);
      expect(actualResult._index["2"]).toBe(1);
      expect(actualResult._index["3"]).toBe(0);
      expect(actualResult._ptr["0"]).toBe(0);
      expect(actualResult._ptr["1"]).toBe(2);
      expect(actualResult._ptr["2"]).toBe(4);
      expect(actualResult._size["0"]).toBe(2);
      expect(actualResult._size["1"]).toBe(2);
    });
  }
);

