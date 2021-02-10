/* eslint-disable quotes */
import clients from '../data/clients.json'
import cases from '../data/cases.json'
import employees from '../data/employees.json'
import categories from '../data/categories.json'
import clientcases from '../data/clientcase.json'

export const setLocalStorage =()=>{
  localStorage.setItem('Clients', JSON.stringify(clients))
  localStorage.setItem('Cases', JSON.stringify(cases))
  localStorage.setItem('Emps', JSON.stringify(employees))
  localStorage.setItem('Cats', JSON.stringify(categories))
  localStorage.setItem('ClientCase', JSON.stringify(clientcases))
}

// export const addCase = (_case) => {
//   localStorage.setItem('Cases', JSON.stringify(_case));
// }