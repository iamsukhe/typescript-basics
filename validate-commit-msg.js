const fs = require("fs");
const path = require("path");
const commitMsgFile = process.argv[2]
  ? path.join(process.cwd(), process.argv[2])
  : null;

const pattern =
  /^Merge branch|^(lint|feat|fix|docs|refact|build|test):\s*[A-Za-z0-9_]/;
if (!commitMsgFile) {
  throw new Error("Commit message file is required");
}

if (!fs.existsSync(commitMsgFile)) {
  throw new Error(`File ${commitMsgFile} doesn't exist`);
}

const commitMessage = fs
  .readFileSync(commitMsgFile, { encoding: "utf-8" })
  .toString()
  .trim();

if (!commitMessage.match(pattern)) {
  throw new Error(
    `Commit message [${commitMessage}] doesn't match the pattern ${pattern.toString()}`
  );
}
