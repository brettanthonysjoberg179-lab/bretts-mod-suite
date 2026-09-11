import { Devvit } from '@devvit/public-api';
import { reddit } from '@devvit/reddit';

Devvit.configure({
  reddit,
});

// Trigger: App installed on a subreddit
Devvit.addTrigger({
  event: 'onAppInstall',
  job: async () => {
    console.log("Brett's Mod Suite installed!");
    return { status: 'ok' };
  },
});

// Trigger: Subreddit updated
Devvit.addTrigger({
  event: 'onUpdate',
  job: async () => {
    console.log("Brett's Mod Suite update trigger fired");
    return { status: 'ok' };
  },
});

// Trigger: New comment created
Devvit.addTrigger({
  event: 'onCommentCreate',
  job: async () => {
    console.log("Brett's Mod Suite comment trigger fired");
    return { status: 'ok' };
  },
});

// Trigger: New post created
Devvit.addTrigger({
  event: 'onPostCreate',
  job: async () => {
    console.log("Brett's Mod Suite post trigger fired");
    return { status: 'ok' };
  },
});

Devvit.addUIElement({
  type: 'post',
  location: 'head',
  render: async () => {
    return null;
  },
});

export default Devvit;