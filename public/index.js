const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const inputDir = process.argv[2] || "input";
const outputDir = process.argv[3] || "output";

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// Supported image formats
const supportedFormats = [".jpg", ".jpeg", ".png", ".gif", ".bmp", ".tiff"];

fs.readdirSync(inputDir).forEach(file => {
    const ext = path.extname(file).toLowerCase();
    if (supportedFormats.includes(ext)) {
        const inputPath = path.join(inputDir, file);
        const outputPath = path.join(outputDir, path.basename(file, ext) + ".webp");

        sharp(inputPath)
            .webp({ quality: 80 }) // Adjust quality if needed
            .toFile(outputPath)
            .then(() => console.log(`Converted: ${file} → ${path.basename(outputPath)}`))
            .catch(err => console.error(`Error processing ${file}:`, err));
    }
});

console.log("Conversion complete.");
