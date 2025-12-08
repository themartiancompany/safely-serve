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

-l, --listen listen-uri     Specify a URI endpoint on
                            which to listen (see below);
                            more than one may be specified to
                            listen in multiple places.
-p                          Specify custom port
-s, --single                Rewrite all not-found requests
                            to 'index.html'.
-d, --debug                 Show debugging information.
-c, --config                Specify custom path to 'serve.json'.
-L, --no-request-logging    Do not log any request information
                            to the console.
-C, --cors                  Enable CORS, sets
                            'Access-Control-Allow-Origin' to '*'.
-n, --no-clipboard          Do not copy the local address
                            to the clipboard.
-u, --no-compression        Do not compress files.
--no-etag                   Send 'Last-Modified' header
                            instead of `ETag`.
-S, --symlinks              Resolve symlinks instead of
                            showing 404 errors.
--ssl-cert                  Optional path to an SSL/TLS
                            certificate to serve with HTTPS.
                            Supported formats: PEM (default)
                            and PKCS12 (PFX)
--ssl-key                   Optional path to the SSL/TLS
                            certificate's private key.
                            Applicable only for PEM certificates.
--ssl-pass                  Optional path to the SSL/TLS
                            certificate's passphrase.
--no-port-switching         Do not open a port other than
                            the one specified when it's taken.

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
