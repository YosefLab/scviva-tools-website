const fs = require("fs");
const path = require("path");

const BUILD_DIR = path.join(__dirname, "..", "build");

// Each task in the implementation plan appends entries here.
const CHECKS = [
  {
    file: "index.html",
    includes: [
      "scVIVA-Tools",
      "Consolidated spatial transcriptomics analysis toolkit built on scvi-tools",
      "pip install scviva-tools",
      "Unified AnnData-first API",
    ],
  },
  {
    file: "get_started/index.html",
    includes: [
      "pip install scviva-tools",
      "scviva-tools[spatial]",
      "scviva-tools[rapids]",
      "ResolVI",
    ],
  },
  {
    file: "team/index.html",
    includes: ["Nir Yosef", "Can Ergen", "Ori Kronfeld", "Draft roster"],
  },
];

function readBuiltFile(relativePath) {
  const fullPath = path.join(BUILD_DIR, relativePath);
  if (!fs.existsSync(fullPath)) {
    throw new Error(`Expected built file not found: ${fullPath}`);
  }
  return fs.readFileSync(fullPath, "utf8");
}

function main() {
  let failures = 0;

  for (const check of CHECKS) {
    let contents;
    try {
      contents = readBuiltFile(check.file);
    } catch (err) {
      console.error(`FAIL [${check.file}]: ${err.message}`);
      failures += 1;
      continue;
    }

    for (const needle of check.includes || []) {
      if (!contents.includes(needle)) {
        console.error(`FAIL [${check.file}]: expected to find "${needle}"`);
        failures += 1;
      }
    }

    for (const needle of check.excludes || []) {
      if (contents.includes(needle)) {
        console.error(`FAIL [${check.file}]: expected NOT to find "${needle}"`);
        failures += 1;
      }
    }
  }

  if (failures > 0) {
    console.error(`\n${failures} content check(s) failed.`);
    process.exit(1);
  }

  console.log(`All ${CHECKS.length} content check(s) passed.`);
}

main();
