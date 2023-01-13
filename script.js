const uploadButton = document.querySelector(".upload-button");
const previewDiv = document.getElementById("preview-div");
const loadingDiv = document.getElementById("loading-div");
const umbrella = document.getElementsByClassName("umbrella")[0];
const body = document.querySelector("#body");
const backColor = document.querySelector(".file-input");
const error = document.querySelector("#error");

function uploadImage(event) {
  const file = event.target.files[0];
  var maxSize = 5 * 1024 * 1024;

  if (file.size > maxSize) {
    error.innerText = "*File size exceeds 5MB. Please select a smaller file.";
    event.target.value = null;
  } else {
    error.innerText = "";
    uploadButton.textContent = "Uploading...";
    loadingDiv.style.display = "flex";
    umbrella.style.visibility = "hidden";

    while (previewDiv.firstChild) {
      previewDiv.removeChild(previewDiv.firstChild);
    }
    setTimeout(() => {
      uploadButton.textContent = file.name;
      loadingDiv.style.display = "none";
      umbrella.style.visibility = "visible";
      const img = document.createElement("img");
      img.src = URL.createObjectURL(file);
      previewDiv.appendChild(img);
    }, 3000);
  }

}
const colorPick = (e) => {
  umbrella.src = `./assets/${e.target.id}.png`;
  if (e.target.id === "pink") {
    body.classList.remove("bodyYellow")
    body.classList.remove("bodyBlue")
    body.classList.add("bodyPink")
    backColor.style.backgroundColor = "#D72C87"
  }
  else if (e.target.id === "yellow") {
    body.classList.remove("bodyBlue")
    body.classList.remove("bodyPink")
    body.classList.add("bodyYellow")
    backColor.style.backgroundColor = "#d4b241"
  }
  else if (e.target.id === "blue") {
    body.classList.remove("bodyYellow")
    body.classList.remove("bodyPink")
    body.classList.add("bodyBlue")
    backColor.style.backgroundColor = "#25AFE4"
  }
}
