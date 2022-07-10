module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-prettier/recommended'],

  plugins: ['stylelint-order'],

  rules: {
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['blockless-after-same-name-blockless', 'first-nested'],
        ignore: ['after-comment'],
      },
    ],
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind'],
      },
    ],

    /*
     * https://stylelint.io/user-guide/rules/list/#limit-language-features
     * kebab-case
     */
    'keyframes-name-pattern': /^[a-z]+([a-z0-9-]+[a-z0-9]+)?$/,
    'custom-property-pattern': /^[a-z]+([a-z0-9-]+[a-z0-9]+)?$/,
    'custom-media-pattern': /^[a-z]+([a-z0-9-]+[a-z0-9]+)?$/,

    // https://github.com/fullstack-development/react-redux-starter-kit/blob/master/.stylelintrc
    'order/order': [
      'dollar-variables',
      'at-rules',
      'declarations',
      {
        type: 'at-rule',
        name: 'keyframes',
      },
      {
        type: 'at-rule',
        name: 'media',
      },
      {
        type: 'at-rule',
        name: 'include',
      },
      'rules',
    ],
  },
};
