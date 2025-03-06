// const fs = require("fs");
// const path = "dist/404.html";

// const script = `
// <script>
//   var path = window.location.pathname + window.location.search + window.location.hash;
//   window.location.replace("/BlackValley/index.html?redirect=" + encodeURIComponent(path));
// </script>
// `;

// // Läs och modifiera 404.html
// fs.readFile(path, "utf8", (err, data) => {
//   if (err) {
//     console.error("Error reading 404.html:", err);
//     return;
//   }

//   // Lägg in skriptet precis efter <head>
//   const updatedHtml = data.replace("<head>", `<head>${script}`);

//   fs.writeFile(path, updatedHtml, "utf8", (err) => {
//     if (err) {
//       console.error("Error writing 404.html:", err);
//     } else {
//       console.log("✅ 404.html updated successfully!");
//     }
//   });
// });

const fs = require("fs");
const path = "dist/404.html";

const script = `
<script>
  (function() {
    var path = window.location.pathname.replace('/BlackValley', '') + window.location.search + window.location.hash;
    sessionStorage.setItem("redirect", path);
    window.location.replace("/BlackValley/index.html");
  })();
</script>
`;

// Läs in och modifiera 404.html
fs.readFile(path, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading 404.html:", err);
    return;
  }

  // Lägg in skriptet direkt i <head>
  const updatedHtml = data.replace("<head>", `<head>${script}`);

  fs.writeFile(path, updatedHtml, "utf8", (err) => {
    if (err) {
      console.error("Error writing 404.html:", err);
    } else {
      console.log("✅ 404.html updated successfully!");
    }
  });
});
