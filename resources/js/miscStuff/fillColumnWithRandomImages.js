    function fillRightColumnWithRandomImages(content, rightColumn, images, imageHeight = 100, margin = 10) {
      const maxHeight = content.offsetHeight;

      const totalImageBlockHeight = imageHeight + 2 * margin;

      let numImages = Math.floor(maxHeight / totalImageBlockHeight);
      numImages += 1
      for (let i = 0; i < numImages; i++) {
        const img = document.createElement('img');
        img.src = images[Math.floor(Math.random() * images.length)];
        //img.style.width = '100px';
        img.style.height = `${imageHeight}px`;
        img.style.display = 'block';
        img.style.margin = `${margin}px auto`;

        rightColumn.appendChild(img);
      }
    }

    window.fillRightColumnWithRandomImages = fillRightColumnWithRandomImages