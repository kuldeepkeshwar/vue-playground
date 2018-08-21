<script>
export default {
  name: 'Placeholder',
  props: ['component'],
  render: function render(createElement) {
    const { definition, usage } = this.component;
    if (usage) {
      if (usage instanceof Function && definition) {
        const meta = usage();
        if (Array.isArray(meta)) {
          return createElement(
            'div',
            meta.map(m =>
              createElement(definition, { ...m.dataObj }, m.children),
            ),
          );
        }
        return createElement(definition, { ...meta.dataObj }, [
          meta.children,
        ]);
      }
      return createElement(usage, []);
    }
    return createElement('div', ['loading example']);
  },
};
</script>
