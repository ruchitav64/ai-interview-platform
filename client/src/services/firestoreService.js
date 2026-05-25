import { db } from "../firebase/firebase";

import {
  doc,
  setDoc,
  getDoc,
  collection,
  addDoc,
  serverTimestamp,
  query,
  where,
  getDocs,
  orderBy
} from "firebase/firestore";

export const createUserProfile = async (user) => {
  await setDoc(doc(db, "users", user.uid), {
    uid: user.uid,
    email: user.email,
    createdAt: new Date()
  });
};

export const getUserProfile = async (uid) => {
  const docRef = doc(db, "users", uid);

  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    return null;
  }
};

export const saveInterviewAttempt = async (
  userId,
  question,
  answer
) => {
  await addDoc(collection(db, "interviewAttempts"), {
    userId,
    question,
    answer,
    createdAt: serverTimestamp()
  });
};

export const getInterviewHistory = async (userId) => {
  const q = query(
    collection(db, "interviewAttempts"),
    where("userId", "==", userId),
    orderBy("createdAt", "desc")
  );

  const querySnapshot = await getDocs(q);

  const history = [];

  querySnapshot.forEach((doc) => {
    history.push({
      id: doc.id,
      ...doc.data()
    });
  });

  return history;
};

//equivalent SQL query:
/*SELECT * FROM interviewAttempts
WHERE userId = currentUser
ORDER BY createdAt DESC*/