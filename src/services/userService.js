const BASE_URL = "http://127.0.0.1:5000";

export async function getAllUsers(){
    try {
        const responce = await fetch(BASE_URL+'Users');
        if (!responce) {
            throw new Error(`Error : $(responce.status)`)
        }
    } catch (error) {
        return null
    }
}