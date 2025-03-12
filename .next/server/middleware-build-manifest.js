self.__BUILD_MANIFEST = {
  "polyfillFiles": [
    "static/chunks/polyfills.js"
  ],
  "devFiles": [
    "static/chunks/react-refresh.js"
  ],
  "ampDevFiles": [],
  "lowPriorityFiles": [],
  "rootMainFiles": [
    "static/chunks/webpack.js",
    "static/chunks/main-app.js"
  ],
  "pages": {
    "/Cart": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/Cart.js"
    ],
    "/MyOrder": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/MyOrder.js"
    ],
    "/Order": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/Order.js"
    ],
    "/_app": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/_app.js"
    ],
    "/_error": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/_error.js"
    ],
    "/orderpayment": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/orderpayment.js"
    ]
  },
  "ampFirstPages": []
};
self.__BUILD_MANIFEST.lowPriorityFiles = [
"/static/" + process.env.__NEXT_BUILD_ID + "/_buildManifest.js",
,"/static/" + process.env.__NEXT_BUILD_ID + "/_ssgManifest.js",

];