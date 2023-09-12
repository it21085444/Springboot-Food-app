
export const uploadToCloudinary = async (pics) => {
  if (pics) {
    
    const data = new FormData();
    data.append("file", pics);
    data.append("upload_preset", "xgpknjtn");
    data.append("cloud_name", "dlvsei1kf");

    const res = await fetch("https://api.cloudinary.com/v1_1/dlvsei1kf/image/upload", {
      method: "post",
      body: data,
    })
      
      const fileData=await res.json();
      console.log("url : ", fileData);
      return fileData.url.toString();

  } else {
    console.log("error");
  }
};


