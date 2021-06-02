const prettierRules = {
    singleQuote: false,
    useTabs: false,
    tabWidth: 4,
    endOfLine: 'auto',
}

const config = {
    plugins: [
        'stylelint-prettier',
        'stylelint-order',
        'stylelint-config-rational-order/plugin',
    ],
    extends: [
        'stylelint-prettier/recommended',
        'stylelint-config-rational-order',
    ],
    rules: {
        'prettier/prettier': [true, prettierRules],
        'order/properties-order': [],
        'plugin/rational-order': [true, {}],
        'max-nesting-depth': [3],
    },
}

module.exports = {
  config,
  prettierRules,
}
