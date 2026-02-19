..
   SPDX-License-Identifier: AGPL-3.0-or-later

   ----------------------------------------------------------------------
   Copyright © 2024, 2025, 2026  Pellegrino Prevete

   All rights reserved
   ----------------------------------------------------------------------

   This program is free software: you can redistribute it and/or modify
   it under the terms of the GNU Affero General Public License as published by
   the Free Software Foundation, either version 3 of the License, or
   (at your option) any later version.

   This program is distributed in the hope that it will be useful,
   but WITHOUT ANY WARRANTY; without even the implied warranty of
   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
   GNU Affero General Public License for more details.

   You should have received a copy of the GNU Affero General Public License
   along with this program.  If not, see <https://www.gnu.org/licenses/>.


==============
safely-serve
==============

--------------------------------------------------------
Safe static file serving and directory listing
--------------------------------------------------------
:Version: safely-serve |version|
:Manual section: 1

Synopsis
========

safely-serve *option*


Description
===========

Generates an X509 version 3
certificate using an existing private key
or generating one at runtime.

It depends on the Forge TLS
Javascript implementation
and on the Crash Javascript Library.

By default, serve will listen
on 0.0.0.0:3000 and serve the
current working directory on
that address.

Specifying a single --listen argument
will overwrite the default,
not supplement it.

If no SSL certificate and private key
are passed, new ones are generated
unique to that specific directory.


Options
==================

-l, --listen=URI                Specify a URI endpoint on
                                which to listen (see below);
                                more than one may be specified to
                                listen in multiple places.
-p, --port=PORT                 Specify custom port
-s, --single                    Rewrite all not-found requests
                                to 'index.html'.
-d, --debug                     Show debugging information.
-c, --config=PATH               Specify custom path to 'serve.json'.
-L, --no-request-logging        Do not log any request information
                                to the console.
-C, --cors                      Enable CORS, sets
                                'Access-Control-Allow-Origin' to '*'.
-n, --no-clipboard              Do not copy the local address
                                to the clipboard.
-u, --no-compression            Do not compress files.
-e, --no-etag                   Send 'Last-Modified' header
                                instead of `ETag`.
-S, --symlinks                  Resolve symlinks instead of
                                showing 404 errors.
--no-port-switching             Do not open a port other than
                                the one specified when it's taken.


SSL options
==============

-g, --cert-gen                  If enabled, generate self-signed certificate
                                at the specified path.
-I, --ssl-cert=PATH             Optional path to an SSL/TLS
                                certificate to serve with HTTPS.
                                Supported formats: PEM (default)
                                and PKCS12 (PFX)
-i, --ssl-key=PATH              Optional path to the SSL/TLS
                                certificate's private key.
                                Applicable only for PEM certificates.
-k, --ssl-pass=PATH             Optional path to the SSL/TLS
                                certificate's passphrase.
-l, --keys-length=N             Keys pair length.


Certificate options
=======================

-B, --validity-start=DATE       Set activation date.
-E, --validity-end=DATE         Set expiration date.
-D, --domain-name=DOMAIN        Set domain name.
-C, --country-name=COUNTRY      Set country name.
-S, --state-name=STATE          Set state name.
-L, --locality-name=LOCALITY    Set locality name.
-O, --organization-name=ORG     Set organization name.
-U, --organization-unit=UNIT    Set organization unit.
-s, --serial-number=SERIAL      Set serial number.

Application options
=======================

-v, --version               Displays the current version of
                            Safely Serve.
--help                      Shows this help message.


Endpoints
===========

Listen endpoints (specified by the
*--listen* or *-l* options above)
instruct serve to listen on one or
more interfaces/ports, UNIX domain sockets,
or Windows named pipes.

For TCP ports on hostname "localhost":

..  code-block:: bash

  # serve \
      -l \
        "1234"


For TCP (traditional host/port) endpoints:

..  code-block:: bash

  $ serve \
      -l \
        "tcp://hostname:1234"


For UNIX domain socket endpoints:

..  code-block:: bash

  $ serve \
      -l \
        "unix:/path/to/socket.sock"


For Windows named pipe endpoints:

..  code-block:: bash

  $ serve \
      -l \
        "pipe:\\.\pipe\PipeName"


Bugs
====

https://github.com/themartiancompany/safely-serve/-/issues


Copyright
=========

Copyright Pellegrino Prevete. AGPL-3.0.


See also
========

* serve
* cert-gen
* node-run
* libcrash-js
* tmcfs

.. include:: variables.rst
