const fs = require("fs");
const https = require("https");

// grab_docs is a function
// grab docs arguments: url, filename.
// grab docs fetches a url and saves it to a file.
// function grab_docs(url, filename) {
//   // create a https request
//   const req = https.get(url, (res) => {
//     // write the response to a file
//     res.on("data", (chunk) => {
//       fs.writeFile(filename, chunk, (err) => {
//         if (err) {
//           console.log(err);
//         }
//       });
//     });
//   });
// }

const grab_docs = (url, filename) => {
  const file = fs.createWriteStream(filename);
  const request = https.get(url, function (response) {
    response.pipe(file);
  });
};

grab_docs(
  "https://raw.githubusercontent.com/joemaddalone/react-svg-path/master/src/docs/docs.mjs",
  "src/docs/docs.mjs"
);

grab_docs(
  "https://raw.githubusercontent.com/joemaddalone/react-svg-path/master/src/docs/demos.mjs",
  "src/docs/demos.mjs"
);
