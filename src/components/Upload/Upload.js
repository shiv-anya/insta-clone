import Modal from "../../UI/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faPhotoVideo } from "@fortawesome/free-solid-svg-icons";
import classes from "./Upload.module.css";
import { useState } from "react";
import { storage } from "../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "@firebase/storage";
import { db } from "../../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import AuthContext from "../../store/auth-ctx";
import { useContext } from "react";

const Upload = (props) => {
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState("");
  const [progress, setProgress] = useState(0);
  const authCtx = useContext(AuthContext);
  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };
  const handleUpload = () => {
    console.log("hi phat rahi hai");
    const imagesRef = ref(storage, "images");
    const uploadTask = uploadBytesResumable(imagesRef, image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress);
      },
      (error) => {
        alert(error.message);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          const docRef = await addDoc(collection(db, "posts"), {
            timestamp: serverTimestamp(),
            caption: caption,
            img: downloadURL,
            username: authCtx.username,
          });
        });
      }
    );
    setCaption("");
    setImage(null);
    setProgress(0);
  };
  return (
    <Modal onClick={props.onClick}>
      <div className={classes.modal}>
        <div className={classes.times}>
          <FontAwesomeIcon icon={faTimes} onClick={props.onClick} />
        </div>
        <div className={classes.content}>
          <FontAwesomeIcon className={classes.i} icon={faPhotoVideo} />
          <p>Drag photos and videos here.</p>
          <input type="file" onChange={handleChange} />
          <div className={classes.caption}>
            <input
              type="text"
              id="caption"
              placeholder="Enter caption here"
              onChange={(e) => {
                setCaption(e.target.value);
              }}
            />
          </div>
          <progress value={progress} max="100" />
          <button onClick={handleUpload}>Upload</button>
        </div>
      </div>
    </Modal>
  );
};

export default Upload;
