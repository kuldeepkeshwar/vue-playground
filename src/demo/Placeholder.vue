<script>
export default {
  name: "Placeholder",
  props: ["component"],
  render: function(createElement) {
    const { definition, meta } = this.component;
    if (definition) {
      if (Array.isArray(meta)) {
        return createElement(
          "div",
          meta.map(m => createElement(definition, { ...m.dataObj }, m.children))
        );
      } else {
        return createElement(definition, { ...meta.dataObj }, [meta.children]);
      }
    } else {
      return createElement("div", ["loading example"]);
    }
  }
};
</script>
