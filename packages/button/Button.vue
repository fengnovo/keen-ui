<template>
  <button class="k-button" :class="[buttonType, buttonSize]">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "KButton",
};
</script>
<script setup>
import { computed } from "vue";
const props = defineProps({
  type: {
    required: false,
    type: String,
    default: "default",
  },
  size: {
    required: false,
    type: String,
    default: "default",
  },
});

const buttonType = computed(() => "k-button--" + props.type);
const buttonSize = computed(() => "k-button-" + props.size);
</script>