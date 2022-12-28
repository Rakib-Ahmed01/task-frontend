import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyDWuBEZMkmPyPH3b-BPPdHUIVnW5aeYnOU',
  authDomain: 'task-rakib.firebaseapp.com',
  projectId: 'task-rakib',
  storageBucket: 'task-rakib.appspot.com',
  messagingSenderId: '670270709176',
  appId: '1:670270709176:web:50ff7c360cd9fa9f95434d',
};

const app = initializeApp(firebaseConfig);
export default app;
