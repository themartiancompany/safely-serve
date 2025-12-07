[comment]: <> (SPDX-License-Identifier: AGPL-3.0)

[comment]: <> (-------------------------------------------------------------)
[comment]: <> (Copyright © 2024, 2025)
[comment]: <> (            Pellegrino Prevete)
[comment]: <> (All rights reserved)
[comment]: <> (-------------------------------------------------------------)
[comment]: <> (This program is free software: you can redistribute)
[comment]: <> (it and/or modify it under the terms of the GNU Affero)
[comment]: <> (General Public License as published by the Free)
[comment]: <> (Software Foundation, either version 3 of the License.)

[comment]: <> (This program is distributed in the hope that it will be useful,)
[comment]: <> (but WITHOUT ANY WARRANTY; without even the implied warranty of)
[comment]: <> (MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the)
[comment]: <> (GNU Affero General Public License for more details.)

[comment]: <> (You should have received a copy of the GNU Affero General)
[comment]: <> (Public License along with this program.)
[comment]: <> (If not, see <https://www.gnu.org/licenses/>.)


# Certificate Tools (`cert-tools`)

Set of Javascript commands which
replace some from `openssl`.

- `cert-gen`:
    generates private/public key pairs and X.509
    certificates for HTTP web servers using
    [Forge](
      https://github.com/digitalbazaar/forge)
    Javascript TLS implementation.

It works both in Node.js and in web browsers
using the
[Crash Javacript](
  https://github.com/themartiancompany/crash-js)
module.

### Installation

You can install and save an entry to your `package.json`
with the following command:

```bash
npm \
  install \
    --save \
    cert-tools
```

You can then run the program with

```bash
npx \
  "cert-gen"
```

or just with `cert-gen` if you install
the program system-wide using npm from this source
repository or from the
[NPM Registry](
  https://www.npmjs.com/package/cert-tools)

```
npm \
  -g \
  install \
    "cert-tools"
```

or if using GNU make in this repository

```bash
make \
  install
```

**Note:** You may need admin rights (`sudo`,
`su -c` or on Windows `Run as administrator`).

or if you install it as a
[DogeOS](
  https://github.com/themartiancompany/dogeos)
package from the
[Ur](
  https://github.com/themartiancompany/ur)

```bash
ur \
  tmcsplit
```

### Documentation

Upon installation the manual can be accessed with
`man tmcsplit` but really it's the same as
GNU Split, so you can also refer to `man split`
for what is it implemented.

# License

This software by Pellegrino Prevete is released
under the terms of the GNU Affero General Public License
version 3.
