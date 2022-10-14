import { presetUno, presetAttributify, presetIcons } from 'unocss';
import Unocss from 'unocss/vite';
import '@iconify-json/ic';

const colors = [
  'white',
  'black',
  'gray',
  'yellow',
  'green',
  'blue',
  'indigo',
  'purple',
  'pink',
  'red'
];

const safelist = [
  ...colors.map((v) => `bg-${v}-500`),
  ...colors.map((v) => `hover:bg-${v}-700`),

  ...[
    'search',
    'edit',
    'check',
    'message',
    'star-off',
    'delete',
    'add',
    'share'
  ].map((v) => `i-ic-baseline-${v}`)
];

export default () => Unocss({
  safelist,
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons()
  ]
})