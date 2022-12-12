import {
  getBlogPosts,
  getLatestBlogPosts,
  getPostsSlugs,
  getSinglePost,
  getPostTabs,
  getFilteredPosts,
  getFilteredPostPages
} from './api/blog'
import { getVideos } from './api/videos'
import { getNews } from './api/news'
import { getEcosystems } from './api/ecosystems'
import { getAudits, getAuditSlugs, getSingleAudit } from './api/audits'
import { getPrograms, getProgramSlugs, getSingleProgram } from './api/programs'
import { getPages, getPageSlugs, getSinglePage } from './api/pages'
import { getVacancies, getVacancySlugs, getSingleVacancy } from './api/vacancies'
import { getPressroomPosts, getPressroomPostsSlugs, getSinglePressroomPost } from './api/pressroom'

export const services = {
  getBlogPosts,
  getLatestBlogPosts,
  getPostsSlugs,
  getSinglePost,
  getPostTabs,
  getFilteredPosts,
  getFilteredPostPages,
  getPressroomPosts,
  getPressroomPostsSlugs,
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
