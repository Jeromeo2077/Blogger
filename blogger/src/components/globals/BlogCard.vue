<script setup>
import { Blog } from '@/models/Blog.js';


const props = defineProps({
  blogProp: { type: Blog, required: true }
})

</script>


<template>
  <div class="container">
    <section class="row">
      <div class="col-12">
        {{ blogProp.title }}

      </div>
    </section>
  </div>

</template>


<style lang="scss" scoped></style>