import { auth } from "./firebase";

export function getCurrentUser() {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      unsubscribe();
      resolve(user);
    }, reject);
  });
}

export async function requireAuth() {
  try {
    const user = await getCurrentUser();
    if (!user) {
      return { status: 401, data: { msg: "Unauthorized user, please login!" } };
    } else {
      

      try {
        const idTokenResult = await user.getIdTokenResult();

        // Check if the user has the admin role
        if (idTokenResult.claims.admin) {
          // User is an admin
          console.log("User is an admin");
          return { status: 200, data: { msg: "Authorized user" } };
        } else {
          // User is not an admin
          console.log("User is not an admin");
          return { status: 401, data: { msg: "Unauthorized access!" } };
        }
      } catch (error) {
        return {
          status: 500,
          data: { msg: "Something went wrong, please try again later!" },
        };
      }
    }
  } catch (error) {
    return {
      status: 500,
      data: { msg: "Something went wrong, please try again later!" },
    };
  }

}
