describe(
  "../evaluationProjects/ts-lib-mathjs/lib/expression/node/Node.js:287:26:307:3",
  () => {
    test("invoc-loc:327:12:327:39-test:0", () => {
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/filtered-test-modules/ts-lib-mathjs-test-code-merged-entryfile.js:1:1:3:33
      var assert = require('assert'), error = require('../lib/error/index.js'), math = require('../index.js');
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/lib/expression/node/FunctionNode.js:4:1:4:34
      var nodeObj = require("../lib/expression/node/Node.js");
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/lib/expression/node/FunctionNode.js:5:1:5:29
      var Node2 = nodeObj.factory();
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/filtered-test-modules/ts-lib-mathjs-test-code-merged-entryfile.js:56:5:56:46
      var expression = math.parse('help(parse)');
      var this_obj = expression;
      ///home/katerina/visualStudioGit/evaluationProjects/ts-lib-mathjs/lib/expression/node/FunctionNode.js:326:5:326:40
      var nodeTex2 = Node2.prototype.toTex;
      var arg0 = this_obj;
      var arg1 = undefined;
      var actualResult = nodeTex2.call(arg0, arg1);
      var expectedResult = "\\mathrm{help}\\left( parse\\right)";
      expect(expectedResult).toBe(actualResult);
    });
  }
);

