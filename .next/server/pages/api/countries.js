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
exports.id = "pages/api/countries";
exports.ids = ["pages/api/countries"];
exports.modules = {

/***/ "./pages/api/countries.js":
/*!********************************!*\
  !*** ./pages/api/countries.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ countryHandler)\n/* harmony export */ });\nasync function countryHandler(req, res) {\n    const { method  } = req;\n    switch(method){\n        case 'GET':\n            //get countries from facebook search api\n            const requestOptions = {\n                method: 'GET'\n            };\n            await fetch(`https://graph.facebook.com/v12.0/search?access_token=${process.env.ACCESS_TOKEN}&type=adgeolocation&location_types=['country']&q=&limit=1000`, requestOptions).then((response)=>response.json()\n            ).then((result)=>res.status(200).json({\n                    result\n                })\n            ).catch((error)=>console.log('error', error)\n            );\n            break;\n        default:\n            res.setHeader('Allow', [\n                'POST'\n            ]);\n            res.status(405).end(`Method ${method} Not Allowed`);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvY291bnRyaWVzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBZSxlQUFlQSxjQUFjLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFLENBQUM7SUFFcEQsS0FBSyxDQUFDLENBQUNDLENBQUFBLE1BQU0sR0FBQyxHQUFHRixHQUFHO0lBRXBCLE1BQU0sQ0FBRUUsTUFBTTtRQUNaLElBQUksQ0FBQyxDQUFLO1lBQ1IsRUFBd0M7WUFDeEMsS0FBSyxDQUFDQyxjQUFjLEdBQUcsQ0FBQztnQkFDcEJELE1BQU0sRUFBRSxDQUFLO1lBQ2pCLENBQUM7WUFDRCxLQUFLLENBQUNFLEtBQUssRUFBRSxxREFBcUQsRUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLFlBQVksQ0FBQyw0REFBNEQsR0FBR0osY0FBYyxFQUN6S0ssSUFBSSxFQUFDQyxRQUFRLEdBQUlBLFFBQVEsQ0FBQ0MsSUFBSTtjQUM5QkYsSUFBSSxFQUFDRyxNQUFNLEdBQUlWLEdBQUcsQ0FBQ1csTUFBTSxDQUFDLEdBQUcsRUFBRUYsSUFBSSxDQUFDLENBQUNDO29CQUFBQSxNQUFNO2dCQUFBLENBQUM7Y0FDNUNFLEtBQUssRUFBQ0MsS0FBSyxHQUFJQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFPLFFBQUVGLEtBQUs7O1lBQzFDLEtBQUs7O1lBRUxiLEdBQUcsQ0FBQ2dCLFNBQVMsQ0FBQyxDQUFPLFFBQUUsQ0FBQztnQkFBQSxDQUFNO1lBQUEsQ0FBQztZQUMvQmhCLEdBQUcsQ0FBQ1csTUFBTSxDQUFDLEdBQUcsRUFBRU0sR0FBRyxFQUFFLE9BQU8sRUFBRWhCLE1BQU0sQ0FBQyxZQUFZOztBQUV6RCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmFjZWJvb2stY2FtcGFpZ24tYXBpLy4vcGFnZXMvYXBpL2NvdW50cmllcy5qcz9hN2ZhIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGNvdW50cnlIYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgICAgICAgXHJcbiAgICBjb25zdCB7bWV0aG9kfSA9IHJlcVxyXG5cclxuICAgIHN3aXRjaCAobWV0aG9kKSB7XHJcbiAgICAgIGNhc2UgJ0dFVCc6XHJcbiAgICAgICAgLy9nZXQgY291bnRyaWVzIGZyb20gZmFjZWJvb2sgc2VhcmNoIGFwaVxyXG4gICAgICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnXHJcbiAgICAgICAgfTtcclxuICAgICAgICBhd2FpdCBmZXRjaChgaHR0cHM6Ly9ncmFwaC5mYWNlYm9vay5jb20vdjEyLjAvc2VhcmNoP2FjY2Vzc190b2tlbj0ke3Byb2Nlc3MuZW52LkFDQ0VTU19UT0tFTn0mdHlwZT1hZGdlb2xvY2F0aW9uJmxvY2F0aW9uX3R5cGVzPVsnY291bnRyeSddJnE9JmxpbWl0PTEwMDBgLCByZXF1ZXN0T3B0aW9ucylcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHJlcy5zdGF0dXMoMjAwKS5qc29uKHtyZXN1bHR9KSlcclxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coJ2Vycm9yJywgZXJyb3IpKTtcclxuICAgICAgICBicmVha1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJlcy5zZXRIZWFkZXIoJ0FsbG93JywgWydQT1NUJ10pXHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDUpLmVuZChgTWV0aG9kICR7bWV0aG9kfSBOb3QgQWxsb3dlZGApXHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOlsiY291bnRyeUhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJyZXF1ZXN0T3B0aW9ucyIsImZldGNoIiwicHJvY2VzcyIsImVudiIsIkFDQ0VTU19UT0tFTiIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJyZXN1bHQiLCJzdGF0dXMiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInNldEhlYWRlciIsImVuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/countries.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/countries.js"));
module.exports = __webpack_exports__;

})();