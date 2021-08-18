/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "520018054b62c4a377655f027e2afa7b"
  },
  {
    "url": "articleImg/article0_00.png",
    "revision": "31130700c838ff68c14790ef1ef4ec73"
  },
  {
    "url": "articleImg/article0_02.png",
    "revision": "1136c496adf9a6c1df1130ed0f3b35bc"
  },
  {
    "url": "articleImg/article0_03.png",
    "revision": "8ed93dbf0f59c460f171b3f1dc8d75a2"
  },
  {
    "url": "articleImg/article0_04.png",
    "revision": "9133ac1b5586167f71bade5ce03419de"
  },
  {
    "url": "articleImg/article0_05.png",
    "revision": "fc8f93ccfd616955052ef6124267c13a"
  },
  {
    "url": "assets/css/0.styles.cc076e52.css",
    "revision": "3e5af102fd64aaf49c59e32d4968b51c"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/iconfont.117d8006.svg",
    "revision": "117d8006a3c478fbc8c4ce04a36ddb5a"
  },
  {
    "url": "assets/js/1.43a8c10c.js",
    "revision": "9d2f604a0c37eb45ab8438502b0c686c"
  },
  {
    "url": "assets/js/10.aad4535a.js",
    "revision": "7fb052def92908a0a995c7033dcc5858"
  },
  {
    "url": "assets/js/11.4b1ca1bc.js",
    "revision": "ad6c1868a849317ce19e4d62c67822fb"
  },
  {
    "url": "assets/js/12.99404885.js",
    "revision": "de56da019d45ac13ff888f362fab8da5"
  },
  {
    "url": "assets/js/13.c618aca6.js",
    "revision": "0172503c817926eaeb509904077ab97b"
  },
  {
    "url": "assets/js/14.09baf997.js",
    "revision": "495f81c5dfdce1ef81cc92cd28d3dc4b"
  },
  {
    "url": "assets/js/15.1bf1995d.js",
    "revision": "f92424a7b4a04fef37092dbac4235b92"
  },
  {
    "url": "assets/js/16.9e4e3751.js",
    "revision": "0820be04dd42796cd1befe0b7d6512f5"
  },
  {
    "url": "assets/js/17.6a88a107.js",
    "revision": "a4d3bfc2003e883f9e2fc57a2e174ac9"
  },
  {
    "url": "assets/js/18.974f4917.js",
    "revision": "fa43cce3f2c76bf56d8b86cf8f27104f"
  },
  {
    "url": "assets/js/19.d21c8f5b.js",
    "revision": "c532dfadad43f380737da043cab3b6e9"
  },
  {
    "url": "assets/js/20.b6df7fab.js",
    "revision": "99a55375d140beced4ca24416fa9b514"
  },
  {
    "url": "assets/js/21.21304097.js",
    "revision": "289c7f25e3618244df000606771d3c61"
  },
  {
    "url": "assets/js/22.2ecd28b4.js",
    "revision": "78d1182c00ea3280f8f3fdc8b2efab30"
  },
  {
    "url": "assets/js/23.bf86caa2.js",
    "revision": "c04686b63a64e1c11a7501b5ce267b12"
  },
  {
    "url": "assets/js/24.c6631097.js",
    "revision": "a612180addbe84c6bf04e214b45667ce"
  },
  {
    "url": "assets/js/25.4678dd59.js",
    "revision": "f63f51de15bf8bf308a51715b24b8572"
  },
  {
    "url": "assets/js/26.c52d55cf.js",
    "revision": "0347df85a58bcf4f1d6f1cbab2df1447"
  },
  {
    "url": "assets/js/27.d6bc7e00.js",
    "revision": "1ca17e0c9a288b2b5fa3568eccd7c808"
  },
  {
    "url": "assets/js/3.5fbcff98.js",
    "revision": "3a908f2b49d0d68e4e4dcea68da2c313"
  },
  {
    "url": "assets/js/4.75c1b33a.js",
    "revision": "969e92e5eec7e28e88f45c7bafaef828"
  },
  {
    "url": "assets/js/5.fb674ffe.js",
    "revision": "3678a1db79db1b970a0d9b20a1454b61"
  },
  {
    "url": "assets/js/6.23933251.js",
    "revision": "2e47dc4aaa429a2b5bf292aefe917929"
  },
  {
    "url": "assets/js/7.23d64e14.js",
    "revision": "99e6ce1cce94ad865a1eaf24c2383a63"
  },
  {
    "url": "assets/js/8.e693587e.js",
    "revision": "4bc8e9e797a1b2cfa6059e32ad32eef4"
  },
  {
    "url": "assets/js/9.62b41960.js",
    "revision": "9b35288edbeb1c8c979f638289193489"
  },
  {
    "url": "assets/js/app.ff9e21a8.js",
    "revision": "d4bd8d87e3aed4730f5aacfbbb33d4a6"
  },
  {
    "url": "blogs/category1/2018/121501.html",
    "revision": "d87dabd24921f09e190812fc85f70424"
  },
  {
    "url": "blogs/category1/2019/092101.html",
    "revision": "82e692a86796201da1480ff5ce00538b"
  },
  {
    "url": "blogs/category2/2016/121501.html",
    "revision": "f3bcf4ae69f0c3f522ab2bcc484e77c2"
  },
  {
    "url": "blogs/category2/2017/092101.html",
    "revision": "8574669f035282914055f355ebc1498c"
  },
  {
    "url": "blogs/category3/2020/first-vue.html",
    "revision": "de9f54553f11646e73a8c008ed95fdaa"
  },
  {
    "url": "blogs/category3/2021/test.html",
    "revision": "f035a0406a8fdffeb2a405bce4824f95"
  },
  {
    "url": "blogs/other/guide.html",
    "revision": "1b5ebec25eb253860127d09a29a16bee"
  },
  {
    "url": "categories/category1/index.html",
    "revision": "e248687e2c8aa81c8042489d61414af5"
  },
  {
    "url": "categories/category2/index.html",
    "revision": "3bb547b467b1f68c2a2dd6c34e47f683"
  },
  {
    "url": "categories/index.html",
    "revision": "d95e37f25219a7ff0cfdf2361a53a6e5"
  },
  {
    "url": "categories/leetcode/index.html",
    "revision": "fa579ac106058c546db81d0b59c6886c"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "84189e0349c1f2a7d2ee850ea8595723"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "f5171288637468d0e25099cb09bac8b7"
  },
  {
    "url": "docs/aboutMe/aboutme.html",
    "revision": "503de3674d97882915ee8c5c970cf346"
  },
  {
    "url": "docs/article_0.html",
    "revision": "c001e350dd3c7ace1790a078bc551533"
  },
  {
    "url": "docs/leetcode/article_1.html",
    "revision": "1164db4e6e392760925a09a90512b6b1"
  },
  {
    "url": "docs/leetcode/article_2.html",
    "revision": "084162db1582a9664cac82e72f30c253"
  },
  {
    "url": "docs/theme-reco/api.html",
    "revision": "30b6139345d166ba1f60afd126b329ba"
  },
  {
    "url": "docs/theme-reco/index.html",
    "revision": "8cbe37c9358fdd85af3554640bb9cca9"
  },
  {
    "url": "docs/theme-reco/plugin.html",
    "revision": "10fa00f4b28720eec4e0ca56aefb9b9d"
  },
  {
    "url": "docs/theme-reco/theme.html",
    "revision": "65fab2f6b4b522e2b0593cf3a8c80653"
  },
  {
    "url": "index.html",
    "revision": "fdd8c59e9b77082112c7af8a0e82b65b"
  },
  {
    "url": "logo.jpg",
    "revision": "2d60500da1289144bfc77c390d7f3e09"
  },
  {
    "url": "pikachu.jpg",
    "revision": "b73495ab0371be10c24fe615e2fe95d6"
  },
  {
    "url": "pikachu1.jpg",
    "revision": "76c46844addeae1ff2d53fb7fbb447e5"
  },
  {
    "url": "sponsor-qrcode/alipay.png",
    "revision": "af8e93850893a4fa88c6b99122d56baa"
  },
  {
    "url": "sponsor-qrcode/qqpay.png",
    "revision": "9fc7eb0502384ad743aebb4d4eb929e7"
  },
  {
    "url": "sponsor-qrcode/wechatpay.jpg",
    "revision": "a8fef5c8b02492cc2e40ff9d3a0ccc1a"
  },
  {
    "url": "tag/index.html",
    "revision": "56eea398cd1d399c9c10836a9755efb7"
  },
  {
    "url": "tag/tag1/index.html",
    "revision": "a76d2acac9399ae4659305b402ca0456"
  },
  {
    "url": "tag/tag2/index.html",
    "revision": "9583f5c9875d6159eb25c73f79257887"
  },
  {
    "url": "tag/tag3/index.html",
    "revision": "0c2a7a0287c97f39f760c4481957dbef"
  },
  {
    "url": "tag/tag4/index.html",
    "revision": "4ffab738135dcc9440fc806076b73832"
  },
  {
    "url": "tag/双指针/index.html",
    "revision": "11b6796d4e55937eaac26f4130877ac0"
  },
  {
    "url": "tag/小册子/index.html",
    "revision": "5b887cd3711eeb592ca4eb879ed781df"
  },
  {
    "url": "tag/我的故事/index.html",
    "revision": "2ad8c68515cb7220712e34b46d7c5c39"
  },
  {
    "url": "timeline/index.html",
    "revision": "c9e8283f0a9ab63e5bd230a8ae469cc1"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
