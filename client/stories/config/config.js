import { configure } from '@kadira/storybook';

function loadStories() {
  require('../');
}

configure(loadStories, module);
