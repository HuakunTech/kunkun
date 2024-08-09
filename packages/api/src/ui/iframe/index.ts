import { registerDragRegion } from "../api/iframe-ui"

/**
 * Initialize iframe extension
 * Will
 * 1. registerDragRegion
 */
export function initCustomExtension() {
	registerDragRegion()
}

export {
	clipboard,
	dialog,
	// event,
	network,
	fs,
	notification,
	os,
	shell,
	sysInfo,
	path,
	log,
	updownload,
	fetch
} from "tauri-api-adapter/iframe"
export { type IUiIframe } from "../client"
export { comlinkUI as ui, registerDragRegion } from "../api/iframe-ui"
export { comlinkEvent as event } from "../api/event"
export { db, constructJarvisExtDBToServerDbAPI } from "../api/db"
export { comlinkOpen as open } from "../api/open"
export { toast } from "../api/toast"
export { expose, wrap } from "@huakunshen/comlink"
export { comlinkSystem as system } from "../api/system"
export { type IDbServer } from "../server/db"
export { type IUiIframeServer } from "../server/ui"
