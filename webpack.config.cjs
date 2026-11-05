// SPDX-License-Identifier: AGPL-3.0-or-later

/**    ---------------------------------------------------------
 *     webpack.config.cjs
 *     ---------------------------------------------------------
 *     Copyright ©
 *       Pellegrino Prevete
 *         2024, 2025, 2026
 * 
 *     All rights reserved
 *     ---------------------------------------------------------
 * 
 *     This program is free software: you can redistribute it and/or
 *     modify it under the terms of the GNU General Public License
 *     as published by the Free Software Foundation, either
 *     version 3 of the License, or (at your option) any later
 *     version.
 * 
 *     This program is distributed in the hope that it will be
 *     useful, but WITHOUT ANY WARRANTY; without even the implied
 *     warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR
 *     PURPOSE.
 *     See the GNU General Public License for more details.
 * 
 *     You should have received a copy of the
 *     GNU General Public License along with this program.
 *     If not, see <https://www.gnu.org/licenses/>.
 */

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
    `safely-serve`;
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
  _child_process_ignore =
  { resourceRegExp:
      /^node:child_process$/ };
const
  _node_fs_ignore =
  { resourceRegExp:
      /^node:fs$/ };
const
  _serve_ignore =
  { resourceRegExp:
      /^serve$/ };
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
  _child_process_ignore_plugin =
    new _ignore_plugin(
          _child_process_ignore);
const
  _node_fs_ignore_plugin =
    new _ignore_plugin(
          _node_fs_ignore);
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
      "os":
        _path.resolve(
          __dirname,
          'node_modules/os'),
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
      "node:fs":
        false,
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
    { "node:child_process":
        "node:child_process",
      "serve":
        'serve',
      "yargs":
        'yargs' },
  plugins: [
    _node_fs_ignore_plugin,
    _child_process_ignore_plugin,
    _serve_ignore_plugin,
    _yargs_ignore_plugin,
    _yargs_helpers_ignore_plugin
  ]
};
