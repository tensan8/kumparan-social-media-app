export {}
declare module '*.png';
declare global {
  interface Window {
    __ASSETS_MAP__?: {
      [key: string]: string
    }
  }
}
