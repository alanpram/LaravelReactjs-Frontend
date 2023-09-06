import React from "react";

function getAuthTokenFromCookie() {
    const cookies = document.cookie.split(';');

    for (const cookie of cookies) {
        const [name, value] = cookie.trim().split('=');
        if (name === 'token') {
        return decodeURIComponent(value);
        }
    }

    return null; 
}

export default getAuthTokenFromCookie;