#!/bin/sh
set -e

bundle exec rake db:create
bundle exec rake ridgepole:apply

bundle exec puma
