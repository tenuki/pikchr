{
  "targets": [
    {
      "target_name": "pikchr",
      "sources": ["pikchr.cc"],
      'dependencies': ['libpikchr'],
        'conditions': [
            ['OS=="linux"', {
                'libraries': ["<(module_root_dir)/build/Release/pikchr.a"]
            }],
            ['OS=="win"', {
                'libraries': ["<(module_root_dir)\\build\\Release\\libpikchr.lib"]
            }, {  # OS != "win",
                'libraries': ["<(module_root_dir)/build/Release/pikchr.a"]
            }]
        ],
    },
    {
      'target_name': 'libpikchr',
      'type': 'static_library',
      'sources': ['pikchr.c'],
    },
  ]
}
