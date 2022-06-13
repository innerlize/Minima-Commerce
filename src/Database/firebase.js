import Swal from 'sweetalert';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, doc, getDoc, getDocs, setDoc, addDoc, query, where, collection, Timestamp } from 'firebase/firestore/lite';
import products from './products.js';
import alertStyle from './alertStyle.css';

const firebaseConfig = {
  apiKey: "AIzaSyB2-pwanlI36oxe8GgwRSXGWHiHl_ZWGCQ",
  authDomain: "minima-commerce.firebaseapp.com",
  projectId: "minima-commerce",
  storageBucket: "minima-commerce.appspot.com",
  messagingSenderId: "37995416423",
  appId: "1:37995416423:web:b383bfd904b84fd294bdc2",
  measurementId: "G-VLTRZMC49Y"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestoreDB = getFirestore(app);

// ------------------------------------------------------------------------------------------------------

export async function getProducts() {
  const MyCollection = collection(firestoreDB, 'products');

  const productsSnap = await getDocs(MyCollection);

  return productsSnap.docs.map(doc => {
    return {
      ... doc.data(),
      id: doc.id
    }
  });
}

// ------------------------------------------------------------------------------------------------------

export async function getProductsByCategory(categoryID) {
  const MyCollection = collection(firestoreDB, 'products');

  const queryProduct = query(MyCollection, where('category', '==', categoryID));

  const productsSnap = await getDocs(queryProduct);

  return productsSnap.docs.map(doc => {
    return {
      ... doc.data(),
      id: doc.id
    }
  });
}

// ------------------------------------------------------------------------------------------------------

export async function getSingleProduct(id) {
  const MyCollection = collection(firestoreDB, 'products');

  const productRef = doc(MyCollection, id)

  const productSingleSnap = await getDoc(productRef);

  return {
      ... productSingleSnap.data(),
      id: productSingleSnap.id
  }
}

// ------------------------------------------------------------------------------------------------------

export async function createBuyOrder(orderData) {
  const buyTimestamp = Timestamp.now();
  const orderWithBuyDate = {
    ... orderData,
    date: buyTimestamp
  }

  const MyCollection = collection(firestoreDB, 'buyOrders');

  const orderDoc = await addDoc(MyCollection, orderWithBuyDate);

  const showAlert = () => {
    Swal({
      title: "Purchase Made!",
      text: `Your order ID is: ${orderDoc.id}`,
      icon: "success",
      button: "Great!"
    })
  }

  showAlert();
}

// ------------------------------------------------------------------------------------------------------


export default firestoreDB;