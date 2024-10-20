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
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/filtered-test-modules/ts-lib-mathjs-test-code-merged-entryfile.js:8:1:8:27
      var Range = math.type.Range;
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/filtered-test-modules/ts-lib-mathjs-test-code-merged-entryfile.js:1185:7:1190:10
      var m = new SparseMatrix(
              [
                [0, 0, 0],
                [0, 0, 0],
                [0, 0, 0]
              ]);
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/filtered-test-modules/ts-lib-mathjs-test-code-merged-entryfile.js:1192:7:1192:39
      var invArg9_000 = new Range(2, 4);
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/filtered-test-modules/ts-lib-mathjs-test-code-merged-entryfile.js:1193:7:1193:39
      var invArg9_001 = new Range(2, 4);
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/filtered-test-modules/ts-lib-mathjs-test-code-merged-entryfile.js:1194:7:1194:54
      var invArg9_00 = index(invArg9_000, invArg9_001);
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/filtered-test-modules/ts-lib-mathjs-test-code-merged-entryfile.js:1195:7:1195:39
      var invArg9_01 = [[1, 2], [3, 4]];
      var this_obj = invArg9_01;
      var arg0 = m;
      var arg1 = invArg9_00;
      var arg2 = [[1, 2], [3, 4]];
      var arg3 = undefined;
      var actualResult = _setsubset(arg0, arg1, arg2, arg3);
      expect(actualResult._values["0"]).toBe(3);
      expect(actualResult._values["1"]).toBe(1);
      expect(actualResult._values["2"]).toBe(4);
      expect(actualResult._values["3"]).toBe(2);
      expect(actualResult._index["0"]).toBe(3);
      expect(actualResult._index["1"]).toBe(2);
      expect(actualResult._index["2"]).toBe(3);
      expect(actualResult._index["3"]).toBe(2);
      expect(actualResult._ptr["0"]).toBe(0);
      expect(actualResult._ptr["1"]).toBe(0);
      expect(actualResult._ptr["2"]).toBe(0);
      expect(actualResult._ptr["3"]).toBe(2);
      expect(actualResult._ptr["4"]).toBe(4);
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
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/filtered-test-modules/ts-lib-mathjs-test-code-merged-entryfile.js:1185:7:1190:10
      var m = new SparseMatrix(
              [
                [0, 0, 0],
                [0, 0, 0],
                [0, 0, 0]
              ]);
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/filtered-test-modules/ts-lib-mathjs-test-code-merged-entryfile.js:1192:7:1192:39
      var invArg9_000 = new Range(2, 4);
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/filtered-test-modules/ts-lib-mathjs-test-code-merged-entryfile.js:1193:7:1193:39
      var invArg9_001 = new Range(2, 4);
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/filtered-test-modules/ts-lib-mathjs-test-code-merged-entryfile.js:1194:7:1194:54
      var invArg9_00 = index(invArg9_000, invArg9_001);
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/filtered-test-modules/ts-lib-mathjs-test-code-merged-entryfile.js:1195:7:1195:39
      var invArg9_01 = [[1, 2], [3, 4]];
      var this_obj = invArg9_01;
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/filtered-test-modules/ts-lib-mathjs-test-code-merged-entryfile.js:1196:7:1196:38
      m.subset(invArg9_00, invArg9_01);
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/filtered-test-modules/ts-lib-mathjs-test-code-merged-entryfile.js:1197:7:1204:10
      assert.deepEqual(
              m.toArray(), 
              [
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 1, 2],
                [0, 0, 3, 4]
              ]);
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/filtered-test-modules/ts-lib-mathjs-test-code-merged-entryfile.js:1206:7:1206:40
      var invArg10_100 = new Range(0, 3);
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/filtered-test-modules/ts-lib-mathjs-test-code-merged-entryfile.js:1207:7:1207:46
      var invArg10_10 = index(4, invArg10_100);
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/filtered-test-modules/ts-lib-mathjs-test-code-merged-entryfile.js:1208:7:1208:33
      var invArg10_11 = [5, 6, 7];
      var this_obj = invArg10_11;
      var arg0 = m;
      var arg1 = invArg10_10;
      var arg2 = [5, 6, 7];
      var arg3 = undefined;
      var actualResult = _setsubset(arg0, arg1, arg2, arg3);
      expect(actualResult._values["0"]).toBe(5);
      expect(actualResult._values["1"]).toBe(6);
      expect(actualResult._values["2"]).toBe(7);
      expect(actualResult._values["3"]).toBe(3);
      expect(actualResult._values["4"]).toBe(1);
      expect(actualResult._values["5"]).toBe(4);
      expect(actualResult._values["6"]).toBe(2);
      expect(actualResult._index["0"]).toBe(4);
      expect(actualResult._index["1"]).toBe(4);
      expect(actualResult._index["2"]).toBe(4);
      expect(actualResult._index["3"]).toBe(3);
      expect(actualResult._index["4"]).toBe(2);
      expect(actualResult._index["5"]).toBe(3);
      expect(actualResult._index["6"]).toBe(2);
      expect(actualResult._ptr["0"]).toBe(0);
      expect(actualResult._ptr["1"]).toBe(1);
      expect(actualResult._ptr["2"]).toBe(2);
      expect(actualResult._ptr["3"]).toBe(5);
      expect(actualResult._ptr["4"]).toBe(7);
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
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/filtered-test-modules/ts-lib-mathjs-test-code-merged-entryfile.js:1185:7:1190:10
      var m = new SparseMatrix(
              [
                [0, 0, 0],
                [0, 0, 0],
                [0, 0, 0]
              ]);
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/filtered-test-modules/ts-lib-mathjs-test-code-merged-entryfile.js:1192:7:1192:39
      var invArg9_000 = new Range(2, 4);
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/filtered-test-modules/ts-lib-mathjs-test-code-merged-entryfile.js:1193:7:1193:39
      var invArg9_001 = new Range(2, 4);
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/filtered-test-modules/ts-lib-mathjs-test-code-merged-entryfile.js:1194:7:1194:54
      var invArg9_00 = index(invArg9_000, invArg9_001);
      var this_obj = invArg10_11;
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/filtered-test-modules/ts-lib-mathjs-test-code-merged-entryfile.js:1195:7:1195:39
      var invArg9_01 = [[1, 2], [3, 4]];
      var this_obj = invArg9_01;
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/filtered-test-modules/ts-lib-mathjs-test-code-merged-entryfile.js:1196:7:1196:38
      m.subset(invArg9_00, invArg9_01);
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/filtered-test-modules/ts-lib-mathjs-test-code-merged-entryfile.js:1197:7:1204:10
      assert.deepEqual(
              m.toArray(), 
              [
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 1, 2],
                [0, 0, 3, 4]
              ]);
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/filtered-test-modules/ts-lib-mathjs-test-code-merged-entryfile.js:1209:7:1209:40
      m.subset(invArg10_10, invArg10_11);
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/filtered-test-modules/ts-lib-mathjs-test-code-merged-entryfile.js:1210:7:1218:10
      assert.deepEqual(
              m.toArray(), 
              [
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 1, 2],
                [0, 0, 3, 4],
                [5, 6, 7, 0]
              ]);
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/filtered-test-modules/ts-lib-mathjs-test-code-merged-entryfile.js:1220:7:1220:40
      var invArg11_200 = new Range(0, 3);
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/filtered-test-modules/ts-lib-mathjs-test-code-merged-entryfile.js:1221:7:1221:46
      var invArg11_20 = index(invArg11_200, 4);
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/filtered-test-modules/ts-lib-mathjs-test-code-merged-entryfile.js:1222:7:1222:34
      var invArg11_21 = [8, 9, 10];
      var this_obj = invArg11_21;
      var arg0 = m;
      var arg1 = invArg11_20;
      var arg2 = [[8], [9], [10]];
      var arg3 = undefined;
      var actualResult = _setsubset(arg0, arg1, arg2, arg3);
      expect(actualResult._values["0"]).toBe(5);
      expect(actualResult._values["1"]).toBe(6);
      expect(actualResult._values["2"]).toBe(7);
      expect(actualResult._values["3"]).toBe(3);
      expect(actualResult._values["4"]).toBe(1);
      expect(actualResult._values["5"]).toBe(4);
      expect(actualResult._values["6"]).toBe(2);
      expect(actualResult._values["7"]).toBe(10);
      expect(actualResult._values["8"]).toBe(9);
      expect(actualResult._values["9"]).toBe(8);
      expect(actualResult._index["0"]).toBe(4);
      expect(actualResult._index["1"]).toBe(4);
      expect(actualResult._index["2"]).toBe(4);
      expect(actualResult._index["3"]).toBe(3);
      expect(actualResult._index["4"]).toBe(2);
      expect(actualResult._index["5"]).toBe(3);
      expect(actualResult._index["6"]).toBe(2);
      expect(actualResult._index["7"]).toBe(2);
      expect(actualResult._index["8"]).toBe(1);
      expect(actualResult._index["9"]).toBe(0);
      expect(actualResult._ptr["0"]).toBe(0);
      expect(actualResult._ptr["1"]).toBe(1);
      expect(actualResult._ptr["2"]).toBe(2);
      expect(actualResult._ptr["3"]).toBe(5);
      expect(actualResult._ptr["4"]).toBe(7);
      expect(actualResult._ptr["5"]).toBe(10);
      expect(actualResult._size["0"]).toBe(5);
      expect(actualResult._size["1"]).toBe(5);
    });
  }
);

