/*! For license information please see 468.642adbaa.js.LICENSE.txt */
"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
    [468], {
        36468: (t, e, i) => {
            i.d(e, {
                u: () => ni
            });
            var s = {};
            i.r(s), i.d(s, {
                afterMain: () => n.wX,
                afterRead: () => n.r5,
                afterWrite: () => n.MS,
                applyStyles: () => o.Z,
                arrow: () => r.Z,
                auto: () => n.d7,
                basePlacements: () => n.mv,
                beforeMain: () => n.XM,
                beforeRead: () => n.N7,
                beforeWrite: () => n.iv,
                bottom: () => n.I,
                clippingParents: () => n.zV,
                computeStyles: () => a.Z,
                createPopper: () => p.fi,
                createPopperBase: () => _.fi,
                createPopperLite: () => b,
                detectOverflow: () => f.Z,
                end: () => n.ut,
                eventListeners: () => l.Z,
                flip: () => c.Z,
                hide: () => h.Z,
                left: () => n.t$,
                main: () => n.DH,
                modifierPhases: () => n.xs,
                offset: () => d.Z,
                placements: () => n.Ct,
                popper: () => n.k5,
                popperGenerator: () => _.kZ,
                popperOffsets: () => u.Z,
                preventOverflow: () => g.Z,
                read: () => n.ij,
                reference: () => n.YP,
                right: () => n.F2,
                start: () => n.BL,
                top: () => n.we,
                variationPlacements: () => n.bw,
                viewport: () => n.Pj,
                write: () => n.cW
            });
            var n = i(87701),
                o = i(17824),
                r = i(66896),
                a = i(36531),
                l = i(82372),
                c = i(45228),
                h = i(19892),
                d = i(82122),
                u = i(77421),
                g = i(43920),
                _ = i(38240),
                f = i(9966),
                p = i(20804),
                m = [l.Z, u.Z, a.Z, o.Z],
                b = (0, _.kZ)({
                    defaultModifiers: m
                });
            const v = "transitionend",
                y = t => {
                    let e = t.getAttribute("data-bs-target");
                    if (!e || "#" === e) {
                        let i = t.getAttribute("href");
                        if (!i || !i.includes("#") && !i.startsWith(".")) return null;
                        i.includes("#") && !i.startsWith("#") && (i = `#${i.split("#")[1]}`), e = i && "#" !== i ? i.trim() : null
                    }
                    return e
                },
                E = t => {
                    const e = y(t);
                    return e && document.querySelector(e) ? e : null
                },
                w = t => {
                    const e = y(t);
                    return e ? document.querySelector(e) : null
                },
                A = t => {
                    t.dispatchEvent(new Event(v))
                },
                T = t => !(!t || "object" != typeof t) && (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType),
                C = t => T(t) ? t.jquery ? t[0] : t : "string" == typeof t && t.length > 0 ? document.querySelector(t) : null,
                k = (t, e, i) => {
                    Object.keys(i).forEach((s => {
                        const n = i[s],
                            o = e[s],
                            r = o && T(o) ? "element" : null == (a = o) ? `${a}` : {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase();
                        var a;
                        if (!new RegExp(n).test(r)) throw new TypeError(`${t.toUpperCase()}: Option "${s}" provided type "${r}" but expected type "${n}".`)
                    }))
                },
                L = t => !(!T(t) || 0 === t.getClientRects().length) && "visible" === getComputedStyle(t).getPropertyValue("visibility"),
                S = t => !t || t.nodeType !== Node.ELEMENT_NODE || (!!t.classList.contains("disabled") || (void 0 !== t.disabled ? t.disabled : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled"))),
                N = t => {
                    if (!document.documentElement.attachShadow) return null;
                    if ("function" == typeof t.getRootNode) {
                        const e = t.getRootNode();
                        return e instanceof ShadowRoot ? e : null
                    }
                    return t instanceof ShadowRoot ? t : t.parentNode ? N(t.parentNode) : null
                },
                O = () => {},
                D = t => {
                    t.offsetHeight
                },
                I = () => {
                    const {
                        jQuery: t
                    } = window;
                    return t && !document.body.hasAttribute("data-bs-no-jquery") ? t : null
                },
                P = [],
                M = () => "rtl" === document.documentElement.dir,
                x = t => {
                    var e;
                    e = () => {
                        const e = I();
                        if (e) {
                            const i = t.NAME,
                                s = e.fn[i];
                            e.fn[i] = t.jQueryInterface, e.fn[i].Constructor = t, e.fn[i].noConflict = () => (e.fn[i] = s, t.jQueryInterface)
                        }
                    }, "loading" === document.readyState ? (P.length || document.addEventListener("DOMContentLoaded", (() => {
                        P.forEach((t => t()))
                    })), P.push(e)) : e()
                },
                j = t => {
                    "function" == typeof t && t()
                },
                H = (t, e, i = !0) => {
                    if (!i) return void j(t);
                    const s = (t => {
                        if (!t) return 0;
                        let {
                            transitionDuration: e,
                            transitionDelay: i
                        } = window.getComputedStyle(t);
                        const s = Number.parseFloat(e),
                            n = Number.parseFloat(i);
                        return s || n ? (e = e.split(",")[0], i = i.split(",")[0], 1e3 * (Number.parseFloat(e) + Number.parseFloat(i))) : 0
                    })(e) + 5;
                    let n = !1;
                    const o = ({
                        target: i
                    }) => {
                        i === e && (n = !0, e.removeEventListener(v, o), j(t))
                    };
                    e.addEventListener(v, o), setTimeout((() => {
                        n || A(e)
                    }), s)
                },
                $ = (t, e, i, s) => {
                    let n = t.indexOf(e);
                    if (-1 === n) return t[!i && s ? t.length - 1 : 0];
                    const o = t.length;
                    return n += i ? 1 : -1, s && (n = (n + o) % o), t[Math.max(0, Math.min(n, o - 1))]
                },
                B = /[^.]*(?=\..*)\.|.*/,
                R = /\..*/,
                z = /::\d+$/,
                F = {};
            let W = 1;
            const q = {
                    mouseenter: "mouseover",
                    mouseleave: "mouseout"
                },
                U = /^(mouseenter|mouseleave)/i,
                K = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);

            function V(t, e) {
                return e && `${e}::${W++}` || t.uidEvent || W++
            }

            function X(t) {
                const e = V(t);
                return t.uidEvent = e, F[e] = F[e] || {}, F[e]
            }

            function Y(t, e, i = null) {
                const s = Object.keys(t);
                for (let n = 0, o = s.length; n < o; n++) {
                    const o = t[s[n]];
                    if (o.originalHandler === e && o.delegationSelector === i) return o
                }
                return null
            }

            function Z(t, e, i) {
                const s = "string" == typeof e,
                    n = s ? i : e;
                let o = J(t);
                return K.has(o) || (o = t), [s, n, o]
            }

            function Q(t, e, i, s, n) {
                if ("string" != typeof e || !t) return;
                if (i || (i = s, s = null), U.test(e)) {
                    const t = t => function(e) {
                        if (!e.relatedTarget || e.relatedTarget !== e.delegateTarget && !e.delegateTarget.contains(e.relatedTarget)) return t.call(this, e)
                    };
                    s ? s = t(s) : i = t(i)
                }
                const [o, r, a] = Z(e, i, s), l = X(t), c = l[a] || (l[a] = {}), h = Y(c, r, o ? i : null);
                if (h) return void(h.oneOff = h.oneOff && n);
                const d = V(r, e.replace(B, "")),
                    u = o ? function(t, e, i) {
                        return function s(n) {
                            const o = t.querySelectorAll(e);
                            for (let {
                                    target: r
                                } = n; r && r !== this; r = r.parentNode)
                                for (let a = o.length; a--;)
                                    if (o[a] === r) return n.delegateTarget = r, s.oneOff && tt.off(t, n.type, e, i), i.apply(r, [n]);
                            return null
                        }
                    }(t, i, s) : function(t, e) {
                        return function i(s) {
                            return s.delegateTarget = t, i.oneOff && tt.off(t, s.type, e), e.apply(t, [s])
                        }
                    }(t, i);
                u.delegationSelector = o ? i : null, u.originalHandler = r, u.oneOff = n, u.uidEvent = d, c[d] = u, t.addEventListener(a, u, o)
            }

            function G(t, e, i, s, n) {
                const o = Y(e[i], s, n);
                o && (t.removeEventListener(i, o, Boolean(n)), delete e[i][o.uidEvent])
            }

            function J(t) {
                return t = t.replace(R, ""), q[t] || t
            }
            const tt = {
                    on(t, e, i, s) {
                        Q(t, e, i, s, !1)
                    },
                    one(t, e, i, s) {
                        Q(t, e, i, s, !0)
                    },
                    off(t, e, i, s) {
                        if ("string" != typeof e || !t) return;
                        const [n, o, r] = Z(e, i, s), a = r !== e, l = X(t), c = e.startsWith(".");
                        if (void 0 !== o) {
                            if (!l || !l[r]) return;
                            return void G(t, l, r, o, n ? i : null)
                        }
                        c && Object.keys(l).forEach((i => {
                            ! function(t, e, i, s) {
                                const n = e[i] || {};
                                Object.keys(n).forEach((o => {
                                    if (o.includes(s)) {
                                        const s = n[o];
                                        G(t, e, i, s.originalHandler, s.delegationSelector)
                                    }
                                }))
                            }(t, l, i, e.slice(1))
                        }));
                        const h = l[r] || {};
                        Object.keys(h).forEach((i => {
                            const s = i.replace(z, "");
                            if (!a || e.includes(s)) {
                                const e = h[i];
                                G(t, l, r, e.originalHandler, e.delegationSelector)
                            }
                        }))
                    },
                    trigger(t, e, i) {
                        if ("string" != typeof e || !t) return null;
                        const s = I(),
                            n = J(e),
                            o = e !== n,
                            r = K.has(n);
                        let a, l = !0,
                            c = !0,
                            h = !1,
                            d = null;
                        return o && s && (a = s.Event(e, i), s(t).trigger(a), l = !a.isPropagationStopped(), c = !a.isImmediatePropagationStopped(), h = a.isDefaultPrevented()), r ? (d = document.createEvent("HTMLEvents"), d.initEvent(n, l, !0)) : d = new CustomEvent(e, {
                            bubbles: l,
                            cancelable: !0
                        }), void 0 !== i && Object.keys(i).forEach((t => {
                            Object.defineProperty(d, t, {
                                get: () => i[t]
                            })
                        })), h && d.preventDefault(), c && t.dispatchEvent(d), d.defaultPrevented && void 0 !== a && a.preventDefault(), d
                    }
                },
                et = new Map,
                it = {
                    set(t, e, i) {
                        et.has(t) || et.set(t, new Map);
                        const s = et.get(t);
                        s.has(e) || 0 === s.size ? s.set(e, i) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(s.keys())[0]}.`)
                    },
                    get: (t, e) => et.has(t) && et.get(t).get(e) || null,
                    remove(t, e) {
                        if (!et.has(t)) return;
                        const i = et.get(t);
                        i.delete(e), 0 === i.size && et.delete(t)
                    }
                };
            class st {
                constructor(t) {
                    (t = C(t)) && (this._element = t, it.set(this._element, this.constructor.DATA_KEY, this))
                }
                dispose() {
                    it.remove(this._element, this.constructor.DATA_KEY), tt.off(this._element, this.constructor.EVENT_KEY), Object.getOwnPropertyNames(this).forEach((t => {
                        this[t] = null
                    }))
                }
                _queueCallback(t, e, i = !0) {
                    H(t, e, i)
                }
                static getInstance(t) {
                    return it.get(C(t), this.DATA_KEY)
                }
                static getOrCreateInstance(t, e = {}) {
                    return this.getInstance(t) || new this(t, "object" == typeof e ? e : null)
                }
                static get VERSION() {
                    return "5.1.3"
                }
                static get NAME() {
                    throw new Error('You have to implement the static method "NAME", for each component!')
                }
                static get DATA_KEY() {
                    return `bs.${this.NAME}`
                }
                static get EVENT_KEY() {
                    return `.${this.DATA_KEY}`
                }
            }
            const nt = (t, e = "hide") => {
                const i = `click.dismiss${t.EVENT_KEY}`,
                    s = t.NAME;
                tt.on(document, i, `[data-bs-dismiss="${s}"]`, (function(i) {
                    if (["A", "AREA"].includes(this.tagName) && i.preventDefault(), S(this)) return;
                    const n = w(this) || this.closest(`.${s}`);
                    t.getOrCreateInstance(n)[e]()
                }))
            };
            class ot extends st {
                static get NAME() {
                    return "alert"
                }
                close() {
                    if (tt.trigger(this._element, "close.bs.alert").defaultPrevented) return;
                    this._element.classList.remove("show");
                    const t = this._element.classList.contains("fade");
                    this._queueCallback((() => this._destroyElement()), this._element, t)
                }
                _destroyElement() {
                    this._element.remove(), tt.trigger(this._element, "closed.bs.alert"), this.dispose()
                }
                static jQueryInterface(t) {
                    return this.each((function() {
                        const e = ot.getOrCreateInstance(this);
                        if ("string" == typeof t) {
                            if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                            e[t](this)
                        }
                    }))
                }
            }
            nt(ot, "close"), x(ot);
            const rt = '[data-bs-toggle="button"]';
            class at extends st {
                static get NAME() {
                    return "button"
                }
                toggle() {
                    this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"))
                }
                static jQueryInterface(t) {
                    return this.each((function() {
                        const e = at.getOrCreateInstance(this);
                        "toggle" === t && e[t]()
                    }))
                }
            }

            function lt(t) {
                return "true" === t || "false" !== t && (t === Number(t).toString() ? Number(t) : "" === t || "null" === t ? null : t)
            }

            function ct(t) {
                return t.replace(/[A-Z]/g, (t => `-${t.toLowerCase()}`))
            }
            tt.on(document, "click.bs.button.data-api", rt, (t => {
                t.preventDefault();
                const e = t.target.closest(rt);
                at.getOrCreateInstance(e).toggle()
            })), x(at);
            const ht = {
                    setDataAttribute(t, e, i) {
                        t.setAttribute(`data-bs-${ct(e)}`, i)
                    },
                    removeDataAttribute(t, e) {
                        t.removeAttribute(`data-bs-${ct(e)}`)
                    },
                    getDataAttributes(t) {
                        if (!t) return {};
                        const e = {};
                        return Object.keys(t.dataset).filter((t => t.startsWith("bs"))).forEach((i => {
                            let s = i.replace(/^bs/, "");
                            s = s.charAt(0).toLowerCase() + s.slice(1, s.length), e[s] = lt(t.dataset[i])
                        })), e
                    },
                    getDataAttribute: (t, e) => lt(t.getAttribute(`data-bs-${ct(e)}`)),
                    offset(t) {
                        const e = t.getBoundingClientRect();
                        return {
                            top: e.top + window.pageYOffset,
                            left: e.left + window.pageXOffset
                        }
                    },
                    position: t => ({
                        top: t.offsetTop,
                        left: t.offsetLeft
                    })
                },
                dt = {
                    find: (t, e = document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(e, t)),
                    findOne: (t, e = document.documentElement) => Element.prototype.querySelector.call(e, t),
                    children: (t, e) => [].concat(...t.children).filter((t => t.matches(e))),
                    parents(t, e) {
                        const i = [];
                        let s = t.parentNode;
                        for (; s && s.nodeType === Node.ELEMENT_NODE && 3 !== s.nodeType;) s.matches(e) && i.push(s), s = s.parentNode;
                        return i
                    },
                    prev(t, e) {
                        let i = t.previousElementSibling;
                        for (; i;) {
                            if (i.matches(e)) return [i];
                            i = i.previousElementSibling
                        }
                        return []
                    },
                    next(t, e) {
                        let i = t.nextElementSibling;
                        for (; i;) {
                            if (i.matches(e)) return [i];
                            i = i.nextElementSibling
                        }
                        return []
                    },
                    focusableChildren(t) {
                        const e = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((t => `${t}:not([tabindex^="-"])`)).join(", ");
                        return this.find(e, t).filter((t => !S(t) && L(t)))
                    }
                },
                ut = "carousel",
                gt = {
                    interval: 5e3,
                    keyboard: !0,
                    slide: !1,
                    pause: "hover",
                    wrap: !0,
                    touch: !0
                },
                _t = {
                    interval: "(number|boolean)",
                    keyboard: "boolean",
                    slide: "(boolean|string)",
                    pause: "(string|boolean)",
                    wrap: "boolean",
                    touch: "boolean"
                },
                ft = "next",
                pt = "prev",
                mt = "left",
                bt = "right",
                vt = {
                    ArrowLeft: bt,
                    ArrowRight: mt
                },
                yt = "slid.bs.carousel",
                Et = "active",
                wt = ".active.carousel-item";
            class At extends st {
                constructor(t, e) {
                    super(t), this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e), this._indicatorsElement = dt.findOne(".carousel-indicators", this._element), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent), this._addEventListeners()
                }
                static get Default() {
                    return gt
                }
                static get NAME() {
                    return ut
                }
                next() {
                    this._slide(ft)
                }
                nextWhenVisible() {
                    !document.hidden && L(this._element) && this.next()
                }
                prev() {
                    this._slide(pt)
                }
                pause(t) {
                    t || (this._isPaused = !0), dt.findOne(".carousel-item-next, .carousel-item-prev", this._element) && (A(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
                }
                cycle(t) {
                    t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config && this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
                }
                to(t) {
                    this._activeElement = dt.findOne(wt, this._element);
                    const e = this._getItemIndex(this._activeElement);
                    if (t > this._items.length - 1 || t < 0) return;
                    if (this._isSliding) return void tt.one(this._element, yt, (() => this.to(t)));
                    if (e === t) return this.pause(), void this.cycle();
                    const i = t > e ? ft : pt;
                    this._slide(i, this._items[t])
                }
                _getConfig(t) {
                    return t = { ...gt,
                        ...ht.getDataAttributes(this._element),
                        ..."object" == typeof t ? t : {}
                    }, k(ut, t, _t), t
                }
                _handleSwipe() {
                    const t = Math.abs(this.touchDeltaX);
                    if (t <= 40) return;
                    const e = t / this.touchDeltaX;
                    this.touchDeltaX = 0, e && this._slide(e > 0 ? bt : mt)
                }
                _addEventListeners() {
                    this._config.keyboard && tt.on(this._element, "keydown.bs.carousel", (t => this._keydown(t))), "hover" === this._config.pause && (tt.on(this._element, "mouseenter.bs.carousel", (t => this.pause(t))), tt.on(this._element, "mouseleave.bs.carousel", (t => this.cycle(t)))), this._config.touch && this._touchSupported && this._addTouchEventListeners()
                }
                _addTouchEventListeners() {
                    const t = t => this._pointerEvent && ("pen" === t.pointerType || "touch" === t.pointerType),
                        e = e => {
                            t(e) ? this.touchStartX = e.clientX : this._pointerEvent || (this.touchStartX = e.touches[0].clientX)
                        },
                        i = t => {
                            this.touchDeltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - this.touchStartX
                        },
                        s = e => {
                            t(e) && (this.touchDeltaX = e.clientX - this.touchStartX), this._handleSwipe(), "hover" === this._config.pause && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout((t => this.cycle(t)), 500 + this._config.interval))
                        };
                    dt.find(".carousel-item img", this._element).forEach((t => {
                        tt.on(t, "dragstart.bs.carousel", (t => t.preventDefault()))
                    })), this._pointerEvent ? (tt.on(this._element, "pointerdown.bs.carousel", (t => e(t))), tt.on(this._element, "pointerup.bs.carousel", (t => s(t))), this._element.classList.add("pointer-event")) : (tt.on(this._element, "touchstart.bs.carousel", (t => e(t))), tt.on(this._element, "touchmove.bs.carousel", (t => i(t))), tt.on(this._element, "touchend.bs.carousel", (t => s(t))))
                }
                _keydown(t) {
                    if (/input|textarea/i.test(t.target.tagName)) return;
                    const e = vt[t.key];
                    e && (t.preventDefault(), this._slide(e))
                }
                _getItemIndex(t) {
                    return this._items = t && t.parentNode ? dt.find(".carousel-item", t.parentNode) : [], this._items.indexOf(t)
                }
                _getItemByOrder(t, e) {
                    const i = t === ft;
                    return $(this._items, e, i, this._config.wrap)
                }
                _triggerSlideEvent(t, e) {
                    const i = this._getItemIndex(t),
                        s = this._getItemIndex(dt.findOne(wt, this._element));
                    return tt.trigger(this._element, "slide.bs.carousel", {
                        relatedTarget: t,
                        direction: e,
                        from: s,
                        to: i
                    })
                }
                _setActiveIndicatorElement(t) {
                    if (this._indicatorsElement) {
                        const e = dt.findOne(".active", this._indicatorsElement);
                        e.classList.remove(Et), e.removeAttribute("aria-current");
                        const i = dt.find("[data-bs-target]", this._indicatorsElement);
                        for (let e = 0; e < i.length; e++)
                            if (Number.parseInt(i[e].getAttribute("data-bs-slide-to"), 10) === this._getItemIndex(t)) {
                                i[e].classList.add(Et), i[e].setAttribute("aria-current", "true");
                                break
                            }
                    }
                }
                _updateInterval() {
                    const t = this._activeElement || dt.findOne(wt, this._element);
                    if (!t) return;
                    const e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
                    e ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = e) : this._config.interval = this._config.defaultInterval || this._config.interval
                }
                _slide(t, e) {
                    const i = this._directionToOrder(t),
                        s = dt.findOne(wt, this._element),
                        n = this._getItemIndex(s),
                        o = e || this._getItemByOrder(i, s),
                        r = this._getItemIndex(o),
                        a = Boolean(this._interval),
                        l = i === ft,
                        c = l ? "carousel-item-start" : "carousel-item-end",
                        h = l ? "carousel-item-next" : "carousel-item-prev",
                        d = this._orderToDirection(i);
                    if (o && o.classList.contains(Et)) return void(this._isSliding = !1);
                    if (this._isSliding) return;
                    if (this._triggerSlideEvent(o, d).defaultPrevented) return;
                    if (!s || !o) return;
                    this._isSliding = !0, a && this.pause(), this._setActiveIndicatorElement(o), this._activeElement = o;
                    const u = () => {
                        tt.trigger(this._element, yt, {
                            relatedTarget: o,
                            direction: d,
                            from: n,
                            to: r
                        })
                    };
                    if (this._element.classList.contains("slide")) {
                        o.classList.add(h), D(o), s.classList.add(c), o.classList.add(c);
                        const t = () => {
                            o.classList.remove(c, h), o.classList.add(Et), s.classList.remove(Et, h, c), this._isSliding = !1, setTimeout(u, 0)
                        };
                        this._queueCallback(t, s, !0)
                    } else s.classList.remove(Et), o.classList.add(Et), this._isSliding = !1, u();
                    a && this.cycle()
                }
                _directionToOrder(t) {
                    return [bt, mt].includes(t) ? M() ? t === mt ? pt : ft : t === mt ? ft : pt : t
                }
                _orderToDirection(t) {
                    return [ft, pt].includes(t) ? M() ? t === pt ? mt : bt : t === pt ? bt : mt : t
                }
                static carouselInterface(t, e) {
                    const i = At.getOrCreateInstance(t, e);
                    let {
                        _config: s
                    } = i;
                    "object" == typeof e && (s = { ...s,
                        ...e
                    });
                    const n = "string" == typeof e ? e : s.slide;
                    if ("number" == typeof e) i.to(e);
                    else if ("string" == typeof n) {
                        if (void 0 === i[n]) throw new TypeError(`No method named "${n}"`);
                        i[n]()
                    } else s.interval && s.ride && (i.pause(), i.cycle())
                }
                static jQueryInterface(t) {
                    return this.each((function() {
                        At.carouselInterface(this, t)
                    }))
                }
                static dataApiClickHandler(t) {
                    const e = w(this);
                    if (!e || !e.classList.contains("carousel")) return;
                    const i = { ...ht.getDataAttributes(e),
                            ...ht.getDataAttributes(this)
                        },
                        s = this.getAttribute("data-bs-slide-to");
                    s && (i.interval = !1), At.carouselInterface(e, i), s && At.getInstance(e).to(s), t.preventDefault()
                }
            }
            tt.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", At.dataApiClickHandler), tt.on(window, "load.bs.carousel.data-api", (() => {
                const t = dt.find('[data-bs-ride="carousel"]');
                for (let e = 0, i = t.length; e < i; e++) At.carouselInterface(t[e], At.getInstance(t[e]))
            })), x(At);
            const Tt = "collapse",
                Ct = "bs.collapse",
                kt = {
                    toggle: !0,
                    parent: null
                },
                Lt = {
                    toggle: "boolean",
                    parent: "(null|element)"
                },
                St = "show",
                Nt = "collapse",
                Ot = "collapsing",
                Dt = "collapsed",
                It = ":scope .collapse .collapse",
                Pt = '[data-bs-toggle="collapse"]';
            class Mt extends st {
                constructor(t, e) {
                    super(t), this._isTransitioning = !1, this._config = this._getConfig(e), this._triggerArray = [];
                    const i = dt.find(Pt);
                    for (let t = 0, e = i.length; t < e; t++) {
                        const e = i[t],
                            s = E(e),
                            n = dt.find(s).filter((t => t === this._element));
                        null !== s && n.length && (this._selector = s, this._triggerArray.push(e))
                    }
                    this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle()
                }
                static get Default() {
                    return kt
                }
                static get NAME() {
                    return Tt
                }
                toggle() {
                    this._isShown() ? this.hide() : this.show()
                }
                show() {
                    if (this._isTransitioning || this._isShown()) return;
                    let t, e = [];
                    if (this._config.parent) {
                        const t = dt.find(It, this._config.parent);
                        e = dt.find(".collapse.show, .collapse.collapsing", this._config.parent).filter((e => !t.includes(e)))
                    }
                    const i = dt.findOne(this._selector);
                    if (e.length) {
                        const s = e.find((t => i !== t));
                        if (t = s ? Mt.getInstance(s) : null, t && t._isTransitioning) return
                    }
                    if (tt.trigger(this._element, "show.bs.collapse").defaultPrevented) return;
                    e.forEach((e => {
                        i !== e && Mt.getOrCreateInstance(e, {
                            toggle: !1
                        }).hide(), t || it.set(e, Ct, null)
                    }));
                    const s = this._getDimension();
                    this._element.classList.remove(Nt), this._element.classList.add(Ot), this._element.style[s] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
                    const n = `scroll${s[0].toUpperCase()+s.slice(1)}`;
                    this._queueCallback((() => {
                        this._isTransitioning = !1, this._element.classList.remove(Ot), this._element.classList.add(Nt, St), this._element.style[s] = "", tt.trigger(this._element, "shown.bs.collapse")
                    }), this._element, !0), this._element.style[s] = `${this._element[n]}px`
                }
                hide() {
                    if (this._isTransitioning || !this._isShown()) return;
                    if (tt.trigger(this._element, "hide.bs.collapse").defaultPrevented) return;
                    const t = this._getDimension();
                    this._element.style[t] = `${this._element.getBoundingClientRect()[t]}px`, D(this._element), this._element.classList.add(Ot), this._element.classList.remove(Nt, St);
                    const e = this._triggerArray.length;
                    for (let t = 0; t < e; t++) {
                        const e = this._triggerArray[t],
                            i = w(e);
                        i && !this._isShown(i) && this._addAriaAndCollapsedClass([e], !1)
                    }
                    this._isTransitioning = !0;
                    this._element.style[t] = "", this._queueCallback((() => {
                        this._isTransitioning = !1, this._element.classList.remove(Ot), this._element.classList.add(Nt), tt.trigger(this._element, "hidden.bs.collapse")
                    }), this._element, !0)
                }
                _isShown(t = this._element) {
                    return t.classList.contains(St)
                }
                _getConfig(t) {
                    return (t = { ...kt,
                        ...ht.getDataAttributes(this._element),
                        ...t
                    }).toggle = Boolean(t.toggle), t.parent = C(t.parent), k(Tt, t, Lt), t
                }
                _getDimension() {
                    return this._element.classList.contains("collapse-horizontal") ? "width" : "height"
                }
                _initializeChildren() {
                    if (!this._config.parent) return;
                    const t = dt.find(It, this._config.parent);
                    dt.find(Pt, this._config.parent).filter((e => !t.includes(e))).forEach((t => {
                        const e = w(t);
                        e && this._addAriaAndCollapsedClass([t], this._isShown(e))
                    }))
                }
                _addAriaAndCollapsedClass(t, e) {
                    t.length && t.forEach((t => {
                        e ? t.classList.remove(Dt) : t.classList.add(Dt), t.setAttribute("aria-expanded", e)
                    }))
                }
                static jQueryInterface(t) {
                    return this.each((function() {
                        const e = {};
                        "string" == typeof t && /show|hide/.test(t) && (e.toggle = !1);
                        const i = Mt.getOrCreateInstance(this, e);
                        if ("string" == typeof t) {
                            if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
                            i[t]()
                        }
                    }))
                }
            }
            tt.on(document, "click.bs.collapse.data-api", Pt, (function(t) {
                ("A" === t.target.tagName || t.delegateTarget && "A" === t.delegateTarget.tagName) && t.preventDefault();
                const e = E(this);
                dt.find(e).forEach((t => {
                    Mt.getOrCreateInstance(t, {
                        toggle: !1
                    }).toggle()
                }))
            })), x(Mt);
            const xt = "dropdown",
                jt = "Escape",
                Ht = "Space",
                $t = "ArrowUp",
                Bt = "ArrowDown",
                Rt = new RegExp("ArrowUp|ArrowDown|Escape"),
                zt = "click.bs.dropdown.data-api",
                Ft = "keydown.bs.dropdown.data-api",
                Wt = "show",
                qt = '[data-bs-toggle="dropdown"]',
                Ut = ".dropdown-menu",
                Kt = M() ? "top-end" : "top-start",
                Vt = M() ? "top-start" : "top-end",
                Xt = M() ? "bottom-end" : "bottom-start",
                Yt = M() ? "bottom-start" : "bottom-end",
                Zt = M() ? "left-start" : "right-start",
                Qt = M() ? "right-start" : "left-start",
                Gt = {
                    offset: [0, 2],
                    boundary: "clippingParents",
                    reference: "toggle",
                    display: "dynamic",
                    popperConfig: null,
                    autoClose: !0
                },
                Jt = {
                    offset: "(array|string|function)",
                    boundary: "(string|element)",
                    reference: "(string|element|object)",
                    display: "string",
                    popperConfig: "(null|object|function)",
                    autoClose: "(boolean|string)"
                };
            class te extends st {
                constructor(t, e) {
                    super(t), this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar()
                }
                static get Default() {
                    return Gt
                }
                static get DefaultType() {
                    return Jt
                }
                static get NAME() {
                    return xt
                }
                toggle() {
                    return this._isShown() ? this.hide() : this.show()
                }
                show() {
                    if (S(this._element) || this._isShown(this._menu)) return;
                    const t = {
                        relatedTarget: this._element
                    };
                    if (tt.trigger(this._element, "show.bs.dropdown", t).defaultPrevented) return;
                    const e = te.getParentFromElement(this._element);
                    this._inNavbar ? ht.setDataAttribute(this._menu, "popper", "none") : this._createPopper(e), "ontouchstart" in document.documentElement && !e.closest(".navbar-nav") && [].concat(...document.body.children).forEach((t => tt.on(t, "mouseover", O))), this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add(Wt), this._element.classList.add(Wt), tt.trigger(this._element, "shown.bs.dropdown", t)
                }
                hide() {
                    if (S(this._element) || !this._isShown(this._menu)) return;
                    const t = {
                        relatedTarget: this._element
                    };
                    this._completeHide(t)
                }
                dispose() {
                    this._popper && this._popper.destroy(), super.dispose()
                }
                update() {
                    this._inNavbar = this._detectNavbar(), this._popper && this._popper.update()
                }
                _completeHide(t) {
                    tt.trigger(this._element, "hide.bs.dropdown", t).defaultPrevented || ("ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((t => tt.off(t, "mouseover", O))), this._popper && this._popper.destroy(), this._menu.classList.remove(Wt), this._element.classList.remove(Wt), this._element.setAttribute("aria-expanded", "false"), ht.removeDataAttribute(this._menu, "popper"), tt.trigger(this._element, "hidden.bs.dropdown", t))
                }
                _getConfig(t) {
                    if (t = { ...this.constructor.Default,
                            ...ht.getDataAttributes(this._element),
                            ...t
                        }, k(xt, t, this.constructor.DefaultType), "object" == typeof t.reference && !T(t.reference) && "function" != typeof t.reference.getBoundingClientRect) throw new TypeError(`${xt.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
                    return t
                }
                _createPopper(t) {
                    if (void 0 === s) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
                    let e = this._element;
                    "parent" === this._config.reference ? e = t : T(this._config.reference) ? e = C(this._config.reference) : "object" == typeof this._config.reference && (e = this._config.reference);
                    const i = this._getPopperConfig(),
                        n = i.modifiers.find((t => "applyStyles" === t.name && !1 === t.enabled));
                    this._popper = p.fi(e, this._menu, i), n && ht.setDataAttribute(this._menu, "popper", "static")
                }
                _isShown(t = this._element) {
                    return t.classList.contains(Wt)
                }
                _getMenuElement() {
                    return dt.next(this._element, Ut)[0]
                }
                _getPlacement() {
                    const t = this._element.parentNode;
                    if (t.classList.contains("dropend")) return Zt;
                    if (t.classList.contains("dropstart")) return Qt;
                    const e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
                    return t.classList.contains("dropup") ? e ? Vt : Kt : e ? Yt : Xt
                }
                _detectNavbar() {
                    return null !== this._element.closest(".navbar")
                }
                _getOffset() {
                    const {
                        offset: t
                    } = this._config;
                    return "string" == typeof t ? t.split(",").map((t => Number.parseInt(t, 10))) : "function" == typeof t ? e => t(e, this._element) : t
                }
                _getPopperConfig() {
                    const t = {
                        placement: this._getPlacement(),
                        modifiers: [{
                            name: "preventOverflow",
                            options: {
                                boundary: this._config.boundary
                            }
                        }, {
                            name: "offset",
                            options: {
                                offset: this._getOffset()
                            }
                        }]
                    };
                    return "static" === this._config.display && (t.modifiers = [{
                        name: "applyStyles",
                        enabled: !1
                    }]), { ...t,
                        ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(t) : this._config.popperConfig
                    }
                }
                _selectMenuItem({
                    key: t,
                    target: e
                }) {
                    const i = dt.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter(L);
                    i.length && $(i, e, t === Bt, !i.includes(e)).focus()
                }
                static jQueryInterface(t) {
                    return this.each((function() {
                        const e = te.getOrCreateInstance(this, t);
                        if ("string" == typeof t) {
                            if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                            e[t]()
                        }
                    }))
                }
                static clearMenus(t) {
                    if (t && (2 === t.button || "keyup" === t.type && "Tab" !== t.key)) return;
                    const e = dt.find(qt);
                    for (let i = 0, s = e.length; i < s; i++) {
                        const s = te.getInstance(e[i]);
                        if (!s || !1 === s._config.autoClose) continue;
                        if (!s._isShown()) continue;
                        const n = {
                            relatedTarget: s._element
                        };
                        if (t) {
                            const e = t.composedPath(),
                                i = e.includes(s._menu);
                            if (e.includes(s._element) || "inside" === s._config.autoClose && !i || "outside" === s._config.autoClose && i) continue;
                            if (s._menu.contains(t.target) && ("keyup" === t.type && "Tab" === t.key || /input|select|option|textarea|form/i.test(t.target.tagName))) continue;
                            "click" === t.type && (n.clickEvent = t)
                        }
                        s._completeHide(n)
                    }
                }
                static getParentFromElement(t) {
                    return w(t) || t.parentNode
                }
                static dataApiKeydownHandler(t) {
                    if (/input|textarea/i.test(t.target.tagName) ? t.key === Ht || t.key !== jt && (t.key !== Bt && t.key !== $t || t.target.closest(Ut)) : !Rt.test(t.key)) return;
                    const e = this.classList.contains(Wt);
                    if (!e && t.key === jt) return;
                    if (t.preventDefault(), t.stopPropagation(), S(this)) return;
                    const i = this.matches(qt) ? this : dt.prev(this, qt)[0],
                        s = te.getOrCreateInstance(i);
                    if (t.key !== jt) return t.key === $t || t.key === Bt ? (e || s.show(), void s._selectMenuItem(t)) : void(e && t.key !== Ht || te.clearMenus());
                    s.hide()
                }
            }
            tt.on(document, Ft, qt, te.dataApiKeydownHandler), tt.on(document, Ft, Ut, te.dataApiKeydownHandler), tt.on(document, zt, te.clearMenus), tt.on(document, "keyup.bs.dropdown.data-api", te.clearMenus), tt.on(document, zt, qt, (function(t) {
                t.preventDefault(), te.getOrCreateInstance(this).toggle()
            })), x(te);
            const ee = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
                ie = ".sticky-top";
            class se {
                constructor() {
                    this._element = document.body
                }
                getWidth() {
                    const t = document.documentElement.clientWidth;
                    return Math.abs(window.innerWidth - t)
                }
                hide() {
                    const t = this.getWidth();
                    this._disableOverFlow(), this._setElementAttributes(this._element, "paddingRight", (e => e + t)), this._setElementAttributes(ee, "paddingRight", (e => e + t)), this._setElementAttributes(ie, "marginRight", (e => e - t))
                }
                _disableOverFlow() {
                    this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden"
                }
                _setElementAttributes(t, e, i) {
                    const s = this.getWidth();
                    this._applyManipulationCallback(t, (t => {
                        if (t !== this._element && window.innerWidth > t.clientWidth + s) return;
                        this._saveInitialAttribute(t, e);
                        const n = window.getComputedStyle(t)[e];
                        t.style[e] = `${i(Number.parseFloat(n))}px`
                    }))
                }
                reset() {
                    this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, "paddingRight"), this._resetElementAttributes(ee, "paddingRight"), this._resetElementAttributes(ie, "marginRight")
                }
                _saveInitialAttribute(t, e) {
                    const i = t.style[e];
                    i && ht.setDataAttribute(t, e, i)
                }
                _resetElementAttributes(t, e) {
                    this._applyManipulationCallback(t, (t => {
                        const i = ht.getDataAttribute(t, e);
                        void 0 === i ? t.style.removeProperty(e) : (ht.removeDataAttribute(t, e), t.style[e] = i)
                    }))
                }
                _applyManipulationCallback(t, e) {
                    T(t) ? e(t) : dt.find(t, this._element).forEach(e)
                }
                isOverflowing() {
                    return this.getWidth() > 0
                }
            }
            const ne = {
                    className: "modal-backdrop",
                    isVisible: !0,
                    isAnimated: !1,
                    rootElement: "body",
                    clickCallback: null
                },
                oe = {
                    className: "string",
                    isVisible: "boolean",
                    isAnimated: "boolean",
                    rootElement: "(element|string)",
                    clickCallback: "(function|null)"
                },
                re = "backdrop",
                ae = "show",
                le = "mousedown.bs.backdrop";
            class ce {
                constructor(t) {
                    this._config = this._getConfig(t), this._isAppended = !1, this._element = null
                }
                show(t) {
                    this._config.isVisible ? (this._append(), this._config.isAnimated && D(this._getElement()), this._getElement().classList.add(ae), this._emulateAnimation((() => {
                        j(t)
                    }))) : j(t)
                }
                hide(t) {
                    this._config.isVisible ? (this._getElement().classList.remove(ae), this._emulateAnimation((() => {
                        this.dispose(), j(t)
                    }))) : j(t)
                }
                _getElement() {
                    if (!this._element) {
                        const t = document.createElement("div");
                        t.className = this._config.className, this._config.isAnimated && t.classList.add("fade"), this._element = t
                    }
                    return this._element
                }
                _getConfig(t) {
                    return (t = { ...ne,
                        ..."object" == typeof t ? t : {}
                    }).rootElement = C(t.rootElement), k(re, t, oe), t
                }
                _append() {
                    this._isAppended || (this._config.rootElement.append(this._getElement()), tt.on(this._getElement(), le, (() => {
                        j(this._config.clickCallback)
                    })), this._isAppended = !0)
                }
                dispose() {
                    this._isAppended && (tt.off(this._element, le), this._element.remove(), this._isAppended = !1)
                }
                _emulateAnimation(t) {
                    H(t, this._getElement(), this._config.isAnimated)
                }
            }
            const he = {
                    trapElement: null,
                    autofocus: !0
                },
                de = {
                    trapElement: "element",
                    autofocus: "boolean"
                },
                ue = ".bs.focustrap",
                ge = "backward";
            class _e {
                constructor(t) {
                    this._config = this._getConfig(t), this._isActive = !1, this._lastTabNavDirection = null
                }
                activate() {
                    const {
                        trapElement: t,
                        autofocus: e
                    } = this._config;
                    this._isActive || (e && t.focus(), tt.off(document, ue), tt.on(document, "focusin.bs.focustrap", (t => this._handleFocusin(t))), tt.on(document, "keydown.tab.bs.focustrap", (t => this._handleKeydown(t))), this._isActive = !0)
                }
                deactivate() {
                    this._isActive && (this._isActive = !1, tt.off(document, ue))
                }
                _handleFocusin(t) {
                    const {
                        target: e
                    } = t, {
                        trapElement: i
                    } = this._config;
                    if (e === document || e === i || i.contains(e)) return;
                    const s = dt.focusableChildren(i);
                    0 === s.length ? i.focus() : this._lastTabNavDirection === ge ? s[s.length - 1].focus() : s[0].focus()
                }
                _handleKeydown(t) {
                    "Tab" === t.key && (this._lastTabNavDirection = t.shiftKey ? ge : "forward")
                }
                _getConfig(t) {
                    return t = { ...he,
                        ..."object" == typeof t ? t : {}
                    }, k("focustrap", t, de), t
                }
            }
            const fe = "modal",
                pe = ".bs.modal",
                me = "Escape",
                be = {
                    backdrop: !0,
                    keyboard: !0,
                    focus: !0
                },
                ve = {
                    backdrop: "(boolean|string)",
                    keyboard: "boolean",
                    focus: "boolean"
                },
                ye = "hidden.bs.modal",
                Ee = "show.bs.modal",
                we = "resize.bs.modal",
                Ae = "click.dismiss.bs.modal",
                Te = "keydown.dismiss.bs.modal",
                Ce = "mousedown.dismiss.bs.modal",
                ke = "modal-open",
                Le = "show",
                Se = "modal-static";
            class Ne extends st {
                constructor(t, e) {
                    super(t), this._config = this._getConfig(e), this._dialog = dt.findOne(".modal-dialog", this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollBar = new se
                }
                static get Default() {
                    return be
                }
                static get NAME() {
                    return fe
                }
                toggle(t) {
                    return this._isShown ? this.hide() : this.show(t)
                }
                show(t) {
                    if (this._isShown || this._isTransitioning) return;
                    tt.trigger(this._element, Ee, {
                        relatedTarget: t
                    }).defaultPrevented || (this._isShown = !0, this._isAnimated() && (this._isTransitioning = !0), this._scrollBar.hide(), document.body.classList.add(ke), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), tt.on(this._dialog, Ce, (() => {
                        tt.one(this._element, "mouseup.dismiss.bs.modal", (t => {
                            t.target === this._element && (this._ignoreBackdropClick = !0)
                        }))
                    })), this._showBackdrop((() => this._showElement(t))))
                }
                hide() {
                    if (!this._isShown || this._isTransitioning) return;
                    if (tt.trigger(this._element, "hide.bs.modal").defaultPrevented) return;
                    this._isShown = !1;
                    const t = this._isAnimated();
                    t && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), this._focustrap.deactivate(), this._element.classList.remove(Le), tt.off(this._element, Ae), tt.off(this._dialog, Ce), this._queueCallback((() => this._hideModal()), this._element, t)
                }
                dispose() {
                    [window, this._dialog].forEach((t => tt.off(t, pe))), this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose()
                }
                handleUpdate() {
                    this._adjustDialog()
                }
                _initializeBackDrop() {
                    return new ce({
                        isVisible: Boolean(this._config.backdrop),
                        isAnimated: this._isAnimated()
                    })
                }
                _initializeFocusTrap() {
                    return new _e({
                        trapElement: this._element
                    })
                }
                _getConfig(t) {
                    return t = { ...be,
                        ...ht.getDataAttributes(this._element),
                        ..."object" == typeof t ? t : {}
                    }, k(fe, t, ve), t
                }
                _showElement(t) {
                    const e = this._isAnimated(),
                        i = dt.findOne(".modal-body", this._dialog);
                    this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0, i && (i.scrollTop = 0), e && D(this._element), this._element.classList.add(Le);
                    this._queueCallback((() => {
                        this._config.focus && this._focustrap.activate(), this._isTransitioning = !1, tt.trigger(this._element, "shown.bs.modal", {
                            relatedTarget: t
                        })
                    }), this._dialog, e)
                }
                _setEscapeEvent() {
                    this._isShown ? tt.on(this._element, Te, (t => {
                        this._config.keyboard && t.key === me ? (t.preventDefault(), this.hide()) : this._config.keyboard || t.key !== me || this._triggerBackdropTransition()
                    })) : tt.off(this._element, Te)
                }
                _setResizeEvent() {
                    this._isShown ? tt.on(window, we, (() => this._adjustDialog())) : tt.off(window, we)
                }
                _hideModal() {
                    this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide((() => {
                        document.body.classList.remove(ke), this._resetAdjustments(), this._scrollBar.reset(), tt.trigger(this._element, ye)
                    }))
                }
                _showBackdrop(t) {
                    tt.on(this._element, Ae, (t => {
                        this._ignoreBackdropClick ? this._ignoreBackdropClick = !1 : t.target === t.currentTarget && (!0 === this._config.backdrop ? this.hide() : "static" === this._config.backdrop && this._triggerBackdropTransition())
                    })), this._backdrop.show(t)
                }
                _isAnimated() {
                    return this._element.classList.contains("fade")
                }
                _triggerBackdropTransition() {
                    if (tt.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented) return;
                    const {
                        classList: t,
                        scrollHeight: e,
                        style: i
                    } = this._element, s = e > document.documentElement.clientHeight;
                    !s && "hidden" === i.overflowY || t.contains(Se) || (s || (i.overflowY = "hidden"), t.add(Se), this._queueCallback((() => {
                        t.remove(Se), s || this._queueCallback((() => {
                            i.overflowY = ""
                        }), this._dialog)
                    }), this._dialog), this._element.focus())
                }
                _adjustDialog() {
                    const t = this._element.scrollHeight > document.documentElement.clientHeight,
                        e = this._scrollBar.getWidth(),
                        i = e > 0;
                    (!i && t && !M() || i && !t && M()) && (this._element.style.paddingLeft = `${e}px`), (i && !t && !M() || !i && t && M()) && (this._element.style.paddingRight = `${e}px`)
                }
                _resetAdjustments() {
                    this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
                }
                static jQueryInterface(t, e) {
                    return this.each((function() {
                        const i = Ne.getOrCreateInstance(this, t);
                        if ("string" == typeof t) {
                            if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
                            i[t](e)
                        }
                    }))
                }
            }
            tt.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', (function(t) {
                const e = w(this);
                ["A", "AREA"].includes(this.tagName) && t.preventDefault(), tt.one(e, Ee, (t => {
                    t.defaultPrevented || tt.one(e, ye, (() => {
                        L(this) && this.focus()
                    }))
                }));
                const i = dt.findOne(".modal.show");
                i && Ne.getInstance(i).hide();
                Ne.getOrCreateInstance(e).toggle(this)
            })), nt(Ne), x(Ne);
            const Oe = "offcanvas",
                De = {
                    backdrop: !0,
                    keyboard: !0,
                    scroll: !1
                },
                Ie = {
                    backdrop: "boolean",
                    keyboard: "boolean",
                    scroll: "boolean"
                },
                Pe = "show",
                Me = ".offcanvas.show",
                xe = "hidden.bs.offcanvas";
            class je extends st {
                constructor(t, e) {
                    super(t), this._config = this._getConfig(e), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners()
                }
                static get NAME() {
                    return Oe
                }
                static get Default() {
                    return De
                }
                toggle(t) {
                    return this._isShown ? this.hide() : this.show(t)
                }
                show(t) {
                    if (this._isShown) return;
                    if (tt.trigger(this._element, "show.bs.offcanvas", {
                            relatedTarget: t
                        }).defaultPrevented) return;
                    this._isShown = !0, this._element.style.visibility = "visible", this._backdrop.show(), this._config.scroll || (new se).hide(), this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add(Pe);
                    this._queueCallback((() => {
                        this._config.scroll || this._focustrap.activate(), tt.trigger(this._element, "shown.bs.offcanvas", {
                            relatedTarget: t
                        })
                    }), this._element, !0)
                }
                hide() {
                    if (!this._isShown) return;
                    if (tt.trigger(this._element, "hide.bs.offcanvas").defaultPrevented) return;
                    this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.remove(Pe), this._backdrop.hide();
                    this._queueCallback((() => {
                        this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._element.style.visibility = "hidden", this._config.scroll || (new se).reset(), tt.trigger(this._element, xe)
                    }), this._element, !0)
                }
                dispose() {
                    this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose()
                }
                _getConfig(t) {
                    return t = { ...De,
                        ...ht.getDataAttributes(this._element),
                        ..."object" == typeof t ? t : {}
                    }, k(Oe, t, Ie), t
                }
                _initializeBackDrop() {
                    return new ce({
                        className: "offcanvas-backdrop",
                        isVisible: this._config.backdrop,
                        isAnimated: !0,
                        rootElement: this._element.parentNode,
                        clickCallback: () => this.hide()
                    })
                }
                _initializeFocusTrap() {
                    return new _e({
                        trapElement: this._element
                    })
                }
                _addEventListeners() {
                    tt.on(this._element, "keydown.dismiss.bs.offcanvas", (t => {
                        this._config.keyboard && "Escape" === t.key && this.hide()
                    }))
                }
                static jQueryInterface(t) {
                    return this.each((function() {
                        const e = je.getOrCreateInstance(this, t);
                        if ("string" == typeof t) {
                            if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                            e[t](this)
                        }
                    }))
                }
            }
            tt.on(document, "click.bs.offcanvas.data-api", '[data-bs-toggle="offcanvas"]', (function(t) {
                const e = w(this);
                if (["A", "AREA"].includes(this.tagName) && t.preventDefault(), S(this)) return;
                tt.one(e, xe, (() => {
                    L(this) && this.focus()
                }));
                const i = dt.findOne(Me);
                i && i !== e && je.getInstance(i).hide();
                je.getOrCreateInstance(e).toggle(this)
            })), tt.on(window, "load.bs.offcanvas.data-api", (() => dt.find(Me).forEach((t => je.getOrCreateInstance(t).show())))), nt(je), x(je);
            const He = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
                $e = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,
                Be = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
                Re = (t, e) => {
                    const i = t.nodeName.toLowerCase();
                    if (e.includes(i)) return !He.has(i) || Boolean($e.test(t.nodeValue) || Be.test(t.nodeValue));
                    const s = e.filter((t => t instanceof RegExp));
                    for (let t = 0, e = s.length; t < e; t++)
                        if (s[t].test(i)) return !0;
                    return !1
                },
                ze = {
                    "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
                    a: ["target", "href", "title", "rel"],
                    area: [],
                    b: [],
                    br: [],
                    col: [],
                    code: [],
                    div: [],
                    em: [],
                    hr: [],
                    h1: [],
                    h2: [],
                    h3: [],
                    h4: [],
                    h5: [],
                    h6: [],
                    i: [],
                    img: ["src", "srcset", "alt", "title", "width", "height"],
                    li: [],
                    ol: [],
                    p: [],
                    pre: [],
                    s: [],
                    small: [],
                    span: [],
                    sub: [],
                    sup: [],
                    strong: [],
                    u: [],
                    ul: []
                };

            function Fe(t, e, i) {
                if (!t.length) return t;
                if (i && "function" == typeof i) return i(t);
                const s = (new window.DOMParser).parseFromString(t, "text/html"),
                    n = [].concat(...s.body.querySelectorAll("*"));
                for (let t = 0, i = n.length; t < i; t++) {
                    const i = n[t],
                        s = i.nodeName.toLowerCase();
                    if (!Object.keys(e).includes(s)) {
                        i.remove();
                        continue
                    }
                    const o = [].concat(...i.attributes),
                        r = [].concat(e["*"] || [], e[s] || []);
                    o.forEach((t => {
                        Re(t, r) || i.removeAttribute(t.nodeName)
                    }))
                }
                return s.body.innerHTML
            }
            const We = "tooltip",
                qe = new Set(["sanitize", "allowList", "sanitizeFn"]),
                Ue = {
                    animation: "boolean",
                    template: "string",
                    title: "(string|element|function)",
                    trigger: "string",
                    delay: "(number|object)",
                    html: "boolean",
                    selector: "(string|boolean)",
                    placement: "(string|function)",
                    offset: "(array|string|function)",
                    container: "(string|element|boolean)",
                    fallbackPlacements: "array",
                    boundary: "(string|element)",
                    customClass: "(string|function)",
                    sanitize: "boolean",
                    sanitizeFn: "(null|function)",
                    allowList: "object",
                    popperConfig: "(null|object|function)"
                },
                Ke = {
                    AUTO: "auto",
                    TOP: "top",
                    RIGHT: M() ? "left" : "right",
                    BOTTOM: "bottom",
                    LEFT: M() ? "right" : "left"
                },
                Ve = {
                    animation: !0,
                    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
                    trigger: "hover focus",
                    title: "",
                    delay: 0,
                    html: !1,
                    selector: !1,
                    placement: "top",
                    offset: [0, 0],
                    container: !1,
                    fallbackPlacements: ["top", "right", "bottom", "left"],
                    boundary: "clippingParents",
                    customClass: "",
                    sanitize: !0,
                    sanitizeFn: null,
                    allowList: ze,
                    popperConfig: null
                },
                Xe = {
                    HIDE: "hide.bs.tooltip",
                    HIDDEN: "hidden.bs.tooltip",
                    SHOW: "show.bs.tooltip",
                    SHOWN: "shown.bs.tooltip",
                    INSERTED: "inserted.bs.tooltip",
                    CLICK: "click.bs.tooltip",
                    FOCUSIN: "focusin.bs.tooltip",
                    FOCUSOUT: "focusout.bs.tooltip",
                    MOUSEENTER: "mouseenter.bs.tooltip",
                    MOUSELEAVE: "mouseleave.bs.tooltip"
                },
                Ye = "fade",
                Ze = "show",
                Qe = "show",
                Ge = "out",
                Je = ".tooltip-inner",
                ti = ".modal",
                ei = "hide.bs.modal",
                ii = "hover",
                si = "focus";
            class ni extends st {
                constructor(t, e) {
                    if (void 0 === s) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
                    super(t), this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this._config = this._getConfig(e), this.tip = null, this._setListeners()
                }
                static get Default() {
                    return Ve
                }
                static get NAME() {
                    return We
                }
                static get Event() {
                    return Xe
                }
                static get DefaultType() {
                    return Ue
                }
                enable() {
                    this._isEnabled = !0
                }
                disable() {
                    this._isEnabled = !1
                }
                toggleEnabled() {
                    this._isEnabled = !this._isEnabled
                }
                toggle(t) {
                    if (this._isEnabled)
                        if (t) {
                            const e = this._initializeOnDelegatedTarget(t);
                            e._activeTrigger.click = !e._activeTrigger.click, e._isWithActiveTrigger() ? e._enter(null, e) : e._leave(null, e)
                        } else {
                            if (this.getTipElement().classList.contains(Ze)) return void this._leave(null, this);
                            this._enter(null, this)
                        }
                }
                dispose() {
                    clearTimeout(this._timeout), tt.off(this._element.closest(ti), ei, this._hideModalHandler), this.tip && this.tip.remove(), this._disposePopper(), super.dispose()
                }
                show() {
                    if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
                    if (!this.isWithContent() || !this._isEnabled) return;
                    const t = tt.trigger(this._element, this.constructor.Event.SHOW),
                        e = N(this._element),
                        i = null === e ? this._element.ownerDocument.documentElement.contains(this._element) : e.contains(this._element);
                    if (t.defaultPrevented || !i) return;
                    "tooltip" === this.constructor.NAME && this.tip && this.getTitle() !== this.tip.querySelector(Je).innerHTML && (this._disposePopper(), this.tip.remove(), this.tip = null);
                    const s = this.getTipElement(),
                        n = (t => {
                            do {
                                t += Math.floor(1e6 * Math.random())
                            } while (document.getElementById(t));
                            return t
                        })(this.constructor.NAME);
                    s.setAttribute("id", n), this._element.setAttribute("aria-describedby", n), this._config.animation && s.classList.add(Ye);
                    const o = "function" == typeof this._config.placement ? this._config.placement.call(this, s, this._element) : this._config.placement,
                        r = this._getAttachment(o);
                    this._addAttachmentClass(r);
                    const {
                        container: a
                    } = this._config;
                    it.set(s, this.constructor.DATA_KEY, this), this._element.ownerDocument.documentElement.contains(this.tip) || (a.append(s), tt.trigger(this._element, this.constructor.Event.INSERTED)), this._popper ? this._popper.update() : this._popper = p.fi(this._element, s, this._getPopperConfig(r)), s.classList.add(Ze);
                    const l = this._resolvePossibleFunction(this._config.customClass);
                    l && s.classList.add(...l.split(" ")), "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((t => {
                        tt.on(t, "mouseover", O)
                    }));
                    const c = this.tip.classList.contains(Ye);
                    this._queueCallback((() => {
                        const t = this._hoverState;
                        this._hoverState = null, tt.trigger(this._element, this.constructor.Event.SHOWN), t === Ge && this._leave(null, this)
                    }), this.tip, c)
                }
                hide() {
                    if (!this._popper) return;
                    const t = this.getTipElement();
                    if (tt.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented) return;
                    t.classList.remove(Ze), "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((t => tt.off(t, "mouseover", O))), this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1;
                    const e = this.tip.classList.contains(Ye);
                    this._queueCallback((() => {
                        this._isWithActiveTrigger() || (this._hoverState !== Qe && t.remove(), this._cleanTipClass(), this._element.removeAttribute("aria-describedby"), tt.trigger(this._element, this.constructor.Event.HIDDEN), this._disposePopper())
                    }), this.tip, e), this._hoverState = ""
                }
                update() {
                    null !== this._popper && this._popper.update()
                }
                isWithContent() {
                    return Boolean(this.getTitle())
                }
                getTipElement() {
                    if (this.tip) return this.tip;
                    const t = document.createElement("div");
                    t.innerHTML = this._config.template;
                    const e = t.children[0];
                    return this.setContent(e), e.classList.remove(Ye, Ze), this.tip = e, this.tip
                }
                setContent(t) {
                    this._sanitizeAndSetContent(t, this.getTitle(), Je)
                }
                _sanitizeAndSetContent(t, e, i) {
                    const s = dt.findOne(i, t);
                    e || !s ? this.setElementContent(s, e) : s.remove()
                }
                setElementContent(t, e) {
                    if (null !== t) return T(e) ? (e = C(e), void(this._config.html ? e.parentNode !== t && (t.innerHTML = "", t.append(e)) : t.textContent = e.textContent)) : void(this._config.html ? (this._config.sanitize && (e = Fe(e, this._config.allowList, this._config.sanitizeFn)), t.innerHTML = e) : t.textContent = e)
                }
                getTitle() {
                    const t = this._element.getAttribute("data-bs-original-title") || this._config.title;
                    return this._resolvePossibleFunction(t)
                }
                updateAttachment(t) {
                    return "right" === t ? "end" : "left" === t ? "start" : t
                }
                _initializeOnDelegatedTarget(t, e) {
                    return e || this.constructor.getOrCreateInstance(t.delegateTarget, this._getDelegateConfig())
                }
                _getOffset() {
                    const {
                        offset: t
                    } = this._config;
                    return "string" == typeof t ? t.split(",").map((t => Number.parseInt(t, 10))) : "function" == typeof t ? e => t(e, this._element) : t
                }
                _resolvePossibleFunction(t) {
                    return "function" == typeof t ? t.call(this._element) : t
                }
                _getPopperConfig(t) {
                    const e = {
                        placement: t,
                        modifiers: [{
                            name: "flip",
                            options: {
                                fallbackPlacements: this._config.fallbackPlacements
                            }
                        }, {
                            name: "offset",
                            options: {
                                offset: this._getOffset()
                            }
                        }, {
                            name: "preventOverflow",
                            options: {
                                boundary: this._config.boundary
                            }
                        }, {
                            name: "arrow",
                            options: {
                                element: `.${this.constructor.NAME}-arrow`
                            }
                        }, {
                            name: "onChange",
                            enabled: !0,
                            phase: "afterWrite",
                            fn: t => this._handlePopperPlacementChange(t)
                        }],
                        onFirstUpdate: t => {
                            t.options.placement !== t.placement && this._handlePopperPlacementChange(t)
                        }
                    };
                    return { ...e,
                        ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(e) : this._config.popperConfig
                    }
                }
                _addAttachmentClass(t) {
                    this.getTipElement().classList.add(`${this._getBasicClassPrefix()}-${this.updateAttachment(t)}`)
                }
                _getAttachment(t) {
                    return Ke[t.toUpperCase()]
                }
                _setListeners() {
                    this._config.trigger.split(" ").forEach((t => {
                        if ("click" === t) tt.on(this._element, this.constructor.Event.CLICK, this._config.selector, (t => this.toggle(t)));
                        else if ("manual" !== t) {
                            const e = t === ii ? this.constructor.Event.MOUSEENTER : this.constructor.Event.FOCUSIN,
                                i = t === ii ? this.constructor.Event.MOUSELEAVE : this.constructor.Event.FOCUSOUT;
                            tt.on(this._element, e, this._config.selector, (t => this._enter(t))), tt.on(this._element, i, this._config.selector, (t => this._leave(t)))
                        }
                    })), this._hideModalHandler = () => {
                        this._element && this.hide()
                    }, tt.on(this._element.closest(ti), ei, this._hideModalHandler), this._config.selector ? this._config = { ...this._config,
                        trigger: "manual",
                        selector: ""
                    } : this._fixTitle()
                }
                _fixTitle() {
                    const t = this._element.getAttribute("title"),
                        e = typeof this._element.getAttribute("data-bs-original-title");
                    (t || "string" !== e) && (this._element.setAttribute("data-bs-original-title", t || ""), !t || this._element.getAttribute("aria-label") || this._element.textContent || this._element.setAttribute("aria-label", t), this._element.setAttribute("title", ""))
                }
                _enter(t, e) {
                    e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger["focusin" === t.type ? si : ii] = !0), e.getTipElement().classList.contains(Ze) || e._hoverState === Qe ? e._hoverState = Qe : (clearTimeout(e._timeout), e._hoverState = Qe, e._config.delay && e._config.delay.show ? e._timeout = setTimeout((() => {
                        e._hoverState === Qe && e.show()
                    }), e._config.delay.show) : e.show())
                }
                _leave(t, e) {
                    e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger["focusout" === t.type ? si : ii] = e._element.contains(t.relatedTarget)), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = Ge, e._config.delay && e._config.delay.hide ? e._timeout = setTimeout((() => {
                        e._hoverState === Ge && e.hide()
                    }), e._config.delay.hide) : e.hide())
                }
                _isWithActiveTrigger() {
                    for (const t in this._activeTrigger)
                        if (this._activeTrigger[t]) return !0;
                    return !1
                }
                _getConfig(t) {
                    const e = ht.getDataAttributes(this._element);
                    return Object.keys(e).forEach((t => {
                        qe.has(t) && delete e[t]
                    })), (t = { ...this.constructor.Default,
                        ...e,
                        ..."object" == typeof t && t ? t : {}
                    }).container = !1 === t.container ? document.body : C(t.container), "number" == typeof t.delay && (t.delay = {
                        show: t.delay,
                        hide: t.delay
                    }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), k(We, t, this.constructor.DefaultType), t.sanitize && (t.template = Fe(t.template, t.allowList, t.sanitizeFn)), t
                }
                _getDelegateConfig() {
                    const t = {};
                    for (const e in this._config) this.constructor.Default[e] !== this._config[e] && (t[e] = this._config[e]);
                    return t
                }
                _cleanTipClass() {
                    const t = this.getTipElement(),
                        e = new RegExp(`(^|\\s)${this._getBasicClassPrefix()}\\S+`, "g"),
                        i = t.getAttribute("class").match(e);
                    null !== i && i.length > 0 && i.map((t => t.trim())).forEach((e => t.classList.remove(e)))
                }
                _getBasicClassPrefix() {
                    return "bs-tooltip"
                }
                _handlePopperPlacementChange(t) {
                    const {
                        state: e
                    } = t;
                    e && (this.tip = e.elements.popper, this._cleanTipClass(), this._addAttachmentClass(this._getAttachment(e.placement)))
                }
                _disposePopper() {
                    this._popper && (this._popper.destroy(), this._popper = null)
                }
                static jQueryInterface(t) {
                    return this.each((function() {
                        const e = ni.getOrCreateInstance(this, t);
                        if ("string" == typeof t) {
                            if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                            e[t]()
                        }
                    }))
                }
            }
            x(ni);
            const oi = { ...ni.Default,
                    placement: "right",
                    offset: [0, 8],
                    trigger: "click",
                    content: "",
                    template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
                },
                ri = { ...ni.DefaultType,
                    content: "(string|element|function)"
                },
                ai = {
                    HIDE: "hide.bs.popover",
                    HIDDEN: "hidden.bs.popover",
                    SHOW: "show.bs.popover",
                    SHOWN: "shown.bs.popover",
                    INSERTED: "inserted.bs.popover",
                    CLICK: "click.bs.popover",
                    FOCUSIN: "focusin.bs.popover",
                    FOCUSOUT: "focusout.bs.popover",
                    MOUSEENTER: "mouseenter.bs.popover",
                    MOUSELEAVE: "mouseleave.bs.popover"
                };
            class li extends ni {
                static get Default() {
                    return oi
                }
                static get NAME() {
                    return "popover"
                }
                static get Event() {
                    return ai
                }
                static get DefaultType() {
                    return ri
                }
                isWithContent() {
                    return this.getTitle() || this._getContent()
                }
                setContent(t) {
                    this._sanitizeAndSetContent(t, this.getTitle(), ".popover-header"), this._sanitizeAndSetContent(t, this._getContent(), ".popover-body")
                }
                _getContent() {
                    return this._resolvePossibleFunction(this._config.content)
                }
                _getBasicClassPrefix() {
                    return "bs-popover"
                }
                static jQueryInterface(t) {
                    return this.each((function() {
                        const e = li.getOrCreateInstance(this, t);
                        if ("string" == typeof t) {
                            if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                            e[t]()
                        }
                    }))
                }
            }
            x(li);
            const ci = "scrollspy",
                hi = ".bs.scrollspy",
                di = {
                    offset: 10,
                    method: "auto",
                    target: ""
                },
                ui = {
                    offset: "number",
                    method: "string",
                    target: "(string|element)"
                },
                gi = "dropdown-item",
                _i = "active",
                fi = ".nav-link",
                pi = ".nav-link, .list-group-item, .dropdown-item",
                mi = "position";
            class bi extends st {
                constructor(t, e) {
                    super(t), this._scrollElement = "BODY" === this._element.tagName ? window : this._element, this._config = this._getConfig(e), this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, tt.on(this._scrollElement, "scroll.bs.scrollspy", (() => this._process())), this.refresh(), this._process()
                }
                static get Default() {
                    return di
                }
                static get NAME() {
                    return ci
                }
                refresh() {
                    const t = this._scrollElement === this._scrollElement.window ? "offset" : mi,
                        e = "auto" === this._config.method ? t : this._config.method,
                        i = e === mi ? this._getScrollTop() : 0;
                    this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight();
                    dt.find(pi, this._config.target).map((t => {
                        const s = E(t),
                            n = s ? dt.findOne(s) : null;
                        if (n) {
                            const t = n.getBoundingClientRect();
                            if (t.width || t.height) return [ht[e](n).top + i, s]
                        }
                        return null
                    })).filter((t => t)).sort(((t, e) => t[0] - e[0])).forEach((t => {
                        this._offsets.push(t[0]), this._targets.push(t[1])
                    }))
                }
                dispose() {
                    tt.off(this._scrollElement, hi), super.dispose()
                }
                _getConfig(t) {
                    return (t = { ...di,
                        ...ht.getDataAttributes(this._element),
                        ..."object" == typeof t && t ? t : {}
                    }).target = C(t.target) || document.documentElement, k(ci, t, ui), t
                }
                _getScrollTop() {
                    return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
                }
                _getScrollHeight() {
                    return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                }
                _getOffsetHeight() {
                    return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
                }
                _process() {
                    const t = this._getScrollTop() + this._config.offset,
                        e = this._getScrollHeight(),
                        i = this._config.offset + e - this._getOffsetHeight();
                    if (this._scrollHeight !== e && this.refresh(), t >= i) {
                        const t = this._targets[this._targets.length - 1];
                        this._activeTarget !== t && this._activate(t)
                    } else {
                        if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
                        for (let e = this._offsets.length; e--;) {
                            this._activeTarget !== this._targets[e] && t >= this._offsets[e] && (void 0 === this._offsets[e + 1] || t < this._offsets[e + 1]) && this._activate(this._targets[e])
                        }
                    }
                }
                _activate(t) {
                    this._activeTarget = t, this._clear();
                    const e = pi.split(",").map((e => `${e}[data-bs-target="${t}"],${e}[href="${t}"]`)),
                        i = dt.findOne(e.join(","), this._config.target);
                    i.classList.add(_i), i.classList.contains(gi) ? dt.findOne(".dropdown-toggle", i.closest(".dropdown")).classList.add(_i) : dt.parents(i, ".nav, .list-group").forEach((t => {
                        dt.prev(t, ".nav-link, .list-group-item").forEach((t => t.classList.add(_i))), dt.prev(t, ".nav-item").forEach((t => {
                            dt.children(t, fi).forEach((t => t.classList.add(_i)))
                        }))
                    })), tt.trigger(this._scrollElement, "activate.bs.scrollspy", {
                        relatedTarget: t
                    })
                }
                _clear() {
                    dt.find(pi, this._config.target).filter((t => t.classList.contains(_i))).forEach((t => t.classList.remove(_i)))
                }
                static jQueryInterface(t) {
                    return this.each((function() {
                        const e = bi.getOrCreateInstance(this, t);
                        if ("string" == typeof t) {
                            if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                            e[t]()
                        }
                    }))
                }
            }
            tt.on(window, "load.bs.scrollspy.data-api", (() => {
                dt.find('[data-bs-spy="scroll"]').forEach((t => new bi(t)))
            })), x(bi);
            const vi = "active",
                yi = "fade",
                Ei = "show",
                wi = ".active",
                Ai = ":scope > li > .active";
            class Ti extends st {
                static get NAME() {
                    return "tab"
                }
                show() {
                    if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains(vi)) return;
                    let t;
                    const e = w(this._element),
                        i = this._element.closest(".nav, .list-group");
                    if (i) {
                        const e = "UL" === i.nodeName || "OL" === i.nodeName ? Ai : wi;
                        t = dt.find(e, i), t = t[t.length - 1]
                    }
                    const s = t ? tt.trigger(t, "hide.bs.tab", {
                        relatedTarget: this._element
                    }) : null;
                    if (tt.trigger(this._element, "show.bs.tab", {
                            relatedTarget: t
                        }).defaultPrevented || null !== s && s.defaultPrevented) return;
                    this._activate(this._element, i);
                    const n = () => {
                        tt.trigger(t, "hidden.bs.tab", {
                            relatedTarget: this._element
                        }), tt.trigger(this._element, "shown.bs.tab", {
                            relatedTarget: t
                        })
                    };
                    e ? this._activate(e, e.parentNode, n) : n()
                }
                _activate(t, e, i) {
                    const s = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? dt.children(e, wi) : dt.find(Ai, e))[0],
                        n = i && s && s.classList.contains(yi),
                        o = () => this._transitionComplete(t, s, i);
                    s && n ? (s.classList.remove(Ei), this._queueCallback(o, t, !0)) : o()
                }
                _transitionComplete(t, e, i) {
                    if (e) {
                        e.classList.remove(vi);
                        const t = dt.findOne(":scope > .dropdown-menu .active", e.parentNode);
                        t && t.classList.remove(vi), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1)
                    }
                    t.classList.add(vi), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), D(t), t.classList.contains(yi) && t.classList.add(Ei);
                    let s = t.parentNode;
                    if (s && "LI" === s.nodeName && (s = s.parentNode), s && s.classList.contains("dropdown-menu")) {
                        const e = t.closest(".dropdown");
                        e && dt.find(".dropdown-toggle", e).forEach((t => t.classList.add(vi))), t.setAttribute("aria-expanded", !0)
                    }
                    i && i()
                }
                static jQueryInterface(t) {
                    return this.each((function() {
                        const e = Ti.getOrCreateInstance(this);
                        if ("string" == typeof t) {
                            if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                            e[t]()
                        }
                    }))
                }
            }
            tt.on(document, "click.bs.tab.data-api", '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', (function(t) {
                if (["A", "AREA"].includes(this.tagName) && t.preventDefault(), S(this)) return;
                Ti.getOrCreateInstance(this).show()
            })), x(Ti);
            const Ci = "toast",
                ki = "hide",
                Li = "show",
                Si = "showing",
                Ni = {
                    animation: "boolean",
                    autohide: "boolean",
                    delay: "number"
                },
                Oi = {
                    animation: !0,
                    autohide: !0,
                    delay: 5e3
                };
            class Di extends st {
                constructor(t, e) {
                    super(t), this._config = this._getConfig(e), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners()
                }
                static get DefaultType() {
                    return Ni
                }
                static get Default() {
                    return Oi
                }
                static get NAME() {
                    return Ci
                }
                show() {
                    if (tt.trigger(this._element, "show.bs.toast").defaultPrevented) return;
                    this._clearTimeout(), this._config.animation && this._element.classList.add("fade");
                    this._element.classList.remove(ki), D(this._element), this._element.classList.add(Li), this._element.classList.add(Si), this._queueCallback((() => {
                        this._element.classList.remove(Si), tt.trigger(this._element, "shown.bs.toast"), this._maybeScheduleHide()
                    }), this._element, this._config.animation)
                }
                hide() {
                    if (!this._element.classList.contains(Li)) return;
                    if (tt.trigger(this._element, "hide.bs.toast").defaultPrevented) return;
                    this._element.classList.add(Si), this._queueCallback((() => {
                        this._element.classList.add(ki), this._element.classList.remove(Si), this._element.classList.remove(Li), tt.trigger(this._element, "hidden.bs.toast")
                    }), this._element, this._config.animation)
                }
                dispose() {
                    this._clearTimeout(), this._element.classList.contains(Li) && this._element.classList.remove(Li), super.dispose()
                }
                _getConfig(t) {
                    return t = { ...Oi,
                        ...ht.getDataAttributes(this._element),
                        ..."object" == typeof t && t ? t : {}
                    }, k(Ci, t, this.constructor.DefaultType), t
                }
                _maybeScheduleHide() {
                    this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout((() => {
                        this.hide()
                    }), this._config.delay)))
                }
                _onInteraction(t, e) {
                    switch (t.type) {
                        case "mouseover":
                        case "mouseout":
                            this._hasMouseInteraction = e;
                            break;
                        case "focusin":
                        case "focusout":
                            this._hasKeyboardInteraction = e
                    }
                    if (e) return void this._clearTimeout();
                    const i = t.relatedTarget;
                    this._element === i || this._element.contains(i) || this._maybeScheduleHide()
                }
                _setListeners() {
                    tt.on(this._element, "mouseover.bs.toast", (t => this._onInteraction(t, !0))), tt.on(this._element, "mouseout.bs.toast", (t => this._onInteraction(t, !1))), tt.on(this._element, "focusin.bs.toast", (t => this._onInteraction(t, !0))), tt.on(this._element, "focusout.bs.toast", (t => this._onInteraction(t, !1)))
                }
                _clearTimeout() {
                    clearTimeout(this._timeout), this._timeout = null
                }
                static jQueryInterface(t) {
                    return this.each((function() {
                        const e = Di.getOrCreateInstance(this, t);
                        if ("string" == typeof t) {
                            if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                            e[t](this)
                        }
                    }))
                }
            }
            nt(Di), x(Di)
        }
    }
]);