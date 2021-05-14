'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "449d3cee48466cfc3a307befa08ca3f0",
"index.html": "68abd46cafbf90c986666d28b9cec1d1",
"/": "68abd46cafbf90c986666d28b9cec1d1",
"main.dart.js": "34f7db8eae0ee92122f16aed83baf3c6",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "8a0b9720f83e32ff57c7a0041910349e",
".git/config": "472297bca21a3598e35b39ae8b1ccfb8",
".git/objects/0d/88ed92e81a20ddd0655cbca88a6be076f8dc15": "1d22596b12bf63d05fa0a55be7142071",
".git/objects/69/f6820e67fe0d711a84c147c0cb8fae988a7bb6": "756f15234a757c2990ef76c9c37eab29",
".git/objects/58/5a44fdaf01cbf9712e3d8ef0a05538eca19551": "044bdf7bd0651eeb734b0bcf08eb3db3",
".git/objects/93/2df4ae2c3cb34a716e21b478590eecaa2ae295": "e299ba2e68d97d0f661cc8ddccf9787a",
".git/objects/05/e3cbd252df5607e117e2ae931c3b219a1c01f6": "f04799b159fc33111acb5eacded41e1d",
".git/objects/da/342672806b3a7d7baf62ff6d4fff581c60a2e6": "4988ae1063361e5588b38e166224b6f5",
".git/objects/a2/fa4a8a69b4adf73ec7ea76db9a3c9ec7489c94": "158ccf9f0170f1be0e70ab74881b3c24",
".git/objects/a5/0bd0c40889f8f959df618e63109ea3c33aedc4": "e5f05ef780dce39f9e70421c0a5102b1",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/c9/3aeaac3cb6edc37d9ca5d80a769187a75a3f49": "bde51c0df1c92cb452aad86982c8515b",
".git/objects/cf/77fcd91acf7f6279e30e8a64e020cb63e446a0": "0f416c5bc114447da5e772fd108184d6",
".git/objects/c8/151eadc2f3d7235254ad5cf338cd79dc2099ee": "bdc47a04d0846878bc7196611c5474e7",
".git/objects/c8/05425867d244743f183ab8e13ce3ad6af1fa07": "3f8d9f92e402804a93178f092dfef68b",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/29/391850831011519bbe3da427545010747509a1": "2588bc3cb96731970165b72908e31893",
".git/objects/28/787c1e7912c994ed2d87bb6980623cfd922a3e": "7d405d79b018cd86e09714f3995829fe",
".git/objects/17/b5fb1b71ff89035776146789a3411826adbcfc": "f21437aa0646cd0025fb9d814fb38cb7",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/e4199d15b518b6444cc2a4139ba4175b715f07": "d476feba9fa195e50288bea645e8aa1e",
".git/objects/19/7f4c7204f12af28120d3506524f0ac051b624d": "22b1171017cb0baed61d462a428954b5",
".git/objects/4c/57a4c8755373a911bfc4296483ed3f137dca6a": "adb5cff767672600c9b821d24845bf97",
".git/objects/75/e5e26b99727a795539e53ab4f8daf57150a32e": "6cd07b7519534b983398b0d21a23316f",
".git/objects/43/46e2d9e671bf7a5a3287a3ddacf5f915a35d4f": "41b3d0d418188d18de1ec7daf79f5299",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/0a39af15239903497a214810da79267a5edb0f": "1302a9f20881c2f16a8da2d03596462b",
".git/objects/07/35c3af84934a9fb4838d8a2ebeff34195407dd": "b5ef8128f8d7c1a0b2d36524576ea956",
".git/objects/6e/2d4c9f43ee866c95a7b86a918ef788c56bbfbf": "b631cca7debe95a945fb0d456be4c865",
".git/objects/36/9715ea746caeecb7f3b9fea2ff7e666e1c86ce": "739319e3d8dfd6835c7e7232b4c99cbe",
".git/objects/5b/c5988a225d994601fc62395f8b0716d32bf961": "a5e3d05fa6af9bd5f06368e703330447",
".git/objects/52/b092517504c026b661c113b30610af8713f685": "71e8b2f11070acbc70efe8b6a4e77060",
".git/objects/d4/e72df8af3ae4720bd0983eaa58a3cbf06cc393": "a9a9634e061653182a0094df193308b8",
".git/objects/a0/86347437d4eca1639812f24f902d183734df1b": "b415402546475eaf79149bf955ef06fb",
".git/objects/dd/43db65edcbfd810943d4270e20d3703447c26d": "b41f2c4cbaf5f3425cc1445d4e1e098e",
".git/objects/d5/3a185588ca50f63cb5ff1c096ee35d2e9507fc": "3d2b2e7703a8ac741d41542a0e79d1f6",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/b9/299982cb7c0bd1f84d795dbe3ce61c00ce7d7d": "5c781b66ee3e00718dee450958e830f5",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/cc/8bfc7f88d1e4bd832c0205986ff02f18965579": "30adb199791be76254ddb2bc421e5181",
".git/objects/c2/a728121cc94290e0e8dbde82b1e5125d5465a6": "f2989bf1405fb660305820683b8ee53c",
".git/objects/f6/bd00bcc6e6360759af8c9b77b172ed270817c4": "c61a980b19f00bd24f0ced616308dc1a",
".git/objects/f1/7d5a5014e4ae9c7d9d5f8de26fec398f65e44c": "e8f04124372d550cb6c2b42e572f972f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/1b/aac9f179deaa522f4887fa2ad868cd53557971": "79f1bba4f5982417cba5a954d80164cf",
".git/objects/1d/a27e64184a8e443e333ac147d1144e29a44d60": "f7c620041a94f5b586c18fad56de97d4",
".git/objects/71/5df76081fde1dc6a52ca21e9728534e7c30502": "997d0a7232f54c01893bf40c6e407e35",
".git/objects/49/133379e7f803c60e4360a97bb3b2fcc041475c": "baa6f01df91de3b5ac0ab28b72385653",
".git/objects/2e/c8f8ebe1697719cef4e5f5dfe7ea0578b3053e": "b1e658a0ba676bcae540794d53beb4fb",
".git/objects/25/9fe05818338cba26a77742abd1461fb9ad45b0": "96f877418897cc6f20a85645aac97af3",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d181cb814a52b9b730a8d8795bbdb7bb",
".git/logs/refs/heads/main": "f4b6a647655c8a65af7a5c3e6cee9d4c",
".git/logs/refs/remotes/origin/main": "687e3130dbe33b4b6ef0cd905638bd24",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/main": "9939eb18008c9634019a0311545661eb",
".git/refs/remotes/origin/main": "9939eb18008c9634019a0311545661eb",
".git/index": "14bb57dbca4fbd21e07fbe44d2212294",
".git/COMMIT_EDITMSG": "2fa17132183ec193594cffdb9d1229ab",
"assets/images/smedley.jpeg": "1e4bced51c253f2f19d5f7dff5417235",
"assets/AssetManifest.json": "8f7f9fd86fd52ce0649e21523bca45f2",
"assets/NOTICES": "e59cc9a4f3eb0195fc333377f6ba2a50",
"assets/FontManifest.json": "68c0885d4889256ef7053f4047d49053",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dffd9504fcb1894620fa41c700172994",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "4b6a9b7c20913279a3ad3dd9c96e155b",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "00bb2b684be61e89d1bc7d75dee30b58",
"assets/fonts/DroidLogo.ttf": "ae7533effd06fc90ecce88c5cc9f0adb",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/fonts/DroidLogo-Bold.ttf": "850424080fd91f7d0e45691d3ab53f97"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
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
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
