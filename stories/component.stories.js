import { action } from '@storybook/addon-actions';
import Component from '../src/index';

export default {
  title: 'Component',
  component: Component,
};

export const Text = () => ({
  Component: Component,
  props: { name: 'World', buttonText: 'Hello Button' },
  on: { click: action('clicked') },
});

export const Emoji = () => ({
  Component: Component,
  props: { name: '😀 😎', buttonText: '👍 💯' },
  on: { click: action('clicked') },
});
