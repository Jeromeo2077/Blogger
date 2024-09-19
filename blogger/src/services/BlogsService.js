import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"

class BlogsService {

async getAllBlogs() {
  const response = await api.get('api/blogs')
  logger.log(response.data)
  }
}

export const blogsService = new BlogsService()