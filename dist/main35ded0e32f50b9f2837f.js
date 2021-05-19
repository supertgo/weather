(()=>{"use strict";const e=document.querySelector("#search");function t(e,t="metric"){return`https://api.openweathermap.org/data/2.5/onecall?lat=${e.lat}&lon=${e.lon}&exclude=minutely,alerts&units=${t}&appid=fed5252a83d1efbe48a54ce479af6041`}async function n(e){const t=await fetch(e,{mode:"cors"});if(console.log(t),404!==t.status)return await t.json();o()}function o(){document.querySelector("#error").style.display="block"}async function r(e){const r=await async function(e){const t=await fetch(e,{mode:"cors"});if(404!==t.status){const e=await t.json(),{coord:n}=e;return n}o()}((a=e,console.log(a),`https://api.openweathermap.org/data/2.5/weather?q=${a}&units=metric&appid=fed5252a83d1efbe48a54ce479af6041`));var a;const c=await n(t(r));return c.name=e,c}function a(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function c(e){a(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function i(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function s(e){!function(e){const t={description:e.current.weather[0].description,name:e.name,day:`${u(e.daily[0].dt,e.timezone_offset)}`,temp:`${Math.round(e.current.temp)} °C`,icon:`https://openweathermap.org/img/wn/${e.current.weather[0].icon}@2x.png`},n=Object.keys(t),o=Object.values(t);for(let e=0;e<n.length;e++)"icon"!==n[e]?document.querySelector(`.weather-info-${n[e]} `).textContent=o[e]:document.getElementById("weather-info-icon-image").src=o[e]}(e),function(e){const t={feels_like:`${Math.round(e.current.feels_like)} °C`,humidity:`${e.current.humidity} % `,chance_of_rain:`${e.daily[0].pop} % `,wind_speed:`${e.current.wind_speed} m/s`},n=Object.keys(t),o=Object.values(t);for(let e=0;e<n.length;e++)document.querySelector(`#${n[e]} `).textContent=o[e]}(e),function(e){for(let t=1;t<document.querySelector(".forecast").childElementCount+1;t++)document.querySelector(`#forecast-week-day-${t}`).textContent=u(e.daily[t].dt,e.timezone_offset).slice(0,7),document.querySelector(`#forecast-week-icon-${t}`).src=`https://openweathermap.org/img/wn/${e.daily[t].weather[0].icon}@2x.png`,document.querySelector(`#forecast-week-temperature-${t}`).textContent=`${Math.round(e.daily[t].temp.min)}°C ${Math.round(e.daily[t].temp.max)}°C`}(e)}function u(e,t){return function(e){return a(1,arguments),c(1e3*i(e))}(e+t).toUTCString().slice(0,16)}new google.maps.places.Autocomplete(e,{types:["(cities)"]});const l=document.querySelector("#search"),d=document.querySelector(".search-glass");l.addEventListener("focus",(()=>{document.querySelector("#error").style.display="none"})),d.addEventListener("click",(async()=>{s(await r(l.value))})),window.navigator.geolocation&&navigator.geolocation.getCurrentPosition((async function(e){s(await async function(e){e.coords.lat=e.coords.latitude,e.coords.lon=e.coords.longitude;const o=await t(e.coords),r=await n(o);return r.name="Your Location",r}(e))}),(async function(){s(await r("Belo Horizonte, MG, Brasil"))}))})();