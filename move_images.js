const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'public', 'images');
const destDir = path.join(__dirname, 'images');

if (!fs.existsSync(destDir)){
    fs.mkdirSync(destDir, { recursive: true });
}

// Function to copy directory recursively
function copyDir(src, dest) {
    if(!fs.existsSync(src)) return;
    const entries = fs.readdirSync(src, { withFileTypes: true });
    for(let entry of entries) {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);
        if(entry.isDirectory()) {
            if(!fs.existsSync(destPath)) fs.mkdirSync(destPath);
            copyDir(srcPath, destPath);
        } else {
            fs.copyFileSync(srcPath, destPath);
        }
    }
}

copyDir(srcDir, destDir);
console.log("Images moved to /images folder");
