export const msalConfig = {
    auth: {
        clientId: import.meta.env.VITE_CLIENT_ID,
        authority: import.meta.env.VITE_AUTHORITY, // This is a URL (e.g. https://login.microsoftonline.com/{your tenant ID})
        knownAuthorities:[`${import.meta.env.VITE_TENENT}.b2clogin.com`],
        redirectUri: "/",
        postLogoutRedirectUri: "/", // Indicates the page to navigate after logout.
    },
    cache: {
        cacheLocation: "sessionStorage", // This configures where your cache will be stored
        storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    }
};

// Add scopes here for ID token to be used at Microsoft identity platform endpoints.
export const loginRequest = {
    scopes: ["https://dperera.onmicrosoft.com/product-api/product.read",]
};

// Add the endpoints here for Microsoft Graph API services you'd like to use.
export const graphConfig = {
    graphMeEndpoint: "https://graph.microsoft.com/v1.0/me"
};
export const profileEdit = {
    policy:'B2C_1_profile_editing',
    url: `https://dperera.b2clogin.com/dperera.onmicrosoft.com/oauth2/v2.0/authorize?p=B2C_1_profile_editing&client_id=${msalConfig.auth.clientId}&nonce=defaultNonce&redirect_uri=http://localhost:3000&scope=openid&response_type=id_token&prompt=login`
};
