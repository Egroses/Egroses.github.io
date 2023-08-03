console.log("Welcome?");

var keycloak = new Keycloak({
    url: "https://sso.consumer.games/auth",
    realm: "magic",
    clientId: "account-console",
});
console.log(keycloak);

async function initializeKeycloak() {
    try {
        const initOptions = {
            onLoad: "login-required",
            timeSkew: 60000,
            flow: "standard",
            pkceMethod: "S256",
            checkLoginIframe: false,
        };

        const authenticated = await keycloak.init(initOptions);
        console.log(
            `User is ${authenticated ? "authenticated" : "not authenticated"}`
        );
        console.log(keycloak.token, " wow");
        document.getElementById("login-button").style.display = "none";
        document.getElementById("unity-container").style.display = "block";
    } catch (error) {
        console.error("Failed to initialize adapter:", error);
        console.error("Failed to initialize adapter:", JSON.stringify(error));
    }
}
initializeKeycloak();
