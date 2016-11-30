import { configure } from '@kadira/storybook';

function loadStories() {
  require('../client/stories');
}

configure(loadStories, module);
