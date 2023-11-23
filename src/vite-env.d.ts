/// <reference types="vite/client" />

declare module '*.module.css' {
	const content: Record<string, string>
	export default content
}

declare module '*.module.scss' {
	const content: Record<string, string>
	export default content
}

declare module '*.png'
declare module '*.svg'
declare module '*.jpeg'
declare module '*.jpg'
declare module '*.webp'

declare module "*data.ts";

declare module 'xls-to-json';