"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/regions";
exports.ids = ["pages/api/regions"];
exports.modules = {

/***/ "./pages/api/regions.js":
/*!******************************!*\
  !*** ./pages/api/regions.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ regionHandler)\n/* harmony export */ });\nasync function regionHandler(req, res) {\n    const { body , method  } = req;\n    switch(method){\n        case 'POST':\n            //get regions from facebook search api by country code\n            const requestOptions = {\n                method: 'GET'\n            };\n            await fetch(`https://graph.facebook.com/v12.0/search?location_types=[\"region\"]&type=adgeolocation&q=&limit=1000&country_code=${body.code}&access_token=${process.env.ACCESS_TOKEN}`, requestOptions).then((response)=>response.json()\n            ).then((result)=>{\n                res.status(200).json({\n                    result\n                });\n            }).catch((error)=>console.log('error', error)\n            );\n            break;\n        default:\n            res.setHeader('Allow', [\n                'POST'\n            ]);\n            res.status(405).end(`Method ${method} Not Allowed`);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvcmVnaW9ucy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWUsZUFBZUEsYUFBYSxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRSxDQUFDO0lBRW5ELEtBQUssQ0FBQyxDQUFDQyxDQUFBQSxJQUFJLEdBQUNDLE1BQU0sR0FBQyxHQUFHSCxHQUFHO0lBRXpCLE1BQU0sQ0FBRUcsTUFBTTtRQUNaLElBQUksQ0FBQyxDQUFNO1lBQ1QsRUFBc0Q7WUFDdEQsS0FBSyxDQUFDQyxjQUFjLEdBQUcsQ0FBQztnQkFDcEJELE1BQU0sRUFBRSxDQUFLO1lBQ2pCLENBQUM7WUFDRCxLQUFLLENBQUNFLEtBQUssRUFBRSxnSEFBZ0gsRUFBRUgsSUFBSSxDQUFDSSxJQUFJLENBQUMsY0FBYyxFQUFFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsWUFBWSxJQUFJTCxjQUFjLEVBQ2xNTSxJQUFJLEVBQUNDLFFBQVEsR0FBSUEsUUFBUSxDQUFDQyxJQUFJO2NBQzlCRixJQUFJLEVBQUNHLE1BQU0sR0FBSSxDQUFDO2dCQUNiWixHQUFHLENBQUNhLE1BQU0sQ0FBQyxHQUFHLEVBQUVGLElBQUksQ0FBQyxDQUFDQztvQkFBQUEsTUFBTTtnQkFBQSxDQUFDO1lBQ2pDLENBQUMsRUFDQUUsS0FBSyxFQUFDQyxLQUFLLEdBQUlDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQU8sUUFBRUYsS0FBSzs7WUFDMUMsS0FBSzs7WUFFTGYsR0FBRyxDQUFDa0IsU0FBUyxDQUFDLENBQU8sUUFBRSxDQUFDO2dCQUFBLENBQU07WUFBQSxDQUFDO1lBQy9CbEIsR0FBRyxDQUFDYSxNQUFNLENBQUMsR0FBRyxFQUFFTSxHQUFHLEVBQUUsT0FBTyxFQUFFakIsTUFBTSxDQUFDLFlBQVk7O0FBRXZELENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mYWNlYm9vay1jYW1wYWlnbi1hcGkvLi9wYWdlcy9hcGkvcmVnaW9ucy5qcz9jODNlIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHJlZ2lvbkhhbmRsZXIocmVxLCByZXMpIHtcclxuICAgIFxyXG4gICAgY29uc3Qge2JvZHksbWV0aG9kfSA9IHJlcTtcclxuXHJcbiAgICBzd2l0Y2ggKG1ldGhvZCkge1xyXG4gICAgICBjYXNlICdQT1NUJzpcclxuICAgICAgICAvL2dldCByZWdpb25zIGZyb20gZmFjZWJvb2sgc2VhcmNoIGFwaSBieSBjb3VudHJ5IGNvZGVcclxuICAgICAgICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJ1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgYXdhaXQgZmV0Y2goYGh0dHBzOi8vZ3JhcGguZmFjZWJvb2suY29tL3YxMi4wL3NlYXJjaD9sb2NhdGlvbl90eXBlcz1bXCJyZWdpb25cIl0mdHlwZT1hZGdlb2xvY2F0aW9uJnE9JmxpbWl0PTEwMDAmY291bnRyeV9jb2RlPSR7Ym9keS5jb2RlfSZhY2Nlc3NfdG9rZW49JHtwcm9jZXNzLmVudi5BQ0NFU1NfVE9LRU59YCwgcmVxdWVzdE9wdGlvbnMpXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtyZXN1bHR9KVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKCdlcnJvcicsIGVycm9yKSk7XHJcbiAgICAgICAgYnJlYWtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXMuc2V0SGVhZGVyKCdBbGxvdycsIFsnUE9TVCddKVxyXG4gICAgICAgIHJlcy5zdGF0dXMoNDA1KS5lbmQoYE1ldGhvZCAke21ldGhvZH0gTm90IEFsbG93ZWRgKVxyXG4gICAgfVxyXG4gIH0iXSwibmFtZXMiOlsicmVnaW9uSGFuZGxlciIsInJlcSIsInJlcyIsImJvZHkiLCJtZXRob2QiLCJyZXF1ZXN0T3B0aW9ucyIsImZldGNoIiwiY29kZSIsInByb2Nlc3MiLCJlbnYiLCJBQ0NFU1NfVE9LRU4iLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwicmVzdWx0Iiwic3RhdHVzIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJzZXRIZWFkZXIiLCJlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/regions.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/regions.js"));
module.exports = __webpack_exports__;

})();