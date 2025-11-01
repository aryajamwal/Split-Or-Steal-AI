import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyBW2GY__Ml_gA8V0Y5XydwoC5rkWg_RWJI",
  authDomain: "split-steal-game.firebaseapp.com",
  databaseURL: "https://split-steal-game-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "split-steal-game",
  storageBucket: "split-steal-game.firebasestorage.app",
  messagingSenderId: "36474206080",
  appId: "1:36474206080:web:509a8664d00f2087b5b365",
  measurementId: "G-DG74ND2YWM"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
