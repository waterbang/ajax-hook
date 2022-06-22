import { unHook } from "../index";

function testJquery(url: string) {
  const jq = (window as any)["jQuery"];

  jq.get(url)
    .done(function (d: any) {
      console.log(d);
    })
    .fail(function (e: any) {
      console.log("hi world");
    });
}

export function testProxy() {
  testJquery("https://aa/");
  testJquery("https://bb/");
  testJquery(location.href);
}

export function testHook() {
  $.get().done(function (d: any) {
    console.log(d.substr(0, 30) + "...");
    //use original XMLHttpRequest
    console.log("unhook");
    unHook();
    $.get().done(function (d) {
      console.log(d.substr(0, 10));
    });
  });
}
