==============
cert-gen
==============

--------------------------------------------------------
Certificate generator
--------------------------------------------------------
:Version: cert-gen |version|
:Manual section: 1

Synopsis
========

cert-gen *option*


Description
===========

Generates an X509 version 3
certificate using an existing private key
or generating one at runtime.

It depends on the Forge TLS
Javascript implementation
and on the Crash Javascript Library.

It runs both in Node as in
the browser.

Options
========

-i, --key-private=FILE          Use existing private key.
-l, --keys-length=N             Keys pair length.
-o, --output-file=FILE          Set output file.


Validity options
==================

-B, --validity-start=DATE       Set activation date.
-E, --validity-end=DATE         Set expiration date.


Identity Options
==================

-D, --domain-name=DOMAIN        Set domain name.
-C, --country-name=COUNTRY      Set country name.
-S, --state-name=STATE          Set state name.
-L, --locality-name=LOCALITY    Set locality name.
-O, --organization-name=ORG     Set organization name.
-U, --organization-unit=UNIT    Set organization unit.
-s, --serial-number=SERIAL      Set serial number.

-v --verbose            Enable verbose output.
-h                      Display help.


Bugs
====

https://github.com/themartiancompany/cert-tools/-/issues

Copyright
=========

Copyright Pellegrino Prevete. AGPL-3.0.

See also
========

* node-run
* libcrash-js
* tmcfs

.. include:: variables.rst
