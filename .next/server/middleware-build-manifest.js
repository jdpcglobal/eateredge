self.__BUILD_MANIFEST = {
  "polyfillFiles": [
    "static/chunks/polyfills.js"
  ],
  "devFiles": [],
  "ampDevFiles": [],
  "lowPriorityFiles": [],
  "rootMainFiles": [
    "static/chunks/webpack.js",
    "static/chunks/main-app.js"
  ],
  "pages": {
<<<<<<< HEAD
    "/_app": []
=======
    "/AdminPanel": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/AdminPanel.js"
    ],
    "/MyOrder": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/MyOrder.js"
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
    ]
>>>>>>> 4c77a8dd5aa3274bb98e4b3b217a790d2f9c7f5d
  },
  "ampFirstPages": []
};
self.__BUILD_MANIFEST.lowPriorityFiles = [
"/static/" + process.env.__NEXT_BUILD_ID + "/_buildManifest.js",
,"/static/" + process.env.__NEXT_BUILD_ID + "/_ssgManifest.js",

];