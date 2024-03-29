const downloadBtn = document.querySelector("#download-btn");
const uploadBtn = document.querySelector("#upload-btn");

const imageRef = document.querySelector("#image-ref");

uploadBtn.addEventListener("click", async (e) => {
  e?.preventDefault();

  const fileInput = document.getElementById("filepicker");
  const image = fileInput.files[0];
  if (!image) return console.log("No image selected !");

  const formData = new FormData();
  formData.append("image_file", image);
  formData.append("size", "auto");
  const apiKey = "mQhmrUAg73wPU258ooWM3ay3";

  const response = await fetch("https://api.remove.bg/v1.0/removebg", {
    method: "POST",
    headers: {
      "X-Api-Key": apiKey,
    },
    body: formData,
  });

  if (response.ok) {
    const blobObject = await response.blob();
    const url = URL.createObjectURL(blobObject);
    imageRef.src = url;
  } else {
    console.log("Something went wrong");
  }
});

downloadBtn.addEventListener("click", (e) => {
  e?.preventDefault();

  const anchorElement = document.createElement("a");
  anchorElement.href = imageRef.src;

  a.download = "no-bg.png";
  document.body.appendChild(anchorElement);

  anchorElement.click();
  document.body.removeChild(anchorElement);
});
