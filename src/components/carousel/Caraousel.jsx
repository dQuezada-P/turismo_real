import { useState, useEffect } from "react";
import { useDepartment } from "../../context/hooks/useDepartment";

export default function Carousel() {
  const { images, setImages } = useDepartment();
  const [selectIndex, setSelectIndex] = useState(0);
  const [selectImage, setSelectImage] = useState();
  useEffect(() => {
    if(!selectImage)
    {
      setSelectImage(images[0])
    }

  },[images,selectImage]);

  const selectNewImage = (i, images, next = true) => {
    const condition = next ? selectIndex < images.length - 1 : selectIndex > 0;
    const nextIndex = next
      ? condition
        ? selectIndex + 1
        : 0
      : condition
      ? selectIndex - 1
      : images.length - 1;
    setSelectImage(images[selectIndex]);
    setSelectIndex(nextIndex);
  };

  const previos = () => {
    selectNewImage(selectIndex, images, false);
  };

  const next = () => {
    selectNewImage(selectIndex, images);
  };
  return (
    <>
      <div className="flex-auto absolute h-full">
        <button
          className="items-center h-full ml-4 text-4xl text-slate-400 hover:text-purple-600 hover:text-5xl"
          onClick={previos}
        >
          {"<"}
        </button>
      </div>
      <div className=" h-full w-full block">
        <img
          className=" h-full w-full rounded-3xl object-cover object-center"
          src={selectImage}
          alt=""
        />
      </div>
      <div className="flex-auto absolute top-0 right-0 h-full ">
        {" "}
        <button
          className="items-center h-full mr-4 text-4xl text-slate-400 hover:text-purple-600 hover:text-5xl "
          onClick={next}
        >
          {">"}
        </button>
      </div>
    </>
  );
}
