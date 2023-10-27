console.log("Welcome! 3");

var keycloak = new Keycloak({
    url: "https://sso.consumer.games/auth",
    realm: "magic",
    clientId: "account-console",
});
console.log(keycloak);
async function initializeKeycloak() {
    try {
        const authenticated = await keycloak.init({
            onLoad: "login-required",
            timeSkew: 60000,
            flow: "standard",
            pkceMethod: "S256",
        });
        console.log(
            `User is ${authenticated ? "authenticated" : "not authenticated"}`
        );
        console.log(keycloak.token, " wow");
    } catch (error) {
        console.error("Failed to initialize adapter:");
    }
}
initializeKeycloak();
