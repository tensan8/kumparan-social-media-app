export {}
declare module '*.png';
declare module '*.gif';
declare global {
  interface Window {
    __ASSETS_MAP__?: {
      [key: string]: string
    }
  }
}
