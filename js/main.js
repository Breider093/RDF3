// This file is intentionally left blank.

async function injectPartial(selector, url) {
    const el = document.querySelector(selector);
    if (!el) {
        return;
    }

    const res = await fetch(url, { cache: 'no-store' });
    if (!res.ok) {
        return;
    }

    el.innerHTML = await res.text();
}

document.addEventListener('DOMContentLoaded', function () {
    Promise.all([
        injectPartial('#site-header', 'partials/header.html'),
        injectPartial('#site-footer', 'partials/footer.html')
    ]).catch(function () {
    });
});