'use client';
import '@/app/globals.css';
import './style.css';
import { VERSION } from '@/lib/utils';

const page = () => {
    /**
     * MASTER AR CONFIGURATION
     */
    const CONFIG = {
        // Direct asset endpoints
        glbUrl: 'https://hassanbiswas.github.io/ar/model.glb',
        usdzUrl: 'https://hassanbiswas.github.io/ar/model.usdz',
        mindTargetUrl: './targets.mind',

        // Transform settings for MindAR WebAR Mode
        transform: {
            position: '0 0.2 0',
            scale: '0.003 0.003 0.003',
            rotation: '0 180 0',
        },

        // Animation parameters
        animation: {
            clip: '*',
            loop: 'repeat',
            timeScale: 1.0,
        },

        // Set to true to force native intent on mobile scans, false to force WebAR MindAR tracking
        enableNativeRedirect: true,
    };

    // Cache-busting logic
    console.log(`[AR Master Controller] Engine Version: ${VERSION}`);

    document.addEventListener('DOMContentLoaded', () => {
        const userAgent = navigator.userAgent || navigator.vendor || window.opera;
        const redirectScreen = document.getElementById('redirect-screen');
        const statusMsg = document.getElementById('status-message');
        const arStatusUI = document.getElementById('ar-status');

        const isAndroid = /android/i.test(userAgent);
        const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;

        if (CONFIG.enableNativeRedirect && (isAndroid || isIOS)) {
            // --- NATIVE MODE EXECUTION ---
            if (isAndroid) {
                statusMsg.textContent = 'Launching Android Scene Viewer...';
                const intentUrl = `intent://arvr.google.com/scene-viewer/1.0?file=${encodeURIComponent(CONFIG.glbUrl)}&mode=ar_only#Intent;scheme=https;package=com.google.ar.core;action=android.intent.action.VIEW;end;`;
                window.location.href = intentUrl;
            } else if (isIOS) {
                statusMsg.textContent = 'Tap to launch iOS AR View';

                const arAnchor = document.createElement('a');
                arAnchor.setAttribute('rel', 'ar');
                arAnchor.setAttribute('href', `${CONFIG.usdzUrl}?v=${VERSION}`);
                arAnchor.className = 'ios-ar-btn';
                arAnchor.innerHTML = '<img id="ar-img" style="display:none;" /> Launch AR Camera';

                redirectScreen.appendChild(arAnchor);

                setTimeout(() => {
                    arAnchor.click();
                }, 300);
            }
        } else {
            // --- WEBAR / MINDAR MODE EXECUTION ---
            redirectScreen.style.display = 'none';
            arStatusUI.style.display = 'block';

            const assetsEl = document.querySelector('#ar-assets');
            const targetEl = document.querySelector('#ar-target');

            // Dynamically inject GLTF Asset
            const assetItem = document.createElement('a-asset-item');
            assetItem.setAttribute('id', 'dynamic-model');
            assetItem.setAttribute('src', `${CONFIG.glbUrl}?v=${VERSION}`);
            assetsEl.appendChild(assetItem);

            // Dynamically inject 3D Entity
            const modelEntity = document.createElement('a-gltf-model');
            modelEntity.setAttribute('src', '#dynamic-model');
            modelEntity.setAttribute('position', CONFIG.transform.position);
            modelEntity.setAttribute('scale', CONFIG.transform.scale);
            modelEntity.setAttribute('rotation', CONFIG.transform.rotation);
            modelEntity.setAttribute(
                'animation-mixer',
                `clip: ${CONFIG.animation.clip}; loop: ${CONFIG.animation.loop}; timeScale: ${CONFIG.animation.timeScale}`
            );

            targetEl.appendChild(modelEntity);

            // Event Listeners for Tracking UI
            targetEl.addEventListener('targetFound', () => {
                arStatusUI.textContent = 'Tracking Active';
                arStatusUI.style.borderColor = 'hsl(240, 80%, 50%)';
            });

            targetEl.addEventListener('targetLost', () => {
                arStatusUI.textContent = 'Point camera at QR Code';
                arStatusUI.style.borderColor = 'rgba(255, 255, 255, 0.15)';
            });
        }
    });

    return (
        <div>
            <script src="https://aframe.io/releases/1.5.0/aframe.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/mind-ar@1.2.5/dist/mindar-image-aframe.prod.js"></script>
            <script src="https://cdn.jsdelivr.net/gh/donmccurdy/aframe-extras@v7.0.0/dist/aframe-extras.min.js"></script>

            <div className="redirect-container" id="redirect-screen">
                <div className="loader"></div>
                <p id="status-message">Initializing 3D Camera...</p>
            </div>
            <div className="ar-ui-overlay" id="ar-status" style="display: none">
                Point camera at QR Code
            </div>
            <a-scene
                color-space="sRGB"
                device-orientation-permission-ui="enabled: false"
                id="ar-scene"
                mindar-image="imageTargetSrc: ./targets.mind; filterMinCF: 0.0001; filterBeta: 0.001;"
                renderer="colorManagement: true, physicallyCorrectLights: true"
                vr-mode-ui="enabled: false"
            >
                <a-assets id="ar-assets"> </a-assets>
                <a-camera look-controls="enabled: false" position="0 0 0">
                    {' '}
                </a-camera>
                <a-entity id="ar-target" mindar-image-target="targetIndex: 0">
                    {' '}
                </a-entity>
            </a-scene>
        </div>
    );
};

export default page;
