export const isAuthenticated = () => {
    return localStorage.getItem('authToken') !== null;
  };
  
  export const login = () => {
    localStorage.setItem('authToken', '123456');
  };
  
  export const logout = () => {
    localStorage.removeItem('authToken');
  };
  