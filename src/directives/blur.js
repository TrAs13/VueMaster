export default {
  beforeMount: (el) => {
    el.onblur = () => console.log(el.tagName + " has lost focus");
  },
};
