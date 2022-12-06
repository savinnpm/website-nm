import { getBlogPosts, getLatestBlogPosts, getPostsSlugs, getSinglePost } from './blog'
import { getVideos } from './videos'
import { getAudits, getAuditSlugs, getSingleAudit } from './audits'
import { getPrograms, getProgramSlugs, getSingleProgram } from './programs'
import { getVacancies, getVacancySlugs, getSingleVacancy } from './vacancies'

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
