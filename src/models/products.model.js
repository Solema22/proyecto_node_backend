import { db } from "../data/firebase.js";
import { collection, getDocs, doc, getDoc, addDoc, deleteDoc } from "firebase/firestore";

const productsCollection = collection(db, "products");

export const modelGetAllProducts = async () => {
  const snapshot = await getDocs(productsCollection);
  return snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
};

export const modelGetProductById = async (id) => {
  const ref = doc(productsCollection, id);
  const snapshot = await getDoc(ref);
  return snapshot.exists() ? { id: snapshot.id, ...snapshot.data() } : null;
};

export const modelCreateProduct = async (productData) => {
  const docRef = await addDoc(productsCollection, productData);
  return { id: docRef.id, ...productData };
};

export const modelDeleteProduct = async (id) => {
  await deleteDoc(doc(productsCollection, id));
};
