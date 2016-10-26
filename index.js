/* global hexo */
/* eslint no-param-reassign:0, strict:0 */
'use strict';

const path = require('path');
const execSync = require('child_process').execSync;

hexo.extend.filter.register('before_post_render', data => {
  if (typeof data.author === 'undefined') {
    data.author = getAuthor(data);
  }
  if (typeof data.contributors === 'undefined') {
    data.contributors = getContributors(data);
  }
  return data;
});

function getAuthor(data) {
  const filePath = getFilePath(data);
  const author = execSync(`git log --follow --format="%an" -- ${filePath} | tail -1`);
  return author.toString().trim();
}

function getContributors(data) {
  const filePath = getFilePath(data);
  const contributors = execSync(`git log --follow --reverse --format="%an" -- ${filePath}`);
  return unique(contributors.toString().trim().split(/\s/));
}

function getFilePath(data) {
  return path.resolve(hexo.config.source_dir, data.source);
}

function unique(array) {
  return [...new Set(array)];
}
