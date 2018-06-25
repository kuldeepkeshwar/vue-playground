<script>
export const usage = () => {
  return {
    dataObj: {
      attrs: {
        value: 'John Doe',
        id: 'name',
        placeholder: 'Enter your name'
      },
      props: {
        label: 'Name'
      },
      on: {
        change: function(event) {
          console.log('change:', event.target.value);
        },
        input: function(event) {
          console.log('input:', event.target.value);
        }
      }
    },
    children: []
  };
};
</script>
