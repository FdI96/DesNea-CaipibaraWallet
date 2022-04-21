const baseURL = "http://localhost:3004"

export async function getOperations()
{
    let data;
    try {
        const response = await window.fetch('http://localhost:3004/operations', {
            method: 'GET'
        });
        data = await response.json();
        return data;
        
    } catch (err) {
        return Promise.reject(err.message ? err.message : data);
    }
}
