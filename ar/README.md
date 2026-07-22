# Step 1: Generate your QR Code Image
Go to any free QR code generator (e.g., qr-code-generator.com).
Set the destination URL to your deployed page (e.g., https://hassanbiswas.github.io/ar-bird).
Download the generated QR code image as target-qr.png.

# Step 2: Compile the Image Target File (targets.mind)
MindAR requires a target compiler file to quickly lock onto your QR code image:
Open the online MindAR Image Target Compiler.
Upload your target-qr.png file.
Click Start to process the image and download the resulting targets.mind file.
Place targets.mind in the same directory as your index.html.

## How to Modify in the Future
To swap out the bird for another 3D asset (e.g., a dragon, drone, or logo) or adjust its size/position, simply update the values inside the CONFIG object at the top of the script:
Change 3D Asset: Update CONFIG.modelUrl to point to any online .glb or .gltf asset path.
Scale Up/Down: Increase or decrease the numbers in CONFIG.transform.scale.
Reposition: Adjust the Y-value in CONFIG.transform.position (e.g., '0 0.5 0' raises it higher above the code).
