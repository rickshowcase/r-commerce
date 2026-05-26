module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/client-layout.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ClientLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lenis/dist/lenis-react.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function ClientLayout({ children, footer }) {
    const pageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const checkMobile = ()=>{
            setIsMobile(window.innerWidth <= 1000);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return ()=>window.removeEventListener("resize", checkMobile);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        window.scrollTo(0, 0);
    }, [
        pathname
    ]);
    const scrollSettings = isMobile ? {
        duration: 0.8,
        easing: (t)=>Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: "vertical",
        gestureDirection: "vertical",
        smooth: true,
        smoothTouch: true,
        touchMultiplier: 1.5,
        infinite: false,
        lerp: 0.09,
        wheelMultiplier: 1,
        orientation: "vertical",
        smoothWheel: true,
        syncTouch: true
    } : {
        duration: 1.2,
        easing: (t)=>Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: "vertical",
        gestureDirection: "vertical",
        smooth: true,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
        lerp: 0.1,
        wheelMultiplier: 1,
        orientation: "vertical",
        smoothWheel: true,
        syncTouch: true
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ReactLenis"], {
        root: true,
        options: scrollSettings,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "page",
            ref: pageRef,
            children: [
                children,
                pathname !== "/lookbook" && footer
            ]
        }, void 0, true, {
            fileName: "[project]/src/client-layout.js",
            lineNumber: 61,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/client-layout.js",
        lineNumber: 60,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/Menu/Menu.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$SplitText$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/SplitText.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$SplitText$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SplitText"]);
const Menu = ()=>{
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isAnimating, setIsAnimating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMenuVisible, setIsMenuVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const menuRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const menuOverlayRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const hamburgerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const splitTextsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const mainLinkSplitsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const lastScrollY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const scrambleText = (elements, duration = 0.4)=>{
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
        elements.forEach((char)=>{
            const originalText = char.textContent;
            let iterations = 0;
            const maxIterations = Math.floor(Math.random() * 6) + 3;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(char, {
                opacity: 1
            });
            const scrambleInterval = setInterval(()=>{
                char.textContent = chars[Math.floor(Math.random() * chars.length)];
                iterations++;
                if (iterations >= maxIterations) {
                    clearInterval(scrambleInterval);
                    char.textContent = originalText;
                }
            }, 25);
            setTimeout(()=>{
                clearInterval(scrambleInterval);
                char.textContent = originalText;
            }, duration * 1000);
        });
    };
    const openMenu = ()=>{
        setIsOpen(true);
        setIsAnimating(true);
        if (hamburgerRef.current) {
            hamburgerRef.current.classList.add("open");
        }
        const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
            onComplete: ()=>{
                setIsAnimating(false);
            }
        });
        tl.to(menuOverlayRef.current, {
            duration: 0.75,
            scaleY: 1,
            ease: "power4.out"
        });
        const allWords = mainLinkSplitsRef.current.reduce((acc, split)=>{
            return acc.concat(split.words);
        }, []);
        tl.to(allWords, {
            duration: 0.75,
            yPercent: 0,
            stagger: 0.1,
            ease: "power4.out"
        }, "-=0.5");
        const subCols = menuOverlayRef.current.querySelectorAll(".menu-overlay-sub-col");
        subCols.forEach((col)=>{
            const links = col.querySelectorAll(".menu-sub-links a");
            tl.to(links, {
                duration: 0.75,
                y: 0,
                opacity: 1,
                stagger: 0.05,
                ease: "power4.out"
            }, "<");
        });
        tl.add(()=>{
            splitTextsRef.current.forEach((split)=>{
                split.chars.forEach((char, index)=>{
                    setTimeout(()=>{
                        scrambleText([
                            char
                        ], 0.4);
                    }, index * 30);
                });
            });
        }, "<");
    };
    const closeMenu = ()=>{
        setIsOpen(false);
        setIsAnimating(true);
        if (hamburgerRef.current) {
            hamburgerRef.current.classList.remove("open");
        }
        const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
            onComplete: ()=>{
                setIsAnimating(false);
            }
        });
        tl.add(()=>{
            const allChars = splitTextsRef.current.reduce((acc, split)=>{
                return acc.concat(split.chars);
            }, []);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(allChars, {
                opacity: 0,
                duration: 0.2
            });
        });
        const subCols = menuOverlayRef.current.querySelectorAll(".menu-overlay-sub-col");
        subCols.forEach((col)=>{
            const links = col.querySelectorAll(".menu-sub-links a");
            tl.to(links, {
                duration: 0.3,
                y: 50,
                opacity: 0,
                stagger: -0.05,
                ease: "power3.in"
            }, "<");
        });
        const allWords = mainLinkSplitsRef.current.reduce((acc, split)=>{
            return acc.concat(split.words);
        }, []);
        tl.to(allWords, {
            duration: 0.3,
            yPercent: 120,
            stagger: -0.05,
            ease: "power3.in"
        }, "<");
        tl.to(menuOverlayRef.current, {
            duration: 0.5,
            scaleY: 0,
            ease: "power3.inOut"
        }, "-=0.1");
    };
    const toggleMenu = ()=>{
        if (isAnimating) return;
        if (isOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    };
    const handleLinkClick = ()=>{
        if (isOpen) {
            setTimeout(()=>{
                closeMenu();
            }, 500);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(menuOverlayRef.current, {
            scaleY: 0,
            transformOrigin: "top center"
        });
        const scrambleElements = menuOverlayRef.current.querySelectorAll(".menu-items-header p, .menu-social a");
        splitTextsRef.current = [];
        scrambleElements.forEach((element)=>{
            const split = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$SplitText$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SplitText"](element, {
                type: "chars"
            });
            splitTextsRef.current.push(split);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(split.chars, {
                opacity: 0
            });
        });
        const mainLinks = menuOverlayRef.current.querySelectorAll(".menu-main-link h4");
        mainLinkSplitsRef.current = [];
        mainLinks.forEach((element)=>{
            const split = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$SplitText$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SplitText"](element, {
                type: "words",
                mask: "words"
            });
            mainLinkSplitsRef.current.push(split);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(split.words, {
                yPercent: 120
            });
        });
        const subLinks = menuOverlayRef.current.querySelectorAll(".menu-sub-links a");
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(subLinks, {
            y: 50,
            opacity: 0
        });
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const checkMobile = ()=>{
            setIsMobile(window.innerWidth < 1000);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return ()=>{
            window.removeEventListener("resize", checkMobile);
        };
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isMobile) {
            if (menuRef.current && !isMenuVisible) {
                menuRef.current.classList.remove("hidden");
                setIsMenuVisible(true);
            }
            return;
        }
        const handleScroll = ()=>{
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
                if (isOpen) {
                    closeMenu();
                }
                if (isMenuVisible) {
                    menuRef.current.classList.add("hidden");
                    setIsMenuVisible(false);
                }
            } else if (currentScrollY < lastScrollY.current) {
                if (!isMenuVisible) {
                    menuRef.current.classList.remove("hidden");
                    setIsMenuVisible(true);
                }
            }
            lastScrollY.current = currentScrollY;
        };
        window.addEventListener("scroll", handleScroll);
        return ()=>{
            window.removeEventListener("scroll", handleScroll);
        };
    }, [
        isOpen,
        isMenuVisible,
        isMobile
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "menu",
        ref: menuRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "menu-header",
                onClick: toggleMenu,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "menu-logo",
                        children: "R Commerce"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Menu/Menu.jsx",
                        lineNumber: 299,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "menu-toggle",
                        "aria-label": "Toggle menu",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "menu-hamburger-icon",
                            ref: hamburgerRef,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "menu-item"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Menu/Menu.jsx",
                                    lineNumber: 302,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "menu-item"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Menu/Menu.jsx",
                                    lineNumber: 303,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Menu/Menu.jsx",
                            lineNumber: 301,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/Menu/Menu.jsx",
                        lineNumber: 300,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Menu/Menu.jsx",
                lineNumber: 298,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "menu-overlay",
                ref: menuOverlayRef,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "menu-overlay-items",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "menu-overlay-col menu-overlay-col-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "menu-items-header",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Root"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Menu/Menu.jsx",
                                            lineNumber: 312,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Menu/Menu.jsx",
                                        lineNumber: 311,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "menu-main-links",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/",
                                                className: "menu-main-link",
                                                onClick: handleLinkClick,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    children: "Index"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Menu/Menu.jsx",
                                                    lineNumber: 320,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Menu/Menu.jsx",
                                                lineNumber: 315,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/wardrobe",
                                                className: "menu-main-link",
                                                onClick: handleLinkClick,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    children: "Wardrobe"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Menu/Menu.jsx",
                                                    lineNumber: 327,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Menu/Menu.jsx",
                                                lineNumber: 322,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/genesis",
                                                className: "menu-main-link",
                                                onClick: handleLinkClick,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    children: "Genesis"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Menu/Menu.jsx",
                                                    lineNumber: 334,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Menu/Menu.jsx",
                                                lineNumber: 329,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Menu/Menu.jsx",
                                        lineNumber: 314,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Menu/Menu.jsx",
                                lineNumber: 310,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "menu-overlay-col menu-overlay-col-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "menu-overlay-sub-col",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "menu-items-header",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "Subroutine"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Menu/Menu.jsx",
                                                    lineNumber: 341,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Menu/Menu.jsx",
                                                lineNumber: 340,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "menu-sub-links",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/lookbook",
                                                        onClick: handleLinkClick,
                                                        children: "Lookbook"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Menu/Menu.jsx",
                                                        lineNumber: 344,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/touchpoint",
                                                        onClick: handleLinkClick,
                                                        children: "Touchpoint"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Menu/Menu.jsx",
                                                        lineNumber: 347,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/unit",
                                                        onClick: handleLinkClick,
                                                        children: "Shell (A)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Menu/Menu.jsx",
                                                        lineNumber: 350,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Menu/Menu.jsx",
                                                lineNumber: 343,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Menu/Menu.jsx",
                                        lineNumber: 339,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "menu-overlay-sub-col",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "menu-items-header",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "Field Tests"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Menu/Menu.jsx",
                                                    lineNumber: 357,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Menu/Menu.jsx",
                                                lineNumber: 356,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "menu-sub-links menu-product-links",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/product",
                                                        onClick: handleLinkClick,
                                                        children: "01. Unbody"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Menu/Menu.jsx",
                                                        lineNumber: 360,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/product",
                                                        onClick: handleLinkClick,
                                                        children: "02. Persona Null"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Menu/Menu.jsx",
                                                        lineNumber: 363,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/product",
                                                        onClick: handleLinkClick,
                                                        children: "03. Second Host"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Menu/Menu.jsx",
                                                        lineNumber: 366,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/product",
                                                        onClick: handleLinkClick,
                                                        children: "04. Shellcode"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Menu/Menu.jsx",
                                                        lineNumber: 369,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Menu/Menu.jsx",
                                                lineNumber: 359,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Menu/Menu.jsx",
                                        lineNumber: 355,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Menu/Menu.jsx",
                                lineNumber: 338,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Menu/Menu.jsx",
                        lineNumber: 309,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "menu-overlay-footer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "menu-social",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "https://x.com/rcommerce",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    onClick: handleLinkClick,
                                    children: "Twitter"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Menu/Menu.jsx",
                                    lineNumber: 378,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/Menu/Menu.jsx",
                                lineNumber: 377,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "menu-social",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "https://www.instagram.com/rcommerce/",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    onClick: handleLinkClick,
                                    children: "Instagram"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Menu/Menu.jsx",
                                    lineNumber: 388,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/Menu/Menu.jsx",
                                lineNumber: 387,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "menu-social",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "https://www.youtube.com/@rcommerce",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    onClick: handleLinkClick,
                                    children: "YouTube"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Menu/Menu.jsx",
                                    lineNumber: 398,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/Menu/Menu.jsx",
                                lineNumber: 397,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Menu/Menu.jsx",
                        lineNumber: 376,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Menu/Menu.jsx",
                lineNumber: 308,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Menu/Menu.jsx",
        lineNumber: 297,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Menu;
}),
"[project]/src/app/wardrobe/products.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "products",
    ()=>products
]);
const products = [
    {
        name: "Unit 01",
        price: "180",
        color: "Black",
        tag: "Deform",
        sizes: [
            "S",
            "M",
            "L",
            "XL"
        ],
        description: "A modular black outer shell engineered with rigid layering and precision cuts—ideal for urban climates, built to disappear in low light."
    },
    {
        name: "Phase Field",
        price: "160",
        color: "Stone",
        tag: "Sheerform",
        sizes: [
            "M",
            "L",
            "XL"
        ],
        description: "Field-ready modular wear in stone tones, featuring directional seams and a draped silhouette for fluid movement across environments."
    },
    {
        name: "Subzero",
        price: "190",
        color: "Ice",
        tag: "Functionary",
        sizes: [
            "S",
            "M",
            "L"
        ],
        description: "Lightweight jacket in a subtle ice tone, crafted for colder atmospheres with breathable construction and quiet futurism at its core."
    },
    {
        name: "Echo Pattern",
        price: "140",
        color: "Grey",
        tag: "Deform",
        sizes: [
            "M",
            "L",
            "XL",
            "XXL"
        ],
        description: "Textured grey layering piece with soft distortion surface details and a neutral aesthetic calibrated for motion and utility."
    },
    {
        name: "Soft Matter",
        price: "120",
        color: "White",
        tag: "Sheerform",
        sizes: [
            "S",
            "M",
            "L"
        ],
        description: "Minimal white layer with soft-shell build and structural flow, balancing technical lines with fluid fabric motion."
    },
    {
        name: "Ghostwear",
        price: "185",
        color: "White",
        tag: "Functionary",
        sizes: [
            "M",
            "L",
            "XL"
        ],
        description: "Translucent white shell with matte tonal overlays—built for minimal visibility and sensory softness across temperature shifts."
    },
    {
        name: "Core Module",
        price: "150",
        color: "Stone",
        tag: "Deform",
        sizes: [
            "S",
            "M",
            "L",
            "XL"
        ],
        description: "Stone-layered midweight core piece with minimal branding, modular attachments, and internal system paneling."
    },
    {
        name: "Persona Null",
        price: "175",
        color: "Black",
        tag: "Sheerform",
        sizes: [
            "M",
            "L",
            "XL"
        ],
        description: "Anti-identity outerwear in blackout, asymmetric cut lines and concealed fastenings—designed for detachment and drift."
    },
    {
        name: "Axis Drift",
        price: "165",
        color: "Grey",
        tag: "Functionary",
        sizes: [
            "S",
            "M",
            "L"
        ],
        description: "A soft grey utility form built to wrap and reorient on body movement, echoing collapse and stretch in motion."
    },
    {
        name: "Patch v0.2",
        price: "110",
        color: "White",
        tag: "Deform",
        sizes: [
            "M",
            "L",
            "XL"
        ],
        description: "Crisp white form with adaptive panel layout and micro utility pockets—a prototype layer made for future rewrites."
    },
    {
        name: "Relay Shell",
        price: "145",
        color: "Black",
        tag: "Sheerform",
        sizes: [
            "S",
            "M",
            "L"
        ],
        description: "Shadow black outer with reactive fabric and structural folds, constructed to bypass signal and retain warmth."
    },
    {
        name: "Clone Form",
        price: "130",
        color: "Ice",
        tag: "Functionary",
        sizes: [
            "S",
            "M",
            "L",
            "XL"
        ],
        description: "Icy neutral silhouette with reflective accents and reversible construction—a dual-form expression of adaptive layering."
    },
    {
        name: "Cold Proxy",
        price: "155",
        color: "Grey",
        tag: "Deform",
        sizes: [
            "M",
            "L",
            "XL"
        ],
        description: "Soft grey insulated layer mimicking cold tactility, designed for semi-static zones and low interaction corridors."
    },
    {
        name: "Frame Shift",
        price: "160",
        color: "Stone",
        tag: "Sheerform",
        sizes: [
            "S",
            "M",
            "L",
            "XL"
        ],
        description: "Stone-finished body with angular overlay panels and modular zip-outs—built to reconfigure with each movement frame."
    },
    {
        name: "Veil Unit",
        price: "175",
        color: "Ice",
        tag: "Functionary",
        sizes: [
            "S",
            "M",
            "L"
        ],
        description: "Semi-translucent layering piece in soft ice, designed for concealment and diffusion—ideal for fragmented lighting and modular outfitting."
    },
    {
        name: "Null Form",
        price: "165",
        color: "Black",
        tag: "Deform",
        sizes: [
            "S",
            "M",
            "L",
            "XL"
        ],
        description: "An all-black uniform shell stripped of markings, with dimensional construction lines and an identity-less profile made for clean resets."
    },
    {
        name: "Infra Veil",
        price: "170",
        color: "White",
        tag: "Sheerform",
        sizes: [
            "XS",
            "S",
            "M",
            "L"
        ],
        description: "A radiant white coat with subtle sublayer seams and soft mirrored accents, designed for high-contrast atmospheres and neutral layering."
    },
    {
        name: "Zone Artifact",
        price: "185",
        color: "Stone",
        tag: "Functionary",
        sizes: [
            "S",
            "M",
            "L",
            "XL"
        ],
        description: "Stone-colored soft-armor inspired shell jacket with reactive texture zones, adaptive stitch mapping, and tonal fracture lines."
    },
    {
        name: "Shellcode",
        price: "160",
        color: "Grey",
        tag: "Deform",
        sizes: [
            "S",
            "M",
            "L"
        ],
        description: "Neutral grey long-form with sealed placket, hidden entry points, and binary stitch overlays—built like code, worn like static."
    },
    {
        name: "Second Host",
        price: "150",
        color: "Ice",
        tag: "Sheerform",
        sizes: [
            "S",
            "M",
            "L"
        ],
        description: "Pale ice-toned skinwear form with low-profile cuffs and a neutral inner mesh—softly modular, designed for second-layer performance."
    },
    {
        name: "Noir Signal",
        price: "190",
        color: "Black",
        tag: "Functionary",
        sizes: [
            "M",
            "L",
            "XL"
        ],
        description: "Deep black statement outerwear with curved overlay paneling and signal-suppressed design for quiet visual presence in charged spaces."
    },
    {
        name: "Dust Layer",
        price: "142",
        color: "Stone",
        tag: "Deform",
        sizes: [
            "XS",
            "S",
            "M",
            "L"
        ],
        description: "Low-movement layer in muted stone, cut with angular drop sleeves and a dust-soft finish that breaks light across the body."
    },
    {
        name: "Greycode",
        price: "158",
        color: "Grey",
        tag: "Sheerform",
        sizes: [
            "S",
            "M",
            "L",
            "XL"
        ],
        description: "A soft technical shell in neutral grey with encoded vent seams and microstructured collar—functionality compressed into silence."
    },
    {
        name: "Unbody",
        price: "170",
        color: "Black",
        tag: "Functionary",
        sizes: [
            "S",
            "M",
            "L"
        ],
        description: "A blackout top-layer with sculpted tension zones and minimal profile, designed to disappear under low contrast and diffuse edge."
    },
    {
        name: "Pale Shard",
        price: "145",
        color: "White",
        tag: "Deform",
        sizes: [
            "S",
            "M",
            "L",
            "XL"
        ],
        description: "Crisp white topcoat with shard-line darting and a nearly frameless silhouette that refracts form without reflecting structure."
    },
    {
        name: "Static Mist",
        price: "135",
        color: "Grey",
        tag: "Sheerform",
        sizes: [
            "M",
            "L",
            "XL"
        ],
        description: "Grey-toned wind layer with interference-resistant fiber blend, shaped to disrupt silhouettes in motion and dissolve into atmosphere."
    },
    {
        name: "Ghost Line",
        price: "155",
        color: "Ice",
        tag: "Functionary",
        sizes: [
            "S",
            "M",
            "L",
            "XL"
        ],
        description: "Pale minimal field uniform in ice, defined by seamless construction and directional venting for high fluidity across movement zones."
    },
    {
        name: "Phantom Skin",
        price: "165",
        color: "White",
        tag: "Deform",
        sizes: [
            "XS",
            "S",
            "M",
            "L"
        ],
        description: "High-density lightweight outer layer in white, designed with anatomical panel flow and soft-reactive pressure folds across spine line."
    },
    {
        name: "Overcast Proxy",
        price: "150",
        color: "Grey",
        tag: "Sheerform",
        sizes: [
            "S",
            "M",
            "L"
        ],
        description: "Neutral grey proxy fit with curved arms and fog-treated finish—built for ghosted movement across filtered daylight corridors."
    },
    {
        name: "Neutral Drift",
        price: "165",
        color: "Black",
        tag: "Functionary",
        sizes: [
            "S",
            "M",
            "L",
            "XL"
        ],
        description: "Minimal black utility form with adaptive paneling and neutral drift construction—designed for seamless integration across environments."
    }
];
}),
"[project]/src/store/cartStore.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCartCount",
    ()=>useCartCount,
    "useCartStore",
    ()=>useCartStore,
    "useCartSubtotal",
    ()=>useCartSubtotal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
