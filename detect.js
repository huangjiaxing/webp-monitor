;(function(doc) {
    function addRootTag() {
        doc.documentElement.className += " webps";
    }

    if (!/(^|;\s?)webps=A/.test(document.cookie)) {
        var image = new Image();
        image.onload = function() {
            if (image.width == 1) {
                addRootTag();
                document.cookie = "webps=A; max-age=31536000; domain=58.com";
            }
        };
        image.src = 'data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==';
    } else {
        addRootTag();
    }
}(document));
