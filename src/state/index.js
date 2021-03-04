import { createState } from '@hookstate/core';

const data = {
  clientList: localStorage.getItem('Clients'),
  caseList: localStorage.getItem('Cases'),
  empList: localStorage.getItem('Emps'),
  catList: localStorage.getItem('Cats'),
  ccList: localStorage.getItem('ClientCase')
}

const globalState = createState(data);

export default globalState;