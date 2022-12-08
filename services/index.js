import { getBlogPosts, getLatestBlogPosts, getPostsSlugs, getSinglePost } from './api/blog'
import { getVideos } from './api/videos'
import { getEcosystems } from './api/ecosystems'
import { getAudits, getAuditSlugs, getSingleAudit } from './api/audits'
import { getPrograms, getProgramSlugs, getSingleProgram } from './api/programs'
import { getPages, getPageSlugs, getSinglePage, getFirstPage, getPagesData } from './api/pages'
import { getVacancies, getVacancySlugs, getSingleVacancy } from './api/vacancies'

export const services = {
  getBlogPosts,
  getLatestBlogPosts,
  getPostsSlugs,
  getSinglePost,
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
  getFirstPage,
  getPagesData,
  getVacancies,
  getVacancySlugs,
  getSingleVacancy
}
