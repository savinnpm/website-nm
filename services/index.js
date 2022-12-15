import {
  getAllBlogPosts,
  getRelatedBlogPosts,
  getLatestBlogPosts,
  getPostsSlugs,
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
import * as pressroom from './api/pressroom'

export const services = {
  pressroom,

  getAllBlogPosts,
  getLatestBlogPosts,
  getRelatedBlogPosts,
  getPostsSlugs,
  getBlogPaginatedData,
  getBlogPostTagsData,
  getBlogPostTagDataBySlug,
  getSinglePost,
  getFeaturedPosts,
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
