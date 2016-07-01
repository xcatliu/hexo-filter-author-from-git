# hexo-filter-author-from-git

Read git log and add the properties `author` and `contributors` for each posts.

A live site using this plugin: http://js-index.com/

And the GitHub repo for that site: https://github.com/xcatliu/js-index

## Installation

```shell
$ npm install hexo-filter-author-from-git --save
```

## Usage

The `author` property will be the user.name when the first time someone committed the post. Same result as:

```shell
git log --format="%an" -- <filePath> | tail -1
```

The `contributors` property will be the list of user.name of commits of the post. Same result as:

```shell
git log --reverse --format="%an" -- <filePath>
```

**NOTICE:** If you created a new file, before you committed the file, the `author` will be `''` and the `contributors` will be `[]` when you run hexo command.

## Options

Null
