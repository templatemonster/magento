(function(a) {
    var n = a(window).width(),
        h, m, k = 0,
        l = function(b, c) { this.options = c;
            this.$source = a(b) };
    l.prototype = {
        init: function() { this.createDOM();
            this.createListeners() },
        createDOM: function() { a(".rd-mobilemenu").append(this.createNavDOM());
            a("html").hasClass("desktop") && 1600 <= n ? (a("body").delegate("*", "mousewheel", this.scroll), a("body").delegate("*", "touchmove", this.scroll), a("body").delegate("*", "touchend", this.touchend), a("body").delegate("*", "touchstart", { type: "click" }, this.close)) : a(".rd-mobilepanel_toggle, .page-content, .rd-mobilemenu").removeClass("active") },
        createNavDOM: function() {
            for (var b = a("<ul>", { "class": "rd-mobilemenu_ul" }), c = this.$source.children(), d = 0; d < c.length; d++) {
                for (var e = c[d].children, f = null, g = 0; g < e.length; g++)
                    if (e[g].tagName) switch (f || (f = document.createElement("li"), -1 < c[d].className.indexOf("active") && (f.className = "active")), e[g].tagName.toLowerCase()) {
                        case "a":
                            var h = e[g].cloneNode(!0);
                            f.appendChild(h);
                            break;
                        case "ul":
                            h = e[g].cloneNode(!0), h.className = "rd-mobilemenu_submenu", f.appendChild(h), a(f).find("> a").hasClass("opened") || a(h).css({ display: "none" }),
                                a(f).find("> a").each(function() { $this = a(this);
                                    $this.addClass("rd-with-ul").on("click", function(b) { b.preventDefault();
                                        $this = a(this);
                                        $this.hasClass("rd-with-ul") && !$this.hasClass("active") ? (a(".rd-with-ul").removeClass("active"), b = $this.addClass("active").parent().find(".rd-mobilemenu_submenu"), b.stop().slideDown(), a(".rd-mobilemenu_submenu").not(b).stop().slideUp()) : (b = $this.removeClass("active").parent().find(".rd-mobilemenu_submenu"), b.stop().slideUp()) }) })
                    }
                    f && b.append(f)
            }
            b.find("a").each(function() {
                -1 <
                    window.location.href.indexOf(a(this).attr("href")) && (a(this).parents(".rd-mobilemenu_ul").find("a").removeClass("focus"), a(this).addClass("focus"))
            });
            return b
        },
        createListeners: function() { this.panelHeight = a(".rd-mobilepanel").outerHeight();
            this.createToggleListener();
            this.createResizeListener();
            this.createScrollListener();
            this.createItemScrollListener() },
        createToggleListener: function() {
            var b = this,
                c;
            c = b.isMobile() ? "touchstart" : "click";
            a("body").delegate(".rd-mobilepanel_toggle", c, function(c) {
                c.preventDefault();
                c.stopPropagation();
                c = a(".rd-mobilemenu");
                a(this).toggleClass("active");
                a(".page-content").toggleClass("active");
                console.log("toggle");
                c.hasClass("active") ? (a(this).removeClass("active"), c.removeClass("active"), a("body").undelegate("*", "mousewheel", b.scroll), a("body").undelegate("*", "touchmove", b.scroll), a("body").undelegate("*", "touchend", b.touchend)) : (a(this).addClass("active"), c.addClass("active"), a("body").delegate("*", "mousewheel", b.scroll), a("body").delegate("*", "touchmove", b.scroll), a("body").delegate("*",
                    "touchend", b.touchend))
            })
        },
        createResizeListener: function() {
            var b = this;
            a(window).on("resize", function() {
                var c = a(".rd-mobilemenu"); "none" == c.css("display") && (c.removeClass("active"), a(".rd-mobilepanel_toggle").removeClass("active"), a("body").undelegate("*", "mousewheel", b.scroll), a("body").undelegate("*", "touchmove", b.scroll), a("body").undelegate("*", "touchend", b.touchend)) }) },
        createScrollListener: function() {
            function b() {
                function b() { e.addClass("fixed");
                    f.css({ transform: "translateY(50.25px)", "font-size": 24 }) }
                var e = a(".rd-mobilepanel"),
                    f = a(".rd-mobilepanel_title"),
                    g = a(document).scrollTop();
                1067 < a(window).width() ? 502 > g ? (e.removeClass("fixed"), a("body").removeClass("navbar-stickup").removeClass("navbar-fixed"), g > c && e.hasClass("fixed"), f.css({ transform: "translateY(" + g / 8 + "px)", "font-size": 56 - g / 20.7 })) : (b(), a("body").removeClass("navbar-fixed").addClass("navbar-stickup")) : (b(), a("body").removeClass("navbar-stickup").addClass("navbar-fixed"));
                c = g
            }
            a(".rd-mobilepanel");
            var c = 0;
            a(window).on("scroll", b);
            a(window).on("resize",
                b);
            b()
        },
        createItemScrollListener: function() {
            a(".rd-mobilemenu_ul").find('a[href*="#"]').on("click", function(b) {
                if (-1 == window.location.search.indexOf(a(this).attr("data-section"))) return !0;
                b.preventDefault();
                a(this).parents(".rd-mobilemenu_ul").find("a").removeClass("focus");
                a(this).addClass("focus");
                var c = this.hash;
                console.log(this.hash);
                "" == this.hash ? a("html, body").stop().animate({ scrollTop: 0 }, 300, "swing", function() { window.location.hash = c }) : (b = a(c), a("html, body").stop().animate({
                    scrollTop: b.offset().top +
                        2
                }, 300, "swing", function() { window.location.hash = c }))
            });
            a(document).on("scroll", function(b) {
                var c = a(document).scrollTop(),
                    d;
                a(".rd-mobilemenu_ul > li > a.rd-with-ul").each(function() {-1 < window.location.search.indexOf(a(this).attr("data-id")) && (d = a(this).parent().find(".rd-mobilemenu_submenu")) });
                d && (c + a(window).height() > a(document).height() - 100 ? (d.find("a").removeClass("focus"), d.find("> li:last-child a").addClass("focus")) : d.find("a").each(function() {
                    var b = a(this),
                        d = a("#" + b.attr("data-id"));
                    0 < d.length &&
                        d.offset().top - 20 <= c && d.offset().top + d.height() > c && (b.parents(".rd-mobilemenu_ul").find("a").removeClass("focus"), b.addClass("focus"))
                }))
            })
        },
        scroll: function(b) {
            var c = a(".rd-mobilemenu_ul"),
                d = b.originalEvent.targetTouches ? b.originalEvent.targetTouches[0].pageX : b.pageX,
                e = b.originalEvent.targetTouches ? b.originalEvent.targetTouches[0].pageY : b.pageY;
            if (e > c.offset().top && e < c.offset().top + c.outerHeight() && d > c.offset().left && d < c.offset().left + c.outerWidth()) {
                d = 0;
                if (b.originalEvent.targetTouches) h || (h = e),
                    d = h - e, h = e, m = 0 < d;
                else { e = (new Date).getTime();
                    if (40 > e - k) { k = e;
                        return }
                    k = e;
                    d = -25 * (b.originalEvent.wheelDelta || -b.originalEvent.detail) }
                c.stop().scrollTop(c.scrollTop() + d)
            } else if (a("html").hasClass("desktop")) return !0;
            b.preventDefault();
            return !1
        },
        touchend: function(b) { b = a(".rd-mobilemenu_ul");
            b.stop().animate({ scrollTop: b.scrollTop() + (m ? 100 : -100) }, 3E3, "easeOutQuint");
            h = void 0 },
        close: function(b) {
            if (b.originalEvent) {
                var c = a(".rd-mobilemenu"),
                    d = b.originalEvent.targetTouches ? b.originalEvent.targetTouches[0].pageX :
                    b.pageX,
                    e = b.originalEvent.targetTouches ? b.originalEvent.targetTouches[0].pageY : b.pageY;
                e > c.offset().top && e < c.offset().top + c.outerHeight() && d > c.offset().left && d < c.offset().left + c.outerWidth() || a(".rd-mobilepanel_toggle").trigger(b.data.type)
            }
        },
        isMobile: function() {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) }
    };
    a.fn.rdparallax = function(a) { this.length && (new l(this[0])).init();
        return this };
    window.RDMobilemenu_autoinit = function(b) { b = a(b);
        b.length && (new l(b[0])).init() }
})(jQuery);
$(document).ready(function() { RDMobilemenu_autoinit('[data-type="navbar"]') });
