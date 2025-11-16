import { createWriteStream } from "node:fs";
import { mkdir } from "node:fs/promises";
import path from "node:path";
import archiver from "archiver";

const rootDir = process.cwd();
const releaseDir = path.join(rootDir, "release");
await mkdir(releaseDir, { recursive: true });

const archivePath = path.join(releaseDir, "kwr-networks-portal.zip");
const output = createWriteStream(archivePath);
const archive = archiver("zip", { zlib: { level: 9 } });

const ignore = ["release/**", ".git/**", "node_modules/**", "**/.turbo/**", "**/.next/**", "**/dist/**", "tmp/**", "**/*.log"];

const finalizeArchive = new Promise((resolve, reject) => {
  output.on("close", resolve);
  output.on("error", reject);
});

archive.pipe(output);
archive.glob(
  "**/*",
  { cwd: rootDir, dot: true, ignore },
  { prefix: "KWRNetworks/" }
);
await archive.finalize();
await finalizeArchive;

console.log(`Created archive at ${archivePath}`);
