import {connexionStore} from "@/stores/connexionStore";
export async function peutAccederPublication() {

    try {
        const response = await fetch("/api/check-authentication");
        const authState = await response.json();
        const store = connexionStore();

        if (authState.authenticated === true) {
            store.login()
            return authState.authenticated;
        } else {
            store.logout()
            return false;
        }
    } catch (error) {
        console.error("Une erreur s'est produite lors de la récupération de l'état d'authentification :", error);
        return false; // Gérer l'erreur de manière appropriée dans votre application
    }
}
