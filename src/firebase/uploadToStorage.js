import { getDownloadURL, uploadBytes } from "firebase/storage";
import { toast } from "react-toastify";
import { v4 } from "uuid";
import { storage } from ".";

const uploadToStorage = async (file) => {
  if (!file || !file.type.startWith("image")) return null;

  if (file.size > 2097152) {
    toast.error("Please upload media under 2MB.");
    throw new Error("Image exceeds 2mb ");
  }

  const imageRef = ref(storage, v4() + file.name);

  await uploadBytes(imageRef, file);
  const url = await getDownloadURL(imageRef);
  return url;
};
export default uploadToStorage;
