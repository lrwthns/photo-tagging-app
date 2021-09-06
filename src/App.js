import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import GameHeader from './GameHeader';
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

getDownloadURL(waldo1Ref)
  .then(url => {
    console.log(url);
    const img = document.querySelector('.img-container');
    img.setAttribute('src', url);
  })
  .catch(error => {
    console.log(error);
  })

function App() {
  return (
    <div className="App">
      <GameHeader />
      <ImageContainer />
    </div>
  );
}

export default App;
