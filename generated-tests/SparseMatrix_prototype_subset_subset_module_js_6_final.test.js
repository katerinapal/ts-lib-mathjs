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
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/filtered-test-modules/ts-lib-mathjs-test-code-merged-entryfile.js:1238:7:1243:10
      var m = new SparseMatrix(
              [
                [0, 0, 0],
                [0, 0, 0],
                [0, 0, 0]
              ]);
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/filtered-test-modules/ts-lib-mathjs-test-code-merged-entryfile.js:1245:7:1245:31
      var invArg12_000 = [2, 4];
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/filtered-test-modules/ts-lib-mathjs-test-code-merged-entryfile.js:1246:7:1246:31
      var invArg12_001 = [2, 4];
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/filtered-test-modules/ts-lib-mathjs-test-code-merged-entryfile.js:1247:7:1247:57
      var invArg12_00 = index(invArg12_000, invArg12_001);
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/filtered-test-modules/ts-lib-mathjs-test-code-merged-entryfile.js:1248:7:1248:40
      var invArg12_01 = [[1, 2], [3, 4]];
      var this_obj = invArg12_01;
      var arg0 = m;
      var arg1 = invArg12_00;
      var arg2 = [[1, 2], [3, 4]];
      var arg3 = -1;
      var actualResult = _setsubset(arg0, arg1, arg2, arg3);
      expect(actualResult._values["0"]).toBe(-1);
      expect(actualResult._values["1"]).toBe(-1);
      expect(actualResult._values["2"]).toBe(1);
      expect(actualResult._values["3"]).toBe(3);
      expect(actualResult._values["4"]).toBe(-1);
      expect(actualResult._values["5"]).toBe(-1);
      expect(actualResult._values["6"]).toBe(2);
      expect(actualResult._values["7"]).toBe(4);
      expect(actualResult._index["0"]).toBe(3);
      expect(actualResult._index["1"]).toBe(3);
      expect(actualResult._index["2"]).toBe(2);
      expect(actualResult._index["3"]).toBe(3);
      expect(actualResult._index["4"]).toBe(0);
      expect(actualResult._index["5"]).toBe(1);
      expect(actualResult._index["6"]).toBe(2);
      expect(actualResult._index["7"]).toBe(3);
      expect(actualResult._ptr["0"]).toBe(0);
      expect(actualResult._ptr["1"]).toBe(1);
      expect(actualResult._ptr["2"]).toBe(2);
      expect(actualResult._ptr["3"]).toBe(4);
      expect(actualResult._ptr["4"]).toBe(8);
      expect(actualResult._size["0"]).toBe(4);
      expect(actualResult._size["1"]).toBe(4);
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
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/filtered-test-modules/ts-lib-mathjs-test-code-merged-entryfile.js:8:1:8:27
      var Range = math.type.Range;
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/filtered-test-modules/ts-lib-mathjs-test-code-merged-entryfile.js:1238:7:1243:10
      var m = new SparseMatrix(
              [
                [0, 0, 0],
                [0, 0, 0],
                [0, 0, 0]
              ]);
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/filtered-test-modules/ts-lib-mathjs-test-code-merged-entryfile.js:1245:7:1245:31
      var invArg12_000 = [2, 4];
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/filtered-test-modules/ts-lib-mathjs-test-code-merged-entryfile.js:1246:7:1246:31
      var invArg12_001 = [2, 4];
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/filtered-test-modules/ts-lib-mathjs-test-code-merged-entryfile.js:1247:7:1247:57
      var invArg12_00 = index(invArg12_000, invArg12_001);
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/filtered-test-modules/ts-lib-mathjs-test-code-merged-entryfile.js:1248:7:1248:40
      var invArg12_01 = [[1, 2], [3, 4]];
      var this_obj = invArg12_01;
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/filtered-test-modules/ts-lib-mathjs-test-code-merged-entryfile.js:1249:7:1249:44
      m.subset(invArg12_00, invArg12_01, -1);
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/filtered-test-modules/ts-lib-mathjs-test-code-merged-entryfile.js:1250:7:1257:10
      assert.deepEqual(
              m.toArray(), 
              [
                [0, 0, 0, -1],
                [0, 0, 0, -1],
                [0, 0, 1, 2],
                [-1, -1, 3, 4]
              ]);
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/filtered-test-modules/ts-lib-mathjs-test-code-merged-entryfile.js:1259:7:1259:40
      var invArg13_100 = new Range(0, 3);
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/filtered-test-modules/ts-lib-mathjs-test-code-merged-entryfile.js:1260:7:1260:46
      var invArg13_10 = index(4, invArg13_100);
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/filtered-test-modules/ts-lib-mathjs-test-code-merged-entryfile.js:1261:7:1261:33
      var invArg13_11 = [5, 6, 7];
      var this_obj = invArg13_11;
      var arg0 = m;
      var arg1 = invArg13_10;
      var arg2 = [5, 6, 7];
      var arg3 = -2;
      var actualResult = _setsubset(arg0, arg1, arg2, arg3);
      expect(actualResult._values["0"]).toBe(-1);
      expect(actualResult._values["1"]).toBe(5);
      expect(actualResult._values["2"]).toBe(-1);
      expect(actualResult._values["3"]).toBe(6);
      expect(actualResult._values["4"]).toBe(1);
      expect(actualResult._values["5"]).toBe(3);
      expect(actualResult._values["6"]).toBe(7);
      expect(actualResult._values["7"]).toBe(-1);
      expect(actualResult._values["8"]).toBe(-1);
      expect(actualResult._values["9"]).toBe(2);
      expect(actualResult._values["10"]).toBe(4);
      expect(actualResult._values["11"]).toBe(-2);
      expect(actualResult._index["0"]).toBe(3);
      expect(actualResult._index["1"]).toBe(4);
      expect(actualResult._index["2"]).toBe(3);
      expect(actualResult._index["3"]).toBe(4);
      expect(actualResult._index["4"]).toBe(2);
      expect(actualResult._index["5"]).toBe(3);
      expect(actualResult._index["6"]).toBe(4);
      expect(actualResult._index["7"]).toBe(0);
      expect(actualResult._index["8"]).toBe(1);
      expect(actualResult._index["9"]).toBe(2);
      expect(actualResult._index["10"]).toBe(3);
      expect(actualResult._index["11"]).toBe(4);
      expect(actualResult._ptr["0"]).toBe(0);
      expect(actualResult._ptr["1"]).toBe(2);
      expect(actualResult._ptr["2"]).toBe(4);
      expect(actualResult._ptr["3"]).toBe(7);
      expect(actualResult._ptr["4"]).toBe(12);
      expect(actualResult._size["0"]).toBe(5);
      expect(actualResult._size["1"]).toBe(4);
    });

    test("invoc-loc:244:16:244:65-test:2", () => {
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
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/filtered-test-modules/ts-lib-mathjs-test-code-merged-entryfile.js:8:1:8:27
      var Range = math.type.Range;
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/filtered-test-modules/ts-lib-mathjs-test-code-merged-entryfile.js:1238:7:1243:10
      var m = new SparseMatrix(
              [
                [0, 0, 0],
                [0, 0, 0],
                [0, 0, 0]
              ]);
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/filtered-test-modules/ts-lib-mathjs-test-code-merged-entryfile.js:1245:7:1245:31
      var invArg12_000 = [2, 4];
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/filtered-test-modules/ts-lib-mathjs-test-code-merged-entryfile.js:1246:7:1246:31
      var invArg12_001 = [2, 4];
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/filtered-test-modules/ts-lib-mathjs-test-code-merged-entryfile.js:1247:7:1247:57
      var invArg12_00 = index(invArg12_000, invArg12_001);
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/filtered-test-modules/ts-lib-mathjs-test-code-merged-entryfile.js:1248:7:1248:40
      var invArg12_01 = [[1, 2], [3, 4]];
      var this_obj = invArg12_01;
      var this_obj = invArg13_11;
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/filtered-test-modules/ts-lib-mathjs-test-code-merged-entryfile.js:1249:7:1249:44
      m.subset(invArg12_00, invArg12_01, -1);
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/filtered-test-modules/ts-lib-mathjs-test-code-merged-entryfile.js:1250:7:1257:10
      assert.deepEqual(
              m.toArray(), 
              [
                [0, 0, 0, -1],
                [0, 0, 0, -1],
                [0, 0, 1, 2],
                [-1, -1, 3, 4]
              ]);
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/filtered-test-modules/ts-lib-mathjs-test-code-merged-entryfile.js:1259:7:1259:40
      var invArg13_100 = new Range(0, 3);
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/filtered-test-modules/ts-lib-mathjs-test-code-merged-entryfile.js:1260:7:1260:46
      var invArg13_10 = index(4, invArg13_100);
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/filtered-test-modules/ts-lib-mathjs-test-code-merged-entryfile.js:1262:7:1262:44
      m.subset(invArg13_10, invArg13_11, -2);
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/filtered-test-modules/ts-lib-mathjs-test-code-merged-entryfile.js:1263:7:1271:10
      assert.deepEqual(
              m.toArray(), 
              [
                [0, 0, 0, -1],
                [0, 0, 0, -1],
                [0, 0, 1, 2],
                [-1, -1, 3, 4],
                [5, 6, 7, -2]
              ]);
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/filtered-test-modules/ts-lib-mathjs-test-code-merged-entryfile.js:1273:7:1273:40
      var invArg14_200 = new Range(0, 3);
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/filtered-test-modules/ts-lib-mathjs-test-code-merged-entryfile.js:1274:7:1274:46
      var invArg14_20 = index(invArg14_200, 4);
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/filtered-test-modules/ts-lib-mathjs-test-code-merged-entryfile.js:1275:7:1275:34
      var invArg14_21 = [8, 9, 10];
      var this_obj = invArg14_21;
      var arg0 = m;
      var arg1 = invArg14_20;
      var arg2 = [[8], [9], [10]];
      var arg3 = -3;
      var actualResult = _setsubset(arg0, arg1, arg2, arg3);
      expect(actualResult._values["0"]).toBe(-1);
      expect(actualResult._values["1"]).toBe(5);
      expect(actualResult._values["2"]).toBe(-1);
      expect(actualResult._values["3"]).toBe(6);
      expect(actualResult._values["4"]).toBe(1);
      expect(actualResult._values["5"]).toBe(3);
      expect(actualResult._values["6"]).toBe(7);
      expect(actualResult._values["7"]).toBe(-1);
      expect(actualResult._values["8"]).toBe(-1);
      expect(actualResult._values["9"]).toBe(2);
      expect(actualResult._values["10"]).toBe(4);
      expect(actualResult._values["11"]).toBe(-2);
      expect(actualResult._values["12"]).toBe(8);
      expect(actualResult._values["13"]).toBe(9);
      expect(actualResult._values["14"]).toBe(10);
      expect(actualResult._values["15"]).toBe(-3);
      expect(actualResult._values["16"]).toBe(-3);
      expect(actualResult._index["0"]).toBe(3);
      expect(actualResult._index["1"]).toBe(4);
      expect(actualResult._index["2"]).toBe(3);
      expect(actualResult._index["3"]).toBe(4);
      expect(actualResult._index["4"]).toBe(2);
      expect(actualResult._index["5"]).toBe(3);
      expect(actualResult._index["6"]).toBe(4);
      expect(actualResult._index["7"]).toBe(0);
      expect(actualResult._index["8"]).toBe(1);
      expect(actualResult._index["9"]).toBe(2);
      expect(actualResult._index["10"]).toBe(3);
      expect(actualResult._index["11"]).toBe(4);
      expect(actualResult._index["12"]).toBe(0);
      expect(actualResult._index["13"]).toBe(1);
      expect(actualResult._index["14"]).toBe(2);
      expect(actualResult._index["15"]).toBe(3);
      expect(actualResult._index["16"]).toBe(4);
      expect(actualResult._ptr["0"]).toBe(0);
      expect(actualResult._ptr["1"]).toBe(2);
      expect(actualResult._ptr["2"]).toBe(4);
      expect(actualResult._ptr["3"]).toBe(7);
      expect(actualResult._ptr["4"]).toBe(12);
      expect(actualResult._ptr["5"]).toBe(17);
      expect(actualResult._size["0"]).toBe(5);
      expect(actualResult._size["1"]).toBe(5);
    });
  }
);

