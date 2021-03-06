module.exports = {
  Sidebar: [
    "getting_started",
    {
      type: "category",
      label: "Guides",
      collapsed: false,
      items: [
        "cookbooks/testing",
        //"cookbooks/refresh",
      ],
    },
    {
      type: "category",
      label: "Concepts",
      items: [
        "concepts/providers",
        "concepts/reading",
        "concepts/combining_providers",
        "concepts/provider_observer",
        // "concepts/computed",
        {
          type: "category",
          label: "Modifiers",
          items: [
            "concepts/modifiers/family",
            "concepts/modifiers/auto_dispose",
          ],
        },
      ],
    },

    {
      type: "category",
      label: "Examples",
      collapsed: false,
      items: [
        {
          type: "link",
          label: "Counter",
          href:
            "https://github.com/rrousselGit/river_pod/tree/master/examples/counter",
        },
        {
          type: "link",
          label: "Todo list",
          href:
            "https://github.com/rrousselGit/river_pod/tree/master/examples/todos",
        },
        {
          type: "link",
          label: "Marvel API",
          href:
            "https://github.com/rrousselGit/river_pod/tree/master/examples/marvel",
        },
        {
          type: "link",
          label: "Android Launcher",
          href:
            "https://github.com/lohanidamodar/fl_live_launcher",
        },
        {
          type: "link",
          label: "Worldtime Clock",
          href:
            "https://github.com/lohanidamodar/flutter_worldtime",
        },
        {
          type: "link",
          label: "Dictionary App",
          href:
            "https://github.com/lohanidamodar/fl_dictio",
        },
        {
          type: "link",
          label: "Firebase Starter",
          href:
            "https://github.com/lohanidamodar/flutter_firebase_starter/tree/feature/riverpod",
        },
      ],
    },
    {
      type: "category",
      label: "Api references",
      items: [
        {
          type: "link",
          label: "riverpod",
          href:
            "https://pub.dev/documentation/riverpod/latest/riverpod/riverpod-library.html",
        },
        {
          type: "link",
          label: "flutter_riverpod",
          href:
            "https://pub.dev/documentation/flutter_riverpod/latest/flutter_riverpod/flutter_riverpod-library.html",
        },
        {
          type: "link",
          label: "hooks_riverpod",
          href:
            "https://pub.dev/documentation/hooks_riverpod/latest/hooks_riverpod/hooks_riverpod-library.html",
        },
      ],
    },
  ],
};
