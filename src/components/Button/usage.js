export const createMeta = () => {
  return [
    {
      dataObj: {
        attrs: {
          style: 'background: #d9534f;'
        },
        props: {},
        on: {
          click: function(event) {
            console.log('clicked');
          }
        }
      },
      children: ['Click Me']
    },
    {
      dataObj: {
        attrs: {},
        props: {},
        on: {
          click: function(event) {
            console.log('Login');
          }
        }
      },
      children: ['Login']
    }
  ];
};
