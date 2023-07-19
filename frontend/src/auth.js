import { redirect } from "react-router-dom";
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
    }
    return { status: 200, data: { msg: "Authorized user" } };
  } catch (error) {
    return {
      status: 500,
      data: { msg: "Something went wrong, please try again later!" },
    };
  }
}
