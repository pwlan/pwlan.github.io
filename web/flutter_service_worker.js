'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "32473dccdada1962730c42a4b45adb5b",
"index.html": "fe7e1ebc48e6cf7270ea7eec46971f4c",
"/": "fe7e1ebc48e6cf7270ea7eec46971f4c",
"main.dart.js": "d79f549ca7846c4ccbaa168176ebc8f2",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "4b057bdfe21c7b65935edc24227e88cd",
"assets/AssetManifest.json": "9f9101bf89408f51f03639c0a715ef20",
"assets/NOTICES": "369485ea40788f21b47f2d098f0f826d",
"assets/FontManifest.json": "cf067bd47b79db2902360d1ffe210994",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/PressStart2P-Regular.ttf": "f98cd910425bf727bd54ce767a9b6884",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/duck.png": "9380e945816ecf008f8ef2eda96a650b",
"assets/assets/images/dog.png": "62d744c10f4451c636a75a001dec72e9",
"assets/assets/images/strike.png": "1c595939dd300f3014cf668ef8dfa5af",
"assets/assets/images/sword-case.png": "f84f5cdd1f2248fe050f445665c560b6",
"assets/assets/images/turtle.png": "f545ee2a90506f0625aa421cbe4a4d30",
"assets/assets/images/flag.png": "671d957f9a025795fa52e3ac315c23cc",
"assets/assets/images/white-knight.png": "714396d4efca572635a2ed9361c642a4",
"assets/assets/images/bot7.png": "b817c56524d10bdd5ebf1a358f1401e2",
"assets/assets/images/circle-strike.png": "820c44e372c735940c0f2014fb687ef2",
"assets/assets/images/crate.png": "cd6b5e5dc02cc0c13ed12129ac2974b5",
"assets/assets/images/potion.png": "e90073908285c1e67a65129a50cedca0",
"assets/assets/images/key.png": "c2e28169ea260c6de146299244fddc1f",
"assets/assets/images/king-bot-free.png": "fac1393b6aabf2494b727c20f387bac8",
"assets/assets/images/beam.png": "8a318532471f2e0082ec7b63ca553d07",
"assets/assets/images/white-brick.png": "69861d0435d9793b4e353d9e19826e32",
"assets/assets/images/forest02.png": "61eebd878539ab1aa9b2110a2e146616",
"assets/assets/images/forest03.png": "7104ca328c90c099d3e3adbafbf58e54",
"assets/assets/images/wood-brick.png": "cfe96799751d5e41d2e86cf7518cf8f6",
"assets/assets/images/forest01.png": "8cb3a149ce4c9caaaeb7cfa70e6b5130",
"assets/assets/images/stones.png": "ef8d30a55155d5593c42a17c55d1baab",
"assets/assets/images/dino.png": "eaaa104075d78798c47154b09ff52c08",
"assets/assets/images/spike.png": "85b748994b3512304deace0dd1b55baa",
"assets/assets/images/buzz.png": "c2399e812e7d3bcb92f9f1886920c538",
"assets/assets/images/arrow.png": "7808d62284c91432cf7220178e1a4d2e",
"assets/assets/images/jumper.png": "9652a9f722d0b84156c775b66ca2699f",
"assets/assets/images/item-panel.png": "70cf369593a5902fcecccb179d702b56",
"assets/assets/images/sign.png": "57bcbe0a02c3e2a379a551907d811f57",
"assets/assets/images/knight.png": "e8b3864fb9180fc21d6add6acea23a7b",
"assets/assets/images/bow-case.png": "304b02e657423d5050296f065133656f",
"assets/assets/images/broken-crate.png": "e7b4e7b7b6119faa6c552306cef9fe72",
"assets/assets/images/heart.png": "f02c9b31c2af1fe220c71441016112a2",
"assets/assets/images/sword-case-3.png": "e4d60b4d8cb6658631b4ef0137f70b7d",
"assets/assets/images/sword-case-2.png": "989e66a83964421505d0c551b6e4b3f0",
"assets/assets/images/grass.png": "ded746e4d41bcde1eb2be97c2a0198a0",
"assets/assets/images/e-over.png": "d002da48fa51867f8c90704f7200d836",
"assets/assets/images/sword.png": "baf0891dc45c36269e8c132e822f94e2",
"assets/assets/images/king-bot.png": "8b499530992194f86b4272170d9fd41f",
"assets/assets/images/panel.png": "9598e64849f8a198203195e33e5d4846",
"assets/assets/images/tree.png": "0cf05865a00e326c6004fb0d3481026e",
"assets/assets/images/robot.png": "e1bb2cf1d63eaea632add0ae3b62eeae",
"assets/assets/images/ground.png": "846aa99b57b300f74fbf21012a53ca93",
"assets/assets/images/bg2.png": "f362d80c2577a97d37e1cf0e3896fcda",
"assets/assets/images/dark-dino.png": "fc2e80c8fabb29a8e670b1911b4216f3",
"assets/assets/images/dino-dark.png": "b80c4074c8907d1114ec38c2070f21a7",
"assets/assets/images/ve.png": "66d5c9cc3a08bfb971e95a12c223b741",
"assets/assets/images/garlax.png": "9a7b30ad69817fb6b4fd41e269087ccc",
"assets/assets/images/coin.png": "375d392933371afd12492fc6747c00ed",
"assets/assets/images/e.png": "9de3bf6ea32b028b70073c66722c867c",
"assets/assets/images/banner02.png": "a33c41848656c666e81928663abc7608",
"assets/assets/images/bg.png": "1ba5a6a230e340750e48152b3fac6978",
"assets/assets/images/brick.png": "c0e72fb798c22b85127e0322b559463f",
"assets/assets/images/happy-e.png": "0403ab7e178530dc6334b17ddc021508",
"assets/assets/images/banner01.png": "737e2dc2d2f430104dd70c1e472fffa5",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
