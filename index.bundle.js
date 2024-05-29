(()=>{"use strict";var t={208:(t,e,n)=>{n.d(e,{A:()=>A});var o=n(354),r=n.n(o),i=n(314),a=n.n(i),s=n(417),l=n.n(s),c=new URL(n(341),n.b),d=a()(r()),p=l()(c);d.push([t.id,`@font-face {\n    font-family: 'MyFont';\n    src: url(${p}) format('woff');\n    font-weight: 600;\n    font-style: normal;\n}\n\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    height: 100vh;\n    width: 100vw;\n    background: linear-gradient(to bottom, black, blue);\n}\n\n.title, #player-board, #computer-board, .separator {\n    font-family: 'MyFont',serif;\n    border-radius: 10px;\n    border: 3px solid white;\n    transform: translate(-50%, -50%);\n    position: absolute;\n    color: white;\n}\n\n.title {\n    top: 15%;\n    left: 50%;\n    font-size: 100px;\n    display: flex;\n    gap: 30px;\n    padding: 10px;\n}\n\n#player-board, #computer-board, .separator {\n    top: 60%;\n    padding: 3px;\n}\n\n#player-board, #computer-board, #init-board {\n    height: calc(0.25*100vw);\n    width: calc(0.25*100vw);\n    display: grid;\n    grid-template: repeat(10,1fr) / repeat(10,1fr);\n    background-color: lightslategray;\n}\n\n#player-board {\n    left: 25%;\n}\n\n#computer-board {\n    left: 75%;\n}\n\n.separator {\n    left: 50%;\n    height: calc(0.35*100vw);\n    border: none;\n    background-color: burlywood;\n}\n\n.computer-item, .grid-item  {\n    border: 1px solid #030303;\n    background: white;\n}\n\n.ship-item {\n    background-color: #1f2937;\n    border: 3px solid white;\n}\n\n.water-item {\n    background-color: lightblue;\n}\n\n.hit-item {\n    background-color: orangered;\n}\n\n.computer-item:hover {\n    background-color: lightgray;\n    cursor: pointer;\n}\n\ndialog {\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    position: absolute;\n    border-radius: 10px;\n    border: 3px solid black;\n    background-color: #fde68a;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    padding: 20px;\n    gap: 50px;\n}\n\ndialog > button {\n    border-radius: 10px;\n    font-size: 20px;\n    padding: 10px;\n    font-family: MyFont, serif;\n}\n\n::backdrop {\n    background-color: darkgray;\n    opacity: 0.8;\n}\n\n.dialog-text {\n    color: #1f2937;\n    font-size: 40px;\n    font-family: MyFont, serif;\n}`,"",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AAAA;IACI,qBAAqB;IACrB,2DAAkD;IAClD,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,sBAAsB;IACtB,SAAS;IACT,UAAU;AACd;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,mDAAmD;AACvD;;AAEA;IACI,2BAA2B;IAC3B,mBAAmB;IACnB,uBAAuB;IACvB,gCAAgC;IAChC,kBAAkB;IAClB,YAAY;AAChB;;AAEA;IACI,QAAQ;IACR,SAAS;IACT,gBAAgB;IAChB,aAAa;IACb,SAAS;IACT,aAAa;AACjB;;AAEA;IACI,QAAQ;IACR,YAAY;AAChB;;AAEA;IACI,wBAAwB;IACxB,uBAAuB;IACvB,aAAa;IACb,8CAA8C;IAC9C,gCAAgC;AACpC;;AAEA;IACI,SAAS;AACb;;AAEA;IACI,SAAS;AACb;;AAEA;IACI,SAAS;IACT,wBAAwB;IACxB,YAAY;IACZ,2BAA2B;AAC/B;;AAEA;IACI,yBAAyB;IACzB,iBAAiB;AACrB;;AAEA;IACI,yBAAyB;IACzB,uBAAuB;AAC3B;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,2BAA2B;IAC3B,eAAe;AACnB;;AAEA;IACI,QAAQ;IACR,SAAS;IACT,gCAAgC;IAChC,kBAAkB;IAClB,mBAAmB;IACnB,uBAAuB;IACvB,yBAAyB;IACzB,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,aAAa;IACb,SAAS;AACb;;AAEA;IACI,mBAAmB;IACnB,eAAe;IACf,aAAa;IACb,0BAA0B;AAC9B;;AAEA;IACI,0BAA0B;IAC1B,YAAY;AAChB;;AAEA;IACI,cAAc;IACd,eAAe;IACf,0BAA0B;AAC9B",sourcesContent:["@font-face {\n    font-family: 'MyFont';\n    src: url('./resources/myFont.woff') format('woff');\n    font-weight: 600;\n    font-style: normal;\n}\n\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    height: 100vh;\n    width: 100vw;\n    background: linear-gradient(to bottom, black, blue);\n}\n\n.title, #player-board, #computer-board, .separator {\n    font-family: 'MyFont',serif;\n    border-radius: 10px;\n    border: 3px solid white;\n    transform: translate(-50%, -50%);\n    position: absolute;\n    color: white;\n}\n\n.title {\n    top: 15%;\n    left: 50%;\n    font-size: 100px;\n    display: flex;\n    gap: 30px;\n    padding: 10px;\n}\n\n#player-board, #computer-board, .separator {\n    top: 60%;\n    padding: 3px;\n}\n\n#player-board, #computer-board, #init-board {\n    height: calc(0.25*100vw);\n    width: calc(0.25*100vw);\n    display: grid;\n    grid-template: repeat(10,1fr) / repeat(10,1fr);\n    background-color: lightslategray;\n}\n\n#player-board {\n    left: 25%;\n}\n\n#computer-board {\n    left: 75%;\n}\n\n.separator {\n    left: 50%;\n    height: calc(0.35*100vw);\n    border: none;\n    background-color: burlywood;\n}\n\n.computer-item, .grid-item  {\n    border: 1px solid #030303;\n    background: white;\n}\n\n.ship-item {\n    background-color: #1f2937;\n    border: 3px solid white;\n}\n\n.water-item {\n    background-color: lightblue;\n}\n\n.hit-item {\n    background-color: orangered;\n}\n\n.computer-item:hover {\n    background-color: lightgray;\n    cursor: pointer;\n}\n\ndialog {\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    position: absolute;\n    border-radius: 10px;\n    border: 3px solid black;\n    background-color: #fde68a;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    padding: 20px;\n    gap: 50px;\n}\n\ndialog > button {\n    border-radius: 10px;\n    font-size: 20px;\n    padding: 10px;\n    font-family: MyFont, serif;\n}\n\n::backdrop {\n    background-color: darkgray;\n    opacity: 0.8;\n}\n\n.dialog-text {\n    color: #1f2937;\n    font-size: 40px;\n    font-family: MyFont, serif;\n}"],sourceRoot:""}]);const A=d},314:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",o=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),o&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),o&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,o,r,i){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(o)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(a[l]=!0)}for(var c=0;c<t.length;c++){var d=[].concat(t[c]);o&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),e.push(d))}},e}},417:t=>{t.exports=function(t,e){return e||(e={}),t?(t=String(t.__esModule?t.default:t),/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]|(%20)/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t):t}},354:t=>{t.exports=function(t){var e=t[1],n=t[3];if(!n)return e;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),i="/*# ".concat(r," */");return[e].concat([i]).join("\n")}return[e].join("\n")}},72:t=>{var e=[];function n(t){for(var n=-1,o=0;o<e.length;o++)if(e[o].identifier===t){n=o;break}return n}function o(t,o){for(var i={},a=[],s=0;s<t.length;s++){var l=t[s],c=o.base?l[0]+o.base:l[0],d=i[c]||0,p="".concat(c," ").concat(d);i[c]=d+1;var A=n(p),h={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==A)e[A].references++,e[A].updater(h);else{var u=r(h,o);o.byIndex=s,e.splice(s,0,{identifier:p,updater:u,references:1})}a.push(p)}return a}function r(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,r){var i=o(t=t||[],r=r||{});return function(t){t=t||[];for(var a=0;a<i.length;a++){var s=n(i[a]);e[s].references--}for(var l=o(t,r),c=0;c<i.length;c++){var d=n(i[c]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=l}}},659:t=>{var e={};t.exports=function(t,n){var o=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},540:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},56:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},825:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},113:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},341:(t,e,n)=>{t.exports=n.p+"68a265ac783795c7bcc1.woff"}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return t[o](i,i.exports,n),i.exports}n.m=t,n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var o=e.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&(!t||!/^http(s?):/.test(t));)t=o[r--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var t=n(72),e=n.n(t),o=n(825),r=n.n(o),i=n(659),a=n.n(i),s=n(56),l=n.n(s),c=n(540),d=n.n(c),p=n(113),A=n.n(p),h=n(208),u={};u.styleTagTransform=A(),u.setAttributes=l(),u.insert=a().bind(null,"head"),u.domAPI=r(),u.insertStyleElement=d(),e()(h.A,u),h.A&&h.A.locals&&h.A.locals;class f{constructor(t){this.length=t,this.hits=0,this.sunk=!1}hit=()=>{this.hits+=1,this.hits===this.length&&(this.sunk=!0)};isSunk=()=>this.sunk}let m=new f;m.hit(),m.isSunk();class g{constructor(t){this.size=t-1,this.ships=[],this.hits=[],this.misses=[]}containsCoordinate=(t,[e,n])=>{for(let o=0;o<t.length;o++){const[r,i]=t[o];if(r===e&&i===n)return!0}return!1};fits=(t,e,n)=>!("x"===n&&t[0]+e>this.size+1||"y"===n&&t[1]+e>this.size+1);occupied=t=>{for(let e=0;e<this.ships.length;e++)if("x"===this.ships[e].axis&&t[1]===this.ships[e].coordinates[1]&&t[0]-this.ships[e].coordinates[0]>=0&&t[0]-this.ships[e].coordinates[0]<this.ships[e].ship.length||"y"===this.ships[e].axis&&t[0]===this.ships[e].coordinates[0]&&t[1]-this.ships[e].coordinates[1]>=0&&t[1]-this.ships[e].coordinates[1]<this.ships[e].ship.length)return e;return-1};shipsClash=(t,e,n)=>{for(let o=0;o<e;o++)if("x"===n&&-1!==this.occupied([t[0]+o,t[1]])||"y"===n&&-1!==this.occupied([t[0],t[1]+o]))return!0;return!1};addShip=(t,e,n)=>!0===this.fits(t,e,n)&&!1===this.shipsClash(t,e,n)&&(this.ships.push({ship:new f(e),coordinates:t,axis:n}),!0);receiveAttack=t=>{if(!0===this.containsCoordinate(this.hits,t)||!0===this.containsCoordinate(this.misses,t))return"error";let e=this.occupied(t);return-1===e?(this.misses.push(t),"miss"):(this.hits.push(t),this.ships[e].ship.hit(),"hit")};allShipsSunk=()=>{for(let t=0;t<this.ships.length;t++)if(!1===this.ships[t].ship.isSunk())return!1;return!0};clear=()=>{this.ships=[],this.hits=[],this.misses=[]}}class b{static availableShips={carrier:5,battleship:4,submarine:3,destroyer:3,scouter:2};constructor(){this.gameboard=new g(10)}generateBoard=()=>{Object.keys(b.availableShips).forEach((t=>{let e,n;do{e=[Math.floor(10*Math.random()),Math.floor(10*Math.random())],n=Math.floor(2*Math.random())?"x":"y"}while(!1===this.gameboard.addShip(e,b.availableShips[t],n))})),console.log(this.gameboard)};clearBoard=()=>{this.gameboard.clear()}}class C extends b{constructor(){super()}}class y extends b{constructor(){super(),this.lastMove={hit:!1,coordinates:[0,0],tries:1}}generateMove=()=>{if(this.lastMove.hit){if(1===this.lastMove.tries&&this.lastMove.coordinates[0]+1<10)return[this.lastMove.coordinates[0]+1,this.lastMove.coordinates[1]];if(2===this.lastMove.tries&&this.lastMove.coordinates[0]-1>=0)return[this.lastMove.coordinates[0]-1,this.lastMove.coordinates[1]];if(3===this.lastMove.tries&&this.lastMove.coordinates[1]+1<10)return[this.lastMove.coordinates[0],this.lastMove.coordinates[1]+1];if(4===this.lastMove.tries&&this.lastMove.coordinates[1]-1>=0)return[this.lastMove.coordinates[0],this.lastMove.coordinates[1]-1]}return this.lastMove.hit=!1,[Math.floor(10*Math.random()),Math.floor(10*Math.random())]};updateLastMove=(t,e)=>{this.lastMove.tries=1,"hit"===t&&(this.lastMove.coordinates=e,this.lastMove.hit=!0)}}const v=function(t,e){"miss"===e?t.className="water-item":"hit"===e&&(t.className="hit-item")},B=function(t,e,n){!function(t){let e=document.getElementById("player-board"),n=document.getElementById("computer-board");for(let o=0;o<10;o++)for(let r=0;r<10;r++){let i=document.createElement("button"),a=document.createElement("button");-1!==t.player.gameboard.occupied([o,r])?i.className="ship-item":i.className="grid-item",i.id="P"+o+r,console.log(i.id),a.className="computer-item",e.appendChild(i),n.appendChild(a),a.addEventListener("click",(e=>{if("computer-item"===a.className){let e,n;v(a,t.computer.gameboard.receiveAttack([o,r])),!0===t.computer.gameboard.allShipsSunk()&&I("You won!",t);do{e=t.computer.generateMove(),n=t.player.gameboard.receiveAttack(e),t.computer.lastMove.tries++}while("error"===n);let i=document.getElementById("P"+e[0]+e[1]);v(i,n),t.computer.updateLastMove(n,e),!0===t.player.gameboard.allShipsSunk()&&I("Computer won :(",t)}}))}}(t)},I=function(t,e){let n=document.getElementById("dialog"),o=document.createElement("p");o.textContent=t,o.className="dialog-text",n.appendChild(o);let r=document.createElement("button");r.textContent="play again",n.appendChild(r),r.addEventListener("click",(t=>{for(;n.firstChild;)n.removeChild(n.firstChild);n.style.display="flex",n.close(),e.newRound()})),n.style.display="flex",n.showModal()};(new class{constructor(){this.player=new C,this.computer=new y}newRound=()=>{this.player.clearBoard(),this.computer.clearBoard(),function(){let t=document.getElementById("player-board"),e=document.getElementById("computer-board");for(;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)e.removeChild(e.firstChild)}(),this.computer.generateBoard(),function(t){const e=t.player;let n=document.getElementById("dialog"),o="y";const r=Object.keys(b.availableShips);let i=0,a=document.createElement("p");a.textContent="PLACE YOUR "+r[0].toUpperCase(),a.className="dialog-text",n.appendChild(a);let s=document.createElement("button");s.textContent="ROTATE",s.addEventListener("click",(t=>{o="x"===o?"y":"x"})),n.appendChild(s);let l=document.createElement("div");l.id="init-board",n.appendChild(l);for(let s=0;s<10;s++)for(let c=0;c<10;c++){let d=document.createElement("button");d.className="computer-item",d.id="I"+s+c,l.appendChild(d),d.addEventListener("click",(l=>{let d=e.gameboard.addShip([s,c],b.availableShips[r[i]],o);if(console.log(d),!0===d){for(let t=0;t<b.availableShips[r[i]];t++){if("x"===o){let e=s+t;document.getElementById("I"+e+c).className="ship-item"}if("y"===o){let e=c+t;document.getElementById("I"+s+e).className="ship-item"}}if(i++,i===r.length){for(;n.firstChild;)n.removeChild(n.firstChild);n.style.display="none",n.close(),B(t)}else a.textContent="Place your "+r[i].toUpperCase()}}));let p=document.createElement("div");p.style.position="absolute",p.style.display="flex",p.style.pointerEvents="none",d.addEventListener("mouseenter",(()=>{for(;p.firstChild;)p.removeChild(p.firstChild);p.style.flexDirection="x"===o?"column":"row";let t=d.offsetWidth;for(let e=0;e<b.availableShips[r[i]];e++){let e=document.createElement("div");e.style.width=t+"px",e.style.height=t+"px",e.className="ship-item",e.style.opacity="0.8",p.appendChild(e)}n.appendChild(p);const e=d.getBoundingClientRect(),a=n.getBoundingClientRect(),s=e.top+window.scrollY-a.top,l=e.left+window.scrollX-a.left;p.style.top=s+"px",p.style.left=l+"px",console.log(p.style.top),console.log(p.style.left)})),d.addEventListener("mouseout",(()=>{n.removeChild(p)}))}n.style.display="flex",n.showModal()}(this)}}).newRound()})()})();
//# sourceMappingURL=index.bundle.js.map