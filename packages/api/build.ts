import { $ } from "bun"

await $`rm -rf dist`
await $`pnpm build:rollup`
// await $`cp ../schema/manifest-json-schema.json ./dist/schema.json`
await $`bun ../schema/scripts/print-schema.ts . dist/schema.json`

// Post Build Verify
const schemaFile = Bun.file("dist/schema.json")
if (!schemaFile.exists()) {
	throw new Error("schema.json not found")
}