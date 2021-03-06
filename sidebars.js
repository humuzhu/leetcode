/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  leetcode: [
    {
      type: 'doc',
      id: 'index'
    },
    {
      type: 'category',
      label: '剑指Offer',
      link: {
        type: 'doc',
        id: 'offer/index'
      },
      items: [
        'offer/number_divide',
        'offer/duplicate-number-in-array',
        'offer/search-number-in-2d-array',
        'offer/replace-space',
        'offer/reverse-print-link-list',
        'offer/max-gift-value',
        'offer/lowest-common-ancestor',
      ],
    },
  ]
};

module.exports = sidebars;
