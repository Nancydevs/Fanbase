document.addEventListener("DOMContentLoaded", function () {
    const images = [
        { src: "https://cdn.discordapp.com/attachments/1174257632400384051/1338443607723606076/miss_nancy_Style_Fantasy_world-building_Description_A_massive_b_200bff4c-a664-427b-a175-2affd627bd71.png?ex=67ab1a3f&is=67a9c8bf&hm=17e04dc74a269972dd584de2cfd3def25bf5fdc9843ded04a3ca00c1447bca6f&", tags: ["arena"] },
        { src: "https://cdn.discordapp.com/attachments/1174257632400384051/1338443607723606076/miss_nancy_Style_Fantasy_world-building_Description_A_massive_b_200bff4c-a664-427b-a175-2affd627bd71.png?ex=67ab1a3f&is=67a9c8bf&hm=17e04dc74a269972dd584de2cfd3def25bf5fdc9843ded04a3ca00c1447bca6f&", tags: ["space"] },
        { src: "https://cdn.discordapp.com/attachments/1174257632400384051/1338443607723606076/miss_nancy_Style_Fantasy_world-building_Description_A_massive_b_200bff4c-a664-427b-a175-2affd627bd71.png?ex=67ab1a3f&is=67a9c8bf&hm=17e04dc74a269972dd584de2cfd3def25bf5fdc9843ded04a3ca00c1447bca6f&", tags: ["space"] },
        { src: "https://cdn.discordapp.com/attachments/1174257632400384051/1338443607723606076/miss_nancy_Style_Fantasy_world-building_Description_A_massive_b_200bff4c-a664-427b-a175-2affd627bd71.png?ex=67ab1a3f&is=67a9c8bf&hm=17e04dc74a269972dd584de2cfd3def25bf5fdc9843ded04a3ca00c1447bca6f&", tags: ["space"] },
        { src: "https://cdn.discordapp.com/attachments/1174257632400384051/1338443607723606076/miss_nancy_Style_Fantasy_world-building_Description_A_massive_b_200bff4c-a664-427b-a175-2affd627bd71.png?ex=67ab1a3f&is=67a9c8bf&hm=17e04dc74a269972dd584de2cfd3def25bf5fdc9843ded04a3ca00c1447bca6f&", tags: ["meme"] },
        { src: "https://cdn.discordapp.com/attachments/1174257632400384051/1338443607723606076/miss_nancy_Style_Fantasy_world-building_Description_A_massive_b_200bff4c-a664-427b-a175-2affd627bd71.png?ex=67ab1a3f&is=67a9c8bf&hm=17e04dc74a269972dd584de2cfd3def25bf5fdc9843ded04a3ca00c1447bca6f&", tags: [ "space"] },
        { src: "https://cdn.discordapp.com/attachments/1174257632400384051/1338443607723606076/miss_nancy_Style_Fantasy_world-building_Description_A_massive_b_200bff4c-a664-427b-a175-2affd627bd71.png?ex=67ab1a3f&is=67a9c8bf&hm=17e04dc74a269972dd584de2cfd3def25bf5fdc9843ded04a3ca00c1447bca6f&", tags: [ "arena"] }
        
    ];
    
        let currentIndex = 0;
    
        const gallery = document.getElementById("gallery");
        const modal = document.getElementById("image-modal");
        const modalImg = document.getElementById("modal-img");
        const downloadBtn = document.getElementById("download-btn");
        const likeBtn = document.getElementById("like-btn");
        const prevImageBtn = document.getElementById("prev-image");
        const nextImageBtn = document.getElementById("next-image");
    
        // Load images dynamically
        function loadImages() {
            gallery.innerHTML = "";
            images.forEach((image, index) => {
                const imgContainer = document.createElement("div");
                imgContainer.classList.add("image-container");
                imgContainer.dataset.index = index;
                imgContainer.dataset.tags = image.tags.join(" ");
    
                const img = document.createElement("img");
                img.src = image.src;
                img.alt = "Gallery Image";
    
                imgContainer.appendChild(img);
                gallery.appendChild(imgContainer);
    
                // Open modal when clicking image
                imgContainer.addEventListener("click", () => openModal(index));
            });
        }
    
        // Open Image Modal & Update Buttons
        function openModal(index) {
            currentIndex = index;
            modal.style.display = "flex";
            modalImg.src = images[currentIndex].src;
            updateButtons();
        }
    
        // Close Modal
        document.getElementById("close-modal").addEventListener("click", () => {
            modal.style.display = "none";
        });
    
        // Navigate Left (Previous Image)
        prevImageBtn.addEventListener("click", () => {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            modalImg.src = images[currentIndex].src;
            updateButtons();
        });
    
        // Navigate Right (Next Image)
        nextImageBtn.addEventListener("click", () => {
            currentIndex = (currentIndex + 1) % images.length;
            modalImg.src = images[currentIndex].src;
            updateButtons();
        });
    
        // Update Buttons When Image Changes
        function updateButtons() {
            downloadBtn.onclick = function () {
                downloadBtn.innerHTML = "⏳"; // Show loading effect
                setTimeout(() => {
                    const link = document.createElement("a");
                    link.href = images[currentIndex].src;
                    link.download = "Fanbase_Image.jpg";
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                    downloadBtn.innerHTML = "⬇️"; // Restore icon
                }, 1000);
            };
        }
    
        // Like Button Functionality
        let likedImages = new Set();
        likeBtn.addEventListener("click", () => {
            if (likedImages.has(currentIndex)) {
                likedImages.delete(currentIndex);
                likeBtn.innerText = "🤍"; // Outline heart
            } else {
                likedImages.add(currentIndex);
                likeBtn.innerText = "❤️"; // Filled heart
            }
        });
    
        // Load images on page load
        loadImages();
    });