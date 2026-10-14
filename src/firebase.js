import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Ganti nilai di bawah ini dengan config dari Firebase Console Anda
const firebaseConfig = {
  apiKey: "AIzaSyANaFaWTBXKFBWUOx4ha2YFsQRKT1vnFE4",
  authDomain: "amnandotcom.firebaseapp.com",
  projectId: "amnandotcom",
  storageBucket: "amnandotcom.firebasestorage.app",
  messagingSenderId: "341341851638",
  appId: "1:341341851638:web:c5cdcdbbf1b9750ad241d7",
  measurementId: "G-DXDYJGYTE9"
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);

// Ekspor database agar bisa dipakai di file Admin dan Catalog
export const db = getFirestore(app);