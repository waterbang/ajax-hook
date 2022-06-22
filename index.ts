export { hook, unHook } from "./src/hook";
export { proxy, unProxy } from "./src/proxy";

// 拦截fetch
const originFetch = fetch;
Object.defineProperty(window, "fetch", {
  configurable: true,
  enumerable: true,
  // writable: true,
  get() {
    return (url: URL | RequestInfo, init?: RequestInit | undefined) => {
      console.log("originFetch:", url);
      return Promise.resolve({
        text: () => {
          return Promise.resolve().then((res) => {
            return url;
          });
        },
      });
      // return originFetch.apply(window, [url, init]);
    };
  },
});
