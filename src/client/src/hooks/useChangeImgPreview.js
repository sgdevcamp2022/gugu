import { useEffect } from 'react';

function useChangeImgPreview(file, callback) {
  useEffect(() => {
    if (!file || file === '') {
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      callback?.(reader.result);
    };
  }, [file]);
}

export default useChangeImgPreview;
