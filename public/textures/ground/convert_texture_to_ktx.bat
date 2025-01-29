@echo off
ktx create --format R8_UNORM --generate-mipmap --encode basis-lz ground_bump.jpg ground_bump.ktx2
ktx create --format R8G8B8_SRGB --generate-mipmap --encode basis-lz ground_normal.jpg ground_normal.ktx2
ktx create --format R8_UNORM --generate-mipmap --encode basis-lz ground_ao.jpg ground_ao.ktx2
ktx create --format R8_UNORM --generate-mipmap --encode basis-lz ground_displacement.jpg ground_displacement.ktx2
ktx create --format R8_UNORM --generate-mipmap --assign-oetf srgb --encode basis-lz ground_alpha.png ground_alpha.ktx2
pause
