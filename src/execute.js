import dom from "sketch/dom";
// documentation: https://developer.sketchapp.com/reference/api/

// export default function() {
//   sketch.UI.message("It's alive 🙌")
// }

export default function(context) {
  const document = dom.getSelectedDocument();
  const symbolsPage = document.pages.find(page => page.name === "Symbols");
  const symboleNames = symbolsPage.layers.map(layer => layer.name);
  context.document.showMessage(`symboleNames: ${symboleNames}`);
}
