import Keycloak from 'keycloak-js';

console.log("opened");

const keycloak = new Keycloak({
    url: 'https://sso.consumer.games/auth',
    realm: 'magic',
    clientId: 'account-console',
});

try {
    const authenticated = await keycloak.init({
        onLoad: 'login-required',
    });
    console.log(`User is ${authenticated ? 'authenticated' : 'not authenticated'}`);
} catch (error) {
    console.error('Failed to initialize adapter:', error);
}