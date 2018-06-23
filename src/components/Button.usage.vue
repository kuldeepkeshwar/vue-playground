<script>
export const usage = () => {
  return [
    {
      attrs: {},
      props: {
        label: 'Click me'
      },
      on: {
        click: function(event) {
          console.log('clicked');
        }
      }
    },
    {
      attrs: {},
      props: {
        label: 'Click me 2'
      },
      on: {
        click: function(event) {
          console.log('clicked');
        }
      }
    }
  ];
};
</script>
