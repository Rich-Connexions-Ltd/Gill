/* ===================================
   Shared Includes Loader
   Loads nav and footer from /includes/
   and sets the active nav link
   =================================== */

(function () {
    'use strict';

    /**
     * Map page filenames to their nav link href.
     * index.html is the default for '/' paths.
     */
    function getCurrentPage() {
        var path = window.location.pathname;
        var page = path.substring(path.lastIndexOf('/') + 1) || 'index.html';
        return page;
    }

    /**
     * Set the 'active' class on the nav link matching the current page.
     */
    function setActiveNav() {
        var currentPage = getCurrentPage();
        var navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(function (link) {
            var href = link.getAttribute('href');
            if (href === currentPage) {
                link.classList.add('active');
            }
        });
    }

    /**
     * Initialise mobile nav toggle and header scroll effect.
     * Called after the nav HTML is injected into the page.
     */
    function initNav() {
        /* Mobile Navigation Toggle */
        var navToggle = document.querySelector('.nav-toggle');
        var navMenu = document.querySelector('.nav-menu');

        if (navToggle && navMenu) {
            navToggle.addEventListener('click', function () {
                navToggle.classList.toggle('active');
                navMenu.classList.toggle('active');
            });

            navMenu.querySelectorAll('a').forEach(function (link) {
                link.addEventListener('click', function () {
                    navToggle.classList.remove('active');
                    navMenu.classList.remove('active');
                });
            });

            document.addEventListener('click', function (e) {
                if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                    navToggle.classList.remove('active');
                    navMenu.classList.remove('active');
                }
            });
        }

        /* Header scroll effect */
        var header = document.querySelector('.site-header');
        if (header) {
            window.addEventListener('scroll', function () {
                if (window.scrollY > 50) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            });
        }
    }

    /**
     * Fetch an HTML file and inject its contents into a target element.
     */
    function loadInclude(url, targetId) {
        return fetch(url)
            .then(function (response) {
                if (!response.ok) throw new Error('Failed to load ' + url);
                return response.text();
            })
            .then(function (html) {
                var target = document.getElementById(targetId);
                if (target) {
                    target.outerHTML = html;
                }
            });
    }

    /* Load nav and footer when DOM is ready */
    document.addEventListener('DOMContentLoaded', function () {
        var navPromise = loadInclude('includes/nav.html', 'site-nav');
        var footerPromise = loadInclude('includes/footer.html', 'site-footer');

        /* After nav is loaded, set active state and initialise nav JS */
        navPromise.then(function () {
            setActiveNav();
            initNav();
        });
    });
})();
