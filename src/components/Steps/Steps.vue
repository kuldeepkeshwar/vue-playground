<script>
export default {
  props: ['active'],
  name: 'Steps',
  render(h) {
    const selected = this.active || 0;
    const step = h('div', [this.$slots.default[selected]]);
    return h('div', [step]);
  }
};
</script>
