<script setup>
import { AppState } from '@/AppState.js';
import BlogCard from '@/components/globals/BlogCard.vue';
import { blogsService } from '@/services/BlogsService.js';
import { logger } from '@/utils/Logger.js';
import Pop from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';

const blogs = computed(() => AppState.blogs)

onMounted(() => {
  getAllBlogs()
})

async function getAllBlogs() {
  try {
    await blogsService.getAllBlogs()
  }
  catch (error) {
    Pop.meow(error)
    logger.error(error)
  }
}
</script>

<template>
  <div class="container">
    <div class="section row">
      <div class="col-12">
        <div v-for="blog in blogs" :key=blog.id class="d-flex flex-columnn m-3 home-card">
          <BlogCard :blogProp="blog" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.home-card {
  border: 2px solid;
  box-shadow: 0px 2px 10px;
}
</style>
