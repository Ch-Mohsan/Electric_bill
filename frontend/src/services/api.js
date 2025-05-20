import API_URLS from '../config/api';

// Example API service functions
export const userService = {
    login: async (credentials) => {
        const response = await fetch(API_URLS.USER_LOGIN, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
        });
        return response.json();
    },

    register: async (userData) => {
        const response = await fetch(API_URLS.USER_REGISTER, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });
        return response.json();
    },
};

export const billService = {
    getAllBills: async () => {
        const response = await fetch(API_URLS.BILLS);
        return response.json();
    },

    getBillDetails: async (id) => {
        const response = await fetch(API_URLS.BILL_DETAILS(id));
        return response.json();
    },

    createBill: async (billData) => {
        const response = await fetch(API_URLS.BILLS, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(billData),
        });
        return response.json();
    },
}; 