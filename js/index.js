/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
// document.addEventListener('deviceready', onDeviceReady, false);

// function onDeviceReady() {
//     // Cordova is now initialized. Have fun!

//     console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
//     document.getElementById('deviceready').classList.add('ready');
// }

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAJkXX8VbTh1VpmK1vThTZJGTn02etBl2I",
  authDomain: "fir-auth-20955.firebaseapp.com",
  projectId: "fir-auth-20955",
  storageBucket: "fir-auth-20955.firebasestorage.app",
  messagingSenderId: "665665776968",
  appId: "1:665665776968:web:b78c6a89265e0047e6977d",
  measurementId: "G-39L7RR6S99",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// 🔐 Login logic (only if on login page)
const loginBtn = document.getElementById("login");
if (loginBtn) {
  loginBtn.addEventListener("click", function () {
    event.preventDefault();
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        alert("✅ Logged in as: " + userCredential.user.email);
        window.location.href = "Success.html";
      })
      .catch((error) => {
        alert("❌ Login failed: " + error.message);
      });
  });
}

// 📝 Register logic (only if on register page)
const registerBtn = document.getElementById("register");
if (registerBtn) {
  registerBtn.addEventListener("click", function (event) {
    event.preventDefault();
    const email = document.getElementById("regEmail").value;
    const password = document.getElementById("regPassword").value;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("🎉 Registered: " + userCredential.user.email);
        window.location.href = "login.html";
      })
      .catch((error) => {
        alert("❌ Registration failed: " + error.message);
      });
  });
}
