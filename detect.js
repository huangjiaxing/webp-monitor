;(function(doc) {

    // 给html根节点加上webps类名
    function addRootTag() {
        doc.documentElement.className += " webps";
    }

    // 判断是否有webps=A这个cookie
    if (!/(^|;\s?)webps=A/.test(document.cookie)) {
        var image = new Image();

        // 图片加载完成时候的操作
        image.onload = function() {

            // 图片加载成功且宽度为1，那么就代表支持webp了，因为这张base64图是webp格式。如果不支持会触发image.error方法
            if (image.width == 1) {

                // html根节点添加class，并且埋入cookie
                addRootTag();
                document.cookie = "webps=A; max-age=31536000; domain=58.com";
            }
        };

        // 一张支持alpha透明度的webp的图片，使用base64编码
        image.src = 'data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==';
    } else {
        addRootTag();
    }
}(document));
