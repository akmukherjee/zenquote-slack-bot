# zenquote-slack-bot
Sends a Quote from [ZenQuotes API](https://zenquotes.io/) to a Slack channel using Incoming Webhooks functionality

# Usage
First set up a [Slack Channel and get a Webhook](https://api.slack.com/messaging/webhooks#create_a_webhook) and store it in a .env file within the root project directory with the key SLACK_URL and value YOUR_SLACK_WEBHOOK. Then install dependencies with npm :
```
npm install 
```
The secrets are stored within Github Secrets with the same key to support [Github Actions workflow](.github/workflows/action.yml) and send it periodically from within Github.
To run the application locally:
```
npm start
```

And that's it! You should see a Slack Message in the channel you set up the Webhook for. 
