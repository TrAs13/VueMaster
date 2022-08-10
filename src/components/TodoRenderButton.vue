<script>
import { h } from "vue";
export default {
  data() {
    return {
      tag: "button",
      tags: ["button", "div", "h1", "span"],
    };
  },
  render() {
    return h(this.tag, {
      class: "btn btn-danger",
      innerHTML: "change Tag",
      onClick: this.changeTag,
    });
  },
  methods: {
    changeTag() {
      this.tag = this.tags[Math.floor(Math.random() * this.tags.length)];
    },
  },
};
</script>
