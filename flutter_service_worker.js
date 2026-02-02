'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "4f48057702c267b84781c59509d48bc4",
"assets/AssetManifest.bin.json": "6922e4e95901ff49684895d424bc83b9",
"assets/AssetManifest.json": "ddc8c5571ade2ab7a348435f11ab2310",
"assets/assets/icons/c++.png": "46455537eb7c3d6fd89d7d80fef20f68",
"assets/assets/icons/cubit.png": "8ebbca64bdf3354e9906f2e9ab9de10a",
"assets/assets/icons/firebase.png": "192f6865cc18edf8410de5bc6a658c5b",
"assets/assets/icons/flutter.png": "d2f60cbe9fcc7c09db1ef066db8008d0",
"assets/assets/icons/nodejs.png": "38b4b61344cf2ef90def0b0d4e34b962",
"assets/assets/icons/onesignal.png": "cfaba854ef20a6307547aaee28956096",
"assets/assets/icons/python.png": "67222dcd9670b4a4a004551083052ca5",
"assets/assets/icons/restfullapi.png": "01ab92c14c6259f5be431cfcd9cdf5ce",
"assets/assets/icons/supabase.png": "b30974f4405456eb6230186f73c40f6e",
"assets/assets/images/cancer/1.jpg": "12433d4de76433af1ffcf2583cb92214",
"assets/assets/images/cancer/2.jpg": "e74bde6a0c7e7b8b72bb6a15fc883057",
"assets/assets/images/cancer/3.jpg": "fcee5b43ad4fe2910f0098792a18b200",
"assets/assets/images/cancer/4.jpg": "44de8b7989901928f985769b322c4f44",
"assets/assets/images/ceaser/1.jpg": "c89276c6856078be23ad9216f86b8f1a",
"assets/assets/images/ceaser/2.png": "4c180d49c23f0ef15aefd6a3ee99fac9",
"assets/assets/images/craft/1.jpg": "06ea3cdf1a70fa0ee50bac7ca1c1c302",
"assets/assets/images/craft/2.png": "39beba9d9e8967faee4db52106a06e7c",
"assets/assets/images/craft/3.png": "139a473e45733a14c3748ac6714be82b",
"assets/assets/images/hero_dark.png": "7f910bfa78c0944e6f27d1917628923b",
"assets/assets/images/hero_light.png": "9689a603c0bc49f63a8f6718545f87cd",
"assets/assets/images/me.png": "6b2c77f96a42a8b69b357f5cccdf0c43",
"assets/assets/images/rakli/1.jpg": "e20f78cf1cd7b84374625f3167fe07ee",
"assets/assets/images/rakli/2.jpg": "2d7db863e912245c626be6cd2d29005a",
"assets/assets/images/rakli/3.jpg": "6f1de0a4892ec9c6ea9fbfae5d1ac5ba",
"assets/assets/images/rakli/4.jpg": "06bad1e804676e2785cb2ed78d2bf94f",
"assets/assets/images/rakli/5.webp": "a2cb00a9de3a05a8fe83a0677080a934",
"assets/assets/images/sales/1.jpg": "1338170f97e542316514b0d740ede618",
"assets/assets/images/sales/2.jpg": "937e0a2b7d7bd1798cb69568b260c0b1",
"assets/assets/images/sales/3.jpg": "f0cb91927e43f92112c1870b56b253c8",
"assets/assets/images/sales/4.jpg": "15f4aec7b17c3c8c83b28d7a66e14934",
"assets/assets/images/sales/5.jpg": "d8fff1f8bd8b5301211d76ee3b2cc80b",
"assets/assets/images/twryd/1.jpg": "1b9d25605b72158fa5581353f38f9862",
"assets/assets/images/twryd/2.jpg": "00a8cd07795fa7b107ca6ea269eee846",
"assets/assets/images/twryd/3.jpg": "090aa862d258ff776ffd3377231298f2",
"assets/assets/images/twryd/4.jpg": "5ae8200063dbf335397c28e2526a3132",
"assets/assets/images/twryd/5.jpg": "527db1eb0aad8cbaf7c12ae6d943a199",
"assets/assets/images/twryd/6.jpg": "1760f6a423bc5ffe73791a1182cc26fb",
"assets/FontManifest.json": "c75f7af11fb9919e042ad2ee704db319",
"assets/fonts/MaterialIcons-Regular.otf": "10493e43bf6f9788b775cc0fb7422b1b",
"assets/NOTICES": "2f5b167b047c36bd0229a54c3675626d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Brands-Regular-400.otf": "dafb4de91af14a2e7b4431a60c4f7045",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Regular-400.otf": "8d0acfbf774979914d3c0d736f4be13e",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Solid-900.otf": "5b8d20acec3e57711717f61417c1be44",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "c53a1263dc5a817940b013fb40c91a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c01af8d5cb811d69eaa9595bf8aa9f0e",
"/": "c01af8d5cb811d69eaa9595bf8aa9f0e",
"main.dart.js": "b67804e4db75cc7da6dabb8b5279b22d",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
