(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/Orb/Orb.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.module.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$controls$2f$OrbitControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/examples/jsm/controls/OrbitControls.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const Orb = ({ totalImages = 30, totalItems = 60, baseWidth = 1, baseHeight = 0.6, sphereRadius = 5, verticalOffset = 0.3 })=>{
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const sceneRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isReady, setIsReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Orb.useEffect": ()=>{
            const timer = setTimeout({
                "Orb.useEffect.timer": ()=>setIsReady(true)
            }["Orb.useEffect.timer"], 0);
            return ({
                "Orb.useEffect": ()=>clearTimeout(timer)
            })["Orb.useEffect"];
        }
    }["Orb.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Orb.useEffect": ()=>{
            if (!isReady || !containerRef.current) return;
            let mounted = true;
            let animationId = null;
            const meshes = [];
            const scene = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scene"]();
            const orbGroup = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"]();
            orbGroup.position.y = -verticalOffset;
            scene.add(orbGroup);
            sceneRef.current = scene;
            const camera = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PerspectiveCamera"](75, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.position.z = 10;
            const renderer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGLRenderer"]({
                antialias: true,
                alpha: true,
                preserveDrawingBuffer: true,
                powerPreference: "high-performance"
            });
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setClearColor(0x000000, 0);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            renderer.outputColorSpace = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SRGBColorSpace"];
            containerRef.current.appendChild(renderer.domElement);
            const controls = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$controls$2f$OrbitControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrbitControls"](camera, renderer.domElement);
            controls.enableDamping = true;
            controls.dampingFactor = 0.05;
            controls.rotateSpeed = 1.2;
            controls.minDistance = 6;
            controls.maxDistance = 10;
            controls.enableZoom = true;
            controls.enablePan = false;
            const animate = {
                "Orb.useEffect.animate": ()=>{
                    if (!mounted) return;
                    animationId = requestAnimationFrame(animate);
                    controls.update();
                    renderer.render(scene, camera);
                }
            }["Orb.useEffect.animate"];
            animate();
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");
            canvas.width = 256;
            canvas.height = 256;
            const radius = 10;
            ctx.beginPath();
            ctx.moveTo(radius, 0);
            ctx.lineTo(canvas.width - radius, 0);
            ctx.quadraticCurveTo(canvas.width, 0, canvas.width, radius);
            ctx.lineTo(canvas.width, canvas.height - radius);
            ctx.quadraticCurveTo(canvas.width, canvas.height, canvas.width - radius, canvas.height);
            ctx.lineTo(radius, canvas.height);
            ctx.quadraticCurveTo(0, canvas.height, 0, canvas.height - radius);
            ctx.lineTo(0, radius);
            ctx.quadraticCurveTo(0, 0, radius, 0);
            ctx.closePath();
            ctx.fillStyle = "white";
            ctx.fill();
            const sharedAlphaMap = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CanvasTexture"](canvas);
            const textureLoader = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextureLoader"]();
            const getRandomImagePath = {
                "Orb.useEffect.getRandomImagePath": ()=>`/lookbook/orb_img_${Math.floor(Math.random() * totalImages) + 1}.jpg`
            }["Orb.useEffect.getRandomImagePath"];
            const loadImageMesh = {
                "Orb.useEffect.loadImageMesh": (phi, theta)=>{
                    textureLoader.load(getRandomImagePath(), {
                        "Orb.useEffect.loadImageMesh": (texture)=>{
                            if (!mounted) {
                                texture.dispose();
                                return;
                            }
                            const imageAspect = texture.image.width / texture.image.height;
                            let width = baseWidth;
                            let height = baseHeight;
                            if (imageAspect > 1) {
                                height = width / imageAspect;
                            } else {
                                width = height * imageAspect;
                            }
                            texture.colorSpace = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SRGBColorSpace"];
                            texture.generateMipmaps = true;
                            texture.minFilter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinearMipmapLinearFilter"];
                            texture.magFilter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinearFilter"];
                            const geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlaneGeometry"](width, height);
                            const material = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
                                map: texture,
                                side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DoubleSide"],
                                transparent: true,
                                alphaMap: sharedAlphaMap,
                                depthWrite: true,
                                depthTest: true
                            });
                            const mesh = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](geometry, material);
                            mesh.position.x = sphereRadius * Math.cos(theta) * Math.sin(phi);
                            mesh.position.y = sphereRadius * Math.sin(theta) * Math.sin(phi);
                            mesh.position.z = sphereRadius * Math.cos(phi);
                            mesh.lookAt(0, 0, 0);
                            mesh.rotateY(Math.PI);
                            if (mounted) {
                                orbGroup.add(mesh);
                                meshes.push({
                                    mesh,
                                    geometry,
                                    material,
                                    texture
                                });
                            } else {
                                geometry.dispose();
                                material.dispose();
                                texture.dispose();
                            }
                        }
                    }["Orb.useEffect.loadImageMesh"], undefined, {
                        "Orb.useEffect.loadImageMesh": (error)=>{
                            if (mounted) {}
                        }
                    }["Orb.useEffect.loadImageMesh"]);
                }
            }["Orb.useEffect.loadImageMesh"];
            for(let i = 0; i < totalItems; i++){
                const phi = Math.acos(-1 + 2 * i / totalItems);
                const theta = Math.sqrt(totalItems * Math.PI) * phi;
                loadImageMesh(phi, theta);
            }
            const handleResize = {
                "Orb.useEffect.handleResize": ()=>{
                    if (!mounted) return;
                    const width = window.innerWidth;
                    const height = window.innerHeight;
                    renderer.setSize(width, height);
                    camera.aspect = width / height;
                    camera.updateProjectionMatrix();
                }
            }["Orb.useEffect.handleResize"];
            window.addEventListener("resize", handleResize);
            return ({
                "Orb.useEffect": ()=>{
                    mounted = false;
                    if (animationId) {
                        cancelAnimationFrame(animationId);
                    }
                    window.removeEventListener("resize", handleResize);
                    meshes.forEach({
                        "Orb.useEffect": ({ mesh, geometry, material, texture })=>{
                            if (mesh.parent) {
                                mesh.parent.remove(mesh);
                            }
                            geometry.dispose();
                            material.dispose();
                            texture.dispose();
                        }
                    }["Orb.useEffect"]);
                    if (sharedAlphaMap) {
                        sharedAlphaMap.dispose();
                    }
                    if (controls) {
                        controls.dispose();
                    }
                    if (renderer) {
                        if (containerRef.current && renderer.domElement) {
                            containerRef.current.removeChild(renderer.domElement);
                        }
                        renderer.dispose();
                    }
                    sceneRef.current = null;
                }
            })["Orb.useEffect"];
        }
    }["Orb.useEffect"], [
        isReady,
        totalImages,
        totalItems,
        baseWidth,
        baseHeight,
        sphereRadius,
        verticalOffset
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "orb"
    }, void 0, false, {
        fileName: "[project]/src/components/Orb/Orb.jsx",
        lineNumber: 231,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Orb, "gGFLxgzk3XVHrIdQaSJWlh2YWMs=");
