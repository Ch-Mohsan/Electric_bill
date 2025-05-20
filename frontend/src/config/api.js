const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

export const API_URLS = {
    
    USER_LOGIN: `${API_BASE_URL}/users/login`,
    USER_REGISTER: `${API_BASE_URL}/users/register`,
    
    
    BILLS: `${API_BASE_URL}/bills`,
    BILL_DETAILS: (id) => `${API_BASE_URL}/bills/${id}`,
};

export default API_URLS; 