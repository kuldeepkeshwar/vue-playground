<script>
function findHeader(vNode) {
  const headers = vNode.componentOptions.children.filter(
    c => c.data && c.data.slot === 'title'
  );
  return headers[0];
}
const headerProps = {
  class: {
    'tab-header-container': true
  }
};
export default {
  props: ['active'],
  name: 'Tabs',
  data: function() {
    return { selected: 0 };
  },
  methods: {
    clickHandler: function(id, e) {
      this.selected = id;
      this.$emit('change', this.selected);
    }
  },
  render(h) {
    const selected = this.active || this.selected || 0;
    const headers = h(
      'div',
      headerProps,
      this.$slots.default.map((s, i) =>
        h(
          'div',
          {
            class: { active: i === selected - 0, tab: true },
            attrs: {
              id: i
            },
            on: {
              click: this.clickHandler.bind(this, i)
            }
          },
          [s.componentOptions.propsData.title || findHeader(s)]
        )
      )
    );
    const body = h('div', [this.$slots.default[selected]]);
    return h('div', [headers, body]);
  }
};
</script>
<style scoped>
.tab-header-container {
  display: flex;
}
.tab {
  margin: 3px;
}
.active {
  border-bottom: 2px solid #99d7f8;
}
</style>
