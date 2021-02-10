
export const getClients = () => {
  var clientList = localStorage.getItem('Clients') 
  return clientList;
}

export const getCases = () => {
  var caseList = localStorage.getItem('Cases')
  return caseList;
}

export const getEmployees = () => {
  var empList = localStorage.getItem('Emps')
  return empList;
}

export const getCategories = () => {
  var catList = localStorage.getItem('Cats')
  return catList;
}

export const getClientCases = () => {
  var ccList = localStorage.getItem('ClientCase')
  return ccList;
}


                 