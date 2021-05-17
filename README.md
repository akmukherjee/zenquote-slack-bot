# zenquote-slack-bot
Sends a Quote from ZenQuotes API to a Slack channel using Incoming Webhooks functionality

# Usage
First set up a Slack Channel and get a Webhook and store it in a .env file within the root project directory with the key SLACK_URL and value YOUR_SLACK_WEBHOOK. Then install dependencies with npm :
```
npm install 
```
The secrets are stored in a SLACK_URL
To run the application:
```
npm start
```

And that's it! You should see a Slack Message in the channel you set up the Webhook for. 
