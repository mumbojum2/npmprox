const fs = require('fs');

// Read the obfuscated file
const obfCode = fs.readFileSync('new-tab-page-DBSEg4Wl.js', 'utf8');

// --- Step 1: Extract the string array ---
// Look for the function that returns the array
const funcMatch = obfCode.match(/function _0x5961\(\)\s*\{\s*const _0x55b837\s*=\s*(\[[\s\S]*?\]);/);
if (!funcMatch) throw new Error('Could not locate string array');
const arrayStr = funcMatch[1];
const stringArray = eval(arrayStr); // Safe because it's a literal array

// --- Step 2: Deobfuscate the calls ---
let deobf = obfCode;

// Replace _0x1bbf62(...) calls
deobf = deobf.replace(/_0x1bbf62\(([^,]+),([^,]+),([^,]+),([^,]+)\)/g, (_, a, b, c, d) => {
    let idx = parseInt(a) - 0x2bf - 186;
    return JSON.stringify(stringArray[idx]);
});

// Replace _0x5280d0(...) calls
deobf = deobf.replace(/_0x5280d0\(([^,]+),([^,]+),([^,]+),([^,]+)\)/g, (_, a, b, c, d) => {
    let idx = parseInt(d) - 0x1b7 - 186;
    return JSON.stringify(stringArray[idx]);
});

// Output the deobfuscated code
console.log(deobf);