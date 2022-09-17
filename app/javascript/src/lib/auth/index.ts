import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  getIdToken,
} from "firebase/auth";

export async function googleSignIn() {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  const { user } = await signInWithPopup(auth, provider);
  const idToken = await getIdToken(user, true);
  return {
    user,
    idToken,
  };
}
