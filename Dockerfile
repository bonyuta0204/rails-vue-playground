FROM ruby:2.7.2-alpine

# install node.js and yarn
RUN apk add --no-cache -t .build-dependencies \
    alpine-sdk \
    build-base \
    mysql-client \
 && apk add --no-cache \ 
    bash \
    mysql-dev \
    nodejs \
    tzdata \
    yarn

RUN mkdir /app
WORKDIR /app

COPY Gemfile Gemfile
COPY Gemfile.lock Gemfile.lock

RUN bundle install \
 && apk del --purge .build-dependencies

COPY start.sh /usr/bin/
RUN chmod +x /usr/bin/start.sh

COPY . /app

# Add a script to be executed every time the container starts.
EXPOSE 3000

# Start the main process.
CMD ["start.sh"]

