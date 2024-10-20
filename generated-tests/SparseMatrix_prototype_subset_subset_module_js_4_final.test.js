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
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/filtered-test-modules/ts-lib-mathjs-test-code-merged-entryfile.js:1137:7:1142:10
      var m = new SparseMatrix(
              [
                [0, 0, 0],
                [0, 0, 0],
                [0, 0, 0]
              ]);
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/filtered-test-modules/ts-lib-mathjs-test-code-merged-entryfile.js:1144:7:1144:39
      var invArg6_000 = new Range(1, 3);
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/filtered-test-modules/ts-lib-mathjs-test-code-merged-entryfile.js:1145:7:1145:39
      var invArg6_001 = new Range(1, 3);
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/filtered-test-modules/ts-lib-mathjs-test-code-merged-entryfile.js:1146:7:1146:54
      var invArg6_00 = index(invArg6_000, invArg6_001);
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/filtered-test-modules/ts-lib-mathjs-test-code-merged-entryfile.js:1147:7:1147:39
      var invArg6_01 = [[1, 2], [3, 4]];
      var this_obj = invArg6_01;
      var arg0 = m;
      var arg1 = invArg6_00;
      var arg2 = [[1, 2], [3, 4]];
      var arg3 = undefined;
      var actualResult = _setsubset(arg0, arg1, arg2, arg3);
      expect(actualResult._values["0"]).toBe(3);
      expect(actualResult._values["1"]).toBe(1);
      expect(actualResult._values["2"]).toBe(4);
      expect(actualResult._values["3"]).toBe(2);
      expect(actualResult._index["0"]).toBe(2);
      expect(actualResult._index["1"]).toBe(1);
      expect(actualResult._index["2"]).toBe(2);
      expect(actualResult._index["3"]).toBe(1);
      expect(actualResult._ptr["0"]).toBe(0);
      expect(actualResult._ptr["1"]).toBe(0);
      expect(actualResult._ptr["2"]).toBe(2);
      expect(actualResult._ptr["3"]).toBe(4);
      expect(actualResult._size["0"]).toBe(3);
      expect(actualResult._size["1"]).toBe(3);
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
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/filtered-test-modules/ts-lib-mathjs-test-code-merged-entryfile.js:1137:7:1142:10
      var m = new SparseMatrix(
              [
                [0, 0, 0],
                [0, 0, 0],
                [0, 0, 0]
              ]);
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/filtered-test-modules/ts-lib-mathjs-test-code-merged-entryfile.js:1144:7:1144:39
      var invArg6_000 = new Range(1, 3);
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/filtered-test-modules/ts-lib-mathjs-test-code-merged-entryfile.js:1145:7:1145:39
      var invArg6_001 = new Range(1, 3);
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/filtered-test-modules/ts-lib-mathjs-test-code-merged-entryfile.js:1146:7:1146:54
      var invArg6_00 = index(invArg6_000, invArg6_001);
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/filtered-test-modules/ts-lib-mathjs-test-code-merged-entryfile.js:1147:7:1147:39
      var invArg6_01 = [[1, 2], [3, 4]];
      var this_obj = invArg6_01;
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/filtered-test-modules/ts-lib-mathjs-test-code-merged-entryfile.js:1148:7:1148:38
      m.subset(invArg6_00, invArg6_01);
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/filtered-test-modules/ts-lib-mathjs-test-code-merged-entryfile.js:1149:7:1155:10
      assert.deepEqual(
              m.toArray(), 
              [
                [0, 0, 0],
                [0, 1, 2],
                [0, 3, 4]
              ]);
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/filtered-test-modules/ts-lib-mathjs-test-code-merged-entryfile.js:1157:7:1157:39
      var invArg7_100 = new Range(0, 3);
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/filtered-test-modules/ts-lib-mathjs-test-code-merged-entryfile.js:1158:7:1158:44
      var invArg7_10 = index(0, invArg7_100);
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/filtered-test-modules/ts-lib-mathjs-test-code-merged-entryfile.js:1159:7:1159:32
      var invArg7_11 = [5, 6, 7];
      var this_obj = invArg7_11;
      var arg0 = m;
      var arg1 = invArg7_10;
      var arg2 = [5, 6, 7];
      var arg3 = undefined;
      var actualResult = _setsubset(arg0, arg1, arg2, arg3);
      expect(actualResult._values["0"]).toBe(5);
      expect(actualResult._values["1"]).toBe(6);
      expect(actualResult._values["2"]).toBe(3);
      expect(actualResult._values["3"]).toBe(1);
      expect(actualResult._values["4"]).toBe(7);
      expect(actualResult._values["5"]).toBe(4);
      expect(actualResult._values["6"]).toBe(2);
      expect(actualResult._index["0"]).toBe(0);
      expect(actualResult._index["1"]).toBe(0);
      expect(actualResult._index["2"]).toBe(2);
      expect(actualResult._index["3"]).toBe(1);
      expect(actualResult._index["4"]).toBe(0);
      expect(actualResult._index["5"]).toBe(2);
      expect(actualResult._index["6"]).toBe(1);
      expect(actualResult._ptr["0"]).toBe(0);
      expect(actualResult._ptr["1"]).toBe(1);
      expect(actualResult._ptr["2"]).toBe(4);
      expect(actualResult._ptr["3"]).toBe(7);
      expect(actualResult._size["0"]).toBe(3);
      expect(actualResult._size["1"]).toBe(3);
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
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/filtered-test-modules/ts-lib-mathjs-test-code-merged-entryfile.js:1137:7:1142:10
      var m = new SparseMatrix(
              [
                [0, 0, 0],
                [0, 0, 0],
                [0, 0, 0]
              ]);
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/filtered-test-modules/ts-lib-mathjs-test-code-merged-entryfile.js:1144:7:1144:39
      var invArg6_000 = new Range(1, 3);
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/filtered-test-modules/ts-lib-mathjs-test-code-merged-entryfile.js:1145:7:1145:39
      var invArg6_001 = new Range(1, 3);
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/filtered-test-modules/ts-lib-mathjs-test-code-merged-entryfile.js:1146:7:1146:54
      var invArg6_00 = index(invArg6_000, invArg6_001);
      var this_obj = invArg7_11;
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/filtered-test-modules/ts-lib-mathjs-test-code-merged-entryfile.js:1147:7:1147:39
      var invArg6_01 = [[1, 2], [3, 4]];
      var this_obj = invArg6_01;
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/filtered-test-modules/ts-lib-mathjs-test-code-merged-entryfile.js:1148:7:1148:38
      m.subset(invArg6_00, invArg6_01);
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/filtered-test-modules/ts-lib-mathjs-test-code-merged-entryfile.js:1149:7:1155:10
      assert.deepEqual(
              m.toArray(), 
              [
                [0, 0, 0],
                [0, 1, 2],
                [0, 3, 4]
              ]);
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/filtered-test-modules/ts-lib-mathjs-test-code-merged-entryfile.js:1160:7:1160:38
      m.subset(invArg7_10, invArg7_11);
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/filtered-test-modules/ts-lib-mathjs-test-code-merged-entryfile.js:1161:7:1167:10
      assert.deepEqual(
              m.toArray(), 
              [
                [5, 6, 7],
                [0, 1, 2],
                [0, 3, 4]
              ]);
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/filtered-test-modules/ts-lib-mathjs-test-code-merged-entryfile.js:1169:7:1169:39
      var invArg8_200 = new Range(0, 3);
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/filtered-test-modules/ts-lib-mathjs-test-code-merged-entryfile.js:1170:7:1170:44
      var invArg8_20 = index(invArg8_200, 0);
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/filtered-test-modules/ts-lib-mathjs-test-code-merged-entryfile.js:1171:7:1171:33
      var invArg8_21 = [8, 9, 10];
      var this_obj = invArg8_21;
      var arg0 = m;
      var arg1 = invArg8_20;
      var arg2 = [[8], [9], [10]];
      var arg3 = undefined;
      var actualResult = _setsubset(arg0, arg1, arg2, arg3);
      expect(actualResult._values["0"]).toBe(10);
      expect(actualResult._values["1"]).toBe(9);
      expect(actualResult._values["2"]).toBe(8);
      expect(actualResult._values["3"]).toBe(6);
      expect(actualResult._values["4"]).toBe(3);
      expect(actualResult._values["5"]).toBe(1);
      expect(actualResult._values["6"]).toBe(7);
      expect(actualResult._values["7"]).toBe(4);
      expect(actualResult._values["8"]).toBe(2);
      expect(actualResult._index["0"]).toBe(2);
      expect(actualResult._index["1"]).toBe(1);
      expect(actualResult._index["2"]).toBe(0);
      expect(actualResult._index["3"]).toBe(0);
      expect(actualResult._index["4"]).toBe(2);
      expect(actualResult._index["5"]).toBe(1);
      expect(actualResult._index["6"]).toBe(0);
      expect(actualResult._index["7"]).toBe(2);
      expect(actualResult._index["8"]).toBe(1);
      expect(actualResult._ptr["0"]).toBe(0);
      expect(actualResult._ptr["1"]).toBe(3);
      expect(actualResult._ptr["2"]).toBe(6);
      expect(actualResult._ptr["3"]).toBe(9);
      expect(actualResult._size["0"]).toBe(3);
      expect(actualResult._size["1"]).toBe(3);
    });
  }
);

