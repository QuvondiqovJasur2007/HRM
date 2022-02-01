(() => {
    "use strict";
    var e, t;

    function n(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function r(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? n(Object(r), !0).forEach((function(t) {
                i(e, t, r[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : n(Object(r)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
            }))
        }
        return e
    }

    function i(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var o = "address-simple",
        a = "address-exact",
        s = "address",
        c = "element",
        l = "not-element",
        u = "element-text",
        d = "element-attr",
        f = "all-types",
        p = "desktop",
        g = "mobile",
        h = "tablet",
        v = "target-device",
        m = "audience-language",
        b = "device-ls-data",
        y = "device-tour-finished",
        w = "not-started",
        k = [{
            value: f,
            label: "All types"
        }, {
            value: p,
            label: "Desktop"
        }, {
            value: g,
            label: "Mobile"
        }, {
            value: h,
            label: "Tablet"
        }],
        S = "audience-browser",
        T = "all-browsers",
        E = "chrome",
        x = "firefox",
        O = "edge",
        C = "safari",
        L = "opera",
        I = "blink",
        P = [{
            value: T,
            label: "Any browser"
        }, {
            value: E,
            label: "Google Chrome"
        }, {
            value: x,
            label: "Firefox"
        }, {
            value: "ie",
            label: "Internet Explorer"
        }, {
            value: O,
            label: "Microsoft Edge"
        }, {
            value: C,
            label: "Safari"
        }, {
            value: L,
            label: "Opera"
        }, {
            value: I,
            label: "Blink"
        }],
        A = "audience-os",
        j = "all-systems",
        D = "windows",
        N = "macos",
        M = "android",
        B = "linux",
        R = [{
            value: j,
            label: "Any operating system"
        }, {
            value: D,
            label: "Windows"
        }, {
            value: N,
            label: "macOS"
        }, {
            value: "ios",
            label: "iOS"
        }, {
            value: M,
            label: "Android"
        }, {
            value: B,
            label: "Linux"
        }],
        F = "page-conditions",
        q = "audience-conditions",
        H = "device-conditions",
        U = {
            element: "Element selector"
        },
        _ = (i(e = {}, F, {
            label: "Page conditions"
        }), i(e, q, {
            label: "Audience conditions"
        }), i(e, H, {
            label: "Device conditions"
        }), i(t = {}, a, {
            label: "URL equals",
            data: {
                url: "URL address"
            },
            category: F
        }), i(t, o, {
            label: "URL contains",
            data: {
                url: "URL address"
            },
            category: F
        }), i(t, s, {
            label: "URL regular expression",
            helpUrl: "https://usetiful.freshdesk.com/support/solutions/articles/77000488288-how-to-target-using-regular-expression-",
            data: {
                url: "Regular expression"
            },
            category: F
        }), i(t, c, {
            label: "Element exists",
            data: r({}, U),
            category: F
        }), i(t, l, {
            label: "Element doesn't exist",
            data: r({}, U),
            category: F
        }), i(t, u, {
            label: "Element text contains",
            data: r(r({}, U), {}, {
                text: "Text content"
            }),
            category: F
        }), i(t, d, {
            label: "Element attribute contains",
            data: r(r({}, U), {}, {
                attr: "Attribute name",
                text: "Text content"
            }),
            category: F
        }), i(t, v, {
            label: "Device type is",
            data: {
                device: {
                    label: "Select type",
                    items: [{
                        value: "",
                        label: "Select device..."
                    }].concat(k)
                }
            },
            category: H
        }), i(t, "tag", {
            label: "Tag is",
            hint: "Tags are custom paremeters, which you can add to the usetiful script. They can help you e.g. with user segmentation. Click for details.",
            helpUrl: "https://usetiful.freshdesk.com/support/solutions/articles/77000487860-introduce-new-user-segment",
            data: {
                name: "Tag name",
                text: "Tag content"
            },
            category: q
        }), i(t, m, {
            label: "Language is",
            data: {
                text: "Language code (e.g. en, en-US)"
            },
            category: q
        }), i(t, S, {
            label: "Browser is",
            data: {
                browser: {
                    label: "Select browser",
                    items: [{
                        value: "",
                        label: "Select browser..."
                    }].concat(P)
                }
            },
            category: q
        }), i(t, A, {
            label: "Operating system is",
            data: {
                os: {
                    label: "Select system name",
                    items: [{
                        value: "",
                        label: "Select operating system..."
                    }].concat(R)
                }
            },
            category: H
        }), i(t, b, {
            label: "Local Storage value is",
            data: {
                name: "Key",
                text: "Value"
            },
            category: H
        }), i(t, y, {
            label: "Tour state is",
            data: {
                tours: {
                    name: "Select tour",
                    items: [{
                        value: "",
                        label: "Select tour.."
                    }]
                },
                state: {
                    name: "Choose state",
                    items: [{
                        value: "",
                        label: "Select state..."
                    }, {
                        value: "closed",
                        label: "Closed"
                    }, {
                        value: w,
                        label: "Not started"
                    }]
                }
            },
            category: H
        }), function() {
            var e, t, n, r = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                i = !1;
            return e = navigator.userAgent || navigator.vendor || window.opera, t = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/i.test(e), n = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4)), (r ? t : n) && (i = !0), i
        }),
        W = _(),
        V = _(!0),
        z = !V && !W,
        J = function(e) {
            var t = !0;
            try {
                document.createDocumentFragment().querySelector(e)
            } catch (e) {
                t = !1
            }
            return t
        },
        K = navigator.userAgent.indexOf("Opera") > -1,
        X = navigator.userAgent.indexOf("Firefox") > -1,
        $ = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
        G = !!document.documentMode,
        Y = !G && !!window.StyleMedia,
        Q = !K && /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor),
        Z = (Q || K) && !!window.CSS,
        ee = function() {
            return ee = Object.assign || function(e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e
            }, ee.apply(this, arguments)
        },
        te = "tours",
        ne = function() {
            var e = [],
                t = window.localStorage.getItem(te);
            return t && (e = JSON.parse(t)), e
        },
        re = function(e, t) {
            var n;
            return e.name === t || (null === (n = null == e ? void 0 : e.id) || void 0 === n ? void 0 : n.toString()) === t || (null == e ? void 0 : e.id) === t
        },
        ie = function(e) {
            var t = ne(),
                n = null;
            return t && t.length && (n = t.find((function(t) {
                return re(t, e)
            })) || null), n
        },
        oe = function(e, t, n) {
            void 0 === n && (n = null);
            var r = ie(e);
            return r && r[t] ? r[t] : n
        },
        ae = ["Win32", "Win64", "Windows", "WinCE"].indexOf(window.navigator.platform) > -1,
        se = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"].indexOf(window.navigator.platform) > -1,
        ce = ["iPhone", "iPad", "iPod"].indexOf(window.navigator.platform) > -1,
        le = /Android/.test(window.navigator.userAgent),
        ue = /Linux/.test(window.navigator.platform);

    function de(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    const fe = new function e() {
        var t = this;
        ! function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, e), de(this, "location", void 0), de(this, "checkURL", (function(e) {
            try {
                return new RegExp(e, "i").test(t.location)
            } catch (t) {
                return console.warn("Entered regular expression'".concat(e, "' isn't valid.")), !1
            }
        })), de(this, "checkURLSimple", (function(e) {
            return t.location.indexOf(e) > -1
        })), de(this, "checkURLExact", (function(e) {
            return t.location === e
        })), de(this, "checkTag", (function(e, t) {
            var n;
            return (null === (n = window.usetifulTags) || void 0 === n ? void 0 : n[e]) === t
        })), de(this, "refreshURL", (function() {
            t.location = window.location.href
        })), de(this, "checkElement", (function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            if (J(e)) {
                var n = document.querySelector(e);
                if (n) return !t || new RegExp(t).test(n.textContent.trim())
            }
            return !1
        })), de(this, "checkAttribute", (function(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            if (J(e)) {
                var r = document.querySelector(e);
                if (r) {
                    var i = r.getAttribute(t);
                    return !(!i || !n) && new RegExp(n).test(i.trim())
                }
            }
            return !1
        })), de(this, "checkTriggerURL", (function(e) {
            return !!e && (!e.url || e.url && t.checkURL(e.url))
        })), de(this, "checkDevice", (function(e) {
            var t = !1;
            switch (e) {
                case f:
                    t = !0;
                    break;
                case p:
                    t = z;
                    break;
                case g:
                    t = W;
                    break;
                case h:
                    t = V
            }
            return t
        })), de(this, "checkBrowser", (function(e) {
            var t = !1;
            switch (e) {
                case T:
                    t = !0;
                    break;
                case E:
                    t = Q;
                    break;
                case x:
                    t = X;
                    break;
                case C:
                    t = $;
                    break;
                case L:
                    t = K;
                    break;
                case "ie":
                    t = G;
                    break;
                case O:
                    t = Y;
                    break;
                case I:
                    t = Z
            }
            return t
        })), de(this, "checkOS", (function(e) {
            var t = !1;
            switch (e) {
                case j:
                    t = !0;
                    break;
                case D:
                    t = ae;
                    break;
                case N:
                    t = se;
                    break;
                case "ios":
                    t = ce;
                    break;
                case M:
                    t = le;
                    break;
                case B:
                    t = ue
            }
            return t
        })), de(this, "checkTargetEntity", (function(e, t, n) {
            var r = !1;
            return !!e[t] || (Object.keys(e).forEach((function(t) {
                e[t] && n(t) && (r = !0)
            })), r)
        })), de(this, "checkBrowserLanguage", (function(e) {
            return window.navigator && window.navigator.language.indexOf(e) > -1
        })), de(this, "checkLS", (function(e, t) {
            return localStorage.getItem(e) === t
        })), de(this, "checkTourState", (function(e, t) {
            var n = ie(e);
            return n && n.state ? n.state === t : t === w
        })), de(this, "evaluate", (function(e, t, n) {
            return e ? t && n : t || n
        })), de(this, "checkByTargets", (function(e, n) {
            var r = !1,
                i = !n || 0 === n,
                p = !1,
                g = !1,
                h = !1,
                w = {},
                k = {},
                E = {};
            return !e || 0 === e.length || (Array.isArray(e) && (i && (r = !0), e.forEach((function(e) {
                switch (e.type) {
                    case a:
                        r = t.evaluate(i, r, t.checkURLExact(e.url));
                        break;
                    case o:
                        r = t.evaluate(i, r, t.checkURLSimple(e.url));
                        break;
                    case s:
                        r = t.evaluate(i, r, t.checkURL(e.url));
                        break;
                    case "tag":
                        r = t.evaluate(i, r, t.checkTag(e.name, e.text));
                        break;
                    case c:
                        r = t.evaluate(i, r, t.checkElement(e.element));
                        break;
                    case l:
                        r = t.evaluate(i, r, !t.checkElement(e.element));
                        break;
                    case u:
                        r = t.evaluate(i, r, t.checkElement(e.element, e.text));
                        break;
                    case d:
                        r = t.evaluate(i, r, t.checkAttribute(e.element, e.attr, e.text));
                        break;
                    case v:
                        e.device.length > 0 && (p = !0, w[e.device] = !0);
                        break;
                    case S:
                        e.browser.length > 0 && (g = !0, k[e.browser] = !0);
                        break;
                    case A:
                        e.os.length > 0 && (h = !0, E[e.os] = !0);
                        break;
                    case m:
                        r = t.evaluate(i, r, t.checkBrowserLanguage(e.text));
                        break;
                    case b:
                        r = t.evaluate(i, r, t.checkLS(e.name, e.text));
                        break;
                    case y:
                        r = t.evaluate(i, r, t.checkTourState(e.tours, e.state))
                }
            })), p && (r = t.evaluate(i, r, t.checkTargetEntity(w, f, t.checkDevice))), g && (r = t.evaluate(i, r, t.checkTargetEntity(k, T, t.checkBrowser))), h && (r = t.evaluate(i, r, t.checkTargetEntity(E, j, t.checkOS)))), r)
        })), de(this, "checkTargetWithWaiting", (function(e, n) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 60;
            return new Promise((function(i, o) {
                var a = 0,
                    s = setInterval((function() {
                        a += 1, t.checkByTargets(e, n) && (i(), clearInterval(s)), a >= r && (clearInterval(s), o())
                    }), 500)
            }))
        })), this.location = window.location.href
    };
    var pe, ge = function(e) {
            return {
                prefix: e,
                bubble: "".concat(e, "-bubble"),
                bubbleContent: "".concat(e, "-bubble-content"),
                bubbleContentWithoutTitle: "".concat(e, "-bubble-content--without-title"),
                beacon: "".concat(e, "-beacon"),
                beaconAround: "".concat(e, "-beacon__around"),
                bubbleInvisible: "".concat(e, "-bubble--invisible"),
                modal: "".concat(e, "-modal"),
                modalInner: "".concat(e, "-modal-inner"),
                dotProgressBPadding: "".concat(e, "-dot-progress--bpadding"),
                circleProgressBPadding: "".concat(e, "-circle-progress--bpadding"),
                title: "".concat(e, "-title"),
                titleWithoutProgress: "".concat(e, "-title--without-progress"),
                slideout: "".concat(e, "-slideout"),
                slideoutInner: "".concat(e, "-slideout-inner"),
                actions: "".concat(e, "-actions"),
                redirect: "".concat(e, "-redirect"),
                delay: "".concat(e, "-delay"),
                redirectInner: "".concat(e, "-redirect-inner"),
                buttonMain: "".concat(e, "-button-main"),
                buttonMainTourSelection: "".concat(e, "-button-selection"),
                buttonMainLeft: "".concat(e, "-button-main--left"),
                tourSelection: "".concat(e, "-tour-selection"),
                button: "".concat(e, "-button"),
                buttonBlock: "".concat(e, "-btn-block"),
                buttonPrimary: "".concat(e, "-button-primary"),
                buttonClose: "".concat(e, "-close-button"),
                badge: "".concat(e, "-badge"),
                badgeFree: "".concat(e, "-free-badge"),
                spaceMaker: "".concat(e, "-space-maker"),
                spaceMakerPlus: "".concat(e, "-space-maker--plus"),
                spaceMakerDouble: "".concat(e, "-space-maker--double"),
                done: "".concat(e, "-done"),
                content: "".concat(e, "-content"),
                contentWithoutTitle: "".concat(e, "-content--without-title"),
                feedback: "".concat(e, "-feedback"),
                overlay: "".concat(e, "-overlay"),
                inProgress: "".concat(e, "-inprogress"),
                progress: "".concat(e, "-progress"),
                dotProgress: "".concat(e, "-dot-progress"),
                dotProgressRight: "".concat(e, "-dot-progress--right"),
                dotProgressCenter: "".concat(e, "-dot-progress--center"),
                dotProgressLeft: "".concat(e, "-dot-progress--left"),
                dotProgressFree: "".concat(e, "-dot-progress--free"),
                dotProgressItem: "".concat(e, "-dot-progress__item"),
                dotProgressActiveItem: "".concat(e, "-dot-progress__item--active"),
                circleProgress: "".concat(e, "-circle-progress"),
                circleProgressRight: "".concat(e, "-circle-progress--right"),
                circleProgressLeft: "".concat(e, "-circle-progress--left"),
                circleProgressCenter: "".concat(e, "-circle-progress--center"),
                circleProgressFree: "".concat(e, "-circle-progress--free"),
                circleProgressInner: "".concat(e, "-circle-progress__inner"),
                circleProgressBar: "".concat(e, "-circle-progress__bar"),
                circleProgressBarLeft: "".concat(e, "-circle-progress__bar--left"),
                circleProgressBarRight: "".concat(e, "-circle-progress__bar--right"),
                circleProgressProgress: "".concat(e, "-circle-progress__progress"),
                numberProgress: "".concat(e, "-number-progress"),
                numberProgressRight: "".concat(e, "-number-progress--right"),
                numberProgressLeft: "".concat(e, "-number-progress--left"),
                numberProgressCenter: "".concat(e, "-number-progress--center"),
                numberProgressFree: "".concat(e, "-number-progress--free"),
                numberProgressDivider: "".concat(e, "-number-progress__divider"),
                progressTop: "".concat(e, "-progress--top"),
                progressBottom: "".concat(e, "-progress--bottom"),
                progressbar: "".concat(e, "-progress-bar"),
                notification: "".concat(e, "-notification"),
                notificationInner: "".concat(e, "-notification-inner"),
                top: "".concat(e, "-top"),
                left: "".concat(e, "-left"),
                right: "".concat(e, "-right"),
                bottom: "".concat(e, "-bottom"),
                fixed: "".concat(e, "-fixed"),
                visible: "".concat(e, "-visible"),
                static: "".concat(e, "-static"),
                alert: "".concat(e, "-alert"),
                preview: "".concat(e, "-preview"),
                pointer: "pointer",
                bottomAction: "".concat(e, "-bottom-action"),
                svgIcon: "svg-icon"
            }
        },
        he = ge("uf"),
        ve = (ge("ufp"), "nextStepTrigger"),
        me = "inProgress",
        be = "closed",
        ye = "pointer",
        we = "modal",
        ke = "slideout",
        Se = "redirect",
        Te = "delay",
        Ee = !1,
        xe = document.querySelector("#".concat("usetifulScript")),
        Oe = xe ? xe.getAttribute("src").replace(/(\/\/.*?\/).*/g, "$1") : "",
        Ce = xe ? xe.getAttribute("data-token") : "",
        Le = xe && parseInt(xe.getAttribute("data-debug"), 10) || 0,
        Ie = null !== window.localStorage.getItem("pauseProductionTour"),
        Pe = xe && parseInt(xe.getAttribute("data-preview-tour-id"), 10) || 0,
        Ae = Pe > 0;
    Ce && (pe = "/user/data.json"), Le && -2 !== Pe && (pe += "?withDrafts=".concat(Le)), Le && Ae && (pe += "&previewTourId=".concat(Pe));
    var je = function(e, t) {
            void 0 === t && (t = !1), Le && (t ? console.info("%c Usetiful: ".concat(e), "background: #387DFF; color: #edf3ff") : console.info("Usetiful: ".concat(e)))
        },
        De = function(e) {
            Le && console.warn("Usetiful: ".concat(e))
        },
        Ne = function(e) {
            Le && console.log(e)
        },
        Me = "showSmartTip",
        Be = "showStep",
        Re = "redirect",
        Fe = "delay",
        qe = "pageLeft",
        He = "closeTour",
        Ue = Object.freeze({
            horizontalProgressBar: {
                title: "Horizontal Progress Bar",
                key: 1
            },
            dots: {
                title: "Dots",
                key: 2
            },
            stepNumber: {
                title: "Step Number",
                key: 3
            },
            circleProgressBar: {
                title: "Circle Progress Bar",
                key: 4
            }
        }),
        _e = function(e, t, n) {
            if (n || 2 === arguments.length)
                for (var r, i = 0, o = t.length; i < o; i++) !r && i in t || (r || (r = Array.prototype.slice.call(t, 0, i)), r[i] = t[i]);
            return e.concat(r || Array.prototype.slice.call(t))
        };

    function We(e) {
        var t = window.usetifulTags,
            n = Object.keys(t || {});
        return null == n || n.forEach((function(n) {
            e = null == e ? void 0 : e.replace("{".concat(n, "}"), t[n])
        })), e
    }
    var Ve = function(e) {
            var t = document.createElement("div");
            return t.classList.add(e), t
        },
        ze = function(e, t) {
            void 0 === t && (t = "");
            var n = document.createElement("button");
            return n.type = "button", n.innerHTML = e, "" !== t && n.classList.add(t), n
        },
        Je = function(e, t, n) {
            void 0 === t && (t = he.button), void 0 === n && (n = "#");
            var r = document.createElement("a");
            return r.setAttribute("href", n), r.innerHTML = e, "" !== t && r.classList.add(t), r
        },
        Ke = function(e, t, n, r) {
            if (void 0 === n && (n = !0), void 0 === r && (r = he.title), !1 !== n) {
                var i = document.createElement("h".concat(e));
                return i.innerHTML = We(t), "" !== r && i.classList.add(r), i
            }
        },
        Xe = function(e, t, n, r, i, o, a, s, c, l, u) {
            void 0 === r && (r = null), void 0 === i && (i = null), void 0 === o && (o = ""), void 0 === a && (a = 0), void 0 === s && (s = 0), void 0 === c && (c = null), void 0 === l && (l = null);
            var d = document.querySelector(".".concat(he.prefix, "-").concat(e)),
                f = document.body;
            if (d instanceof HTMLElement) return d;
            if (f instanceof HTMLBodyElement) {
                var p = document.createElement("div"),
                    g = f.appendChild(p);
                g.classList.add(he.bubble, "".concat(he.prefix, "-").concat(e));
                var h = document.createElement("div");
                h.classList.add(he.pointer), h.setAttribute("data-popper-arrow", ""), g.appendChild(h), c instanceof HTMLButtonElement && g.appendChild(c), r instanceof HTMLElement && g.appendChild(r), i instanceof HTMLElement && g.appendChild(i);
                var v = Ve(he.bubbleContent);
                return null === r && v.classList.add(he.bubbleContentWithoutTitle), v.innerHTML = We(n), g.appendChild(v), l && l(g), g.appendChild(Ge(o, a, s)), t && g.appendChild($e()), u && v.classList.add(he.bubbleInvisible), g
            }
        },
        $e = function() {
            var e = Ve(he.badgeFree);
            return e.appendChild(Je("Powered by Usetiful", "", "".concat(Oe, "?utm_source=tour_badge"))), e
        },
        Ge = function(e, t, n) {
            var r = Ve(he.spaceMaker);
            return t && "center" !== e || n !== Ue.dots.key ? t || n !== Ue.stepNumber.key && n !== Ue.circleProgressBar.key || r.classList.add(he.spaceMakerDouble) : r.classList.add(he.spaceMakerPlus), r
        },
        Ye = function(e, t, n, r) {
            var i = e.title,
                o = e.publicTitle,
                a = e.position,
                s = e.type,
                c = e.alignment,
                l = e.actions,
                u = "" !== i && !0 === o,
                d = t.progressType,
                f = Qe(t.steps, n),
                p = f.activeStepIndex / (f.stepsLength / 100);
            switch (d) {
                case Ue.dots.key:
                    return function(e, t, n, r, i) {
                        var o = Ve(he.dotProgress);
                        return r && "center" !== e ? "left" === e && r ? o.classList.add(he.dotProgressRight) : "right" === e && r && o.classList.add(he.dotProgressLeft) : o.classList.add(he.dotProgressCenter), i && o.classList.add(he.dotProgressFree), _e([], Array(t), !0).forEach((function(e, t) {
                            var r = document.createElement("span");
                            r.classList.add(he.dotProgressItem), t === n - 1 && r.classList.add(he.dotProgressActiveItem), o.appendChild(r)
                        })), o
                    }(c, f.stepsLength, f.activeStepIndex, l.length, r);
                case Ue.stepNumber.key:
                    return function(e, t, n, r, i) {
                        var o = Ve(he.numberProgress);
                        r ? "right" === n && r && o.classList.add(he.numberProgressLeft) : o.classList.add(he.numberProgressCenter), i && o.classList.add(he.numberProgressFree), o.innerHTML = e.toString();
                        var a = document.createElement("span");
                        return a.innerHTML = "/", o.appendChild(a), o.innerHTML += t.toString(), o
                    }(f.activeStepIndex, f.stepsLength, c, l.length, r);
                case Ue.circleProgressBar.key:
                    return function(e, t, n, r) {
                        var i = 180 * e / 100 * 2,
                            o = 0;
                        e > 50 && (o = i - 180, i = 180);
                        var a = Ve(he.circleProgress);
                        n ? "right" === t && n && a.classList.add(he.circleProgressLeft) : a.classList.add(he.circleProgressCenter), r && a.classList.add(he.circleProgressFree);
                        var s = Ve(he.circleProgressInner),
                            c = document.createElement("div"),
                            l = Ve(he.circleProgressBar);
                        l.classList.add(he.circleProgressBarLeft);
                        var u = Ve(he.circleProgressProgress);
                        u.style.transform = "rotate(".concat(i, "deg)"), l.appendChild(u);
                        var d = Ve(he.circleProgressBar);
                        d.classList.add(he.circleProgressBarRight);
                        var f = Ve(he.circleProgressProgress);
                        return f.style.transform = "rotate(".concat(o, "deg)"), d.appendChild(f), c.appendChild(l), c.appendChild(d), a.appendChild(s), a.appendChild(c), a
                    }(p, c, l.length, r);
                default:
                    var g = "";
                    return u || s === ye ? u || (g = a && "bottom" === a ? "bottom" : "top") : g = "top",
                        function(e, t) {
                            var n = Ve(he.progress),
                                r = Ve(he.progressbar);
                            return 0 === e && n.classList.add("hidden"), "top" === t ? n.classList.add(he.progressTop) : "bottom" === t && n.classList.add(he.progressBottom), r.style.width = "".concat(e, "%"), n.appendChild(r), n
                        }(p, g)
            }
        },
        Qe = function(e, t) {
            var n = {
                stepsLength: 0,
                activeStepIndex: 0
            };
            return e.forEach((function(e, r) {
                e.type !== Se && e.type !== Te && (n.stepsLength += 1, r <= t && (n.activeStepIndex += 1))
            })), n
        };

    function Ze(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null == n) return;
            var r, i, o = [],
                a = !0,
                s = !1;
            try {
                for (n = n.call(e); !(a = (r = n.next()).done) && (o.push(r.value), !t || o.length !== t); a = !0);
            } catch (e) {
                s = !0, i = e
            } finally {
                try {
                    a || null == n.return || n.return()
                } finally {
                    if (s) throw i
                }
            }
            return o
        }(e, t) || et(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function et(e, t) {
        if (e) {
            if ("string" == typeof e) return tt(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? tt(e, t) : void 0
        }
    }

    function tt(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function nt(e) {
        return nt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, nt(e)
    }
    var rt = '<svg xmlns="http://www.w3.org/2000/svg"><path stroke="#000" stroke-width="2" d="M1 16L16 1M1 1l15 15"/></svg>',
        it = function(e, t) {
            var n = t.getTour();
            ! function(e, t) {
                var n = ne();
                null === ie(e) && n.push(ee({
                    name: e
                }, t)), n = n.map((function(n) {
                    return re(n, e) ? ee(ee({}, n), t) : n
                })), window.localStorage.setItem(te, JSON.stringify(n))
            }(n.name, {
                state: e,
                id: n.id,
                currentStep: t.getCurrentStepIndex()
            })
        },
        ot = function(e) {
            return oe(e, "currentStep", 0)
        },
        at = function(e) {
            return "closed" === st(e)
        },
        st = function(e) {
            return oe(e, "state")
        },
        ct = function(e, t) {
            if (t.isTour())
                if ("string" == typeof e) {
                    var n = 0;
                    if (t.isSteps()) {
                        var r, i = function(e, t) {
                            var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                            if (!n) {
                                if (Array.isArray(e) || (n = et(e)) || t && e && "number" == typeof e.length) {
                                    n && (e = n);
                                    var r = 0,
                                        i = function() {};
                                    return {
                                        s: i,
                                        n: function() {
                                            return r >= e.length ? {
                                                done: !0
                                            } : {
                                                done: !1,
                                                value: e[r++]
                                            }
                                        },
                                        e: function(e) {
                                            throw e
                                        },
                                        f: i
                                    }
                                }
                                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                            }
                            var o, a = !0,
                                s = !1;
                            return {
                                s: function() {
                                    n = n.call(e)
                                },
                                n: function() {
                                    var e = n.next();
                                    return a = e.done, e
                                },
                                e: function(e) {
                                    s = !0, o = e
                                },
                                f: function() {
                                    try {
                                        a || null == n.return || n.return()
                                    } finally {
                                        if (s) throw o
                                    }
                                }
                            }
                        }(t.getSteps());
                        try {
                            for (i.s(); !(r = i.n()).done;) {
                                if (r.value.name === e) return n;
                                n += 1
                            }
                        } catch (e) {
                            i.e(e)
                        } finally {
                            i.f()
                        }
                    }
                } else if ("number" == typeof e) return e;
            return null
        },
        lt = function(e, t) {
            if (t.isTour()) {
                if ("string" == typeof e) return t.getStep(ct(e, t));
                if ("number" == typeof e) return t.getStep(e)
            }
            return null
        },
        ut = function(e) {
            return !(e && e.offsetWidth || e.offsetHeight || e.getClientRects().length)
        },
        dt = function(e) {
            var t = document.querySelector(e);
            t && (je("called destroyElementBySelector ".concat(e)), pt(t))
        },
        ft = function(e, t, n, r, i) {
            document.querySelector(".".concat(he.notification, ".confirmation")) || gt(e, t, (function() {
                var e = Ve(he.actions);
                e.classList.add("center");
                var t = Je(n);
                t.addEventListener("click", (function(e) {
                    i(), dt(".".concat(he.notification, ".confirmation")), e.preventDefault(), e.stopPropagation()
                }), !1), e.append(t);
                var o = Je(r);
                return o.addEventListener("click", (function(e) {
                    dt(".".concat(he.notification, ".confirmation")), e.preventDefault(), e.stopPropagation()
                }), !1), e.append(o), e
            }), "confirmation")
        },
        pt = function(e) {
            je("called destroyElement"), e instanceof HTMLElement && e.parentNode.removeChild(e)
        },
        gt = function(e, t, n, r, i) {
            var o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "bottom-right",
                a = null,
                s = document.createElement("div");
            s.setAttribute("style", "display: none"), r && s.classList.add(r);
            var c = document.createElement("div");
            e instanceof HTMLElement ? a = e : ((a = document.createElement("h3")).classList.add(he.title), a.innerHTML = e);
            var l = document.createElement("div");
            l.classList.add(he.content), l.innerHTML = t;
            var u = document.createElement("button");
            if (u.type = "button", u.classList.add(he.buttonClose), u.addEventListener("click", (function() {
                    i && i(), pt(s)
                })), u.innerHTML = rt, c.appendChild(u), c.appendChild(a), c.appendChild(l), n) {
                var d = n();
                c.append(d)
            }
            s.appendChild(c), s.classList.add(he.notification), c.classList.add("".concat(he.notificationInner)), "bottom-left" === o ? s.style.left = 0 : s.style.right = 0, s.style.bottom = 0, document.body.appendChild(s), s.classList.contains(he.visible) || s.classList.add(he.visible)
        },
        ht = function(e) {
            return !((!e || e.positionType) && "element" !== (null == e ? void 0 : e.positionType))
        },
        vt = function(e) {
            return "screen" === (null == e ? void 0 : e.positionType)
        },
        mt = function(e, t) {
            t ? window.open(e, "_blank").focus() : window.location.href = e
        },
        bt = function(e) {
            var t = e;
            try {
                return !e || e instanceof Object || (t = JSON.parse(e)), t
            } catch (e) {
                je("Targets field is not JSON.")
            }
            return !1
        };

    function yt(e, t) {
        var n;
        return je("getStyleValue called. Property:".concat(t)), (null == e || null === (n = e.style) || void 0 === n ? void 0 : n[t]) || window.getComputedStyle(e, null).getPropertyValue(t) || ""
    }

    function wt() {
        window.usetiful_tourDelayTimeoutVar && (clearTimeout(window.usetiful_tourDelayTimeoutVar), window.usetiful_tourDelayTimeoutVar = void 0), window.usetiful_tourPointerWaitingForElement && (clearTimeout(window.usetiful_tourPointerWaitingForElement), window.usetiful_tourPointerWaitingForElement = void 0)
    }
    var kt = function() {
            var e, t;
            e = he.visible, (t = document.querySelectorAll(".".concat(he.overlay))) && Array.prototype.forEach.call(t, (function(t) {
                t.classList.remove(e)
            }))
        },
        St = function() {
            var e, t;
            e = he.visible, (t = document.querySelectorAll(".".concat(he.overlay))) && Array.prototype.forEach.call(t, (function(t) {
                t.classList.add(e)
            }))
        };

    function Tt(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var Et = "".concat(Oe, "api/feedback"),
        xt = '\n  <button type="button" data-value="1">'.concat('<svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="emoji1-emoji" stroke="#000" stroke-width="2"><circle id="emoji1-Ellipse 17" cx="16" cy="16" r="14"/><path id="emoji1-Vector 14" d="M8.5 12.5c.5-.833 2.5-2 4.5 0" stroke-linecap="round" stroke-linejoin="round"/><path id="emoji1-Vector 15" d="M19 12.5c.5-.833 2.5-2 4.5 0" stroke-linecap="round" stroke-linejoin="round"/><path id="emoji1-Vector 16" d="M16 25c5.85 0 8.438-4.667 9-7 0 0-5.458 1.273-9 1.273S7 18 7 18c.563 2.333 3.15 7 9 7z" stroke-linejoin="round"/></g></svg>', '</button>\n  <button type="button" data-value="2">').concat('<svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="emoji2-emoji2"><circle id="emoji2-Ellipse 17" cx="16" cy="16" r="14" stroke="#000" stroke-width="2"/><rect id="emoji2-Rectangle 27" x="8" y="19" width="16" height="2" rx="1" fill="#000"/><ellipse id="emoji2-Ellipse 18" cx="11.5" cy="12.5" rx="1.5" ry="2.5" fill="#000"/><ellipse id="emoji2-Ellipse 19" cx="20.5" cy="12.5" rx="1.5" ry="2.5" fill="#000"/></g></svg>', '</button>\n  <button type="button" data-value="3">').concat('<svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="emoji3-emoji3" stroke="#000" stroke-width="2"><circle id="emoji3-Ellipse 17" cx="16" cy="16" r="14"/><path id="emoji3-Vector 16" d="M19.91 13.495c.061-.97 2.649-2.496 3.997-2.067" stroke-linecap="round" stroke-linejoin="round"/><path id="emoji3-Vector 18" d="M12.59 13.495c-.061-.97-2.649-2.496-3.997-2.067" stroke-linecap="round" stroke-linejoin="round"/><path id="emoji3-Vector 17" d="M16 18c-4.55 0-6.563 2.667-7 4 0 0 4.245-.727 7-.727S23 22 23 22c-.438-1.333-2.45-4-7-4z" stroke-linejoin="round"/></g></svg>', "</button>\n"),
        Ot = "js-feedback";
    const Ct = function e(t, n, r) {
        var i = this;
        ! function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, e), Tt(this, "tourId", void 0), Tt(this, "stepName", void 0), Tt(this, "apiToken", void 0), Tt(this, "debug", void 0), Tt(this, "send", (function(e) {
            var t = new Date,
                n = {
                    tourId: i.tourId,
                    stepName: i.stepName,
                    feedback: e,
                    actionAt: t.toString(),
                    debug: i.debug
                };
            return new Promise((function(e) {
                var t = new XMLHttpRequest;
                t.open("POST", Et), t.setRequestHeader("X-Requested-With", "XMLHttpRequest"), t.setRequestHeader("X-AUTH-TOKEN", i.apiToken), t.onload = function() {
                    e(t.response)
                }, t.send(JSON.stringify(n))
            }))
        })), Tt(this, "clickButtonHandle", (function(e) {
            e.preventDefault();
            var t = e.target,
                n = parseInt(t.parentNode.getAttribute("data-value"), 10) || null;
            null !== n && (i.disabledAllEmojies(), i.send(n).then((function() {
                var e = document.querySelector(".".concat(Ot));
                e && (e.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><defs><style>.cls-tick-1{fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px}</style></defs><g id="tick-_tick" data-name="tick"><circle class="cls-tick-1" cx="12" cy="12" r="11"/><path class="cls-tick-1" d="M6 13l3 3 8-8"/></g></svg>')
            })))
        })), Tt(this, "init", (function() {
            var e = document.querySelectorAll(".".concat(he.feedback, " > button"));
            e && e.forEach((function(e) {
                e.addEventListener("click", i.clickButtonHandle)
            }))
        })), Tt(this, "disabledAllEmojies", (function() {
            var e = document.querySelectorAll(".".concat(he.feedback, " > button"));
            e && e.forEach((function(e) {
                e instanceof HTMLButtonElement && (e.disabled = !0)
            }))
        })), Tt(this, "getEmojies", (function() {
            var e = Ve(he.feedback);
            return e.classList.add(Ot), e.innerHTML = xt, e
        })), this.tourId = t, this.stepName = n, this.apiToken = r, this.debug = Le
    };

    function Lt(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function It(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    const Pt = function() {
        function e() {
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), It(this, "tour", void 0), It(this, "currentStepIndex", void 0), It(this, "currentDisplayStep", void 0), It(this, "license", void 0), this.tour = null, this.currentDisplayStep = null, this.currentStepIndex = 0, this.license = "trial"
        }
        var t, n, r;
        return t = e, n = [{
            key: "setTour",
            value: function(e) {
                this.tour = e
            }
        }, {
            key: "getTour",
            value: function() {
                return this.tour
            }
        }, {
            key: "isTour",
            value: function() {
                return null !== this.tour
            }
        }, {
            key: "isProgress",
            value: function() {
                return null == this.tour.progress || this.tour.progress
            }
        }, {
            key: "isButton",
            value: function() {
                return null == this.tour.button || this.tour.button
            }
        }, {
            key: "getStep",
            value: function(e) {
                return this.getStepsLength() > 0 && "number" == typeof e && this.tour.steps[e] || null
            }
        }, {
            key: "getSteps",
            value: function() {
                return this.tour.steps || []
            }
        }, {
            key: "getCurrentStep",
            value: function() {
                return this.getStep(this.currentStepIndex)
            }
        }, {
            key: "getCurrentStepIndex",
            value: function() {
                return parseInt(this.currentStepIndex, 10) || 0
            }
        }, {
            key: "setCurrentStepIndex",
            value: function(e) {
                this.currentStepIndex = e
            }
        }, {
            key: "resetCurrentStep",
            value: function() {
                this.currentStepIndex = 0
            }
        }, {
            key: "isFirstStep",
            value: function() {
                return 0 === this.currentStepIndex
            }
        }, {
            key: "isLastStep",
            value: function() {
                return this.currentStepIndex >= this.tour.steps.length - 1
            }
        }, {
            key: "getPreviousStep",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return e && this.currentStepIndex > 0 && (this.currentStepIndex -= 1), this.getStep(e ? this.currentStepIndex : this.currentStepIndex - 1)
            }
        }, {
            key: "getNextStep",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return e && (this.currentStepIndex += 1), this.getStep(e ? this.currentStepIndex : this.currentStepIndex + 1)
            }
        }, {
            key: "hasPreviousStep",
            value: function() {
                return null !== this.getPreviousStep()
            }
        }, {
            key: "hasNextStep",
            value: function() {
                return this.currentStepIndex + 1 < this.getStepsLength()
            }
        }, {
            key: "getStepsLength",
            value: function() {
                return this.tour.steps.length || 0
            }
        }, {
            key: "isSteps",
            value: function() {
                return this.tour.steps && this.getStepsLength() > 0
            }
        }, {
            key: "setCurrentStepShow",
            value: function() {
                this.currentDisplayStep = this.currentStepIndex
            }
        }, {
            key: "setStepHide",
            value: function() {
                this.currentDisplayStep = null
            }
        }, {
            key: "isStepShow",
            value: function(e) {
                return this.currentDisplayStep === e && null !== this.currentDisplayStep
            }
        }, {
            key: "setLicense",
            value: function(e) {
                this.license = e
            }
        }, {
            key: "getLicense",
            value: function() {
                return this.license
            }
        }, {
            key: "isFree",
            value: function() {
                return "free" === this.license
            }
        }], n && Lt(t.prototype, n), r && Lt(t, r), e
    }();

    function At(e) {
        if (null == e) return window;
        if ("[object Window]" !== e.toString()) {
            var t = e.ownerDocument;
            return t && t.defaultView || window
        }
        return e
    }

    function jt(e) {
        return e instanceof At(e).Element || e instanceof Element
    }

    function Dt(e) {
        return e instanceof At(e).HTMLElement || e instanceof HTMLElement
    }

    function Nt(e) {
        return "undefined" != typeof ShadowRoot && (e instanceof At(e).ShadowRoot || e instanceof ShadowRoot)
    }
    var Mt = Math.max,
        Bt = Math.min,
        Rt = Math.round;

    function Ft(e, t) {
        void 0 === t && (t = !1);
        var n = e.getBoundingClientRect(),
            r = 1,
            i = 1;
        if (Dt(e) && t) {
            var o = e.offsetHeight,
                a = e.offsetWidth;
            a > 0 && (r = Rt(n.width) / a || 1), o > 0 && (i = Rt(n.height) / o || 1)
        }
        return {
            width: n.width / r,
            height: n.height / i,
            top: n.top / i,
            right: n.right / r,
            bottom: n.bottom / i,
            left: n.left / r,
            x: n.left / r,
            y: n.top / i
        }
    }

    function qt(e) {
        var t = At(e);
        return {
            scrollLeft: t.pageXOffset,
            scrollTop: t.pageYOffset
        }
    }

    function Ht(e) {
        return e ? (e.nodeName || "").toLowerCase() : null
    }

    function Ut(e) {
        return ((jt(e) ? e.ownerDocument : e.document) || window.document).documentElement
    }

    function _t(e) {
        return Ft(Ut(e)).left + qt(e).scrollLeft
    }

    function Wt(e) {
        return At(e).getComputedStyle(e)
    }

    function Vt(e) {
        var t = Wt(e),
            n = t.overflow,
            r = t.overflowX,
            i = t.overflowY;
        return /auto|scroll|overlay|hidden/.test(n + i + r)
    }

    function zt(e, t, n) {
        void 0 === n && (n = !1);
        var r, i, o = Dt(t),
            a = Dt(t) && function(e) {
                var t = e.getBoundingClientRect(),
                    n = Rt(t.width) / e.offsetWidth || 1,
                    r = Rt(t.height) / e.offsetHeight || 1;
                return 1 !== n || 1 !== r
            }(t),
            s = Ut(t),
            c = Ft(e, a),
            l = {
                scrollLeft: 0,
                scrollTop: 0
            },
            u = {
                x: 0,
                y: 0
            };
        return (o || !o && !n) && (("body" !== Ht(t) || Vt(s)) && (l = (r = t) !== At(r) && Dt(r) ? {
            scrollLeft: (i = r).scrollLeft,
            scrollTop: i.scrollTop
        } : qt(r)), Dt(t) ? ((u = Ft(t, !0)).x += t.clientLeft, u.y += t.clientTop) : s && (u.x = _t(s))), {
            x: c.left + l.scrollLeft - u.x,
            y: c.top + l.scrollTop - u.y,
            width: c.width,
            height: c.height
        }
    }

    function Jt(e) {
        var t = Ft(e),
            n = e.offsetWidth,
            r = e.offsetHeight;
        return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
            x: e.offsetLeft,
            y: e.offsetTop,
            width: n,
            height: r
        }
    }

    function Kt(e) {
        return "html" === Ht(e) ? e : e.assignedSlot || e.parentNode || (Nt(e) ? e.host : null) || Ut(e)
    }

    function Xt(e) {
        return ["html", "body", "#document"].indexOf(Ht(e)) >= 0 ? e.ownerDocument.body : Dt(e) && Vt(e) ? e : Xt(Kt(e))
    }

    function $t(e, t) {
        var n;
        void 0 === t && (t = []);
        var r = Xt(e),
            i = r === (null == (n = e.ownerDocument) ? void 0 : n.body),
            o = At(r),
            a = i ? [o].concat(o.visualViewport || [], Vt(r) ? r : []) : r,
            s = t.concat(a);
        return i ? s : s.concat($t(Kt(a)))
    }

    function Gt(e) {
        return ["table", "td", "th"].indexOf(Ht(e)) >= 0
    }

    function Yt(e) {
        return Dt(e) && "fixed" !== Wt(e).position ? e.offsetParent : null
    }

    function Qt(e) {
        for (var t = At(e), n = Yt(e); n && Gt(n) && "static" === Wt(n).position;) n = Yt(n);
        return n && ("html" === Ht(n) || "body" === Ht(n) && "static" === Wt(n).position) ? t : n || function(e) {
            var t = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
            if (-1 !== navigator.userAgent.indexOf("Trident") && Dt(e) && "fixed" === Wt(e).position) return null;
            for (var n = Kt(e); Dt(n) && ["html", "body"].indexOf(Ht(n)) < 0;) {
                var r = Wt(n);
                if ("none" !== r.transform || "none" !== r.perspective || "paint" === r.contain || -1 !== ["transform", "perspective"].indexOf(r.willChange) || t && "filter" === r.willChange || t && r.filter && "none" !== r.filter) return n;
                n = n.parentNode
            }
            return null
        }(e) || t
    }
    var Zt = "top",
        en = "bottom",
        tn = "right",
        nn = "left",
        rn = "auto",
        on = [Zt, en, tn, nn],
        an = "start",
        sn = "end",
        cn = "viewport",
        ln = "popper",
        un = on.reduce((function(e, t) {
            return e.concat([t + "-" + an, t + "-" + sn])
        }), []),
        dn = [].concat(on, [rn]).reduce((function(e, t) {
            return e.concat([t, t + "-" + an, t + "-" + sn])
        }), []),
        fn = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];

    function pn(e) {
        var t = new Map,
            n = new Set,
            r = [];

        function i(e) {
            n.add(e.name), [].concat(e.requires || [], e.requiresIfExists || []).forEach((function(e) {
                if (!n.has(e)) {
                    var r = t.get(e);
                    r && i(r)
                }
            })), r.push(e)
        }
        return e.forEach((function(e) {
            t.set(e.name, e)
        })), e.forEach((function(e) {
            n.has(e.name) || i(e)
        })), r
    }
    var gn = {
        placement: "bottom",
        modifiers: [],
        strategy: "absolute"
    };

    function hn() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return !t.some((function(e) {
            return !(e && "function" == typeof e.getBoundingClientRect)
        }))
    }

    function vn(e) {
        void 0 === e && (e = {});
        var t = e,
            n = t.defaultModifiers,
            r = void 0 === n ? [] : n,
            i = t.defaultOptions,
            o = void 0 === i ? gn : i;
        return function(e, t, n) {
            void 0 === n && (n = o);
            var i, a, s = {
                    placement: "bottom",
                    orderedModifiers: [],
                    options: Object.assign({}, gn, o),
                    modifiersData: {},
                    elements: {
                        reference: e,
                        popper: t
                    },
                    attributes: {},
                    styles: {}
                },
                c = [],
                l = !1,
                u = {
                    state: s,
                    setOptions: function(n) {
                        var i = "function" == typeof n ? n(s.options) : n;
                        d(), s.options = Object.assign({}, o, s.options, i), s.scrollParents = {
                            reference: jt(e) ? $t(e) : e.contextElement ? $t(e.contextElement) : [],
                            popper: $t(t)
                        };
                        var a = function(e) {
                            var t = pn(e);
                            return fn.reduce((function(e, n) {
                                return e.concat(t.filter((function(e) {
                                    return e.phase === n
                                })))
                            }), [])
                        }(function(e) {
                            var t = e.reduce((function(e, t) {
                                var n = e[t.name];
                                return e[t.name] = n ? Object.assign({}, n, t, {
                                    options: Object.assign({}, n.options, t.options),
                                    data: Object.assign({}, n.data, t.data)
                                }) : t, e
                            }), {});
                            return Object.keys(t).map((function(e) {
                                return t[e]
                            }))
                        }([].concat(r, s.options.modifiers)));
                        return s.orderedModifiers = a.filter((function(e) {
                            return e.enabled
                        })), s.orderedModifiers.forEach((function(e) {
                            var t = e.name,
                                n = e.options,
                                r = void 0 === n ? {} : n,
                                i = e.effect;
                            if ("function" == typeof i) {
                                var o = i({
                                        state: s,
                                        name: t,
                                        instance: u,
                                        options: r
                                    }),
                                    a = function() {};
                                c.push(o || a)
                            }
                        })), u.update()
                    },
                    forceUpdate: function() {
                        if (!l) {
                            var e = s.elements,
                                t = e.reference,
                                n = e.popper;
                            if (hn(t, n)) {
                                s.rects = {
                                    reference: zt(t, Qt(n), "fixed" === s.options.strategy),
                                    popper: Jt(n)
                                }, s.reset = !1, s.placement = s.options.placement, s.orderedModifiers.forEach((function(e) {
                                    return s.modifiersData[e.name] = Object.assign({}, e.data)
                                }));
                                for (var r = 0; r < s.orderedModifiers.length; r++)
                                    if (!0 !== s.reset) {
                                        var i = s.orderedModifiers[r],
                                            o = i.fn,
                                            a = i.options,
                                            c = void 0 === a ? {} : a,
                                            d = i.name;
                                        "function" == typeof o && (s = o({
                                            state: s,
                                            options: c,
                                            name: d,
                                            instance: u
                                        }) || s)
                                    } else s.reset = !1, r = -1
                            }
                        }
                    },
                    update: (i = function() {
                        return new Promise((function(e) {
                            u.forceUpdate(), e(s)
                        }))
                    }, function() {
                        return a || (a = new Promise((function(e) {
                            Promise.resolve().then((function() {
                                a = void 0, e(i())
                            }))
                        }))), a
                    }),
                    destroy: function() {
                        d(), l = !0
                    }
                };
            if (!hn(e, t)) return u;

            function d() {
                c.forEach((function(e) {
                    return e()
                })), c = []
            }
            return u.setOptions(n).then((function(e) {
                !l && n.onFirstUpdate && n.onFirstUpdate(e)
            })), u
        }
    }
    var mn = {
        passive: !0
    };

    function bn(e) {
        return e.split("-")[0]
    }

    function yn(e) {
        return e.split("-")[1]
    }

    function wn(e) {
        return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
    }

    function kn(e) {
        var t, n = e.reference,
            r = e.element,
            i = e.placement,
            o = i ? bn(i) : null,
            a = i ? yn(i) : null,
            s = n.x + n.width / 2 - r.width / 2,
            c = n.y + n.height / 2 - r.height / 2;
        switch (o) {
            case Zt:
                t = {
                    x: s,
                    y: n.y - r.height
                };
                break;
            case en:
                t = {
                    x: s,
                    y: n.y + n.height
                };
                break;
            case tn:
                t = {
                    x: n.x + n.width,
                    y: c
                };
                break;
            case nn:
                t = {
                    x: n.x - r.width,
                    y: c
                };
                break;
            default:
                t = {
                    x: n.x,
                    y: n.y
                }
        }
        var l = o ? wn(o) : null;
        if (null != l) {
            var u = "y" === l ? "height" : "width";
            switch (a) {
                case an:
                    t[l] = t[l] - (n[u] / 2 - r[u] / 2);
                    break;
                case sn:
                    t[l] = t[l] + (n[u] / 2 - r[u] / 2)
            }
        }
        return t
    }
    var Sn = {
        top: "auto",
        right: "auto",
        bottom: "auto",
        left: "auto"
    };

    function Tn(e) {
        var t, n = e.popper,
            r = e.popperRect,
            i = e.placement,
            o = e.variation,
            a = e.offsets,
            s = e.position,
            c = e.gpuAcceleration,
            l = e.adaptive,
            u = e.roundOffsets,
            d = e.isFixed,
            f = !0 === u ? function(e) {
                var t = e.x,
                    n = e.y,
                    r = window.devicePixelRatio || 1;
                return {
                    x: Rt(t * r) / r || 0,
                    y: Rt(n * r) / r || 0
                }
            }(a) : "function" == typeof u ? u(a) : a,
            p = f.x,
            g = void 0 === p ? 0 : p,
            h = f.y,
            v = void 0 === h ? 0 : h,
            m = a.hasOwnProperty("x"),
            b = a.hasOwnProperty("y"),
            y = nn,
            w = Zt,
            k = window;
        if (l) {
            var S = Qt(n),
                T = "clientHeight",
                E = "clientWidth";
            if (S === At(n) && "static" !== Wt(S = Ut(n)).position && "absolute" === s && (T = "scrollHeight", E = "scrollWidth"), S = S, i === Zt || (i === nn || i === tn) && o === sn) w = en, v -= (d && k.visualViewport ? k.visualViewport.height : S[T]) - r.height, v *= c ? 1 : -1;
            if (i === nn || (i === Zt || i === en) && o === sn) y = tn, g -= (d && k.visualViewport ? k.visualViewport.width : S[E]) - r.width, g *= c ? 1 : -1
        }
        var x, O = Object.assign({
            position: s
        }, l && Sn);
        return c ? Object.assign({}, O, ((x = {})[w] = b ? "0" : "", x[y] = m ? "0" : "", x.transform = (k.devicePixelRatio || 1) <= 1 ? "translate(" + g + "px, " + v + "px)" : "translate3d(" + g + "px, " + v + "px, 0)", x)) : Object.assign({}, O, ((t = {})[w] = b ? v + "px" : "", t[y] = m ? g + "px" : "", t.transform = "", t))
    }
    var En = vn({
            defaultModifiers: [{
                name: "eventListeners",
                enabled: !0,
                phase: "write",
                fn: function() {},
                effect: function(e) {
                    var t = e.state,
                        n = e.instance,
                        r = e.options,
                        i = r.scroll,
                        o = void 0 === i || i,
                        a = r.resize,
                        s = void 0 === a || a,
                        c = At(t.elements.popper),
                        l = [].concat(t.scrollParents.reference, t.scrollParents.popper);
                    return o && l.forEach((function(e) {
                            e.addEventListener("scroll", n.update, mn)
                        })), s && c.addEventListener("resize", n.update, mn),
                        function() {
                            o && l.forEach((function(e) {
                                e.removeEventListener("scroll", n.update, mn)
                            })), s && c.removeEventListener("resize", n.update, mn)
                        }
                },
                data: {}
            }, {
                name: "popperOffsets",
                enabled: !0,
                phase: "read",
                fn: function(e) {
                    var t = e.state,
                        n = e.name;
                    t.modifiersData[n] = kn({
                        reference: t.rects.reference,
                        element: t.rects.popper,
                        strategy: "absolute",
                        placement: t.placement
                    })
                },
                data: {}
            }, {
                name: "computeStyles",
                enabled: !0,
                phase: "beforeWrite",
                fn: function(e) {
                    var t = e.state,
                        n = e.options,
                        r = n.gpuAcceleration,
                        i = void 0 === r || r,
                        o = n.adaptive,
                        a = void 0 === o || o,
                        s = n.roundOffsets,
                        c = void 0 === s || s,
                        l = {
                            placement: bn(t.placement),
                            variation: yn(t.placement),
                            popper: t.elements.popper,
                            popperRect: t.rects.popper,
                            gpuAcceleration: i,
                            isFixed: "fixed" === t.options.strategy
                        };
                    null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign({}, t.styles.popper, Tn(Object.assign({}, l, {
                        offsets: t.modifiersData.popperOffsets,
                        position: t.options.strategy,
                        adaptive: a,
                        roundOffsets: c
                    })))), null != t.modifiersData.arrow && (t.styles.arrow = Object.assign({}, t.styles.arrow, Tn(Object.assign({}, l, {
                        offsets: t.modifiersData.arrow,
                        position: "absolute",
                        adaptive: !1,
                        roundOffsets: c
                    })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
                        "data-popper-placement": t.placement
                    })
                },
                data: {}
            }, {
                name: "applyStyles",
                enabled: !0,
                phase: "write",
                fn: function(e) {
                    var t = e.state;
                    Object.keys(t.elements).forEach((function(e) {
                        var n = t.styles[e] || {},
                            r = t.attributes[e] || {},
                            i = t.elements[e];
                        Dt(i) && Ht(i) && (Object.assign(i.style, n), Object.keys(r).forEach((function(e) {
                            var t = r[e];
                            !1 === t ? i.removeAttribute(e) : i.setAttribute(e, !0 === t ? "" : t)
                        })))
                    }))
                },
                effect: function(e) {
                    var t = e.state,
                        n = {
                            popper: {
                                position: t.options.strategy,
                                left: "0",
                                top: "0",
                                margin: "0"
                            },
                            arrow: {
                                position: "absolute"
                            },
                            reference: {}
                        };
                    return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
                        function() {
                            Object.keys(t.elements).forEach((function(e) {
                                var r = t.elements[e],
                                    i = t.attributes[e] || {},
                                    o = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce((function(e, t) {
                                        return e[t] = "", e
                                    }), {});
                                Dt(r) && Ht(r) && (Object.assign(r.style, o), Object.keys(i).forEach((function(e) {
                                    r.removeAttribute(e)
                                })))
                            }))
                        }
                },
                requires: ["computeStyles"]
            }]
        }),
        xn = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        };

    function On(e) {
        return e.replace(/left|right|bottom|top/g, (function(e) {
            return xn[e]
        }))
    }
    var Cn = {
        start: "end",
        end: "start"
    };

    function Ln(e) {
        return e.replace(/start|end/g, (function(e) {
            return Cn[e]
        }))
    }

    function In(e, t) {
        var n = t.getRootNode && t.getRootNode();
        if (e.contains(t)) return !0;
        if (n && Nt(n)) {
            var r = t;
            do {
                if (r && e.isSameNode(r)) return !0;
                r = r.parentNode || r.host
            } while (r)
        }
        return !1
    }

    function Pn(e) {
        return Object.assign({}, e, {
            left: e.x,
            top: e.y,
            right: e.x + e.width,
            bottom: e.y + e.height
        })
    }

    function An(e, t) {
        return t === cn ? Pn(function(e) {
            var t = At(e),
                n = Ut(e),
                r = t.visualViewport,
                i = n.clientWidth,
                o = n.clientHeight,
                a = 0,
                s = 0;
            return r && (i = r.width, o = r.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (a = r.offsetLeft, s = r.offsetTop)), {
                width: i,
                height: o,
                x: a + _t(e),
                y: s
            }
        }(e)) : jt(t) ? function(e) {
            var t = Ft(e);
            return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t
        }(t) : Pn(function(e) {
            var t, n = Ut(e),
                r = qt(e),
                i = null == (t = e.ownerDocument) ? void 0 : t.body,
                o = Mt(n.scrollWidth, n.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0),
                a = Mt(n.scrollHeight, n.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0),
                s = -r.scrollLeft + _t(e),
                c = -r.scrollTop;
            return "rtl" === Wt(i || n).direction && (s += Mt(n.clientWidth, i ? i.clientWidth : 0) - o), {
                width: o,
                height: a,
                x: s,
                y: c
            }
        }(Ut(e)))
    }

    function jn(e, t, n) {
        var r = "clippingParents" === t ? function(e) {
                var t = $t(Kt(e)),
                    n = ["absolute", "fixed"].indexOf(Wt(e).position) >= 0,
                    r = n && Dt(e) ? Qt(e) : e;
                return jt(r) ? t.filter((function(e) {
                    return jt(e) && In(e, r) && "body" !== Ht(e) && (!n || "static" !== Wt(e).position)
                })) : []
            }(e) : [].concat(t),
            i = [].concat(r, [n]),
            o = i[0],
            a = i.reduce((function(t, n) {
                var r = An(e, n);
                return t.top = Mt(r.top, t.top), t.right = Bt(r.right, t.right), t.bottom = Bt(r.bottom, t.bottom), t.left = Mt(r.left, t.left), t
            }), An(e, o));
        return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a
    }

    function Dn(e) {
        return Object.assign({}, {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }, e)
    }

    function Nn(e, t) {
        return t.reduce((function(t, n) {
            return t[n] = e, t
        }), {})
    }

    function Mn(e, t) {
        void 0 === t && (t = {});
        var n = t,
            r = n.placement,
            i = void 0 === r ? e.placement : r,
            o = n.boundary,
            a = void 0 === o ? "clippingParents" : o,
            s = n.rootBoundary,
            c = void 0 === s ? cn : s,
            l = n.elementContext,
            u = void 0 === l ? ln : l,
            d = n.altBoundary,
            f = void 0 !== d && d,
            p = n.padding,
            g = void 0 === p ? 0 : p,
            h = Dn("number" != typeof g ? g : Nn(g, on)),
            v = u === ln ? "reference" : ln,
            m = e.rects.popper,
            b = e.elements[f ? v : u],
            y = jn(jt(b) ? b : b.contextElement || Ut(e.elements.popper), a, c),
            w = Ft(e.elements.reference),
            k = kn({
                reference: w,
                element: m,
                strategy: "absolute",
                placement: i
            }),
            S = Pn(Object.assign({}, m, k)),
            T = u === ln ? S : w,
            E = {
                top: y.top - T.top + h.top,
                bottom: T.bottom - y.bottom + h.bottom,
                left: y.left - T.left + h.left,
                right: T.right - y.right + h.right
            },
            x = e.modifiersData.offset;
        if (u === ln && x) {
            var O = x[i];
            Object.keys(E).forEach((function(e) {
                var t = [tn, en].indexOf(e) >= 0 ? 1 : -1,
                    n = [Zt, en].indexOf(e) >= 0 ? "y" : "x";
                E[e] += O[n] * t
            }))
        }
        return E
    }
    const Bn = {
        name: "flip",
        enabled: !0,
        phase: "main",
        fn: function(e) {
            var t = e.state,
                n = e.options,
                r = e.name;
            if (!t.modifiersData[r]._skip) {
                for (var i = n.mainAxis, o = void 0 === i || i, a = n.altAxis, s = void 0 === a || a, c = n.fallbackPlacements, l = n.padding, u = n.boundary, d = n.rootBoundary, f = n.altBoundary, p = n.flipVariations, g = void 0 === p || p, h = n.allowedAutoPlacements, v = t.options.placement, m = bn(v), b = c || (m === v || !g ? [On(v)] : function(e) {
                        if (bn(e) === rn) return [];
                        var t = On(e);
                        return [Ln(e), t, Ln(t)]
                    }(v)), y = [v].concat(b).reduce((function(e, n) {
                        return e.concat(bn(n) === rn ? function(e, t) {
                            void 0 === t && (t = {});
                            var n = t,
                                r = n.placement,
                                i = n.boundary,
                                o = n.rootBoundary,
                                a = n.padding,
                                s = n.flipVariations,
                                c = n.allowedAutoPlacements,
                                l = void 0 === c ? dn : c,
                                u = yn(r),
                                d = u ? s ? un : un.filter((function(e) {
                                    return yn(e) === u
                                })) : on,
                                f = d.filter((function(e) {
                                    return l.indexOf(e) >= 0
                                }));
                            0 === f.length && (f = d);
                            var p = f.reduce((function(t, n) {
                                return t[n] = Mn(e, {
                                    placement: n,
                                    boundary: i,
                                    rootBoundary: o,
                                    padding: a
                                })[bn(n)], t
                            }), {});
                            return Object.keys(p).sort((function(e, t) {
                                return p[e] - p[t]
                            }))
                        }(t, {
                            placement: n,
                            boundary: u,
                            rootBoundary: d,
                            padding: l,
                            flipVariations: g,
                            allowedAutoPlacements: h
                        }) : n)
                    }), []), w = t.rects.reference, k = t.rects.popper, S = new Map, T = !0, E = y[0], x = 0; x < y.length; x++) {
                    var O = y[x],
                        C = bn(O),
                        L = yn(O) === an,
                        I = [Zt, en].indexOf(C) >= 0,
                        P = I ? "width" : "height",
                        A = Mn(t, {
                            placement: O,
                            boundary: u,
                            rootBoundary: d,
                            altBoundary: f,
                            padding: l
                        }),
                        j = I ? L ? tn : nn : L ? en : Zt;
                    w[P] > k[P] && (j = On(j));
                    var D = On(j),
                        N = [];
                    if (o && N.push(A[C] <= 0), s && N.push(A[j] <= 0, A[D] <= 0), N.every((function(e) {
                            return e
                        }))) {
                        E = O, T = !1;
                        break
                    }
                    S.set(O, N)
                }
                if (T)
                    for (var M = function(e) {
                            var t = y.find((function(t) {
                                var n = S.get(t);
                                if (n) return n.slice(0, e).every((function(e) {
                                    return e
                                }))
                            }));
                            if (t) return E = t, "break"
                        }, B = g ? 3 : 1; B > 0; B--) {
                        if ("break" === M(B)) break
                    }
                t.placement !== E && (t.modifiersData[r]._skip = !0, t.placement = E, t.reset = !0)
            }
        },
        requiresIfExists: ["offset"],
        data: {
            _skip: !1
        }
    };

    function Rn(e, t, n) {
        return Mt(e, Bt(t, n))
    }
    const Fn = {
        name: "preventOverflow",
        enabled: !0,
        phase: "main",
        fn: function(e) {
            var t = e.state,
                n = e.options,
                r = e.name,
                i = n.mainAxis,
                o = void 0 === i || i,
                a = n.altAxis,
                s = void 0 !== a && a,
                c = n.boundary,
                l = n.rootBoundary,
                u = n.altBoundary,
                d = n.padding,
                f = n.tether,
                p = void 0 === f || f,
                g = n.tetherOffset,
                h = void 0 === g ? 0 : g,
                v = Mn(t, {
                    boundary: c,
                    rootBoundary: l,
                    padding: d,
                    altBoundary: u
                }),
                m = bn(t.placement),
                b = yn(t.placement),
                y = !b,
                w = wn(m),
                k = "x" === w ? "y" : "x",
                S = t.modifiersData.popperOffsets,
                T = t.rects.reference,
                E = t.rects.popper,
                x = "function" == typeof h ? h(Object.assign({}, t.rects, {
                    placement: t.placement
                })) : h,
                O = "number" == typeof x ? {
                    mainAxis: x,
                    altAxis: x
                } : Object.assign({
                    mainAxis: 0,
                    altAxis: 0
                }, x),
                C = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
                L = {
                    x: 0,
                    y: 0
                };
            if (S) {
                if (o) {
                    var I, P = "y" === w ? Zt : nn,
                        A = "y" === w ? en : tn,
                        j = "y" === w ? "height" : "width",
                        D = S[w],
                        N = D + v[P],
                        M = D - v[A],
                        B = p ? -E[j] / 2 : 0,
                        R = b === an ? T[j] : E[j],
                        F = b === an ? -E[j] : -T[j],
                        q = t.elements.arrow,
                        H = p && q ? Jt(q) : {
                            width: 0,
                            height: 0
                        },
                        U = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : {
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0
                        },
                        _ = U[P],
                        W = U[A],
                        V = Rn(0, T[j], H[j]),
                        z = y ? T[j] / 2 - B - V - _ - O.mainAxis : R - V - _ - O.mainAxis,
                        J = y ? -T[j] / 2 + B + V + W + O.mainAxis : F + V + W + O.mainAxis,
                        K = t.elements.arrow && Qt(t.elements.arrow),
                        X = K ? "y" === w ? K.clientTop || 0 : K.clientLeft || 0 : 0,
                        $ = null != (I = null == C ? void 0 : C[w]) ? I : 0,
                        G = D + J - $,
                        Y = Rn(p ? Bt(N, D + z - $ - X) : N, D, p ? Mt(M, G) : M);
                    S[w] = Y, L[w] = Y - D
                }
                if (s) {
                    var Q, Z = "x" === w ? Zt : nn,
                        ee = "x" === w ? en : tn,
                        te = S[k],
                        ne = "y" === k ? "height" : "width",
                        re = te + v[Z],
                        ie = te - v[ee],
                        oe = -1 !== [Zt, nn].indexOf(m),
                        ae = null != (Q = null == C ? void 0 : C[k]) ? Q : 0,
                        se = oe ? re : te - T[ne] - E[ne] - ae + O.altAxis,
                        ce = oe ? te + T[ne] + E[ne] - ae - O.altAxis : ie,
                        le = p && oe ? function(e, t, n) {
                            var r = Rn(e, t, n);
                            return r > n ? n : r
                        }(se, te, ce) : Rn(p ? se : re, te, p ? ce : ie);
                    S[k] = le, L[k] = le - te
                }
                t.modifiersData[r] = L
            }
        },
        requiresIfExists: ["offset"]
    };
    const qn = {
        name: "offset",
        enabled: !0,
        phase: "main",
        requires: ["popperOffsets"],
        fn: function(e) {
            var t = e.state,
                n = e.options,
                r = e.name,
                i = n.offset,
                o = void 0 === i ? [0, 0] : i,
                a = dn.reduce((function(e, n) {
                    return e[n] = function(e, t, n) {
                        var r = bn(e),
                            i = [nn, Zt].indexOf(r) >= 0 ? -1 : 1,
                            o = "function" == typeof n ? n(Object.assign({}, t, {
                                placement: e
                            })) : n,
                            a = o[0],
                            s = o[1];
                        return a = a || 0, s = (s || 0) * i, [nn, tn].indexOf(r) >= 0 ? {
                            x: s,
                            y: a
                        } : {
                            x: a,
                            y: s
                        }
                    }(n, t.rects, o), e
                }), {}),
                s = a[t.placement],
                c = s.x,
                l = s.y;
            null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += l), t.modifiersData[r] = a
        }
    };
    const Hn = {
        name: "arrow",
        enabled: !0,
        phase: "main",
        fn: function(e) {
            var t, n = e.state,
                r = e.name,
                i = e.options,
                o = n.elements.arrow,
                a = n.modifiersData.popperOffsets,
                s = bn(n.placement),
                c = wn(s),
                l = [nn, tn].indexOf(s) >= 0 ? "height" : "width";
            if (o && a) {
                var u = function(e, t) {
                        return Dn("number" != typeof(e = "function" == typeof e ? e(Object.assign({}, t.rects, {
                            placement: t.placement
                        })) : e) ? e : Nn(e, on))
                    }(i.padding, n),
                    d = Jt(o),
                    f = "y" === c ? Zt : nn,
                    p = "y" === c ? en : tn,
                    g = n.rects.reference[l] + n.rects.reference[c] - a[c] - n.rects.popper[l],
                    h = a[c] - n.rects.reference[c],
                    v = Qt(o),
                    m = v ? "y" === c ? v.clientHeight || 0 : v.clientWidth || 0 : 0,
                    b = g / 2 - h / 2,
                    y = u[f],
                    w = m - d[l] - u[p],
                    k = m / 2 - d[l] / 2 + b,
                    S = Rn(y, k, w),
                    T = c;
                n.modifiersData[r] = ((t = {})[T] = S, t.centerOffset = S - k, t)
            }
        },
        effect: function(e) {
            var t = e.state,
                n = e.options.element,
                r = void 0 === n ? "[data-popper-arrow]" : n;
            null != r && ("string" != typeof r || (r = t.elements.popper.querySelector(r))) && In(t.elements.popper, r) && (t.elements.arrow = r)
        },
        requires: ["popperOffsets"],
        requiresIfExists: ["preventOverflow"]
    };

    function Un(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function _n(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? Un(Object(n), !0).forEach((function(t) {
                Wn(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Un(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function Wn(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var Vn = [_n(_n({}, qn), {}, {
        options: {
            offset: [0, 23]
        }
    }), Fn, Bn, Hn];

    function zn(e, t) {
        e.setAttribute("data-show", ""), null == t || t.update()
    }

    function Jn(e) {
        e.removeAttribute("data-show")
    }

    function Kn(e) {
        return window.innerWidth < 1e3 ? "auto" : e
    }
    var Xn = {
            name: "backdrop",
            enabled: !0,
            phase: "write",
            requires: ["popperOffsets"],
            requiresIfExists: ["hide"],
            effect: function(e) {
                var t, n = e.state;
                return n.elements.backdrop = (t = {}, ["right", "left", "top", "bottom"].forEach((function(e) {
                    var n = document.querySelector(".".concat(he.overlay, ".").concat(he[e]));
                    n || ((n = document.createElement("div")).classList.add(he.overlay, he[e]), document.body.appendChild(n)), t[e] = n
                })), t), Object.values(n.elements.backdrop).forEach((function(e) {
                    e.style.position = n.options.strategy
                })), n.styles.backdrop = {}, St(), kt
            },
            fn: function(e) {
                var t, n = e.state;
                if (null !== (t = n.modifiersData.hide) && void 0 !== t && t.isReferenceHidden) kt();
                else {
                    var r = n.rects.reference,
                        i = r.x,
                        o = r.y,
                        a = r.width,
                        s = r.height;
                    ! function(e, t, n) {
                        var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 5,
                            i = e.top,
                            o = e.left,
                            a = e.right,
                            s = e.bottom,
                            c = t || {
                                x: 0,
                                y: 0,
                                width: 0,
                                height: 0
                            },
                            l = c.x,
                            u = c.y,
                            d = c.width,
                            f = c.height,
                            p = Math.max,
                            g = Math.min,
                            h = Math.floor,
                            v = document.body,
                            m = v.clientHeight,
                            b = v.scrollHeight,
                            y = v.clientWidth,
                            w = v.scrollWidth,
                            k = window,
                            S = k.innerHeight,
                            T = k.innerWidth,
                            E = ("fixed" === n ? S : p(S, p(m, b))) - 1,
                            x = ("fixed" === n ? T : p(y, w)) - 1,
                            O = h(p(l - r, 0)),
                            C = h(p(u - r, 0)),
                            L = h(g(l + r + d, x)),
                            I = h(g(u + r + f, E));
                        o.style.width = "".concat(O, "px"), o.style.height = "".concat(E, "px"), i.style.left = "".concat(O, "px"), i.style.width = "".concat(L - O, "px"), i.style.height = "".concat(C, "px"), s.style.left = "".concat(O, "px"), s.style.top = "".concat(I, "px"), s.style.width = "".concat(L - O, "px"), s.style.height = "".concat(E - I, "px"), a.style.left = "".concat(L, "px"), a.style.height = "".concat(E, "px"), a.style.width = "".concat(x - L, "px")
                    }(n.elements.backdrop, {
                        x: i,
                        y: o,
                        width: a,
                        height: s
                    }, n.options.strategy, 5), St()
                }
            }
        },
        $n = _n(_n({}, qn), {}, {
            options: {
                offset: [0, -15]
            }
        }),
        Gn = function(e, t) {
            return null !== e && t in e
        },
        Yn = function(e, t) {
            return e && Gn(e, "nodeName") && e.nodeName.toLowerCase() === t
        },
        Qn = function(e, t) {
            var n = e;
            if (!n.parentElement) return !1;
            for (; n.parentElement && !Yn(n, "html");) {
                if (n.matches.call(n, t)) return !0;
                n = n.parentElement
            }
            return !1
        };

    function Zn(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function er(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? Zn(Object(n), !0).forEach((function(t) {
                ir(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Zn(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function tr(e) {
        return function(e) {
            if (Array.isArray(e)) return nr(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || function(e, t) {
            if (!e) return;
            if ("string" == typeof e) return nr(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return nr(e, t)
        }(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function nr(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function rr(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function ir(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var or = function() {
        function e() {
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), ir(this, "stepData", void 0), ir(this, "stepElement", void 0), ir(this, "targetElement", void 0), ir(this, "popperInstance", void 0), ir(this, "unsubscribeElementRemove", void 0), ir(this, "doesStepElementExist", (function(e) {
                return null !== document.querySelector(".".concat(he.prefix, "-").concat(e))
            })), this.stepData = null
        }
        var t, n, r;
        return t = e, n = [{
            key: "setStepData",
            value: function(e) {
                this.stepData = e
            }
        }, {
            key: "getStepData",
            value: function() {
                return this.stepData
            }
        }, {
            key: "setStepElement",
            value: function(e) {
                this.stepElement = e
            }
        }, {
            key: "getStepElement",
            value: function() {
                return this.stepElement
            }
        }, {
            key: "setTargetElement",
            value: function(e) {
                this.targetElement = e
            }
        }, {
            key: "getTargetElement",
            value: function() {
                return this.targetElement
            }
        }, {
            key: "update",
            value: function() {
                var e;
                null === (e = this.popperInstance) || void 0 === e || e.update()
            }
        }, {
            key: "destroy",
            value: function() {
                var e, t;
                clearInterval(window.usetiful_popperInstanceUpdater), window.usetiful_popperInstanceUpdater = void 0, null === (e = this.popperInstance) || void 0 === e || e.destroy(), this.popperInstance = null, null === (t = this.unsubscribeElementRemove) || void 0 === t || t.call(this), this.unsubscribeElementRemove = null
            }
        }, {
            key: "getVirtualElement",
            value: function() {
                var e, t = this.stepData.coordinates,
                    n = t.top,
                    r = t.left,
                    i = t.right,
                    o = t.bottom,
                    a = (null === (e = document.body) || void 0 === e ? void 0 : e.getBoundingClientRect()) || {},
                    s = a.width,
                    c = function(e, t, n) {
                        var r = parseInt(e, 10),
                            i = parseInt(t, 10);
                        return r || i ? r || n - i : n / 2
                    },
                    l = c(n, o, a.height),
                    u = c(r, i, s);
                return {
                    getBoundingClientRect: function() {
                        var e, t, n, r = (null === (e = document.body) || void 0 === e ? void 0 : e.getBoundingClientRect()) || {},
                            i = u + (null !== (t = null == r ? void 0 : r.left) && void 0 !== t ? t : 0),
                            o = l + (null !== (n = null == r ? void 0 : r.top) && void 0 !== n ? n : 0);
                        return {
                            width: 0,
                            height: 0,
                            top: o,
                            right: i,
                            bottom: o,
                            left: i
                        }
                    }
                }
            }
        }, {
            key: "create",
            value: function() {
                var e = this;
                je("StepControl::create called.");
                var t = vt(this.stepData),
                    n = t ? this.getVirtualElement() : this.getTargetElement(),
                    r = this.getStepElement();
                if (n && r) {
                    var i = !t && ut(n);
                    if (i) return je("Target element is hidden."), void this.hideCurrentStep();
                    !i && ut(this.getStepElement()) && (je("Showing step element."), this.showCurrentStep()), je("Updating current coordinates because target element and step element aren't hidden."), (this.popperInstance || this.unsubscribeElementRemove) && (this.destroy(), je("Destroying popperInstance just before creating new one - may be destroy should be called explicitly before"));
                    var o = [].concat(tr(Vn), [er(er({}, Xn), {}, {
                        enabled: !t && !!this.stepData.highlight
                    })]);
                    if (je("Start calculation of new coordinates"), r && n) {
                        var a = !t && function(e) {
                            for (var t = e; t && "HTML" !== t.nodeName;) {
                                if ("fixed" === yt(t, "position")) return !0;
                                t = t.parentElement
                            }
                            return !1
                        }(n) ? "fixed" : "absolute";
                        this.popperInstance = En(n, r, {
                            placement: Kn(this.stepData.position),
                            modifiers: o,
                            strategy: a
                        }), window.usetiful_popperInstanceUpdater = setInterval((function() {
                            e.popperInstance.update()
                        }), 1e3), this.unsubscribeElementRemove = function(e, t) {
                            var n;
                            try {
                                for (var r = [], i = e.parentNode; i;) r.push(i), i = i.parentNode;
                                n = new MutationObserver((function(n) {
                                    n.forEach((function(n) {
                                        "childList" === n.type && Array.from(n.removedNodes).find((function(e) {
                                            return r.includes(e)
                                        })) && t(e)
                                    }))
                                })), r.length && n.observe(r[r.length - 1], {
                                    attributes: !1,
                                    childList: !0,
                                    subtree: !0
                                })
                            } catch (e) {}
                            return function() {
                                null == n || n.disconnect()
                            }
                        }(n, (function() {
                            e.hideCurrentStep(), kt(), e.destroy()
                        }))
                    }
                }
            }
        }, {
            key: "showCurrentStep",
            value: function() {
                this.stepElement && zn(this.stepElement)
            }
        }, {
            key: "hideCurrentStep",
            value: function() {
                this.stepElement && Jn(this.stepElement)
            }
        }], n && rr(t.prototype, n), r && rr(t, r), e
    }();
    const ar = or;

    function sr(e, t) {
        var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (!n) {
            if (Array.isArray(e) || (n = function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return cr(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return cr(e, t)
                }(e)) || t && e && "number" == typeof e.length) {
                n && (e = n);
                var r = 0,
                    i = function() {};
                return {
                    s: i,
                    n: function() {
                        return r >= e.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: e[r++]
                        }
                    },
                    e: function(e) {
                        throw e
                    },
                    f: i
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var o, a = !0,
            s = !1;
        return {
            s: function() {
                n = n.call(e)
            },
            n: function() {
                var e = n.next();
                return a = e.done, e
            },
            e: function(e) {
                s = !0, o = e
            },
            f: function() {
                try {
                    a || null == n.return || n.return()
                } finally {
                    if (s) throw o
                }
            }
        }
    }

    function cr(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function lr(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function ur(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var dr = function() {
        function e() {
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), ur(this, "buttonContent", void 0), ur(this, "buttonElement", void 0), ur(this, "tourSelection", void 0), ur(this, "availableTours", void 0), this.buttonContent = "Usetiful Tour!", this.availableTours = []
        }
        var t, n, r;
        return t = e, n = [{
            key: "setButtonContent",
            value: function(e) {
                this.buttonContent = e
            }
        }, {
            key: "getButtonContent",
            value: function() {
                return this.buttonContent
            }
        }, {
            key: "setButtonElement",
            value: function(e) {
                this.buttonElement = e
            }
        }, {
            key: "getButtonElement",
            value: function() {
                return this.buttonElement
            }
        }, {
            key: "isTourSelection",
            value: function() {
                if (this.availableTours.length <= 1) return !1;
                var e, t = !1,
                    n = sr(this.availableTours);
                try {
                    for (n.s(); !(e = n.n()).done;) e.value.button && (t = !0)
                } catch (e) {
                    n.e(e)
                } finally {
                    n.f()
                }
                return t
            }
        }, {
            key: "setAvailableTours",
            value: function(e) {
                this.availableTours = e
            }
        }, {
            key: "updateCount",
            value: function(e) {
                if (je("updateCount called"), this.isTourSelection()) {
                    var t = this.getButtonElement();
                    if (t) {
                        var n = t.querySelector(".".concat(he.badge));
                        n && (e > 0 ? n.innerHTML = e.toString() : n.parentNode && n.parentNode.removeChild(n))
                    }
                }
            }
        }, {
            key: "stripTags",
            value: function(e) {
                return e.replace(/(<([^>]+)>)/gi, "")
            }
        }, {
            key: "isButtonExistAndIsVisible",
            value: function(e) {
                if ("string" != typeof e) return !1;
                var t = document.querySelector(".".concat(he.buttonMain, '[data-content="').concat(this.stripTags(e), '"]'));
                return null !== t && t.classList.contains(he.visible)
            }
        }, {
            key: "prepareMainButton",
            value: function(e, t, n) {
                if (je("prepareMainButton called"), je(e), !this.isButtonExistAndIsVisible(e)) {
                    dt(".".concat(he.buttonMain));
                    var r = e;
                    r && void 0 !== r || (r = "Usetiful tours"), this.setButtonContent(r);
                    var i = Je(r, he.buttonMain);
                    i.dataset.content = this.stripTags(r), i.setAttribute("style", "display:none"), this.isTourSelection() && i.classList.add(he.buttonMainTourSelection), t && i.addEventListener("click", (function(e) {
                        t(), e.stopImmediatePropagation(), e.preventDefault()
                    }), !1);
                    var o = document.body;
                    o && this.setButtonElement(o.appendChild(i)), i.classList.add(he.visible), n && "bottom-left" === n && i.classList.add(he.buttonMainLeft)
                }
            }
        }], n && lr(t.prototype, n), r && lr(t, r), e
    }();
    const fr = dr;

    function pr(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var gr = function e(t) {
        var n = this;
        ! function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, e), pr(this, "id", void 0), pr(this, "triggerFunction", void 0), pr(this, "reverseTriggerFunction", void 0), pr(this, "failFunction", void 0), pr(this, "altSolution", void 0), pr(this, "elementSelector", void 0), pr(this, "eventType", void 0), pr(this, "eventName", void 0), pr(this, "url", void 0), pr(this, "isInitial", void 0), pr(this, "isProgressOnClick", void 0), pr(this, "loop", void 0), pr(this, "intervalId", void 0), pr(this, "stepId", void 0), pr(this, "trigger", void 0), pr(this, "placeAppearsTrigger", (function() {
            var e = !1;
            return fe.checkTriggerURL(n) && n.isInitial && (e = n.setAppearTrigger()), e
        })), pr(this, "setAppearTrigger", (function() {
            je("setAppearTrigger called for ".concat(n.elementSelector, " ..."));
            var e = 2 * n.loop,
                t = !1,
                r = 1;
            if (!fe.checkTriggerURL(n)) return !1;
            var i = setInterval((function() {
                je("".concat(n.id, ": ").concat(r, " / ").concat(e, ": Waiting on the element '").concat(n.elementSelector, "' to appear..."));
                var o = fe.checkElement(n.elementSelector) && !ut(document.querySelector(n.elementSelector));
                !t && o ? (je("".concat(n.id, ": Element appeared")), t = !0, n.triggerFunction(), n.isInitial || clearInterval(i)) : -1 === n.loop || e && r < e ? r += 1 : t ? n.isInitial && !o && (t = !1, je("".concat(n.id, ": Element disappeared"))) : e && (je("".concat(n.id, ": Closing interval")), clearInterval(i), n.failFunction ? n.failFunction() : n.altSolution && n.altSolution())
            }), 500);
            return n.intervalId = i, !0
        })), pr(this, "remoteAppearTrigger", (function() {
            je("remoteAppearTrigger called."), n.intervalId && (clearInterval(n.intervalId), je("remoteAppearTrigger: interval removed."))
        })), t && (this.trigger = t, this.id = (+new Date).toString(36), this.eventType = t.type, this.eventName = this.eventType, "custom" === this.eventType && (this.eventName = t.name), this.loop = t.loop ? parseInt(t.loop, 10) : 0, this.url = t.url, this.elementSelector = t.element, this.isInitial = !1, this.isProgressOnClick = !1)
    };
    new gr;

    function hr(e) {
        return function(e) {
            if (Array.isArray(e)) return mr(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || vr(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function vr(e, t) {
        if (e) {
            if ("string" == typeof e) return mr(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? mr(e, t) : void 0
        }
    }

    function mr(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function br(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    const yr = new function e() {
        var t = this;
        ! function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, e), br(this, "initialTriggers", void 0), br(this, "listeners", void 0), br(this, "placeTourTriggers", (function(e, n, r) {
            je("placeTourTriggers: Placing tour triggers..."), t.initialTriggers = !1, e.forEach((function(e) {
                var i = e.trigger,
                    o = e.name;
                if (i) {
                    var a = new gr(i);
                    a.triggerFunction = n, a.stepId = o, a.reverseTriggerFunction = r, t.placeTrigger(a)
                }
            })), je("placeTourTriggers: Placed triggers:"), Ne(window.usetiful_activeTriggersOnElements)
        })), br(this, "placeTrigger", (function(e) {
            je("placeTrigger: Event ".concat(e.eventName, " on url: ").concat(e.url, " and element: ").concat(e.elementSelector, " with loop:").concat(e.loop, "."));
            var n = e;
            if (t.isTriggerMissing(n)) {
                if ("custom" === n.eventType) {
                    if (t.addToActiveTriggers(n), n.elementSelector && "window" !== n.elementSelector) {
                        if (n.elementSelector) {
                            var r = document.querySelector(n.elementSelector);
                            r && r.addEventListener(n.eventName, t.centralEventListener)
                        }
                    } else t.placeCentralListener(n.eventName);
                    return
                }
                var i = new gr(n.trigger);
                switch (t.addToActiveTriggers(n), n.eventName) {
                    case "appears":
                        n.placeAppearsTrigger();
                        break;
                    case "hover":
                        n.eventName = "mouseover", t.placeCentralListener(n.eventName), i.eventName = "mouseout", i.triggerFunction = n.reverseTriggerFunction, i.stepId = n.stepId, t.addToActiveTriggers(i), t.placeCentralListener(i.eventName);
                        break;
                    case "focus":
                        n.eventName = "focusin", t.placeCentralListener(n.eventName);
                        break;
                    case "mouseenter":
                        n.eventName = "mouseover", t.placeCentralListener(n.eventName);
                        break;
                    default:
                        t.placeCentralListener(n.eventName)
                }
            }
        })), br(this, "centralEventListener", (function(e) {
            je("centralEventListener: called with event ".concat(e.type, " on element:"), !0);
            var n = e.target || e.srcElement,
                r = t.searchInActiveTriggers(e.type, n);
            Ne(n), r && (r.stepId ? r.triggerFunction(r.stepId) : r.triggerFunction(e))
        })), br(this, "updateListeners", (function() {
            je("Updating listeners on window.usetiful_activeTriggersOnElements..."), t.listeners.forEach((function(e) {
                window.removeEventListener(e, t.centralEventListener)
            })), t.listeners = [], window.usetiful_activeTriggersOnElements.forEach((function(e) {
                t.placeCentralListener(e.eventName)
            }))
        })), br(this, "placeCentralListener", (function(e) {
            -1 === t.listeners.indexOf(e) && (t.listeners.push(e), window.addEventListener(e, t.centralEventListener))
        })), br(this, "placeInitialTriggers", (function(e, n, r) {
            je("placeInitialTriggers"), t.initialTriggers = !0;
            var i, o = function(e, t) {
                var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!n) {
                    if (Array.isArray(e) || (n = vr(e)) || t && e && "number" == typeof e.length) {
                        n && (e = n);
                        var r = 0,
                            i = function() {};
                        return {
                            s: i,
                            n: function() {
                                return r >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[r++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: i
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, a = !0,
                    s = !1;
                return {
                    s: function() {
                        n = n.call(e)
                    },
                    n: function() {
                        var e = n.next();
                        return a = e.done, e
                    },
                    e: function(e) {
                        s = !0, o = e
                    },
                    f: function() {
                        try {
                            a || null == n.return || n.return()
                        } finally {
                            if (s) throw o
                        }
                    }
                }
            }(e);
            try {
                var a = function() {
                    var e = i.value,
                        o = e.steps[0].trigger,
                        a = e.name,
                        s = e.id,
                        c = e.showEverytime,
                        l = !c && st(a) !== be,
                        u = e.autoplay && c;
                    if (je("manualTourShown = ".concat(l.toString(), ", automaticTourShow = ").concat(u.toString(), ", showEverytime = ").concat(c.toString())), o && s && (l || u || c)) {
                        var d = new gr(o);
                        d.isInitial = !0, d.triggerFunction = function(e) {
                            n(e, s)
                        }, d.reverseTriggerFunction = r, t.placeTrigger(d)
                    }
                };
                for (o.s(); !(i = o.n()).done;) a()
            } catch (e) {
                o.e(e)
            } finally {
                o.f()
            }
        })), br(this, "hasProgressOnClickTrigger", (function(e) {
            var n = t.searchInActiveTriggers("click", e);
            return !(!n || !n.isProgressOnClick)
        })), br(this, "isTriggerMissing", (function(e) {
            return null === t.searchInActiveTriggers(e.eventName, e.elementSelector)
        })), br(this, "searchInActiveTriggers", (function(e, t) {
            for (var n = window.usetiful_activeTriggersOnElements, r = t, i = 0; i < n.length; i += 1) {
                var o = "hover" === e || "focus" === e || "mouseenter" === e ? n[i].eventType === e : n[i].eventName === e;
                if (fe.checkTriggerURL(n[i]) && o) {
                    var a = n[i].elementSelector,
                        s = !1;
                    if ("string" == typeof r) s = a === r;
                    else {
                        var c = !a || "window" === a;
                        (c ? window : document.querySelector(a)) === r ? s = !0 : !r || c || "click" !== e && "mouseup" !== e || !(s = Qn(r, a)) && Yn(r, "a") && (s = r && null !== r.querySelector(a))
                    }
                    if (s) return n[i]
                }
            }
            return null
        })), br(this, "addToActiveTriggers", (function(e) {
            e && e.eventName && window.usetiful_activeTriggersOnElements.push(e)
        })), br(this, "removeFromActiveTriggers", (function(e) {
            var t = window.usetiful_activeTriggersOnElements.indexOf(e);
            je("removing item on index ".concat(t, " from active triggers")), window.usetiful_activeTriggersOnElements.splice(t, 1)
        })), br(this, "removeAllTriggers", (function(e) {
            je("removeAllTriggers called"), hr(window.usetiful_activeTriggersOnElements).forEach((function(n, r) {
                if (e || !n.isInitial)
                    if (je("item ".concat(r, "...")), "custom" !== n.eventType) "appears" === n.eventName ? (t.removeFromActiveTriggers(n), n.remoteAppearTrigger()) : t.removeFromActiveTriggers(n);
                    else if (t.removeFromActiveTriggers(n), window.removeEventListener(n.eventName, t.centralEventListener), n.elementSelector && "window" !== n.elementSelector) {
                    var i = document.querySelector(n.elementSelector);
                    i && i.removeEventListener(n.eventName, t.centralEventListener)
                }
            })), t.updateListeners()
        })), window.usetiful_activeTriggersOnElements = [], this.initialTriggers = !1, this.listeners = []
    };

    function wr(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function kr(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var Sr = "triggerTour";
    const Tr = function() {
        function e(t) {
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), kr(this, "activeTriggers", void 0), kr(this, "storage", void 0), kr(this, "tourTriggerFromURL", void 0), this.storage = t;
            var n = this.storage.getItem(Sr);
            n ? this.setTriggers(n) : this.setTriggers("[]"), this.tourTriggerFromURL = -1
        }
        var t, n, r;
        return t = e, (n = [{
            key: "getTriggers",
            value: function() {
                return this.activeTriggers
            }
        }, {
            key: "setTriggers",
            value: function(e) {
                e && (this.activeTriggers = e)
            }
        }, {
            key: "hasTourTrigger",
            value: function(e) {
                var t = this.getTriggers(),
                    n = JSON.parse(t);
                return !!n && n.includes(e)
            }
        }, {
            key: "removeAllTriggersFromLocalStorage",
            value: function() {
                this.storage.removeItem(Sr), this.setTriggers("[]")
            }
        }, {
            key: "removeTriggerFromLocalStorage",
            value: function(e) {
                var t = this.getTriggers(),
                    n = JSON.parse(t);
                if (n && n.indexOf(e) >= 0) {
                    var r = n.filter((function(t) {
                        return t !== e
                    }));
                    r.length > 0 ? (this.storage.setItem(Sr, JSON.stringify(r)), this.setTriggers(JSON.stringify(r))) : this.removeAllTriggersFromLocalStorage()
                }
            }
        }, {
            key: "setTourTriggerToLocalStorage",
            value: function(e) {
                var t = [],
                    n = this.getTriggers(),
                    r = JSON.parse(n);
                r && (t = r.filter((function(t) {
                    return t !== e
                }))), t.push(e), t.length > 0 && (this.setTriggers(JSON.stringify(t)), this.storage.setItem(Sr, JSON.stringify(t)))
            }
        }, {
            key: "hasTourTriggerInUrl",
            value: function() {
                try {
                    this.tourTriggerFromURL = -1;
                    var e = window.location.search,
                        t = new URLSearchParams(e).get("showProductTour");
                    return t && (this.tourTriggerFromURL = Number(t)), -1 !== this.tourTriggerFromURL
                } catch (e) {
                    return !1
                }
            }
        }]) && wr(t.prototype, n), r && wr(t, r), e
    }();

    function Er(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    const xr = function e(t, n, r, i) {
        var o = this;
        ! function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, e), Er(this, "type", void 0), Er(this, "pointerSelector", void 0), Er(this, "eventName", void 0), Er(this, "elementTrigger", void 0), Er(this, "nextStepTrigger", void 0), Er(this, "placeTrigger", (function() {
            o.shouldPlaceTrigger() ? o.setProgressOnClickTrigger() : o.type === ve && o.nextStepTrigger()
        })), Er(this, "removeTrigger", (function() {
            o.removeProgressOnClickTrigger()
        })), Er(this, "shouldPlaceTrigger", (function() {
            return o.type && o.type !== ve && "buttons" !== o.type
        })), Er(this, "setProgressOnClickTrigger", (function() {
            if (je("setProgressOnClickTrigger: Setting click trigger on ".concat(o.pointerSelector, "...")), !yr.hasProgressOnClickTrigger(o.pointerSelector)) {
                var e = {
                        type: o.eventName,
                        element: o.pointerSelector,
                        url: "",
                        loop: "-1"
                    },
                    t = new gr(e);
                t.isProgressOnClick = !0, yr.isTriggerMissing(t) && (t.triggerFunction = o.elementTrigger, yr.addToActiveTriggers(t), yr.placeCentralListener(t.eventName))
            }
        })), Er(this, "removeProgressOnClickTrigger", (function() {
            if ((je("Removing progress trigger ".concat(o.eventName, " on ").concat(o.pointerSelector, " ...")), J(o.pointerSelector)) && document.querySelector(o.pointerSelector)) {
                var e = yr.searchInActiveTriggers(o.eventName, o.pointerSelector);
                e && yr.removeFromActiveTriggers(e)
            }
        }));
        var a = function() {
            De("ProgressOnClickControl doesn't contain functions for elementTrigger or nextStepTrigger.")
        };
        switch (this.type = t || "", this.pointerSelector = n || "", this.elementTrigger = r || a, this.nextStepTrigger = i || a, t) {
            case "element":
                this.eventName = "click";
                break;
            case "screen":
                this.eventName = "mouseup", this.pointerSelector = "body"
        }
    };

    function Or(e, t, n) {
        return Or = Cr() ? Reflect.construct : function(e, t, n) {
            var r = [null];
            r.push.apply(r, t);
            var i = new(Function.bind.apply(e, r));
            return n && Lr(i, n.prototype), i
        }, Or.apply(null, arguments)
    }

    function Cr() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
        } catch (e) {
            return !1
        }
    }

    function Lr(e, t) {
        return Lr = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        }, Lr(e, t)
    }

    function Ir(e) {
        return function(e) {
            if (Array.isArray(e)) return Pr(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || function(e, t) {
            if (!e) return;
            if ("string" == typeof e) return Pr(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Pr(e, t)
        }(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function Pr(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function Ar(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }
    const jr = function() {
        function e() {
            var t, n, r;
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), r = void 0, (n = "instances") in (t = this) ? Object.defineProperty(t, n, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = r, this.instances = {}
        }
        var t, n, r;
        return t = e, n = [{
            key: "findServices",
            value: function(e) {
                var t = this,
                    n = [];
                return e.forEach((function(e) {
                    var r = t.get(e);
                    null !== r && n.push(r)
                })), n
            }
        }, {
            key: "registerClass",
            value: function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                null === this.get(e) && (this.instances[e] = Or(t, Ir(this.findServices(n))))
            }
        }, {
            key: "registerConstant",
            value: function(e, t) {
                null === this.get(e) && (this.instances[e] = t)
            }
        }, {
            key: "registerFunction",
            value: function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                null === this.get(e) && (this.instances[e] = t.apply(void 0, Ir(this.findServices(n))))
            }
        }, {
            key: "get",
            value: function(e) {
                return this.instances[e] || null
            }
        }], n && Ar(t.prototype, n), r && Ar(t, r), e
    }();

    function Dr(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    const Nr = function e() {
        var t = this;
        ! function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, e), Dr(this, "cookieName", "usetiful-visitor-ident"), Dr(this, "cookieLifeTimeDays", 365), Dr(this, "isNewVisitor", !1), Dr(this, "getIdent", (function() {
            var e = t.getCookie(t.cookieName);
            return e || (e = t.generateUUID(), t.isNewVisitor = !0, t.setCookie(t.cookieName, e, t.cookieLifeTimeDays)), e
        })), Dr(this, "generateUUID", (function() {
            var e = (new Date).getTime(),
                t = performance && performance.now && 1e3 * performance.now() || 0;
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(n) {
                var r = 16 * Math.random();
                return e > 0 ? (r = (e + r) % 16 | 0, e = Math.floor(e / 16)) : (r = (t + r) % 16 | 0, t = Math.floor(t / 16)), ("x" === n ? r : r ? 3 : 8).toString(16)
            }))
        })), Dr(this, "setCookie", (function(e, t, n) {
            var r = "";
            if (n) {
                var i = new Date;
                i.setTime(i.getTime() + 24 * n * 60 * 60 * 1e3), r = "; expires=".concat(i.toUTCString())
            }
            document.cookie = "".concat(e, "=").concat(t || "").concat(r, "; path=/")
        })), Dr(this, "getCookie", (function(e) {
            var t = document.cookie.match("(^|;) ?".concat(e, "=([^;]*)(;|$)"));
            return t ? t[2] : null
        }))
    };

    function Mr(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function Br(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function Rr(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var Fr = function() {
        function e(t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "api";
            Mr(this, e), Rr(this, "apiToken", void 0), Rr(this, "basePath", void 0), this.apiToken = t, this.basePath = n
        }
        var t, n, r;
        return t = e, n = [{
            key: "request",
            value: function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                    r = new XMLHttpRequest;
                return r.open(e, "".concat(Oe).concat(this.basePath).concat(t)), r.setRequestHeader("X-Requested-With", "XMLHttpRequest"), r.setRequestHeader("X-AUTH-TOKEN", this.apiToken), null !== n ? r.send(JSON.stringify(n)) : r.send(), r
            }
        }, {
            key: "get",
            value: function(e, t) {
                return this.request("GET", e, t)
            }
        }, {
            key: "post",
            value: function(e, t) {
                return this.request("POST", e, t)
            }
        }], n && Br(t.prototype, n), r && Br(t, r), e
    }();
    const qr = Fr;
    var Hr = ["id", "actionAt"];

    function Ur(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function _r(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? Ur(Object(n), !0).forEach((function(t) {
                Vr(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ur(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function Wr(e, t) {
        if (null == e) return {};
        var n, r, i = function(e, t) {
            if (null == e) return {};
            var n, r, i = {},
                o = Object.keys(e);
            for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i
        }(e, t);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
        }
        return i
    }

    function Vr(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function zr(e) {
        var t, n = e.id,
            r = e.action,
            i = e.actionAt,
            o = e.visitorIdent,
            a = e.debug,
            s = (Vr(t = {}, Me, "show"), Vr(t, Be, "show"), Vr(t, He, "close"), Vr(t, Re, "redirect"), Vr(t, Fe, "delay"), t);
        return {
            id: n,
            type: r === Me ? "smartTip" : "step",
            event: s[r],
            eventAt: null == i ? void 0 : i.toISOString(),
            visitorIdent: o,
            isPreview: a
        }
    }

    function Jr(e) {
        e.id;
        var t = e.actionAt;
        return _r(_r({}, Wr(e, Hr)), {}, {
            actionAt: null == t ? void 0 : t.toString()
        })
    }
    const Kr = function e(t, n) {
        var r = this;
        ! function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, e), Vr(this, "api", void 0), Vr(this, "reporterApi", void 0), Vr(this, "debug", void 0), Vr(this, "data", void 0), Vr(this, "visitor", void 0), Vr(this, "batchSize", 10), Vr(this, "nextPossibleSend", void 0), Vr(this, "minSendInterval", 1e4), Vr(this, "maxSendInterval", 6e4), Vr(this, "sendIntervalId", null), Vr(this, "add", (function(e) {
            var t, n, i = _r(_r({}, e), {}, {
                actionAt: new Date,
                visitorIdent: r.visitor.getIdent(),
                debug: !!r.debug
            });
            r.data.length >= 1 && (t = e, n = r.data[r.data.length - 1], !["tourId", "stepIndex", "id", "action"].find((function(e) {
                return t[e] !== n[e]
            }))) || (r.data.push(i), r.send())
        })), Vr(this, "send", (function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                t = r.data.length && e,
                n = (new Date).getMilliseconds();
            if (t || !(r.data.length < r.batchSize || n < r.nextPossibleSend)) {
                var i = r.data.filter((function(e) {
                        return e.action !== Me
                    })).map(Jr),
                    o = r.data.filter((function(e) {
                        return e.action !== qe
                    })).map(zr);
                r.data = [], r.nextPossibleSend = (new Date).getMilliseconds() + r.minSendInterval, r.reschedule(), i.length && r.api.post("/report", i), o.length && r.reporterApi.post("/entity-events/", o)
            }
        })), Vr(this, "reschedule", (function() {
            r.sendIntervalId && clearInterval(r.sendIntervalId), r.sendIntervalId = setInterval((function() {
                return r.send(!0)
            }), r.maxSendInterval)
        })), Vr(this, "init", (function() {
            window.addEventListener("beforeunload", (function() {
                r.send(!0)
            })), r.reschedule()
        })), this.api = t, this.reporterApi = n, this.debug = Le, this.data = [], this.visitor = new Nr
    };
    var Xr = window.location.href,
        $r = "onPageChange",
        Gr = "onElementHide",
        Yr = function(e, t) {
            return setInterval((function() {
                ! function(e, t) {
                    if (document.body && !document.body.contains(e)) {
                        var n = new CustomEvent(Gr, {
                            detail: t
                        });
                        window.dispatchEvent(n)
                    }
                }(e, t)
            }), 500)
        },
        Qr = function(e) {
            clearInterval(e)
        },
        Zr = function() {
            setInterval((function() {
                ! function(e) {
                    if (e !== Xr) {
                        var t = new CustomEvent($r);
                        je("change url event call"), window.dispatchEvent(t), Xr = e
                    }
                    Xr = window.location.href
                }(window.location.href)
            }), 500)
        };

    function ei(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var ti = "uf-theme-link";
    const ni = function e(t) {
        var n = this;
        ! function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, e), ei(this, "api", void 0), ei(this, "loadConfig", (function(e) {
            if (Ie) je("Script is paused by plugin");
            else {
                var t = n.api.get(pe);
                t.onload = function(t) {
                    var n = t.currentTarget,
                        r = n.status,
                        i = n.response;
                    if (Zr(), r >= 200 && r < 400) {
                        var o = JSON.parse(i);
                        e(o), window.addEventListener($r, (function() {
                            je("call page change event"), e(o)
                        }))
                    }
                }, t.onerror = function() {
                    De("Usetiful: connection error")
                }
            }
        })), ei(this, "loadCriticalCss", (function() {
            var e = document.getElementsByTagName("head")[0],
                t = document.createElement("style");
            t.innerHTML = ".".concat(he.modal, ", .").concat(he.slideout, ", .").concat(he.bubble, ", .").concat(he.buttonMain, " {display: none}"), e.appendChild(t)
        })), ei(this, "loadTheme", (function(e, t) {
            var n = document.querySelector(".".concat(ti));
            if (null !== n && n.getAttribute("href") !== e && n.remove(), null === n || n.getAttribute("href") !== e) {
                var r = document.getElementsByTagName("head")[0],
                    i = document.createElement("link");
                i.classList.add(ti), i.rel = "stylesheet", i.type = "text/css", i.href = e, "function" == typeof t && (i.onload = t), r.appendChild(i)
            } else "function" == typeof t && t()
        })), ei(this, "addCloseListenersOnAnchors", (function(e) {
            window.usetiful_anchorEventListeners || (window.addEventListener("click", e, !0), window.usetiful_anchorEventListeners = !0)
        })), this.api = t
    };
    var ri = "LocalStorage",
        ii = "apiToken",
        oi = "Report",
        ai = "reporterBasePath",
        si = "Api",
        ci = "ReporterApi",
        li = "TourTriggersControl",
        ui = "Loader",
        di = new jr,
        fi = function(e) {
            return di.get(e)
        };

    function pi(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    const gi = function e(t, n) {
        var r = this;
        ! function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, e), pi(this, "showCallbackFunction", void 0), pi(this, "hideCallbackFunction", void 0), pi(this, "getReverseEventName", (function(e) {
            var t;
            switch (e) {
                case "mouseover":
                    t = "mouseleave";
                    break;
                case "focus":
                    t = "blur";
                    break;
                case "click":
                    t = "focusout";
                    break;
                default:
                    t = null
            }
            return t
        })), pi(this, "linkClickAction", (function(e) {
            e.target instanceof HTMLAnchorElement && e.target.href && window.open(e.target.href, e.target.target)
        })), pi(this, "registerClickEventsInBubble", (function(e) {
            e.querySelectorAll("a").forEach((function(e) {
                e.addEventListener("mousedown", r.linkClickAction)
            }))
        })), pi(this, "unRegisterClickEventsInBubble", (function(e) {
            e.querySelectorAll("a").forEach((function(e) {
                e.removeEventListener("mousedown", r.linkClickAction)
            }))
        })), pi(this, "getTarget", (function(e, t) {
            var n = e.target;
            try {
                var r = n.closest(t);
                if (r) return r
            } catch (e) {
                return n
            }
            return n
        })), pi(this, "preActions", (function(e, t) {
            if ("focus" === e) {
                var n = document.querySelector(t);
                n instanceof Element && !n.hasAttribute("tabindex") && n.setAttribute("tabindex", 0)
            }
        })), pi(this, "processEvents", (function(e, t, n) {
            var i, o = r.getReverseEventName(e);
            r.preActions(e, t);
            var a = function(a) {
                var s = r.getTarget(a, t);
                if (t && s && s instanceof Element && s.matches(t)) {
                    switch (e) {
                        case "mouseover":
                            s.removeEventListener(o, r.hideCallbackFunction), r.showPositionedElement(s, n), s.addEventListener(o, (function() {
                                r.hideCallbackFunction(n)
                            }));
                            break;
                        case "focus":
                            i = Yr(s, n), r.showPositionedElement(s, n), r.registerClickEventsInBubble(n), s.addEventListener(o, (function() {
                                Qr(i), r.unRegisterClickEventsInBubble(n), r.hideCallbackFunction(n)
                            }));
                            break;
                        case "click":
                            i = Yr(s, n), r.showPositionedElement(s, n), r.registerClickEventsInBubble(n), n.setAttribute("tabindex", 0), n.focus(), n.addEventListener(o, (function() {
                                Qr(i), r.unRegisterClickEventsInBubble(n), r.hideCallbackFunction(n)
                            }));
                            break;
                        default:
                            o = null
                    }
                    i && window.addEventListener(Gr, (function(e) {
                        var t = e.detail;
                        Qr(i), r.unRegisterClickEventsInBubble(n), r.hideCallbackFunction(t)
                    }))
                }
            };
            window.usetiful_smartTipsAddedEvents || (window.usetiful_smartTipsAddedEvents = []), window.usetiful_smartTipsAddedEvents.push({
                eventName: e,
                eventFunction: a
            }), document.addEventListener(e, a, !0)
        })), pi(this, "showPositionedElement", (function(e, t) {
            r.showCallbackFunction(e, t, !1), window.addEventListener("resize", (function() {
                r.showCallbackFunction(e, t, !0)
            }))
        })), pi(this, "init", (function(e, t, n) {
            r.processEvents(e, t, n)
        })), this.showCallbackFunction = t, this.hideCallbackFunction = n
    };
    const hi = function(e, t, n, r) {
        var i = fi(oi);
        je("report action index ".concat(t, " with action ").concat(n)), i.add({
            id: r,
            tourId: e || 0,
            stepIndex: t,
            action: n
        })
    };

    function vi(e) {
        return function(e) {
            if (Array.isArray(e)) return yi(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || bi(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function mi(e, t) {
        var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (!n) {
            if (Array.isArray(e) || (n = bi(e)) || t && e && "number" == typeof e.length) {
                n && (e = n);
                var r = 0,
                    i = function() {};
                return {
                    s: i,
                    n: function() {
                        return r >= e.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: e[r++]
                        }
                    },
                    e: function(e) {
                        throw e
                    },
                    f: i
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var o, a = !0,
            s = !1;
        return {
            s: function() {
                n = n.call(e)
            },
            n: function() {
                var e = n.next();
                return a = e.done, e
            },
            e: function(e) {
                s = !0, o = e
            },
            f: function() {
                try {
                    a || null == n.return || n.return()
                } finally {
                    if (s) throw o
                }
            }
        }
    }

    function bi(e, t) {
        if (e) {
            if ("string" == typeof e) return yi(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? yi(e, t) : void 0
        }
    }

    function yi(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
    }
    var wi = !1,
        ki = function(e) {
            var t = e.id,
                n = e.name,
                r = e.title,
                i = e.content,
                o = e.element,
                a = e.displayOn,
                s = e.orientation,
                c = e.hotspot;
            je("smart tip ".concat(n, " loaded"));
            var l = Xe(n, wi, i, Ke(4, r), c);
            l instanceof HTMLElement && (c && Ti(l, o, s, a, t, n), new gi((function(e, r, i) {
                return Si(e, r, s, i, n, t)
            }), Jn).init(a, o, l))
        },
        Si = function(e, t, n, r, i, o) {
            r || (zn(t), En(e, t, {
                placement: Kn(n),
                modifiers: vi(Vn)
            }), hi(i, null, Me, o))
        },
        Ti = function(e, t, n, r, i, o) {
            document.querySelectorAll(t).forEach((function(t, a) {
                zn(e), En(t, e, {
                    placement: Kn(n),
                    modifiers: vi(Vn),
                    onFirstUpdate: function() {
                        var s = e.getAttribute("data-popper-placement");
                        e.classList.remove(he.bubbleInvisible), Jn(e);
                        var c = "beacon".concat(i).concat(a),
                            l = function(e, t) {
                                var n = Ve(he.beacon);
                                document.body.appendChild(n);
                                var r = document.createElement("div");
                                return r.classList.add(he.beaconAround), n.appendChild(r), n.setAttribute("id", e), n.style.zIndex = t, n
                            }(c, getComputedStyle(t, "").zIndex);
                        En(t, l, {
                            placement: Kn(s),
                            modifiers: [$n],
                            onFirstUpdate: function() {
                                new gi((function(e, r, a) {
                                    return Si(t, r, n, a, o, i)
                                }), Jn).init(r, "#".concat(c), e)
                            }
                        })
                    }
                })
            }))
        },
        Ei = function() {
            return Ei = Object.assign || function(e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e
            }, Ei.apply(this, arguments)
        };
    const xi = function() {
        function e(e, t) {
            this.parseBoolean = function(e) {
                return !0 === (e && "string" == typeof e ? JSON.parse(e) : e)
            }, this.isNewChecklist = e, this.isInPluginScript = t, this.checklistData = [], this.processParseData()
        }
        return e.prototype.getLocalStorageKey = function() {
            return this.isNewChecklist ? "checklistsDismiss" : "hideChecklist"
        }, e.prototype.processParseData = function() {
            var e = localStorage.getItem(this.getLocalStorageKey());
            this.isNewChecklist && e && (this.checklistData = JSON.parse(e))
        }, e.prototype.isChecklistDismiss = function(e) {
            if (void 0 === e && (e = null), this.isInPluginScript) return !1;
            if (this.isNewChecklist && e) {
                if (this.checklistData && this.checklistData.length > 0) {
                    var t = this.checklistData.find((function(t) {
                        return t.id === e
                    }));
                    if (t) return this.parseBoolean(t.value)
                }
                return !1
            }
            return this.getOldDismissValue()
        }, e.prototype.getOldDismissValue = function() {
            var e = localStorage.getItem(this.getLocalStorageKey());
            return this.parseBoolean(e)
        }, e.prototype.isAllChecklistsDismissed = function(e) {
            for (var t = !0, n = 0, r = e; n < r.length; n++) {
                var i = r[n].id;
                this.isChecklistDismiss(i) || (t = !1)
            }
            return t
        }, e.prototype.setDismissValue = function(e, t) {
            if (void 0 === t && (t = null), !this.isInPluginScript) {
                if (this.isNewChecklist && t) return void 0 !== this.checklistData.find((function(e) {
                    return e.id === t
                })) ? this.checklistData = this.checklistData.map((function(n) {
                    return n.id === t ? Ei(Ei({}, n), {
                        value: e
                    }) : n
                })) : this.checklistData.push({
                    id: t,
                    value: e
                }), void localStorage.setItem(this.getLocalStorageKey(), JSON.stringify(this.checklistData));
                localStorage.setItem(this.getLocalStorageKey(), JSON.stringify(e))
            }
        }, e
    }();
    var Oi, Ci;

    function Li(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var Ii = "startTour",
        Pi = "openURL",
        Ai = (Li(Oi = {}, Ii, {
            label: "Start tour"
        }), Li(Oi, Pi, {
            label: "Open URL"
        }), "bottom-left"),
        ji = (Li(Ci = {}, Ai, {
            label: "Bottom left"
        }), Li(Ci, "bottom-right", {
            label: "Bottom right"
        }), "checklistsRedirects");
    const Di = function() {
        function e() {
            this.checklistData = [], this.processParseData()
        }
        return e.prototype.processParseData = function() {
            var e = localStorage.getItem(ji);
            e && (this.checklistData = JSON.parse(e))
        }, e.prototype.isRedirected = function(e) {
            return !!(this.checklistData && this.checklistData.length > 0) && void 0 !== this.checklistData.find((function(t) {
                return t.id === e
            }))
        }, e.prototype.markAsRedirected = function(e) {
            void 0 !== this.checklistData.find((function(t) {
                return t.id === e
            })) || this.checklistData.push({
                id: e
            }), localStorage.setItem(ji, JSON.stringify(this.checklistData))
        }, e
    }();
    var Ni = '<svg class="svg-icon" width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M10 1c-4.962 0-9 4.038-9 9 0 4.963 4.038 9 9 9 4.963 0 9-4.037 9-9 0-4.962-4.037-9-9-9zm0 16.615c-4.2 0-7.615-3.416-7.615-7.615C2.385 5.8 5.8 2.385 10 2.385S17.615 5.801 17.615 10c0 4.2-3.416 7.615-7.615 7.615z"/>{&apos; &apos;}<path d="M13.664 6.74l-5.05 5.05-2.278-2.28a.694.694 0 00-.98.98l2.77 2.77a.694.694 0 00.98-.001l5.537-5.54a.694.694 0 00-.98-.98z"/></svg>';
    const Mi = function(e, t) {
        var n = this;
        this.checklistItemAction = function(e) {
            var t = n.checklistItem,
                r = t.id,
                i = t.onClickAction,
                o = t.tourId,
                a = t.url,
                s = t.urlOpenTargetBlank;
            i === Ii && o > 0 && n.runTourOnClickAction(e, o, !0), a && "" !== a && (n.redirects.markAsRedirected(r), mt(a, s))
        }, this.processStateClasses = function() {
            var e = n.checklistItem,
                t = e.id,
                r = e.onClickAction,
                i = e.tourId;
            if (r === Ii) {
                var o = st(i);
                "closed" === o ? n.itemElement.classList.add(he.done) : "inProgress" === o && n.itemElement.classList.add(he.inProgress)
            } else r === Pi && n.redirects.isRedirected(t) && n.itemElement.classList.add(he.done)
        }, this.checklistItemIcon = function() {
            var e = n.checklistItem,
                t = e.id,
                r = e.onClickAction,
                i = e.tourId;
            if (r === Ii) {
                var o = st(i);
                if ("closed" === o) return Ni;
                if ("inProgress" === o) return '<svg class="svg-icon" width="20" height="20" viewBox="0 0 40 32" xmlns="http://www.w3.org/2000/svg"><path d="M3.968 12.061A3.965 3.965 0 000 16.027a3.965 3.965 0 003.968 3.967 3.966 3.966 0 100-7.933zm12.265 0a3.967 3.967 0 00-3.968 3.965c0 2.192 1.778 3.967 3.968 3.967s3.97-1.772 3.97-3.967a3.97 3.97 0 00-3.97-3.965zm11.857 0a3.967 3.967 0 10-.005 7.933 3.967 3.967 0 00.005-7.933z"/></svg>'
            } else if (r === Pi && n.redirects.isRedirected(t)) return Ni;
            return '<svg class="svg-icon" width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M10 1c-4.962 0-9 4.038-9 9 0 4.963 4.038 9 9 9 4.963 0 9-4.037 9-9 0-4.962-4.037-9-9-9zm0 16.615c-4.2 0-7.615-3.416-7.615-7.615C2.385 5.8 5.8 2.385 10 2.385S17.615 5.801 17.615 10c0 4.2-3.416 7.615-7.615 7.615z"/></svg>'
        }, this.render = function() {
            return n.itemElement.innerHTML = "".concat(n.checklistItemIcon(), "<span>").concat(n.checklistItem.title, "</span>"), n.itemElement
        }, this.checklistItem = e, this.redirects = new Di, this.runTourOnClickAction = t, this.itemElement = ze("", he.button), this.itemElement.classList.add(he.buttonBlock), this.itemElement.addEventListener("click", (function(e) {
            n.checklistItemAction(e)
        }), !1), this.processStateClasses()
    };

    function Bi(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function Ri(e, t) {
        var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (!n) {
            if (Array.isArray(e) || (n = function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return Fi(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Fi(e, t)
                }(e)) || t && e && "number" == typeof e.length) {
                n && (e = n);
                var r = 0,
                    i = function() {};
                return {
                    s: i,
                    n: function() {
                        return r >= e.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: e[r++]
                        }
                    },
                    e: function(e) {
                        throw e
                    },
                    f: i
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var o, a = !0,
            s = !1;
        return {
            s: function() {
                n = n.call(e)
            },
            n: function() {
                var e = n.next();
                return a = e.done, e
            },
            e: function(e) {
                s = !0, o = e
            },
            f: function() {
                try {
                    a || null == n.return || n.return()
                } finally {
                    if (s) throw o
                }
            }
        }
    }

    function Fi(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
    }
    var qi = "toursSelection",
        Hi = function() {
            window.localStorage.setItem(qi, "disabled")
        },
        Ui = function() {
            return "disabled" !== window.localStorage.getItem(qi)
        },
        _i = function(e, t, n) {
            window.localStorage.setItem(qi, "enabled");
            var r = e.id,
                i = e.name,
                o = e.items,
                a = e.labels,
                s = e.progressBar,
                c = e.dismiss,
                l = e.alignment,
                u = a.dismiss,
                d = u.text,
                f = u.description,
                p = u.confirm,
                g = u.cancel,
                h = document.querySelector(".".concat(he.tourSelection)),
                v = o.filter((function(e) {
                    return e.onClickAction === Pi ? !(new Di).isRedirected(r) : "closed" === st(e.tourId)
                }));
            if (h) h.classList.add(he.visible);
            else {
                var m = document.createElement("h3");
                m.classList.add(he.title), s || m.classList.add(he.titleWithoutProgress), m.innerHTML = i, gt(m, s ? '<span class="uf-progress-value">'.concat(Math.round(v.length / (o.length / 100)), '%</span><div class="uf-progress"><div class="uf-progress-bar" style="width: ').concat(Math.round(v.length / (o.length / 100)), '%;"></div></div>') : null, (function() {
                    var e, i = Ve(he.actions),
                        a = Ri(o);
                    try {
                        for (a.s(); !(e = a.n()).done;) {
                            var s = e.value,
                                l = new Mi(s, t);
                            i.append(l.render())
                        }
                    } catch (e) {
                        a.e(e)
                    } finally {
                        a.f()
                    }
                    if (!0 === c) {
                        var u = Ve(he.bottomAction);
                        u.classList.add(he.bottomAction);
                        var h = Je(d, "");
                        h.addEventListener("click", (function(e) {
                            ft("", f, p, g, (function() {
                                dt(".".concat(he.notification)), dt(".".concat(he.buttonMain)), n(r)
                            })), e.stopImmediatePropagation(), e.preventDefault()
                        }), !1), u.append(h), i.append(u)
                    }
                    return i
                }), he.tourSelection, Hi, l)
            }
        },
        Wi = function e(t, n) {
            var r = this;
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), Bi(this, "dismissChecklist", (function(e) {
                r.dismiss.setDismissValue(!0, e)
            })), Bi(this, "checkAvailable", (function(e) {
                if (je("Start loading checklist"), e) return je("Checking available checklists..."), new Promise((function(t) {
                    var n, i = Ri(e);
                    try {
                        var o = function() {
                            var e = n.value,
                                i = e.id,
                                o = e.targets,
                                a = e.targetOperator;
                            r.dismiss.isChecklistDismiss(i) || fe.checkTargetWithWaiting(bt(o), a).then((function() {
                                t(e)
                            }), (function() {}))
                        };
                        for (i.s(); !(n = i.n()).done;) o()
                    } catch (e) {
                        i.e(e)
                    } finally {
                        i.f()
                    }
                }));
                je("There is no checklists here")
            })), Bi(this, "hideTourSelection", (function() {
                dt(".".concat(he.tourSelection)), r.selectedChecklist = null
            })), Bi(this, "isEnabledNewChecklists", (function() {
                return r.checklists && r.checklists.length > 0
            })), Bi(this, "isAvailableChecklist", (function() {
                return r.isEnabledNewChecklists() && !r.dismiss.isAllChecklistsDismissed(r.checklists)
            })), Bi(this, "showChecklist", (function(e) {
                r.selectedChecklist = e, _i(e, r.runTourOnClickAction, r.dismissChecklist)
            })), Bi(this, "loadChecklist", (function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                r.isAvailableChecklist() && (r.selectedChecklist ? (_i(r.selectedChecklist, r.runTourOnClickAction), e && e()) : r.checkAvailable(r.checklists).then((function(t) {
                    var n = t.labels,
                        i = t.showButton,
                        o = t.items,
                        a = t.theme,
                        s = t.alignment;
                    r.loader.loadTheme(a, (function() {
                        if (i) {
                            var a = n.button;
                            r.mainButton.setAvailableTours(o), r.mainButton.prepareMainButton(a, (function() {
                                r.showChecklist(t), e && e()
                            }), s), Ui() && (r.showChecklist(t), e && e())
                        } else r.showChecklist(t), e && e()
                    }))
                })))
            })), this.checklists = t, this.runTourOnClickAction = n, this.loader = fi(ui), this.selectedChecklist = null, this.mainButton = new fr, this.dismiss = new xi(!0, Ee)
        };

    function Vi(e, t) {
        var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (!n) {
            if (Array.isArray(e) || (n = function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return zi(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return zi(e, t)
                }(e)) || t && e && "number" == typeof e.length) {
                n && (e = n);
                var r = 0,
                    i = function() {};
                return {
                    s: i,
                    n: function() {
                        return r >= e.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: e[r++]
                        }
                    },
                    e: function(e) {
                        throw e
                    },
                    f: i
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var o, a = !0,
            s = !1;
        return {
            s: function() {
                n = n.call(e)
            },
            n: function() {
                var e = n.next();
                return a = e.done, e
            },
            e: function(e) {
                s = !0, o = e
            },
            f: function() {
                try {
                    a || null == n.return || n.return()
                } finally {
                    if (s) throw o
                }
            }
        }
    }

    function zi(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function Ji(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function Ki(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? Ji(Object(n), !0).forEach((function(t) {
                Xi(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ji(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function Xi(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }! function() {
        var e = window.localStorage;
        di.registerConstant(ii, Ce), di.registerConstant(ai, "reporter/api"), di.registerClass(si, qr, [ii]), di.registerClass(ci, qr, [ii, ai]), di.registerConstant(ri, e), di.registerClass(ui, ni, [si]), di.registerClass(oi, Kr, [si, ci]), di.registerClass(li, Tr, [ri])
    }();
    var $i = fi(ui),
        Gi = fi(oi),
        Yi = new Pt,
        Qi = new ar,
        Zi = fi(li),
        eo = new fr,
        to = new xi(!1, Ee),
        no = !1,
        ro = [],
        io = [],
        oo = [],
        ao = [],
        so = [],
        co = [],
        lo = null,
        uo = document.body;
    $i.loadCriticalCss(), $i.loadConfig((function(e) {
        return xo(e)
    }));
    var fo = function(e) {
            je("call goToNextStep"), je("current step index is ".concat(Yi.getCurrentStepIndex()));
            var t = e;
            if (void 0 === t && (t = !0), Qi.setStepData(Yi.getCurrentStep()), Yi.hasNextStep()) {
                var n = Yi.getNextStep();
                wo(Qi.getStepData(), n);
                var r = Yi.getNextStep(!0);
                je("next step index is ".concat(Yi.getCurrentStepIndex())), r && (t ? vo(r, !0) : (Yi.setCurrentStepShow(), it("inProgress", Yi)), po())
            } else wo(Qi.getStepData()), Yi.resetCurrentStep(), Yi.getTour() && Yi.isButton() && To(0, !1), Xo()
        },
        po = function() {
            yr.placeTourTriggers(Yi.getTour().steps, Po, Ao)
        },
        go = function(e) {
            if (e.autoskip) {
                je("call autoSkip");
                var t = Yi.getNextStep(!1);
                t && (t.type === we || t.type === ke || document.querySelector(t.element)) ? t.trigger ? "appears" === t.trigger.type && document.querySelector(t.trigger.element) && fo() : fo() : t ? fo() : (De("The last step of your tour has been autoskiped. Closing tour... "), Xo())
            }
        },
        ho = function(e, t, n) {
            if (Le) {
                dt(".".concat(he.notification));
                var r = n ? "Step '".concat(e.title, "' can't be shown because the element <b>'").concat(e.trigger.element, '\' didn\'t appear in given time limit</b> so the trigger timed out. <a href="https://usetiful.freshdesk.com/support/solutions/articles/77000481466-triggering-by-element-appears" target="_blank">Learn more</a>') : "Step '".concat(e.title, "' can't be shown. Pointing element <b>'").concat(e.element, '\' doesn\'t exist on this page or is hidden</b>. <a href="https://usetiful.freshdesk.com/support/solutions/articles/77000488290-why-is-my-pointer-showing-in-right-bottom-corner-" target="_blank">Learn more</a>');
                gt("Alert", r, (function() {
                    var e = Ve(he.actions),
                        t = Je("Close tour");
                    t.addEventListener("click", (function(e) {
                        dt(".".concat(he.notification)), Xo(), e.stopImmediatePropagation(), e.preventDefault()
                    }), !1);
                    var n = Je("< Previous step");
                    return n.addEventListener("click", (function(e) {
                        dt(".".concat(he.notification)), Ko(), e.stopImmediatePropagation(), e.preventDefault()
                    }), !1), e.append(n), e.append(t), e
                }), he.alert)
            } else {
                De("constructAborted.Element ".concat(e.element, " doesn't exist")), wo(Qi.getStepData());
                var i = JSON.parse(JSON.stringify(e));
                i.type = ke, i.trigger = !1, i.actions || (i.actions = [{
                    type: "previous",
                    value: "<"
                }, {
                    type: "next",
                    value: ">"
                }]);
                var o = ct(i.name, Yi);
                Yi.setCurrentStepIndex(o), vo(i, !0)
            }
        },
        vo = function(e, t) {
            var n = Yi.getTour(),
                r = Be,
                i = Yi.isFree(),
                o = Ki(Ki({}, e), {}, {
                    title: We(e.title),
                    content: We(e.content)
                });
            if (je("constructStep: step index ".concat(Yi.getCurrentStepIndex(), ", display: ").concat(t, ", isFreeLicence: ").concat(i)), t && (Yi.setCurrentStepShow(), it("inProgress", Yi)), Qi.doesStepElementExist(o.name)) {
                var a = document.querySelector(".".concat(he.prefix, "-").concat(o.name));
                return ut(a) ? void Qi.showCurrentStep() : void 0
            }
            switch (o.type) {
                case we:
                    ta(o) ? yo(o, t, i, (function() {
                        Fo(o, t, i)
                    })) : Fo(o, t, i);
                    break;
                case ke:
                    ta(o) ? yo(o, t, i, (function() {
                        Ho(o, t, i)
                    })) : Ho(o, t, i);
                    break;
                case ye:
                    if (!no && null == mo(o, t, i)) return;
                    break;
                case Se:
                    if (r = Re, o.tourName && "" !== o.tourName && Zi.setTourTriggerToLocalStorage("self" !== o.tourName ? o.tourName : n.name), o.automatic && o.url) return hi(n.id, Yi.getCurrentStepIndex(), r, Yi.getCurrentStep().id), "self" !== o.tourName ? Xo(qe) : fo(!1), void mt(We(o.url), !1);
                    fe.checkURL(o.url) && "self" === o.tourName && fo();
                    break;
                case Te:
                    if (o.delay) {
                        r = Fe, je("constructStep: Delay step. Waiting for ".concat(o.delay, "sec."));
                        var s = 1e3 * o.delay;
                        window.usetiful_tourDelayTimeoutVar = setTimeout((function() {
                            fo(), window.usetiful_tourDelayTimeoutVar = void 0
                        }), s)
                    }
            }!t || at(n.name) && 0 !== Yi.getCurrentStepIndex() ? je("constructStep: reopen action is not send into report") : hi(n.id, Yi.getCurrentStepIndex(), r, Yi.getCurrentStep().id)
        },
        mo = function(e, t, n) {
            if (ht(e) && e.element) {
                var r = document.querySelector(e.element),
                    i = ta(e);
                if (!r || ut(r)) return e.autoskip ? (i ? (je("prepareStepPointer: Step has trigger elementAppears. Waiting on the step element..."), yo(e, t, n, (function() {
                    bo(e, t, n)
                }), (function() {
                    kt(), go(e)
                }))) : (je("prepareStepPointer: Step index ".concat(Yi.getCurrentStepIndex(), " will be skipped.")), kt(), go(e)), null) : (i || e.trigger ? (je("prepareStepPointer: Step has trigger elementAppears. Waiting on the step element..."), yo(e, t, n, (function() {
                    bo(e, t, n)
                })), no = !1) : (kt(), De("prepareStepPointer: We couldn't find element of step ".concat(e.name, ". Showing alternative solution...")), function(e, t, n, r) {
                    window.usetiful_tourPointerWaitingForElement = setTimeout((function() {
                        fe.checkElement(e.element) && !ut(document.querySelector(e.element)) ? t() : window.usetiful_tourPointerWaitingForElement = setTimeout((function() {
                            fe.checkElement(e.element) && !ut(document.querySelector(e.element)) ? t() : n()
                        }), r)
                    }), r)
                }(e, (function() {
                    return bo(e, t, n)
                }), (function() {
                    return ho(e, 0, !1)
                }), 1500)), null);
                bo(e, t, n)
            } else vt(e) && bo(e, t, n);
            return !0
        },
        bo = function(e, t, n) {
            _o(e, t, n), Uo(e)
        },
        yo = function(e, t, n, r, i) {
            if (je("WaitForStep called."), t) {
                kt();
                var o = new gr(e.trigger);
                if (o.triggerFunction = r, o.failFunction = i, o.altSolution = function() {
                        ho(e, 0, !0)
                    }, o.setAppearTrigger()) {
                    co.push(o.intervalId);
                    var a = Yi.getTour();
                    a.waiters && 0 !== a.waiters.length || (a.waiters = []), a.waiters.push(o.intervalId)
                }
            }
        },
        wo = function(e, t) {
            if (je("DestructStep: stepName ".concat(e.name)), Ne(e), Yi.setStepHide(), e) {
                !e.highlight || !t || t.highlight && "pointer" === t.type || kt();
                var n = new xr(e.progressOnClick, e.element, So);
                switch (e.type) {
                    case we:
                        Go(e.name);
                        break;
                    case ke:
                        Go(e.name), n.removeTrigger();
                        break;
                    case ye:
                        n.removeTrigger(), Qi.destroy(), Go(e.name)
                }
            }
        },
        ko = function() {
            if (Yi.hasNextStep()) {
                var e = Yi.getNextStep();
                if (e && ta(e)) {
                    var t = ct(e.name, Yi);
                    yo(e, true, Yi.isFree(), (function() {
                        To(t, true)
                    }), (function() {
                        e.autoskip ? (wo(Yi.getCurrentStep(), e), kt(), Yi.setCurrentStepIndex(t), go(e)) : ho(e, Yi.isFree(), !1)
                    }))
                }
            }
        },
        So = function(e) {
            for (var t = [e.target, e.target.parentElement, e.target.parentElement.parentElement], n = 0; n < t.length; n += 1) {
                var r = t[n];
                if (r && r.classList.contains(he.buttonClose)) return
            }
            je("elementTrigger: trigger called", !0);
            var i = Yi.getCurrentStep();
            !(!!i && i.runDefaults) && e && (De("elementTrigger: Preventing default ".concat(e.type, " action.")), e.preventDefault()), fo()
        },
        To = function(e, t, n) {
            wt(), je("JumpTo stepId: ".concat(e), !0);
            var r = Yi.getTour(),
                i = Yi.getCurrentStepIndex(),
                o = lt(e, Yi),
                a = ct(e, Yi);
            if (Yi.getCurrentStep().name !== e && Yi.isStepShow(i) && (je("JumpTo: Previous step is still visible so need to be destructed."), wo(Yi.getCurrentStep(), o)), null !== o) {
                var s = ".".concat(he.prefix, "-").concat(o.name),
                    c = document.querySelector(s);
                if (Yi.isStepShow(a) && c) return;
                if (Qi.setStepData(Yi.getCurrentStep()), null !== n && n && o.type === Se && a > 0) {
                    je("JumpTo: Current step is redirect. Moving to the previous step."), je("JumpTo tour:".concat(o.tourName));
                    var l = Yi.getPreviousStep();
                    o = lt(l.name, Yi), a -= 1
                }
                je("JumpTo: ".concat(o.name, ", display:").concat(t)), "number" == typeof a && (t && !at(r.name) && (Qi.getStepData() && Yi.getCurrentStepIndex() !== a ? wo(Qi.getStepData(), o) : wo(Yi.getStep(ot(r.name)), o)), Yi.setCurrentStepIndex(a), t && vo(o, t), po())
            } else je("JumpTo: Step not found")
        },
        Eo = function(e, t) {
            if (wt(), je("toursInit: Existing timeouts removed!"), je("toursInit: Start loading tours"), void 0 !== e) {
                Ne(e), ro = [], io = e, je("toursInit: Customer's license: ".concat(t)), Yi.setLicense(t), fe.refreshURL(), dt(".".concat(he.buttonMain)), dt(".".concat(he.notification)), Yo(!0), co.length > 0 && (! function(e) {
                    je("Cleaning ".concat(e.length, " intervals...")), e.forEach((function(e) {
                        clearInterval(e)
                    }))
                }(co), co = []), !Yi.isFirstStep() && Yi.isTour() && Yi.getCurrentStep() && wo(Yi.getCurrentStep()), Zi.hasTourTriggerInUrl() && (Zi.removeAllTriggersFromLocalStorage(), Zi.setTourTriggerToLocalStorage(Zi.tourTriggerFromURL));
                var n = setInterval((function() {
                    var r = null;
                    if (je("Checking available tours..."), 0 === ro.length) {
                        var i, o = Vi(e);
                        try {
                            for (o.s(); !(i = o.n()).done;) {
                                var a = i.value,
                                    s = a.id,
                                    c = a.name,
                                    l = a.targets,
                                    u = a.targetOperator;
                                (Zi.hasTourTrigger(s) || Zi.hasTourTrigger(c)) && null === r && (r = a), jo(l, u) && ro.push(a)
                            }
                        } catch (e) {
                            o.e(e)
                        } finally {
                            o.f()
                        }
                        0 === ro.length && lo.isEnabledNewChecklists() && lo.loadChecklist((function() {
                            clearInterval(n)
                        }))
                    } else clearInterval(n), Oo(t);
                    null !== r && (clearInterval(n), Io(r, t, !0))
                }), 500);
                co.push(n)
            } else Ne("toursInit: There is no tour here")
        },
        xo = function(e) {
            var t = e.tours,
                n = e.smartTipsGroups,
                r = e.checklists,
                i = e.licence;
            Eo(t, i),
                function(e, t) {
                    window.usetiful_smartTipsAddedEvents && window.usetiful_smartTipsAddedEvents.length && window.usetiful_smartTipsAddedEvents.forEach((function(e) {
                        document.removeEventListener(e.eventName, e.eventFunction, !0)
                    }));
                    var n = fi(ui);
                    if (wi = "free" === t, je("Start loading smart tips."), void 0 !== e) {
                        je("Checking available smart tips...");
                        var r, i = mi(e);
                        try {
                            var o = function() {
                                var e = r.value,
                                    t = e.name,
                                    i = e.targets,
                                    o = e.tips,
                                    a = e.theme,
                                    s = e.targetOperator;
                                n.loadTheme(a);
                                var c = 0,
                                    l = setInterval((function() {
                                        if (c += 1, fe.checkByTargets(bt(i), s)) {
                                            var e, n = mi(o);
                                            try {
                                                for (n.s(); !(e = n.n()).done;) {
                                                    var r = e.value;
                                                    ki(r)
                                                }
                                            } catch (e) {
                                                n.e(e)
                                            } finally {
                                                n.f()
                                            }
                                            clearInterval(l)
                                        }
                                        c >= 60 && (clearInterval(l), je("smart tip ".concat(t, " stop loading (limit reached)")))
                                    }), 500)
                            };
                            for (i.s(); !(r = i.n()).done;) o()
                        } catch (e) {
                            i.e(e)
                        } finally {
                            i.f()
                        }
                    } else je("There is no smart tips here")
                }(n, i), lo = new Wi(r, Lo)
        },
        Oo = function(e) {
            ea(ro);
            je("initAvailableTours: List of available tours for this page:", !0), Ne(ro), je("initAvailableTours: List of StepTriggersControl:"), Ne(Zi.getTriggers());
            var t, n = null,
                r = null,
                i = !1,
                o = !1,
                a = Vi(ro);
            try {
                for (a.s(); !(t = a.n()).done;) {
                    var s = t.value,
                        c = s.name,
                        l = s.autoplay,
                        u = s.showEverytime;
                    st(c) === me && (null == r ? (r = s, o = !0) : o = !1), l && (st(c) !== be || u) && (null == n ? (n = s, i = !0) : i = !1)
                }
            } catch (e) {
                a.e(e)
            } finally {
                a.f()
            }
            return o && r ? (je("initAvailableTours: There is one tour that has state in progress"), void Io(r, e, !0)) : i && n ? (je("initAvailableTours: There is only one autoplay ready tour"), void Io(n, e, !0)) : (ro.length > 0 ? (yr.placeInitialTriggers(ro, Lo, Ao), 1 === ro.length ? (je("There is only one tour that can be run"), (ro[0].showEverytime || st(ro[0].name) !== be || ro[0].button) && Io(ro[0], e)) : lo.isEnabledNewChecklists() || ($i.loadTheme(ro[0].theme, (function() {
                return Qi.update()
            })), eo.setAvailableTours(ro), eo.isTourSelection() && !to.isChecklistDismiss() && $o())) : De("initAvailableTours: No tour available on this page."), void(lo.isEnabledNewChecklists() && lo.loadChecklist()))
        },
        Co = function() {
            var e, t = "Usetiful tours",
                n = "",
                r = Vi(ro);
            try {
                for (r.s(); !(e = r.n()).done;) {
                    var i = e.value;
                    i.button && (i.buttonLabel && "" !== i.buttonLabel ? "" === n ? n = i.buttonLabel : i.buttonLabel !== n && (n = t) : n = t)
                }
            } catch (e) {
                r.e(e)
            } finally {
                r.f()
            }
            return n
        },
        Lo = function(e, t, n) {
            var r = na(t);
            if (void 0 !== r && r) {
                je("runTourOnClick called"), je(r.name);
                var i = Yi.getLicense();
                lo.hideTourSelection(), "inProgress" !== st(r.name) && (! function(e) {
                    je("isAnyTourRunning called.");
                    var t = window.localStorage.getItem("tours"),
                        n = JSON.parse(t);
                    if (null != t)
                        for (var r = function() {
                                var t = Ze(o[i], 2),
                                    n = t[0],
                                    r = t[1],
                                    a = r.name;
                                if (n && r && r.state === me && e.find((function(e) {
                                        return e.name === a
                                    }))) return {
                                    v: !0
                                }
                            }, i = 0, o = Object.entries(n); i < o.length; i++) {
                            var a = r();
                            if ("object" === nt(a)) return a.v
                        }
                    return !1
                }(ro) ? Io(r, i, !0, n) : ft("Switch to another tour", "Do you want to switch to the tour '".concat(r.name, "'?"), "Yes", "No", (function() {
                    Xo(), lo.hideTourSelection(), Io(r, i, !0, n)
                }))), e && (e.stopImmediatePropagation(), e.preventDefault())
            }
        },
        Io = function(e, t, n, r) {
            je("runTour: Starting tour = ".concat(e.name, ", display = ").concat(n, ", licence = ").concat(t), !0), Ne(e);
            var i = e.name,
                o = e.steps,
                a = e.theme,
                s = e.showEverytime,
                c = e.autoplay,
                l = !1;
            n ? c = n : s || (l = "closed" === st(i)), $i.loadTheme(a, (function() {
                return Qi.update()
            })), Yi.setTour(e);
            var u = ot(i),
                d = lt(u, Yi);
            d && d.type === Se && u > 0 && "self" !== d.tourName && (je("runTour: Current step is redirect. Moving to the previous step."), je("runTour: ".concat(d.tourName)), u -= 1), !r && Yi.isButton() && (eo.setAvailableTours(ro), eo.prepareMainButton(e.buttonLabel, Zo)), l || (o && yr.placeTourTriggers(o, Po, Ao), n && (Yi.setCurrentStepIndex(u), Uo(d)), ta(d) ? yo(d, n, Yi.isFree(), (function() {
                To(u, n)
            })) : To(u, c))
        },
        Po = function(e) {
            je("triggerEvent called with param ".concat(e), !0), "" !== e && To(e, !0)
        },
        Ao = function(e) {
            je("reverseTriggerEvent called with param ".concat(e));
            var t = lt(e, Yi);
            wo(t)
        };
    $i.addCloseListenersOnAnchors((function(e) {
        je("pageLeftListener: User clicked on link that may lead to leaving the page.");
        var t = e.target || e.srcElement,
            n = t;
        if (Yn(n, "a") || (n = function(e, t) {
                if (!e || !Gn(e, "parentElement")) return null;
                var n = e;
                do {
                    n = n.parentElement
                } while (n && Gn(n, "parentElement") && !Yn(n, t));
                return n && Gn(n, "tagName") && n.tagName.toLowerCase() === t ? n : null
            }(t, "a")), je("pageLeftListener: Checking the element:"), n ? (Ne(n), De("pageLeftListener: Element is among active triggers = ".concat(null !== yr.searchInActiveTriggers("click", n))), De("pageLeftListener: Element has ProgressOnClick trigger = ".concat(null !== yr.hasProgressOnClickTrigger(n)))) : De("pageLeftListener: Element isn't anchor"), !n || yr.searchInActiveTriggers("click", n) || yr.hasProgressOnClickTrigger(n) || "_blank" === n.target) je("pageLeftListener: Element isn't anchor, or is among active triggers or has progressOnClick event. ");
        else {
            var r, i = n.getAttribute("href");
            je("pageLeftListener: Clicked on element with href ".concat(i), !0), !i || (["", "/", "#"].indexOf(r = i) > -1 || window.location.href.indexOf(r) > -1 && r.indexOf("#") > -1 || r.indexOf("javascript") > -1) ? je("Target url leads to the same page or contains javascript. Tour continues.") : Xo(qe)
        }
    }));
    var jo = function(e, t) {
            return fe.checkByTargets(bt(e), t)
        },
        Do = function(e) {
            var t = Yi.getTour(),
                n = Yi.isFree(),
                r = ot(t.name);
            return Ye(e, t, r, n)
        },
        No = function(e) {
            var t = ze(e.value);
            switch (e.type) {
                case "next":
                    t.addEventListener("click", (function() {
                        fo()
                    })), t.classList.add(he.button), t.classList.add(he.buttonPrimary);
                    break;
                case "previous":
                    t.addEventListener("click", (function() {
                        Ko()
                    })), t.classList.add(he.button);
                    break;
                case "goto":
                    t.addEventListener("click", (function() {
                        mt(e.url, !0)
                    })), t.classList.add(he.button);
                    break;
                case "gototour":
                    t.addEventListener("click", (function() {
                        e.tourName && "self" !== e.tourName ? (Zi.removeTriggerFromLocalStorage(Yi.getTour().id), Zi.removeTriggerFromLocalStorage(Yi.getTour().name), Zi.setTourTriggerToLocalStorage(e.tourName), Xo(qe)) : "self" === e.tourName && (Zi.setTourTriggerToLocalStorage(Yi.getTour().name), fo(!1)), e.url && mt(e.url, !1)
                    })), t.classList.add(he.button), t.classList.add(he.buttonPrimary);
                    break;
                case "close":
                    t.addEventListener("click", (function() {
                        Xo()
                    })), t.classList.add(he.button);
                    break;
                default:
                    t.addEventListener("click", (function() {
                        To(e.to, !0)
                    })), t.classList.add(he.button)
            }
            return t
        },
        Mo = function(e, t) {
            if (e.feedback) {
                var n = new Ct(Yi.getTour().id, e.name, Ce);
                t.appendChild(n.getEmojies()), n.init()
            }
        },
        Bo = function() {
            var e = ze('<svg xmlns="http://www.w3.org/2000/svg"><path stroke="#000" stroke-width="2" d="M1 16L16 1M1 1l15 15"/></svg>', he.buttonClose);
            return e.addEventListener("click", (function() {
                Xo()
            })), e
        },
        Ro = function(e, t, n) {
            var r = t.title,
                i = t.publicTitle,
                o = t.content,
                a = t.progressOnClick,
                s = t.actions,
                c = t.alignment,
                l = "" !== r && !0 === i,
                u = e,
                d = Ve(he.content),
                f = Ke(3, r, l);
            l || d.classList.add(he.contentWithoutTitle), d.innerHTML = o, u.appendChild(Bo()), f && u.appendChild(f), Yi.isProgress() && u.appendChild(Do(t)), u.appendChild(d), Mo(t, u), (!a || "button" === a && s.length > 0) && u.appendChild(qo(t));
            var p = Yi.getTour().progressType;
            u.appendChild(Ge(c, s.length, p)), n && u.appendChild($e())
        },
        Fo = function(e, t, n) {
            var r = Ve(he.modal);
            t && r.classList.add(he.visible), r.classList.add("".concat(he.prefix, "-").concat(e.name));
            var i = Ve(he.modalInner),
                o = uo.appendChild(r).appendChild(i);
            Ro(o, e, n), t && window.scrollTo({
                top: 0
            })
        },
        qo = function(e) {
            var t = Ve(he.actions);
            null !== e.alignment && t.classList.add(e.alignment);
            var n, r = Vi(e.actions);
            try {
                for (r.s(); !(n = r.n()).done;) {
                    var i = n.value;
                    t.appendChild(No(i))
                }
            } catch (e) {
                r.e(e)
            } finally {
                r.f()
            }
            return t
        },
        Ho = function(e, t, n) {
            var r = Ve(he.slideout);
            r.classList.add(e.position, "".concat(he.prefix, "-").concat(e.name)), t && r.classList.add(he.visible);
            var i = Ve(he.slideoutInner),
                o = uo.appendChild(r).appendChild(i);
            Ro(o, e, n), Uo(e)
        },
        Uo = function(e) {
            var t = new xr(e.progressOnClick, e.element, So, ko);
            e.type === ye && vt(e) && (t.pointerSelector = "body"), t.placeTrigger()
        },
        _o = function(e, t, n) {
            if (e && e.element) {
                var r = document.querySelector(e.element);
                Qi.setTargetElement(r)
            }
            if (!ht(e) || Qi.getTargetElement()) {
                var i = "" !== (null == e ? void 0 : e.title) && !0 === (null == e ? void 0 : e.publicTitle),
                    o = Ke(4, e.title, i),
                    a = null;
                Yi.isProgress() && (a = Do(e));
                var s = Yi.getTour().progressType,
                    c = Xe(e.name, n, e.content, o, a, e.alignment, e.actions.length, s, Bo(), (function(t) {
                        Mo(e, t), (!e.progressOnClick || "button" === e.progressOnClick) && e.actions.length > 0 && t.appendChild(qo(e))
                    }));
                Jo(), window.onresize = function() {
                    zo(e, c)
                };
                var l = setInterval((function() {
                    var e = Qi.getStepElement();
                    Qi && e && e.offsetHeight > 0 && (Wo(), clearInterval(l))
                }), 100)
            } else je("Element doesn't exist")
        },
        Wo = function() {
            je("scroll bubble into view");
            try {
                if (Vo()) {
                    var e, t = "bottom" === Qi.getStepElement().getAttribute("data-popper-placement") ? "end" : "start";
                    null === (e = Qi.getStepElement()) || void 0 === e || e.scrollIntoView({
                        behavior: "smooth",
                        block: t
                    })
                } else {
                    var n;
                    null === (n = Qi.getTargetElement()) || void 0 === n || n.scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    })
                }
            } catch (e) {}
        },
        Vo = function() {
            return Qi.getStepElement() && Qi.getTargetElement() && Qi.getTargetElement().offsetHeight + Qi.getStepElement().offsetHeight > .9 * window.innerHeight
        },
        zo = function(e, t) {
            ht(e) && Qi.getTargetElement() && t && !ut(Qi.getTargetElement()) && !ut(t) && Wo()
        },
        Jo = function() {
            Qi.setStepData(Yi.getCurrentStep());
            var e = Qi.getStepData(),
                t = ".".concat(he.prefix, "-").concat(e.name);
            return e.type === ye && fe.checkElement(t) ? (je("positionPointerElement: Checking position: ".concat(e.name)), ht(e) && fe.checkElement(e.element) && Qi.setTargetElement(document.querySelector(e.element)), Qi.setStepElement(document.querySelector(t)), Qi.create()) : (je("positionPointerElement: Element disappeared..."), !1)
        },
        Ko = function e() {
            if (je("call goToPreviousStep"), Yi.hasPreviousStep()) {
                var t = Yi.getPreviousStep();
                wo(Yi.getCurrentStep(), t);
                var n = Yi.getPreviousStep(!0),
                    r = "" !== n.element ? document.querySelector(n.element) : null;
                if ((!r || ut(r)) && n.autoskip || n.type === Te) e();
                else {
                    var i = ct(n.name, Yi);
                    Yi.setCurrentStepIndex(i), vo(n, !0)
                }
            } else wo(Yi.getCurrentStep()), To(0, !1)
        },
        Xo = function(e) {
            var t, n = e,
                r = Yi.getTour();
            r && st(r.name) === me ? (je("closeTour: tour: ".concat(r.name, ", with reason: ").concat(e), !0), n || (n = He), hi(r.id, Yi.getCurrentStepIndex(), n, Yi.getCurrentStep().id), (t = document.querySelectorAll(".".concat(he.overlay))) && Array.prototype.forEach.call(t, (function(e) {
                e.parentNode.removeChild(e)
            })), Yo(!0), r.waiters && r.waiters.length > 1 && r.waiters.forEach((function(e) {
                clearInterval(e)
            })), wo(Yi.getCurrentStep()), (e === qe && !Yi.getCurrentStep().tourName || void 0 === e || Yi.getCurrentStep().type === Se && "self" !== Yi.getCurrentStep().tourName) && (Zi.removeTriggerFromLocalStorage(r.name), Zi.removeTriggerFromLocalStorage(r.id)), !Yi.isLastStep() && r.rememberLastStep || Yi.resetCurrentStep(), it("closed", Yi), je("closeTour: ".concat(r.name, " has been closed."), !0), ea(ro), eo.setAvailableTours(ro), eo.updateCount(ao.length), lo.isEnabledNewChecklists() && lo.loadChecklist(), !lo.isEnabledNewChecklists() && eo.isTourSelection() && Ui() ? eo.getButtonElement() ? Qo() : $o() : yr.placeInitialTriggers(ro, Lo, Ao)) : je("call closeTour but there is no running tour at this moment.")
        },
        $o = function() {
            var e;
            eo.prepareMainButton((e = "".concat(Co()), ao.length > 0 && (e += '<span class="'.concat(he.badge, '">').concat(ao.length, "</span>")), e), Qo), Ui() && Qo()
        },
        Go = function(e) {
            je("destructElement: Removing elements of the step ".concat(e, "...")), document.querySelectorAll(".".concat(he.prefix, "-").concat(e)).forEach((function(e) {
                e.parentElement.removeChild(e)
            }))
        },
        Yo = function(e) {
            je("triggersClearance: Removing triggers from window.usetiful_activeTriggersOnElements..."), window.usetiful_activeTriggersOnElements.length > 0 && (yr.removeAllTriggers(e), e && window.usetiful_activeTriggersOnElements.length > 0 && De("triggersClearance: No all active triggers were removed"))
        },
        Qo = function() {
            var e = {};
            e.name = Co();
            var t = [];
            ro.map((function(e) {
                return t.push(Ki(Ki({}, e), {}, {
                    tourId: e.id,
                    title: e.name,
                    onClickAction: "startTour"
                }))
            })), e.items = t, e.dismiss = !0, e.progressBar = !0, e.labels = {
                id: "",
                button: "Get Started",
                dismiss: {
                    text: "Dismiss checklist",
                    description: "Are you sure you want to dismiss this list?",
                    cancel: "Keep it",
                    confirm: "Dismiss it"
                }
            }, _i(e, Lo, (function() {
                return to.setDismissValue(!0)
            }))
        },
        Zo = function() {
            To(Yi.getCurrentStepIndex(), !0, !0)
        },
        ea = function(e) {
            if (e) {
                oo = [], so = [], ao = [];
                var t, n = Vi(e);
                try {
                    for (n.s(); !(t = n.n()).done;) {
                        var r = t.value;
                        switch (st(r.name)) {
                            case "closed":
                                oo.push(r);
                                break;
                            case "inProgress":
                                so.push(r);
                                break;
                            default:
                                ao.push(r)
                        }
                    }
                } catch (e) {
                    n.e(e)
                } finally {
                    n.f()
                }
            }
        },
        ta = function(e) {
            return (null == e ? void 0 : e.trigger) && "appears" === (null == e ? void 0 : e.trigger.type) && "" !== (null == e ? void 0 : e.trigger.element)
        },
        na = function(e) {
            return io.find((function(t) {
                return t.id === e
            }))
        };
    Gi.init()
})();