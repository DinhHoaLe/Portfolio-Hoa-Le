import { projects } from './profile.js';
import { getProjectDetail } from './dmitry/projectDetails.js';
const slugify = title => title.normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/&/g, ' and ').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const slugs = projects.map(project => [project.id, slugify(getProjectDetail(project).title)]);
export function projectPath(id) {
  const entry = slugs.find(([key]) => key === id);
  if (!entry) return '/projects/' + id;
  const duplicate = slugs.filter(([,slug]) => slug === entry[1]).length > 1;
  return '/projects/' + entry[1] + (duplicate ? '-' + id.replace('hoa-project-', '') : '');
}
export function projectId(path) {
  return projects.find(project => projectPath(project.id) === path || '/projects/' + project.id === path)?.id;
}
export function canonicalProjectPath(path) {
  const id = projectId(path);
  return id ? projectPath(id) : path;
}
