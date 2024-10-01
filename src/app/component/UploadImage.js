import { useState } from 'react';
import { storage } from '../lib/firebase';

export default function UploadImage() {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState('');

  const handleImageUpload = () => {
    if (image) {
      const uploadTask = storage.ref(`images/${image.name}`).put(image);
      uploadTask.on(
        'state_changed',
        snapshot => {},
        error => {
          console.log(error);
        },
        () => {
          storage
            .ref('images')
            .child(image.name)
            .getDownloadURL()
            .then(url => setUrl(url));
        }
      );
    }
  };

  return (
    <div>
      <h2>Upload Image</h2>
      <input type="file" onChange={e => setImage(e.target.files[0])} />
      <button onClick={handleImageUpload}>Upload</button>
      {url && <img src={url} alt="Uploaded" />}
    </div>
  );
}
