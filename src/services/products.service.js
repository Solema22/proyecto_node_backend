import { db } from "../data/data.js";
import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  deleteDoc
} from "firebase/firestore";

// Crear producto
export async function serviceCreateProduct(productData) {
  const docRef = await addDoc(collection(db, "products"), productData);
  return { id: docRef.id, ...productData };
}

// Obtener todos los productos
export async function serviceGetAllProducts() {
  const querySnapshot = await getDocs(collection(db, "products"));
  return querySnapshot.docs.map((d) => ({
    id: d.id,
    ...d.data()
  }));
}

// Obtener producto por ID
export async function serviceGetProductById(id) {
  const ref = doc(db, "products", id);
  const snapshot = await getDoc(ref);

  if (!snapshot.exists()) return null;

  return { id: snapshot.id, ...snapshot.data() };
}

// Eliminar producto
export async function serviceDeleteProduct(id) {
  const ref = doc(db, "products", id);
  await deleteDoc(ref);
  return true;
}
