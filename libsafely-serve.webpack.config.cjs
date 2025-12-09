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
    `libsafely-serve`;
const
  _input_file_path =
    `./${_input_file_name}`;
const
  _output_file_name =
    `${_input_file_name}.js`;
const
  _child_process_ignore =
  { resourceRegExp:
      /^node:child_process$/ };
const
  _serve_ignore =
  { resourceRegExp:
      /^serve$/ };
const
  _yargs_ignore =
  { resourceRegExp:
      /^yargs$/ };
const
  _yargs_helpers_ignore = {
    resourceRegExp:
      /^yargs\/helpers$/
};
const
  _webpack =
    require(
     "webpack");
const
  _ignore_plugin =
    _webpack.IgnorePlugin; 
const
  _child_process_ignore_plugin =
    new _ignore_plugin(
          _child_process_ignore);
const
  _serve_ignore_plugin =
    new _ignore_plugin(
          _serve_ignore);
const
  _yargs_ignore_plugin =
    new _ignore_plugin(
          _yargs_ignore);
const
  _yargs_helpers_ignore_plugin =
    new _ignore_plugin(
          _yargs_helpers_ignore);
const
  _output = {
    path:
      _output_dir,
    filename:
      _output_file_name
};
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
      "serve":
        _path.resolve(
          __dirname,
          'node_modules/serve/build/main.js'),
    },
    fallback: {
      "node:child_process":
        false,
      "serve":
        false,
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
    _child_process_ignore_plugin,
    _serve_ignore_plugin,
    _yargs_ignore_plugin,
    _yargs_helpers_ignore_plugin
  ]
};
