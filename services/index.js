import {
  getAllBlogPosts,
  getRelatedBlogPosts,
  getLatestBlogPosts,
  getPostsSlugs,
  getBlogPostTagSlugs,
  getBlogPaginatedData,
  getBlogPostTagsData,
  getBlogPostTagDataBySlug,
  getSinglePost,
  getFeaturedPosts
} from './api/blog'
import { getVideos } from './api/videos'
import { getNews } from './api/news'
import { getEcosystems } from './api/ecosystems'
import { getAudits, getAuditSlugs, getSingleAudit } from './api/audits'
import { getPrograms, getProgramSlugs, getSingleProgram } from './api/programs'
import { getPages, getPageSlugs, getSinglePage } from './api/pages'
import { getVacancies, getVacancySlugs, getSingleVacancy } from './api/vacancies'
import { getPressroomPosts, getPressroomLatestPost, getPressroomPostsSlugs, getSinglePressroomPost, getRelatedPressroomPosts, getFilteredPressroomPosts } from './api/pressroom'

export const services = {
  getAllBlogPosts,
  getLatestBlogPosts,
  getRelatedBlogPosts,
  getPostsSlugs,
  getBlogPostTagSlugs,
  getBlogPaginatedData,
  getBlogPostTagsData,
  getBlogPostTagDataBySlug,
  getSinglePost,
  getFeaturedPosts,
  getPressroomPosts,
  getPressroomLatestPost,
  getRelatedPressroomPosts,
  getPressroomPostsSlugs,
  getFilteredPressroomPosts,
  getSinglePressroomPost,
  getNews,
  getVideos,
  getEcosystems,
  getAudits,
  getAuditSlugs,
  getSingleAudit,
  getPrograms,
  getProgramSlugs,
  getSingleProgram,
  getPages,
  getPageSlugs,
  getSinglePage,
  getVacancies,
  getVacancySlugs,
  getSingleVacancy
}
