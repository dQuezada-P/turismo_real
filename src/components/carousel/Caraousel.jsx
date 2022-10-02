import { useState } from "react";

export default function Carousel({ department }) {
  const images = department.IMAGENES

  const img = images.map((img) => {
    return "https://turismoreal2.s3.amazonaws.com/" + img.name;
  });

  
  const [selectIndex, setSelectIndex] = useState(0);
  const [selectImage, setSelectImage] = useState(img[0]);

  const selectNewImage = (i, img, next = true) => {
    const condition = next ? selectIndex < img.length - 1 : selectIndex > 0;
    const nextIndex = next
      ? condition
        ? selectIndex + 1
        : 0
      : condition
      ? selectIndex - 1
      : img.length - 1;
    setSelectImage(img[selectIndex])
    setSelectIndex(nextIndex)
  };

  const previos = ()=>{
    selectNewImage(selectIndex,img,false)
  }

  const next = ()=>{
    selectNewImage(selectIndex,img)
  }
  return <div className="w-full h-full">
    <img src={selectImage} alt="" />
    <button onClick={previos}>{'<'}</button>
    <button onClick={next}>{'>'}</button>
  </div>;
}
