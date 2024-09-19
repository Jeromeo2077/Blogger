<script setup>
import { Blog } from '@/models/Blog.js';


const props = defineProps({
  blogProp: { type: Blog, required: true }
})

</script>


<template>
  <div class="container">
    <section class="row">
      <div class="col-4">
        <img class="blog-img img-fluid" :src="blogProp.imgUrl" :alt="blogProp.title">
      </div>
      <div class="col-8">
        <h2>
          {{ blogProp.title }}
        </h2>
      </div>
    </section>
  </div>

</template>


<style lang="scss" scoped>
.blog-img {
  object-fit: cover;
  object-position: center;
  height: 35dvh;
  width: 100%
}
</style>