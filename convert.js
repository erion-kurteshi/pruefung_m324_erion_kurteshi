// convert.js
const fs = require('fs');
const path = require('path');
const { marked } = require('marked'); // Ändern Sie hier den Import

// Pfade für die Markdown- und HTML-Dateien
const mdFilePath = path.join(__dirname, 'README.md');
const htmlFilePath = path.join(__dirname, 'task-3.html');

// Funktion, die die Markdown-Datei in HTML konvertiert
function convertMarkdownToHTML() {
  fs.readFile(mdFilePath, 'utf8', (err, markdownContent) => {
    if (err) {
      console.error('Fehler beim Lesen der Markdown-Datei:', err);
      return;
    }

    // Konvertiere Markdown in HTML
    const htmlContent = marked(markdownContent);

    // Füge ein einfaches HTML-Gerüst hinzu
    const htmlOutput = `
    <!DOCTYPE html>
    <html lang="de">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>README in HTML</title>
    </head>
    <body>
        ${htmlContent}
    </body>
    </html>`;

    // Schreibe das HTML in eine neue Datei
    fs.writeFile(htmlFilePath, htmlOutput, (err) => {
      if (err) {
        console.error('Fehler beim Schreiben der HTML-Datei:', err);
      } else {
        console.log('Markdown erfolgreich in HTML konvertiert: task-3.html');
      }
    });
  });
}

// Starte die Konvertierung
convertMarkdownToHTML();
