import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

async function generateQRCode() {
  try {
    const answers = await inquirer.prompt([
      {
        type: "input",
        name: "link",
        message: "Digite ai um link:",
      },
    ]);

    const link = answers.link;

    const qr_png = qr.image(link, { type: "png" });
    qr_png.pipe(fs.createWriteStream("link_qr.png"));
    fs.writeFile("input.txt", link, (err) => {
      if (err) throw err;
      console.log("The file has been saved!");
    });
    console.log("QR code gerado com sucesso e salvo como link_qr.png");
  } catch (error) {
    if (error.isTtyError) {
      console.log("Deu erro 1");
    } else {
      console.log("Deu erro 2");
    }
  }
}

generateQRCode();
