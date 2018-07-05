<script>
export default {
  name: 'Placeholder',
  props: ['component'],
  render: function(createElement) {
    const { definition, usage } = this.component;
    if (usage) {
      if (usage.createMeta && definition) {
        const meta = usage.createMeta();
        if (Array.isArray(meta)) {
          return createElement(
            'div',
            meta.map(m =>
              createElement(definition, { ...m.dataObj }, m.children)
            )
          );
        } else {
          return createElement(definition, { ...meta.dataObj }, [
            meta.children
          ]);
        }
      } else {
        return createElement(usage, []);
      }
    } else {
      return createElement('div', ['loading example']);
    }
  }
};
</script>
