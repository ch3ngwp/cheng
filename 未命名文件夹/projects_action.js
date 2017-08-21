import axios from '../utils/axios';
export const POST_PROJECTS = "post_projects";
export const GET_PROJECTS = "get_projects";
export const DELETE_PROJECTS = "delete_projects";
export const UPDATE_PROJECTS_STATUS = "update_projects_status";
export const UPDATE_PROJECTS_RATING = "update_projects_rating";
export const GET_STAGES_INFO = "get_stages_info";
export const GET_LASTACESSED_INFO = "get_last_accessed_info";


export function getProjects(){
  const request = axios.get('/projects');
  return {
    type: GET_PROJECTS,
    payload: request
  };
}

export function postProjects(values){
  const request = axios.post('/projects', values);
  return {
    type: POST_PROJECTS,
    payload: request
  };
}


export function deleteProjects(values){
  const id = values.projectid
  // console.log({id,values});
  const request = axios.delete(`/projects/${id}`,values);
  return {
    type: DELETE_PROJECTS,
    payload: request
  };
}

export function updateProjectStatus(values){
  const id = values.id
  // console.log({id,values});
  const request = axios.put(`/projects/${id}`,values);
  return {
    type: UPDATE_PROJECTS_STATUS,
    payload: request
  };
}

export function updateProjectRating(values){
  const id = values.id
  // console.log({id,values});
  const request = axios.put(`/projects/${id}`,values);
  return {
    type: UPDATE_PROJECTS_RATING,
    payload: request
  };
}

export function getStagesInfo(){
  const request = axios.get('/project-stages');
  return {
    type: GET_STAGES_INFO,
    payload: request
  };
}

export function getLastAccessedInfo(){
  const request = axios.get('/projects/last-accessed');
  return {
    type: GET_LASTACESSED_INFO,
    payload: request
  };
}
