import React, { useState } from 'react';

const GalleryForm = () => {

    const [fileData, setFileData] = useState();

    constfileChangeHandler=(e)=>{
        setFileData(e.target.files[0]);
    };

    const onSubmitHandler=(e)=>{
        e.preventDefault();

        const data = new FormData();

        data.append('galleryimg', fileData)

        fetch("http://localhost:3001/gallery", {
            method: "POST",
            body: data,
        })

        .then((result)=>{
            console.log("su");
        })
        .catch((err)=>{
            console.log(err.message);
        });
    };

  return (
    <div>
      <h1>uloading</h1>
      <form onSubmit={onSubmitHandler}>
        <input type='file' onChange={fileChangeHandler}/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default GalleryForm;
