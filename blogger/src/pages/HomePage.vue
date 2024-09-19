<script setup>
import { AppState } from '@/AppState.js';
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
        {{ blogs }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: clamp(500px, 50vw, 100%);

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
