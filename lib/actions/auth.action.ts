'use server';

import { db, auth } from "@/firebase/admin";
import { cookies } from "next/headers";

export async function signUp(params: SignUpParams) {
    const {uid, name, email } = params;

    try {
        const userRecord = await db.collection('users').doc(uid).get();
        
        if(userRecord.exists){
            return {
                success: false,
                message: 'User already exists. Please sign in instead.'
            }
        }
        await db.collection('users').doc(uid).set({
            name,
            email
        });
        return {
            success: true,
            message:'Account created successfully. You can now sign in.'
        }
    } catch (e: any){
        console.error('Error creating a user', e);

        if(e.code === 'auth/email-already-exists' ) {
            return {
                success: false,
                message: 'Email already exists. Please sign in instead.'
            }
        }
        return {
            success: false,
            message: 'Failed to create user. Please try again later.'
        }
    }

}

export async function signIn(params: SignInParams) {
    const {email, idToken } = params;
    try {
        const userrecord = await auth.getUserByEmail(email);
        if(!userrecord) {
            return {
                success: false,
                message: 'User not found. Please sign up first.'
            }
        }
        await setSessionCookie(idToken);
    } catch (e: any) {
        console.log(e);
        return {
            success: false,
            message: 'Failed to log into an account'
        }
    }
}
const ONE_WEEK = 60 * 60 * 24 * 7; // seconds
export async function setSessionCookie(idToken: string) {
    const cookieStore = await cookies();
    const sessionCookie = await auth.createSessionCookie(idToken, {
    expiresIn: ONE_WEEK * 1000, // milliseconds
  });

    cookieStore.set('session', sessionCookie, {
        maxAge: ONE_WEEK,
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        path: '/',
        sameSite: 'lax',

    })
    
}

export async function getCurrentUser(): Promise<User | null> {
  const cookieStore = await cookies();

  const sessionCookie = cookieStore.get("session")?.value;
  if (!sessionCookie) return null;

  try {
    const decodedClaims = await auth.verifySessionCookie(sessionCookie, true);

    // get user info from db
    const userRecord = await db
      .collection("users")
      .doc(decodedClaims.uid)
      .get();
    if (!userRecord.exists) return null;

    return {
      ...userRecord.data(),
      id: userRecord.id,
    } as User;
  } catch (error) {
    console.log(error);

    // Invalid or expired session
    return null;
  }
}

export async function isAuthenticated() {
  const user = await getCurrentUser();
  return !!user;
}