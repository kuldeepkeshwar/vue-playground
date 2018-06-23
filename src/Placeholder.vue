<script>
export default {
  name: 'Placeholder',
  props: ['meta'],
  render: function(createElement) {
    if (this.meta) {
      if (Array.isArray(this.meta.dataObj)) {
        return createElement(
          'div',
          this.meta.dataObj.map(dataObj =>
            createElement(this.meta.component, { ...dataObj })
          )
        );
      } else {
        return createElement(this.meta.component, { ...this.meta.dataObj });
      }
    } else {
      return createElement('div', ['loading example']);
    }
  }
};
</script>
