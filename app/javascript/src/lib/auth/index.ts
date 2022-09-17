import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export function googleSignIn() {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  return signInWithPopup(auth, provider).then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential?.accessToken;
    const { user } = result;
    return {
      token,
      user,
    };
  });
}
