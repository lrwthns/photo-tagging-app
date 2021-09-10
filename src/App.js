import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import ImageContainer from './ImageContainer';

const firebaseConfig = {
  apiKey: "AIzaSyAO9lhmLFk7VTubJWPsQAgtNA8hZMyIG2Q",
  authDomain: "where-s-waldo-aef25.firebaseapp.com",
  projectId: "where-s-waldo-aef25",
  storageBucket: "where-s-waldo-aef25.appspot.com",
  messagingSenderId: "96191266125",
  appId: "1:96191266125:web:59a51a60d6de60ea590b04"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore();
const storage = getStorage();
const waldo1Ref = ref(storage, 'images/where-waldo1.jpg');
const charWaldoRef = ref(storage, 'images/waldo.png');
const charWendaRef = ref(storage, 'images/wenda.png');

const downloadPic = (ref, elem) => {
  getDownloadURL(ref)
  .then(url => {
    console.log(url);
    const img = document.querySelector(elem);
    img.setAttribute('src', url);
  })
  .catch(error => {
    console.log(error);
  })
}

downloadPic(waldo1Ref, '.img-container');
downloadPic(charWaldoRef, '.waldo-icon');
downloadPic(charWendaRef, '.wenda-icon');


function App() {
  return (
    <div className="App">
      <ImageContainer />
    </div>
  );
}

export default App;
