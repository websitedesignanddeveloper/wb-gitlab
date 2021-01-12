/* eslint-disable import/prefer-default-export */
export const uri = "https://gitlab.com/api/v4";
export const token = VARS['GITLAB_PERSONAL_TOKEN'];

interface User {
  id: number;
  name: string;
  email: string;
}

const storageSetter = {
  setData(key: string, data: any) {
    localStorage.setItem(key, JSON.stringify(data));
  },
  getData(key: string) {
    return JSON.parse(localStorage.getItem(key) as string);
  },
};

export const store = storageSetter;
