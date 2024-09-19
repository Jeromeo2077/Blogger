<template>
  <i :class="iconClass"></i>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  size: {
    type: String,
    default: 'inherit'
  },
  color: {
    type: String,
    default: 'inherit'
  }
});

const iconClass = computed(() => `mdi mdi-${props.name}`);
</script>

<style scoped lang="scss">
i {
  font-size: v-bind(size);
  color: v-bind(color);
}
</style>