@echo off
::ktx create --format R8_UNORM --generate-mipmap --encode basis-lz ./ground/ground_bump.png ./ground/ground_bump.ktx2
ktx create --format R8G8B8_UNORM --generate-mipmap --assign-oetf srgb --encode basis-lz ./ground/ground_ao.png ./ground/ground_ao.ktx2
ktx create --format R8G8B8_SRGB --generate-mipmap --assign-oetf srgb  --encode basis-lz ./ground/ground_normal.png ./ground/ground_normal.ktx2
ktx create --format R8_UNORM --generate-mipmap --assign-oetf srgb  --encode basis-lz ./ground/ground_displacement.png ./ground/ground_displacement.ktx2
ktx create --format R8G8B8_UNORM --generate-mipmap --assign-oetf srgb --encode basis-lz ./ground/ground_alpha.png ./ground/ground_alpha.ktx2

ktx create --format R8G8B8A8_UNORM --generate-mipmap --assign-oetf srgb --encode basis-lz ./planete.png ./planete.ktx2
pause