_c = Orb;
const __TURBOPACK__default__export__ = Orb;
var _c;
__turbopack_context__.k.register(_c, "Orb");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Copy/Copy.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Copy
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$SplitText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/SplitText.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@gsap/react/src/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$SplitText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SplitText"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
function Copy({ children, animateOnScroll = true, delay = 0, type = "slide" }) {
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const elementRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const splitRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const waitForFonts = async ()=>{
        try {
            await document.fonts.ready;
            const customFonts = [
                "Koulen",
                "Host Grotesk",
                "DM Mono"
            ];
            const fontCheckPromises = customFonts.map((fontFamily)=>{
                return document.fonts.check(`16px ${fontFamily}`);
            });
            await Promise.all(fontCheckPromises);
            await new Promise((resolve)=>setTimeout(resolve, 100));
            return true;
        } catch (error) {
            await new Promise((resolve)=>setTimeout(resolve, 200));
            return true;
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"])({
        "Copy.useGSAP": ()=>{
            if (!containerRef.current) return;
            const initializeSplitText = {
                "Copy.useGSAP.initializeSplitText": async ()=>{
                    await waitForFonts();
                    splitRefs.current = [];
                    elementRefs.current = [];
                    let elements = [];
                    if (containerRef.current.hasAttribute("data-copy-wrapper")) {
                        elements = Array.from(containerRef.current.children);
                    } else {
                        elements = [
                            containerRef.current
                        ];
                    }
                    if (type === "slide") {
                        const allLines = [];
                        elements.forEach({
                            "Copy.useGSAP.initializeSplitText": (element)=>{
                                elementRefs.current.push(element);
                                const split = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$SplitText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SplitText"].create(element, {
                                    type: "lines",
                                    mask: "lines",
                                    linesClass: "line",
                                    lineThreshold: 0.1
                                });
                                splitRefs.current.push(split);
                                const computedStyle = window.getComputedStyle(element);
                                const textIndent = computedStyle.textIndent;
                                if (textIndent && textIndent !== "0px") {
                                    if (split.lines.length > 0) {
                                        split.lines[0].style.paddingLeft = textIndent;
                                    }
                                    element.style.textIndent = "0";
                                }
                                allLines.push(...split.lines);
                            }
                        }["Copy.useGSAP.initializeSplitText"]);
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(allLines, {
                            y: "100%"
                        });
                        const animation = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(allLines, {
                            y: "0%",
                            duration: 1,
                            stagger: 0.1,
                            ease: "power4.out",
                            delay: delay,
                            paused: animateOnScroll
                        });
                        if (animateOnScroll) {
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].create({
                                trigger: containerRef.current,
                                start: "top 80%",
                                animation: animation,
                                once: true,
                                refreshPriority: -1
                            });
                        }
                    } else if (type === "flicker") {
                        const allChars = [];
                        elements.forEach({
                            "Copy.useGSAP.initializeSplitText": (element)=>{
                                elementRefs.current.push(element);
                                const split = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$SplitText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SplitText"].create(element, {
                                    type: "words,chars"
                                });
                                splitRefs.current.push(split);
                                allChars.push(...split.chars);
                            }
                        }["Copy.useGSAP.initializeSplitText"]);
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(allChars, {
                            opacity: 0
                        });
                        const animation = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(allChars, {
                            duration: 0.05,
                            opacity: 1,
                            ease: "power2.inOut",
                            delay: delay,
                            stagger: {
                                amount: 0.5,
                                each: 0.1,
                                from: "random"
                            },
                            paused: animateOnScroll
                        });
                        if (animateOnScroll) {
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].create({
                                trigger: containerRef.current,
                                start: "top 85%",
                                animation: animation,
                                once: true
                            });
                        }
                    }
                }
            }["Copy.useGSAP.initializeSplitText"];
            initializeSplitText();
            return ({
                "Copy.useGSAP": ()=>{
                    splitRefs.current.forEach({
                        "Copy.useGSAP": (split)=>{
                            if (split) {
                                split.revert();
                            }
                        }
                    }["Copy.useGSAP"]);
                }
            })["Copy.useGSAP"];
        }
    }["Copy.useGSAP"], {
        scope: containerRef,
        dependencies: [
            animateOnScroll,
            delay,
            type
        ]
    });
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Children.count(children) === 1) {
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].cloneElement(children, {
            ref: containerRef
        });
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        "data-copy-wrapper": "true",
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/Copy/Copy.jsx",
        lineNumber: 164,
        columnNumber: 5
    }, this);
}
_s(Copy, "vj6CR1CAjQjs/mz6LexqPP4XlLM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]
    ];
});
_c = Copy;
var _c;
__turbopack_context__.k.register(_c, "Copy");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_1818030f._.js.map