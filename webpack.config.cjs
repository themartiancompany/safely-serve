const
  _path =
    require(
      'path');
const
  _output_dir =
    _path.resolve(
      __dirname);
const
  _input_file_name =
    `cert-gen`;
const
  _input_file_path =
    `./${_input_file_name}`;
const
  _output_file_name =
    `${_input_file_name}.js`;
const
  _output = {
    path:
      _output_dir,
    filename:
      _output_file_name
};
const
  _utils_ignore =
  { resourceRegExp:
      /^utils$/ };
const
  _web_worker_ignore =
  { resourceRegExp:
      /^web-worker$/ };
const
  _yargs_ignore =
  { resourceRegExp:
      /^yargs$/ };
const
  _yargs_helpers_ignore =
  { resourceRegExp:
      /^yargs\/helpers$/ };
const
  _webpack =
    require(
     "webpack");
const
  _ignore_plugin =
    _webpack.IgnorePlugin; 
const
  _utils_ignore_plugin =
    new _ignore_plugin(
          _utils_ignore);
const
  _web_worker_ignore_plugin =
    new _ignore_plugin(
          _web_worker_ignore);
const
  _yargs_ignore_plugin =
    new _ignore_plugin(
          _yargs_ignore);
const
  _yargs_helpers_ignore_plugin =
    new _ignore_plugin(
          _yargs_helpers_ignore);
module.exports = {
  entry:
    _input_file_path,
  output:
    _output,
  optimization: {
    moduleIds: 'deterministic',
  },
  resolve: {
    alias: {
      "fs":
        _path.resolve(
          __dirname,
          'node_modules/fs/fs'),
      "path":
        _path.resolve(
          __dirname,
          'node_modules/path/mod.js'),
      "web-worker":
        _path.resolve(
          __dirname,
          'node_modules/web-worker/mod.js'),
      "yargs":
        _path.resolve(
          __dirname,
          'node_modules/yargs/browser.mjs'),
      "yargs/helpers":
        _path.resolve(
          __dirname,
          'node_modules/yargs/helpers/helpers.mjs'),
      "yargs-parser":
        _path.resolve(
          __dirname,
          'node_modules/yargs-parser/browser.mjs'),
    },
    fallback: {
      "utils":
        false,
      "web-worker":
        false,
      "yargs":
        false,
      "yargs/helpers":
        false,
    }
  },
  externals:
    { yargs:
        'yargs' },
  plugins: [
    _yargs_ignore_plugin,
    _yargs_helpers_ignore_plugin
  ]
};
