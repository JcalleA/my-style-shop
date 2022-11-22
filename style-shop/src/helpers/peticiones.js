export const fecthToken = (url, data, method = "GET") => {
    const token = localStorage.getItem("token") || "";
    if (method === "GET" || method === "DELETE") {
        return fetch(url, {
            method,
            headers: {
                "x-token": token,
            },
        });
    } else {
        return fetch(url, {
            method,
            headers: {
                "Content-type": "aplication/json",
                "x-token": token,
            },
            body: JSON.stringify(data),
        });
    }
};

export const fetchSinToken = (url, data, method = "GET") => {
    if (method === "GET") {
        return fetch(url);
        
    } else {
        return fetch(url, {
            method,
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(data),
        });
    }
};