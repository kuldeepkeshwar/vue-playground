const createMeta = () => [
  {
    dataObj: {
      attrs: {
        style: 'background: #d9534f;',
      },
      props: {},
      on: {
        click() {
          // eslint-disable-next-line no-console
          console.log('clicked');
        },
      },
    },
    children: ['Click Me'],
  },
  {
    dataObj: {
      attrs: {},
      props: {},
      on: {
        click() {
          // eslint-disable-next-line no-console
          console.log('Login');
        },
      },
    },
    children: ['Login'],
  },
];
export default createMeta;
