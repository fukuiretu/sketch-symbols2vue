import sketch from "sketch";
import dom from "sketch/dom";
import fs from "@skpm/fs";

// documentation: https://developer.sketchapp.com/reference/api/

const VUE_SKELETON_CODE = `<template>
</template>

<script>
export default {}
</script>

<style>
</style>
`;
const DIST_DIR = "/tmp/symbols2vue/components";

export default function(context) {
  const document = dom.getSelectedDocument();
  const symbolsPage = document.pages.find(page => page.name === "Symbols");
  const symboleNames = symbolsPage.layers.map(layer => layer.name);

  symboleNames.forEach(symboleName => {
    const symboleNameSplited = symboleName.split("/");
    const vueFileName = `${symboleNameSplited.pop()}.vue`;
    const vueFileDir = `${DIST_DIR}/${symboleNameSplited
      .join("/")
      .toLowerCase()}`;

    if (!fs.existsSync(vueFileDir)) {
      fs.mkdirSync(vueFileDir, { recursive: true });
    }
    fs.writeFileSync(`${vueFileDir}/${vueFileName}`, VUE_SKELETON_CODE);

    console.log(`created file: ${vueFileDir}/${vueFileName}`);
  });

  sketch.UI.message("File output is complete🎉");
}
