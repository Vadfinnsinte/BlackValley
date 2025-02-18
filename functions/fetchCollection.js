import { db } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
const fetchCollection = async (path) => {
        try {
          const snapshot = await getDocs(collection(db,path))
          const fetchedList= snapshot.docs.map(doc => doc.data())
          return fetchedList
          
        }catch (error){
          console.log("Wrong with: ", error);
          return false
        }
}

export {fetchCollection}