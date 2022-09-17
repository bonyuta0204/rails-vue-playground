import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  getIdToken,
} from "firebase/auth";

import Gateway from "@/lib/gateway/index";

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

export async function signIn(idToken: string) {
  const gateway = new Gateway();
  gateway.get("/ajax/auth/sign_in", { token: idToken });
}