;
const useCartStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])((set, get)=>({
        cartItems: [],
        addToCart: (product)=>{
            set((state)=>{
                const existingItem = state.cartItems.find((item)=>item.name === product.name);
                if (existingItem) {
                    const updatedItems = state.cartItems.map((item)=>{
                        if (item.name === product.name) {
                            const currentQuantity = Number(item.quantity) || 1;
                            const newQuantity = currentQuantity + 1;
                            return {
                                ...item,
                                quantity: newQuantity
                            };
                        }
                        return item;
                    });
                    return {
                        cartItems: updatedItems
                    };
                }
                const newItem = {
                    ...product,
                    quantity: 1
                };
                return {
                    cartItems: [
                        ...state.cartItems,
                        newItem
                    ]
                };
            });
        },
        removeFromCart: (productName)=>{
            set((state)=>({
                    cartItems: state.cartItems.filter((item)=>item.name !== productName)
                }));
        }
    }));
const useCartCount = ()=>useCartStore((state)=>state.cartItems.reduce((total, item)=>total + (item.quantity || 1), 0));
const useCartSubtotal = ()=>useCartStore((state)=>state.cartItems.reduce((total, item)=>total + parseFloat(item.price) * (item.quantity || 1), 0));
}),
"[project]/src/components/ShoppingCart/ShoppingCart.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$wardrobe$2f$products$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/wardrobe/products.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$cartStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/cartStore.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const ShoppingCart = ()=>{
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const cartItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$cartStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCartStore"])((state)=>state.cartItems);
    const removeFromCart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$cartStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCartStore"])((state)=>state.removeFromCart);
    const cartCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$cartStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCartCount"])();
    const subtotal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$cartStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCartSubtotal"])();
    const toggleCart = ()=>{
        setIsOpen(!isOpen);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return ()=>{
            document.body.style.overflow = "";
        };
    }, [
        isOpen
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "shopping-cart-container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "cart-button",
                onClick: toggleCart,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "cart-icon",
                        children: "BAG"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ShoppingCart/ShoppingCart.jsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    cartCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "cart-count",
                        children: cartCount
                    }, void 0, false, {
                        fileName: "[project]/src/components/ShoppingCart/ShoppingCart.jsx",
                        lineNumber: 34,
                        columnNumber: 27
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ShoppingCart/ShoppingCart.jsx",
                lineNumber: 32,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `cart-sidebar ${isOpen ? "open" : ""}`,
                onWheel: (e)=>{
                    const target = e.currentTarget;
                    const cartItems = target.querySelector(".cart-items");
                    if (cartItems) {
                        const { scrollTop, scrollHeight, clientHeight } = cartItems;
                        const isAtTop = scrollTop === 0;
                        const isAtBottom = scrollTop + clientHeight >= scrollHeight - 1;
                        if (isAtTop && e.deltaY < 0 || isAtBottom && e.deltaY > 0) {
                            e.stopPropagation();
                        }
                    }
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "cart-sidebar-content",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "cart-header",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    children: "Bag"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ShoppingCart/ShoppingCart.jsx",
                                    lineNumber: 55,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "cart-close",
                                    onClick: toggleCart,
                                    children: "Close"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ShoppingCart/ShoppingCart.jsx",
                                    lineNumber: 56,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ShoppingCart/ShoppingCart.jsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "cart-items",
                            onWheel: (e)=>{
                                e.stopPropagation();
                            },
                            onTouchMove: (e)=>{
                                e.stopPropagation();
                            },
                            children: cartItems.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "cart-empty",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "Your bag is empty"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ShoppingCart/ShoppingCart.jsx",
                                    lineNumber: 71,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/ShoppingCart/ShoppingCart.jsx",
                                lineNumber: 70,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)) : cartItems.map((item, index)=>{
                                const productIndex = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$wardrobe$2f$products$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["products"].findIndex((p)=>p.name === item.name) + 1;
                                const quantity = Number(item.quantity) || 1;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "cart-item",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "cart-item-image",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: `/products/product_${productIndex}.png`,
                                                alt: item.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ShoppingCart/ShoppingCart.jsx",
                                                lineNumber: 81,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ShoppingCart/ShoppingCart.jsx",
                                            lineNumber: 80,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "cart-item-details",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "cart-item-name-row",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "cart-item-name",
                                                            children: item.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ShoppingCart/ShoppingCart.jsx",
                                                            lineNumber: 88,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        quantity > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "cart-item-quantity",
                                                            children: quantity
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ShoppingCart/ShoppingCart.jsx",
                                                            lineNumber: 90,
                                                            columnNumber: 27
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/ShoppingCart/ShoppingCart.jsx",
                                                    lineNumber: 87,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "cart-item-price",
                                                    children: [
                                                        "$",
                                                        item.price
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/ShoppingCart/ShoppingCart.jsx",
                                                    lineNumber: 93,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "cart-item-remove",
                                                    onClick: ()=>removeFromCart(item.name),
                                                    children: "Remove"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ShoppingCart/ShoppingCart.jsx",
                                                    lineNumber: 94,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ShoppingCart/ShoppingCart.jsx",
                                            lineNumber: 86,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, `${item.name}-${index}`, true, {
                                    fileName: "[project]/src/components/ShoppingCart/ShoppingCart.jsx",
                                    lineNumber: 79,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0));
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/components/ShoppingCart/ShoppingCart.jsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        cartItems.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "cart-footer",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "cart-summary-row",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Total"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ShoppingCart/ShoppingCart.jsx",
                                            lineNumber: 109,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                "$",
                                                subtotal.toFixed(2)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ShoppingCart/ShoppingCart.jsx",
                                            lineNumber: 110,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ShoppingCart/ShoppingCart.jsx",
                                    lineNumber: 108,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "cart-checkout",
                                    children: "Checkout"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ShoppingCart/ShoppingCart.jsx",
                                    lineNumber: 112,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ShoppingCart/ShoppingCart.jsx",
                            lineNumber: 107,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ShoppingCart/ShoppingCart.jsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/ShoppingCart/ShoppingCart.jsx",
                lineNumber: 37,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ShoppingCart/ShoppingCart.jsx",
        lineNumber: 31,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = ShoppingCart;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[project]/src/providers/TransitionProvider.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TransitionProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$transition$2d$router$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-transition-router/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
"use client";
;
;
;
;
const BLOCK_COUNT = 10;
function TransitionProvider({ children }) {
    const transitionGridRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const blocksRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const createTransitionGrid = ()=>{
        if (!transitionGridRef.current) return;
        const container = transitionGridRef.current;
        container.innerHTML = "";
        blocksRef.current = [];
        const blockWidth = window.innerWidth / BLOCK_COUNT;
        for(let i = 0; i < BLOCK_COUNT; i++){
            const block = document.createElement("div");
            block.className = "transition-block";
            block.style.cssText = `
        width: ${blockWidth + 5}px;
        height: 100%;
        left: ${i * blockWidth}px;
        margin-left: -2.5px;
      `;
            container.appendChild(block);
            blocksRef.current.push(block);
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(blocksRef.current, {
            scaleX: 0
        });
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        createTransitionGrid();
        window.addEventListener("resize", createTransitionGrid);
        return ()=>window.removeEventListener("resize", createTransitionGrid);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$transition$2d$router$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TransitionRouter"], {
        auto: true,
        leave: (next)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(blocksRef.current, {
                scaleX: 0,
                transformOrigin: "left"
            });
            const tween = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(blocksRef.current, {
                scaleX: 1,
                duration: 0.5,
                ease: "power3.out",
                stagger: {
                    amount: 0.3,
                    from: "start"
                },
                onComplete: next
            });
            return ()=>tween.kill();
        },
        enter: (next)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(blocksRef.current, {
                scaleX: 1,
                transformOrigin: "right"
            });
            const tween = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(blocksRef.current, {
                scaleX: 0,
                duration: 0.5,
                delay: 0.5,
                ease: "power3.out",
                stagger: {
                    amount: 0.3,
                    from: "start"
                },
                onComplete: next
            });
            return ()=>tween.kill();
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: transitionGridRef,
                className: "transition-grid"
            }, void 0, false, {
                fileName: "[project]/src/providers/TransitionProvider.jsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/src/providers/TransitionProvider.jsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__27f3f428._.js.map