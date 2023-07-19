import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import firebaseConfig from "./firebaseConfig.json";

function replacePlaceholdersWithEnvVars(obj) {
  const placeholderRegex = /\{\{(.+?)\}\}/g;

  for (const key in obj) {
    if (typeof obj[key] === "string") {
      obj[key] = obj[key].replace(placeholderRegex, (match, envVarName) => {
        // Get the environment variable value
        const envVarValue = window.env[envVarName] || "";
        return envVarValue;
      });
    }
  }
}

replacePlaceholdersWithEnvVars(firebaseConfig);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const analytics = getAnalytics(app);

export { auth, provider };
