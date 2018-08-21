const createMeta = () => ({
  dataObj: {
    attrs: {
      value: 'John Doe',
      id: 'name',
      placeholder: 'Enter your name',
    },
    props: {
      label: 'Name',
    },
    on: {
      change(event) {
        // eslint-disable-next-line no-console
        console.log('change:', event.target.value);
      },
      input(event) {
        // eslint-disable-next-line no-console
        console.log('input:', event.target.value);
      },
    },
  },
  children: [],
});
export default createMeta;
