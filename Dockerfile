FROM ruby:2.7.2

# install node.js and yarn
RUN apt-get update -qq && apt-get install -y nodejs
RUN curl -fsSL https://deb.nodesource.com/setup_lts.x | bash - && apt-get install -y nodejs
RUN npm install --global yarn

RUN mkdir /app
WORKDIR /app

COPY Gemfile Gemfile
COPY Gemfile.lock Gemfile.lock
RUN bundle install

COPY start.sh /usr/bin/
RUN chmod +x /usr/bin/start.sh

COPY . /app

# Add a script to be executed every time the container starts.
EXPOSE 3000

# Start the main process.
CMD ["start.sh"]

