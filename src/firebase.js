import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/database'
import 'firebase/compat/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyBW0XVvBgPVSRD-X3MN8rm1hMmlk5FC35Y',
  authDomain: 'worklist-99d8e.firebaseapp.com',
  databaseURL: 'https://worklist-99d8e-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'worklist-99d8e',
  storageBucket: 'worklist-99d8e.appspot.com',
  messagingSenderId: '214218179837',
  appId: '1:214218179837:web:ecb293138b4f1f5792ea94'
}
firebase.initializeApp(firebaseConfig)

export default firebase
