<template>
    <masonry :cols="{default: 4, 1000: 3, 750: 2, 500: 1}" :gutter="16" id="community-gutter" class="outer-gutter">
        <div v-for="(item, index) in issues" :key="item.id" class="gutter-item">
            <brick :text="item.text"></brick>
        </div>
    </masonry>
</template>
<script>
import Brick from "./Brick.vue";

export default {
  data() {
    return {
      issues: [
        { text: "A" },
        { text: "B" },
        { text: "C" },
        { text: "D" },
        { text: "E" },
        { text: "F" },
        { text: "G" },
        { text: "H" },
        { text: "I" },
        { text: "J" }
      ]
    };
  },
  components: {
    brick: Brick
  }
};
</script>
<style>

</style>
