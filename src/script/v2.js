/* global AFRAME */

AFRAME.registerComponent("my-text", {
  init: function () {
    const imgAsset = document.getElementById("imeges");
    const ids = [];
    const imgWidth = 2.2354948805;
    const imgHeight = 1;
    const imgScale = 1;

    for (let index = 0; index < imgAsset.children.length; index++) {
      ids.push(imgAsset.children[index].id);
    }

    ids.forEach((imgId) => {
      // /* Generate random position and rotation within limits */
      const randomPosition = {
        x: Math.random() * 6 - 3,
        y: Math.random() * 3,
        z: Math.random() * 6 - 3,
      };
      const imgBox = document.createElement("a-entity");
      imgBox.setAttribute("position", randomPosition);

      const img = document.createElement("a-image");
      img.setAttribute("src", "#" + imgId);
      img.setAttribute("width", imgWidth * imgScale);
      img.setAttribute("height", imgHeight * imgScale);

      imgBox.appendChild(img);

      this.el.appendChild(imgBox);
    });
  },
});
