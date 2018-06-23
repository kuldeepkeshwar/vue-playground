<script>
export const usage = () => {
  return {
    attrs: {
      value: 'John',
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
  };
};
</script>
