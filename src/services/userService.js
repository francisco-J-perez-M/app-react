const BASE_URL = "http://127.0.0.1:5000/";

export async function getAllUsers(){
    try {
        const response = await fetch(BASE_URL + 'users'); // Cambia 'Users' a 'users'
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        return response.json();
    } catch (error) {
        console.error("Error fetching users:", error);
        return null;
    }
}