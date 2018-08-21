<script>
function findHeader(vNode) {
  const headers = vNode.componentOptions.children.filter(
    c => c.data && c.data.slot === 'title',
  );
  return headers[0];
}
const headerProps = {
  class: {
    'tab-header-container': true,
  },
};
export default {
  props: ['active'],
  name: 'Tabs',
  data() {
    return { selected: 0 };
  },
  methods: {
    clickHandler(id) {
      this.selected = id;
      this.$emit('change', this.selected);
    },
  },
  render(h) {
    const selected = this.active || this.selected || 0;
    const slots = this.$slots.default.filter(s => s.tag);
    const headers = h(
      'div',
      headerProps,
      slots.map((s, i) =>
        h(
          'div',
          {
            class: { active: i === selected - 0, tab: true },
            attrs: {
              id: i,
            },
            on: {
              click: this.clickHandler.bind(this, i),
            },
          },
          [s.componentOptions.propsData.title || findHeader(s)],
        ),
      ),
    );
    const body = h('div', [slots[selected]]);
    return h('div', [headers, body]);
  },
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
