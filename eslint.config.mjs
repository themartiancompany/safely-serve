// SPDX-License-Identifier: GPL-3.0-or-later

/**    ----------------------------------------------------------------------
 *     Copyright ©
 *       Pellegrino Prevete
 *         2024, 2025, 2026
 * 
 *     All rights reserved
 *     ----------------------------------------------------------------------
 * 
 *     This program is free software: you can redistribute it and/or modify
 *     it under the terms of the GNU General Public License as published by
 *     the Free Software Foundation, either version 3 of the License, or
 *     (at your option) any later version.
 * 
 *     This program is distributed in the hope that it will be useful,
 *     but WITHOUT ANY WARRANTY; without even the implied warranty of
 *     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *     GNU General Public License for more details.
 * 
 *     You should have received a copy of the GNU General Public License
 *     along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */


import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

const
  _project =
    "safely-serve";

export default defineConfig([
 { ignores: [
     "build/**",
     "eslint.config.js",
     "man/*"
   ],
   rules:
     { semi:
         "error",
       "prefer-const":
         "error" } },
 { files:
     [ "**/*js,mjs,cjs}",
       `**/${_project}*`,
       `**/lib${_project}` ],
   plugins:
     { js },
   extends:
     [ "js/recommended" ],
   languageOptions:
     { globals:
         {  ...globals.browser,
            ...globals.node} } },
 { files:
     [ "**/*.js",
       `**/${_project}*`,
       `**/lib${_project}` ],
   languageOptions:
     { sourceType:
         "commonjs" } },
]);
