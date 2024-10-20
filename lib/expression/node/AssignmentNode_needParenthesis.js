var operators = require('../operators');

/*
   * Is parenthesis needed?
   * @param {node} node
   * @param {string} [parenthesis='keep']
   * @private
   */
  function needParenthesis(node, parenthesis) {
    if (!parenthesis) {
      parenthesis = 'keep';
    }

    var precedence = operators.getPrecedence(node, parenthesis);
    var exprPrecedence = operators.getPrecedence(node.value, parenthesis);
    return (parenthesis === 'all')
      || ((exprPrecedence !== null) && (exprPrecedence <= precedence));
  }

  module.exports = needParenthesis;