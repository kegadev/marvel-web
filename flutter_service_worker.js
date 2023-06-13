'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "6ee4ef7b86b1ab8609f0eb939ec7759a",
"index.html": "be0bdf3f41b11432abdf1939e3cc3f5c",
"/": "be0bdf3f41b11432abdf1939e3cc3f5c",
"main.dart.js": "7d9eb19c292ffe36d8e4c9a509a28e74",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "9dc6094e3644e4643c8307cca15b4799",
".git/config": "54e0ac2793e3f4a0e1f34a96ae71f649",
".git/objects/3e/1e8dafc1fb76b3c658a60d2e060e41ab4d789b": "7edb45ebc7c5be3a96ee1e69c435f3f0",
".git/objects/3b/7c709a67470e4729fd8c3a6c30500f463a2edd": "d07557dca022ed2d7bbde2ea2a3df3e9",
".git/objects/6f/9509c88bed7080d496fc5e1d87a9315e30549d": "c02716d7aaed30ce1c5697a2fb40d317",
".git/objects/04/1a06d9ebc75bb1e8177526ec781a5d1ea528cf": "6e33f60094de7ff6796925dbe1af984d",
".git/objects/35/af164147710dfcd0db5d69e7d67fce19170ffa": "d578edd761825b43420963f0e6b87715",
".git/objects/05/798baf8cc7f7d9b08aca2c04920d85d4f6089f": "a197e9814d82df5bf630a18284cb8bbb",
".git/objects/d9/6f07b294d8d852f38e4077e643367607f09d12": "3b00aa9fbd54ffe3e296b310d02f6293",
".git/objects/df/e0770424b2a19faf507a501ebfc23be8f54e7b": "76f8baefc49c326b504db7bf751c967d",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fd/d672bdf752b6e848414de2ab6b8d36e92bad25": "b2ed5e13bcbda6d6e189e4789e94fc99",
".git/objects/8f/9f811c210fd832ce14421e034216b4d32cf250": "6cecd47721fb3c432ba638c132e82605",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/a475d2e5cf46efdf856bbb38916456a6da65e3": "90ab4c47d2a1d8c54c639b85cfc4beec",
".git/objects/4c/0bcbcd7d4b99e3efa6c8e311456526dece57a1": "c7055a59f8c3c76dfbb1646ac37c3e2e",
".git/objects/2f/ae588a537c6bcee158b9cde4bebba89e13d686": "b727e0b2809a75906db37d6ec472320e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/00/32e60ffad0d6710de2ca87e53a6dc6d7f9ab29": "7dfb72a34f6e0c9285f3e3b8b5ce25c8",
".git/objects/9a/30e4506ac31f2f7837aa83e50a02a679e0a27d": "d4a3e5d48adc111a74640d051b133a6c",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/52/4efe428d9bdfe27cf2758fd9d82d1c88fd9eeb": "cfa9d36acf0e9ebc1e955b0c72a0ecfd",
".git/objects/97/e2c475eb69b51485b995759ee7312eb00da8ca": "64ce6e29f98fe88e3a865eadc047de7b",
".git/objects/dc/2eb64afca95f2d54fed07504e65e514a9f8034": "a7b7c7e4496a29d2a3f05597cf769937",
".git/objects/aa/c86056ef8fe8c71219ed8a8673b746b1535d23": "4f78f614790e6e48fc5de33aee8b52f3",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/7bde64d4f08cf8a5b9b19f41d53d5932ba0616": "e85189fe98a37a51d539ab961d90cadd",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/f6/4b66a7983770293ee2eae9b483791040892155": "97eaeaf442b0a14eebb836668cdb2ca5",
".git/objects/e9/2f13b690d28995aed7de372371feaf7e82fbee": "c2895408a7444816b8002ffb23f904e6",
".git/objects/e0/347d4ec491f5849a4f56466562053eb03e9497": "a063700d4477f9c4b5dbdcedb1235db3",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/4f/db785849a251840961c5de0e94cf0a62af73f0": "aa4937055870eeda0350f566f6fe34c7",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/1d/e5a3f40e272694442d7ebe64d4c74d9d6c8430": "89da04b73fcb3f5193b9e54b78d329a1",
".git/objects/2b/91a5592d3c26171ab724f6b5013351f0115c42": "d72d7b40da50fc0413e4d18ebf342f9f",
".git/objects/14/749dffcf8258c0c2506f6d4b12664373902a0f": "9d0feb2e66bd52d5d64a9dcfbe7f1513",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8fc56d4fa2b7937bbab2064316bc14e6",
".git/logs/refs/heads/main": "8fc56d4fa2b7937bbab2064316bc14e6",
".git/logs/refs/remotes/origin/HEAD": "f9885b0bed6d8b0a819476e3734bd80b",
".git/logs/refs/remotes/origin/main": "340a8e3fe380f6624721123256478182",
".git/description": "c49cc0d158cbbd8effd4357da1181a6e",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "bc1f6422cb8663f8c9e80ee657d8665a",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "bc1f6422cb8663f8c9e80ee657d8665a",
".git/index": "cdba4d9c0f2b0c8c028dfbeba0698c60",
".git/COMMIT_EDITMSG": "d5714c3ffeda40de2057072bd5385f5e",
".git/FETCH_HEAD": "1c19f3f95cc5fbbb03582a7791d23f41",
"assets/AssetManifest.json": "0406536ca12e1c6ddb79765d7adbe11f",
"assets/NOTICES": "e246706040352fc964bf0ef7b59eb42e",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/default_image.jpg": "76d3cf3b8752f782afb0579629c1c221",
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
