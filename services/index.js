import { getBlogPosts, getLatestBlogPosts, getPostsSlugs, getSinglePost } from './api/blog'
import { getVideos } from './api/videos'
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
  getPressroomPosts,
  getPressroomPostsSlugs,
  getSinglePressroomPost,
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
