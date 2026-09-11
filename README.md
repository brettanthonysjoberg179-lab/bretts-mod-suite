# Brett's Mod Suite

All-in-one Reddit moderation dashboard — queue, log, mail, and flair management in one app.

## Features

- **Queue Management** — View and process the moderation queue
- **Moderation Log** — Track who modded what, when, and why
- **Mod Mail** — Read and respond to mod mail with templates
- **Flair Management** — Assign, batch update, and auto-flair by keyword

## Installation

1. Go to [Reddit's Developer Platform](https://developers.reddit.com/)
2. Create a new app and upload this package
3. Install on your subreddit

## Development

```bash
npm install
npm run dev
```

## Architecture

```
bretts-mod-suite/
├── devvit.json          # App config, triggers, settings, permissions
├── package.json         # Dependencies (@devvit/* ^0.14.3)
├── server/
│   └── index.js         # Triggers: onAppInstall, onUpdate, onCommentCreate, onPostCreate
└── client/
    └── App.jsx          # React dashboard with queue/log/mail/flair tabs
```

## Permissions

- `read` — Read subreddit content
- `submit` — Submit posts and comments
- `modposts` — Moderate posts and comments

## Triggers

| Trigger | Description |
|---------|-------------|
| `onAppInstall` | Fires when app is installed on a subreddit |
| `onUpdate` | Fires on subreddit updates |
| `onCommentCreate` | Fires when a new comment is created |
| `onPostCreate` | Fires when a new post is created |

## User Actions (runAs)

- `SUBMIT_POST` — Post as the logged-in user
- `SUBMIT_COMMENT` — Comment as the logged-in user
- `SUBSCRIBE_TO_SUBREDDIT` — Subscribe as the logged-in user

## Subreddit Settings

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `welcomeMessage` | string | "Welcome to our community!" | Welcome message for new members |
| `autoModEnabled` | boolean | true | Enable auto-moderation rules |
| `queueThreshold` | number | 50 | Alert when queue exceeds this count |

## License

MIT
