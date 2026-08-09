# AR+QR

hassanbiswas.github.io/

└── ar/

    ├── index.html     (The Masterpiece script above)

    ├── model.glb      (3D model for Android & WebAR)

    ├── model.usdz     (3D model for iOS Quick Look)

    └── targets.mind   (Target tracking file generated from your QR code)

# Step 1: Generate your QR Code Image

Go to any free QR code generator (e.g., qr-code-generator.com).
Set the destination URL to your deployed page (e.g., https://hassanbiswas.github.io/ar).
Download the generated QR code image as target-qr.png.

> create 'ar' directory in your repository.
> copy all content from https://hassanbiswas.github.io/ar
> swap your own models
> create QR code link of your_repository_name/ar

# Step 2: Compile the Image Target File (targets.mind)

MindAR requires a target compiler file to quickly lock onto your QR code image:
Open the online MindAR Image Target Compiler.
Upload your target-qr.png file.
Click Start to process the image and download the resulting targets.mind file.
Place targets.mind in the same directory as your index.html.
https://hiukim.github.io/mind-ar-js-doc/tools/compile/

# for iPhone

https://www.meshy.ai/3d-tools/file-converter/glb/to/usdz?hl=en-US

## How to Modify in the Future

To swap out the bird for another 3D asset (e.g., a dragon, drone, or logo) or adjust its size/position, simply update the values inside the CONFIG object at the top of the script:
Change 3D Asset: Update CONFIG.modelUrl to point to any online .glb or .gltf asset path.
Scale Up/Down: Increase or decrease the numbers in CONFIG.transform.scale.
Reposition: Adjust the Y-value in CONFIG.transform.position (e.g., '0 0.5 0' raises it higher above the code).
