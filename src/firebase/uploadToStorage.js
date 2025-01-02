import { toast } from "react-toastify";

const uploadToStorage = async (file) => {
  if (!file || !file.type.startWith("image")) return null;

  if (file.size > 2097152) {
    toast.error("Please upload media under 2MB.");
    throw new Error("Image exceeds 2mb ");
  }
};
export default uploadToStorage;
