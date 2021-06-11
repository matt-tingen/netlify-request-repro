When requesting resources with encoded paths, an error is thrown by
`netlify-redirector`:

```
TypeError [ERR_UNESCAPED_CHARACTERS]: Request path contains unescaped characters
    at new ClientRequest (_http_client.js:155:13)
    at Object.request (http.js:94:10)
    at Array.stream (/Users/username/.config/yarn/global/node_modules/http-proxy/lib/http-proxy/passes/web-incoming.js:126:74)
    at ProxyServer.<anonymous> (/Users/username/.config/yarn/global/node_modules/http-proxy/lib/http-proxy/index.js:81:21)
    at Object.web (/Users/username/.config/yarn/global/node_modules/netlify-cli/src/utils/proxy.js:345:20)
    at serveRedirect (/Users/username/.config/yarn/global/node_modules/netlify-cli/src/utils/proxy.js:188:20) {
  code: 'ERR_UNESCAPED_CHARACTERS'
}
TypeError [ERR_UNESCAPED_CHARACTERS]: Request path contains unescaped characters
    at new ClientRequest (_http_client.js:155:13)
    at Object.request (http.js:94:10)
    at Array.stream (/Users/username/.config/yarn/global/node_modules/http-proxy/lib/http-proxy/passes/web-incoming.js:126:74)
    at ProxyServer.<anonymous> (/Users/username/.config/yarn/global/node_modules/http-proxy/lib/http-proxy/index.js:81:21)
    at Object.web (/Users/username/.config/yarn/global/node_modules/netlify-cli/src/utils/proxy.js:345:20)
    at serveRedirect (/Users/username/.config/yarn/global/node_modules/netlify-cli/src/utils/proxy.js:188:20) {
  code: 'ERR_UNESCAPED_CHARACTERS'
}

/Users/username/.config/yarn/global/node_modules/netlify-redirector/lib/redirects.js:116
      throw ex;
      ^
abort({"code":"ERR_UNESCAPED_CHARACTERS"}) at Error
    at jsStackTrace (/Users/username/.config/yarn/global/node_modules/netlify-redirector/lib/redirects.js:1070:13)
    at stackTrace (/Users/username/.config/yarn/global/node_modules/netlify-redirector/lib/redirects.js:1087:12)
    at process.abort (/Users/username/.config/yarn/global/node_modules/netlify-redirector/lib/redirects.js:8502:44)
    at process.emit (events.js:376:20)
    at processPromiseRejections (internal/process/promises.js:245:33)
    at processTicksAndRejections (internal/process/task_queues.js:96:32)
```

To repro with globally installed `netlify-cli`, run `netlify dev` and click the
"Fetch" button to fetch `范.txt`. Expected behavior is for "Success" to show below the button.
Observed behavior is that "Error" shows and the dev server crashes.

Tested on `netlify-cli/3.37.14 darwin-x64 node-v14.17.0`
