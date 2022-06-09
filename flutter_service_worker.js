'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
".git/config": "f3727fbb912d6cfc3325074154d6be35",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "68757a6f24fefa77514b14b4ac82005f",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "8d07a40b1fb1bbf187ef3cd98143f477",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d4f09dbe78bcd76402be6c7742dc8e22",
".git/logs/refs/heads/main": "d4f09dbe78bcd76402be6c7742dc8e22",
".git/logs/refs/remotes/origin/HEAD": "9dda53a716700d30150df73de3c1a386",
".git/logs/refs/remotes/origin/main": "ceb9af652df706e7fdab7757db0f1375",
".git/objects/00/fdd5ad1b786e58ff4c8544b34c9dace1133e96": "a1314d0f2c5fd4649b767054f0d4a51d",
".git/objects/02/5ce693c28d638f488c286f6b45f727a9ad1cfe": "87c922479cb8f8123307bf691949364f",
".git/objects/12/519b620f56049d1611fe0da95a366f68454545": "f91661b10648d4de6c117225de035b7d",
".git/objects/18/3c02aa9212a6efdc01b06c9b8d8d1c1a8573b7": "cf2ca13f7548bdf4a92912cc079ad639",
".git/objects/1c/bcb29818de41d9650048709104f401ca68048d": "85616c89d60e0bb2be419e25d28ecb31",
".git/objects/1e/4ffcfb9ec50c351f3081ccfdaf40134ac7db2b": "1dff965dce9175e8e7ac36ac7a1babdd",
".git/objects/1e/eb6ed2c5c4cb15c242b8d46bd9d21fe0c44368": "c14c2170bd8040fa7ead06f079e0273b",
".git/objects/2c/17981ba36c080599236dd8a38e641e67e688e7": "2d3e4ae23c0ad7247df181e17da9dc4b",
".git/objects/30/599455568f3724c51587a4ffc07fa3674e9672": "d1f6cc633e7d65fbb2cf0b6253f00828",
".git/objects/39/0cb3fa4decb91c764c28fd202fec330ff029a2": "3d53d844cb7d0567195ac0fa77d7b291",
".git/objects/43/68f4980ef264b34c229589adb85bbac744285b": "1be98adc33f47c92662ebb81a094ad85",
".git/objects/47/95fa454b0ec7dbf6ae5b5001a6f18c77ad2716": "618c51f8ee2edf0b5e7450698537fff9",
".git/objects/4b/448a633a180aef8b5bdbf47c273e0ee4dda3e7": "1cbf21a3e40ebe39190b0fef82442936",
".git/objects/4f/ff07948cf4df2cfb1b1fc11f900c772d4990d2": "3ee397df7bd97bc3ec5024c40dc93cbc",
".git/objects/59/65ee802e5e648f4894fc235537a710a7ec1331": "35f78a661cfaae1ffafb926241a8e573",
".git/objects/5e/e381141c3a9d81f1365c5c4c663a6503d9f7b9": "48757628816849d2890cc23adaca8156",
".git/objects/65/1296cd98714fd59077676705a006e252012dc3": "56d74a3f74fc838956af6f22656856a8",
".git/objects/65/6301ab4f8d4f30cf20bdff1c12c2dd6e7aacec": "9cbbcfafa74d4d8569644e2b76e94bb9",
".git/objects/67/06802e535b86236b5af6403344147f2041def1": "e2cd1e146a98ce18b4a941e74fcf49e6",
".git/objects/6a/a13d54a9b2edb2d80cf456b206cc291de0b532": "12179ca32bab9439ae3190e476cb40f6",
".git/objects/6f/51f87e56abf251bb629831cad8777d602d4702": "fffc176024be9e22fd9e4f2ac6c10051",
".git/objects/76/a1c168b73ad7af0e42aa76148ca3dfebd00242": "a22d2b0016d4947a50b87f22f6a673e3",
".git/objects/78/140600ae16fa9fa3e9af57b527dbfaeb110a66": "0e3e641a123936ca03dc27e1bc33a384",
".git/objects/7a/8b36ba3436c3bd4b20dfcc46950180c9e3ce1c": "781ba80c94c3b2306565ee12e75f171e",
".git/objects/7f/7e8835513b5343681542bff95237ec4f424b73": "0214bf51f9bf4243bea0f12821e6ad42",
".git/objects/93/17338b12e4defd0f3cab403b9fcc8faa041b68": "60b1f94506488cc639f6f573f0cf2877",
".git/objects/93/5e4c57c67a405d88188b1ae8847f6d1f3a08d7": "da6015a406508ce1e2f031b2e9ce37dd",
".git/objects/96/863c5024a4360740eef753002d1fde112138e2": "84774a14ab5d3f5f6ffa1133948028df",
".git/objects/9d/2861451c095a8b3d9c478f5347398251c388d6": "b3420037959b4a3c76cd221826d7aae6",
".git/objects/9d/f2b9ce2779935462dc678c4f1a47c2f9bf7050": "35f5f71b240f9836895a5478b77f7475",
".git/objects/a4/32dd92ede1b679d9bbf347fd637a6528cb9920": "41b3e10d5fa37a95867490b35405616b",
".git/objects/ac/162cafdccbdc29cf6558b8f90de9fed29253da": "6e072636d24ede4901295040cb7801e6",
".git/objects/bd/a01381a97b87ced89b066b36d90cc0da334084": "7d1cfdc4e45d59b886a885586a18dc3a",
".git/objects/c4/a8c8f9474c8d3bed9b85a7e110b68718d5cff4": "213e60188e5ec729fb808c965bcc1f77",
".git/objects/cd/cafdbe8d8a5d870d4d90e4b0c47be6d361d01a": "5138797b7968a63fde6c81d8762bf667",
".git/objects/ce/db702cbf3b6b54271f305bc5c91f15d825f4b9": "0689c3ef7ca9e789f7b0018dc065b043",
".git/objects/d2/8a17163407f6f6091098db3492639e902deb26": "1572b06e9ea4e65f1eea4bb374be23d5",
".git/objects/d8/dff55e7ed6578ec4253c5d24532e816421a9dd": "6bd2ca995c552d44cf0a45ade27890cd",
".git/objects/d9/110717bb08b5756130a00fa5332ef09d1d863c": "6cd264ded101341118b166240b53d79e",
".git/objects/db/b4f50d9f621e94f5636da2c86b65fca8f121e9": "094f95e51a774e7336e301f54703be62",
".git/objects/dc/7c5e3f4eba6bd65fda5948a3c4cb294e1ee5ca": "30b5eb64a6d86fac96e39ae6ed565689",
".git/objects/e3/ca5dd9dfa0455e3274bbb8e31441b785940093": "23ed4b8d29e429676b0fbd80b616422b",
".git/objects/f0/4682ab11a88a96b675b6e74cbf3eafad72ac71": "13392c51f68b289b31a498e115b1dca9",
".git/objects/f9/e58cf320e9daad6e2ce4a374118638873e7cd0": "21f443f1515f0a0e38e49f21c08b8e45",
".git/objects/pack/pack-77bbccb2384da941736523a464e9366ba9826e20.idx": "168ebbe73398d0276804d8035f0a8cb6",
".git/objects/pack/pack-77bbccb2384da941736523a464e9366ba9826e20.pack": "98796e55cc7869fbee69bcc670fd6319",
".git/ORIG_HEAD": "151066b3924d3f0416d24abdc3d42b8e",
".git/packed-refs": "ccd0e2adeb8d31307ab16bec5dcd4f7e",
".git/refs/heads/main": "678f070e7cd0537e21ea3b5c43ea6c15",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "678f070e7cd0537e21ea3b5c43ea6c15",
".vscode/settings.json": "19751b2a32e46d1ba1477f357123a898",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "4875de7e2719088f4542990e6e346bb0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ca79599bc9a7d58a983bd2725b09483a",
"/": "ca79599bc9a7d58a983bd2725b09483a",
"main.dart.js": "5daf7fb6b7ae7ee9d14eb5cf0b83c397",
"manifest.json": "63e648a2e70a8fb76da868c97a85bbb4",
"README.md": "6680c817f7fe183eb09f3998cb6dc99e",
"version.json": "195449fa7c87b5886186a4373a49aba3"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
