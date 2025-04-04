import { getDoc, doc } from "firebase/firestore";
import { db } from "./firebase-config"; // Firebase sozlamalarini import qilish

async function getImage(fileName) {
  const docRef = doc(db, "images", fileName);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const base64Image = docSnap.data().base64Image;
    // Base64 formatidagi rasmni ko'rsatish
    document.getElementById("image").src = base64Image;
  } else {
    console.log("Rasm topilmadi");
  }
}

export { getImage };
