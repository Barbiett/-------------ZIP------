const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
const galleryList = document.querySelector(".gallery");
galleryList.style.display = "flex";
const galleryItems = images.map(image => {
    const listItem = document.createElement("li");
    const imageElement = document.createElement("img");
    imageElement.src = image.url;
    imageElement.alt = image.alt;
    imageElement.style.width = "500px";
    imageElement.style.height = "400px";
    imageElement.style.margin = "20px";
    imageElement.style.border = "12px solid blue";
    
    listItem.appendChild(imageElement);
    return listItem;
});
galleryList.append(...galleryItems);




