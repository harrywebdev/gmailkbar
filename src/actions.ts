export const actions = [
  {
    id: 'forward_msg',
    name: 'Forward',
    shortcut: ['f'],
    keywords: 'forward',
    perform: () => {
      document.dispatchEvent(new KeyboardEvent('keypress', { key: 'F' }));
    },
  },
  {
    id: 'contact',
    name: 'Contact',
    shortcut: ['c'],
    keywords: 'email',
    perform: () => (window.location.pathname = 'contact'),
  },
];
