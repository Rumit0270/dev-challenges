import apiService from './apiService';

export interface IJob {
  id: string;
  type: string;
  url: string;
  created_at: string;
  company: string;
  company_url: string | null;
  location: string;
  title: string;
  description: string;
  how_to_apply: string;
  company_logo: string;
}

export const getJobs = (
  page: number = 1,
  fullTime: boolean = false,
  description?: string,
  location?: string,
) => {
  let url = '/positions.json?';
  if (description) {
    url = `${url}description=${description}&`;
  }

  if (fullTime) {
    url = `${url}full_time=${fullTime}&`;
  }

  if (location) {
    url = `${url}location=${location}&`;
  }

  url = `${url}page=${page}`;

  return apiService.get<IJob[]>(url);
};

export const getJobDetail = (id: string) => {
  return apiService.get<IJob>(`/positions/${id}.json`);
};
