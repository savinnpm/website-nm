import { getBlogPosts, getLatestBlogPosts, getPostsSlugs, getSinglePost } from './api/blog'
import { getVideos } from './api/videos'
import { getAudits, getAuditSlugs, getSingleAudit } from './api/audits'
import { getPrograms, getProgramSlugs, getSingleProgram } from './api/programs'
import { getVacancies, getVacancySlugs, getSingleVacancy } from './api/vacancies'

export const services = {
  getBlogPosts,
  getLatestBlogPosts,
  getPostsSlugs,
  getSinglePost,
  getVideos,
  getAudits,
  getAuditSlugs,
  getSingleAudit,
  getPrograms,
  getProgramSlugs,
  getSingleProgram,
  getVacancies,
  getVacancySlugs,
  getSingleVacancy
}
