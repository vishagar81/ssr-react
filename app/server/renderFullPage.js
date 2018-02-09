export default function renderFullPage(html, preloadedState) {
    return `
        <!doctype html>
        <html>
        <meta http-equiv="Cache-control" content="public">
        <head>
            <title> Your SSR Router node App initialized with data</title>
        </head>
        <body>
            <div id="root" data-test="prod">${html}</div>
            <script>
                window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\003c')}
            </script>
            <script src="/bundle.js"></script>
        </body>
        </html>
    `
};