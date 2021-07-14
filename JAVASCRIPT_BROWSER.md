# Браузеры, API, PWA, WebAssembly, Web Components

<!--
* 🇺🇸 []()
* 🇷🇺 []()
* 🏳 []()
* 🇷🇺/🇺🇸 [перевод]()/[оригинал]()
-->

## Браузеры

* 🇺🇸 [Особенности использования модулей в браузере](https://jakearchibald.com/2017/es-modules-in-browsers/)
* 🇺🇸 [Поддержка старых браузеров без вреда для остальных](https://sgom.es/posts/2019-03-06-supporting-old-browsers-without-hurting-everyone/)
* 🇷🇺 [Как рисует браузер. Доклад Яндекса](https://habr.com/ru/company/yandex/blog/468165/)
* 🇺🇸 [Hide iPhone HTML5 video play button](https://stackoverflow.com/questions/8911247/hide-iphone-html5-video-play-button)
* 🇺🇸 [ECMAScript features compatibility table](https://kangax.github.io/compat-table/es6/)
* 🇷🇺 [Browser Fingerprint — анонимная идентификация браузеров](https://habr.com/ru/company/oleg-bunin/blog/321294/)
* 🇷🇺/🇺🇸 Современная загрузка скриптов [перевод](https://habr.com/ru/company/raiffeisenbank/blog/473994/)/[оригинал](https://jasonformat.com/modern-script-loading/)
* 🇷🇺 [Взаимодействие сайта в браузере и локально запущенной программы](https://habr.com/ru/post/438166/)
* 🇷🇺/🇺🇸 DevTips: Советы веб-разработчику [частичный перевод 1](https://habr.com/ru/company/mailru/blog/268519/), [частичный перевод 2](https://habr.com/ru/company/mailru/blog/268777/), [частичный перевод 3](https://habr.com/ru/company/mailru/blog/275425/), [частичный перевод 4](https://habr.com/ru/company/mailru/blog/278021/)/[оригинал](https://umaar.com/dev-tips/)
* 🇺🇸 [how to manage HTML DOM with vanilla JavaScript only?](https://htmldom.dev/)
* 🇺🇸 [Browser Architecture: Web-to-App Communication Overview](https://textslashplain.com/2019/08/28/browser-architecture-web-to-app-communication-overview/)
* 🇺🇸 🔥 [What every Browser knows about you](https://webkay.robinlinus.com/)

### Event loop

* 🇺🇸 [Event loop explainer](https://github.com/atotic/event-loop)
* 🇷🇺 [Что ты такое, Event Loop? Или как устроен цикл событий в браузере Chrome](https://habr.com/ru/post/461401/)
* 🇺🇸 [Demystifying Asynchronous JavaScript — Event Loop, Call stack, Task Queue, and More!](https://levelup.gitconnected.com/demystifying-asynchronous-javascript-event-loop-call-stack-task-queue-and-more-51fb748a4bd4)

### Полезные расширения

* [WhatRuns — определитель технологий сайта](https://chrome.google.com/webstore/detail/whatruns/cmkdbmfndkfgebldhnkbfhlneefdaaip)
* [JsonDiscovery — самый годный просмотрщик JSON](https://github.com/discoveryjs/browser-extension-json-discovery)
* [Обход блокировок Рунета](https://chrome.google.com/webstore/detail/%D0%BE%D0%B1%D1%85%D0%BE%D0%B4-%D0%B1%D0%BB%D0%BE%D0%BA%D0%B8%D1%80%D0%BE%D0%B2%D0%BE%D0%BA-%D1%80%D1%83%D0%BD%D0%B5%D1%82%D0%B0/npgcnondjocldhldegnakemclmfkngch)

### Разработка расширений

* 🇷🇺 [Пишем безопасное браузерное расширение](https://habr.com/ru/company/waves/blog/451796/)
* 🇺🇸 [web-extension-starter](https://github.com/abhijithvijayan/web-extension-starter)
* 🇺🇸 [Getting started with web-ext](https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/)

### Про отладку в браузерах

* 🇷🇺 [Мои любимые инструменты разработчика в Chrome](https://habr.com/ru/post/489284/)
* 🇷🇺 [10 малоизвестных возможностей инструментов разработчика Chrome](https://habr.com/ru/company/ruvds/blog/470411/)
* 🇺🇸 [Eruda — подключаемый DevTools для мобильных браузеров](https://github.com/liriliri/eruda)
* 🇺🇸 [Отладка Mobile Firefox](https://developer.mozilla.org/en-US/docs/Tools/about:debugging)
* 🇺🇸 [Touch Bar Demo App — эмулятор тачбара MacBook](https://github.com/bikkelbroeders/TouchBarDemoApp)
* 🇺🇸 [Feature Queries Manager — отладка браузеров с разным значением @supports](https://github.com/ireade/feature-queries-manager)
* 🇺🇸 [CSS Feature Toggles](https://github.com/keithclark/css-feature-toggle-devtools-extension)
* 🇺🇸 [List of Chromium Command Line Switches](https://peter.sh/experiments/chromium-command-line-switches/)
* 🇺🇸 [Enabling the Microphone/Camera in Chrome for (Local) Unsecure Origins](https://medium.com/@Carmichaelize/enabling-the-microphone-camera-in-chrome-for-local-unsecure-origins-9c90c3149339)

### Про новинки в браузерах

* 🇺🇸 [Microsoft Edge](https://docs.microsoft.com/en-us/microsoft-edge/dev-guide/whats-new)
* 🇺🇸 [Safari (WebKit)](https://webkit.org/blog/)
* 🇺🇸 [Firefox developer release notes](https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Releases)

### Где найти старые версии браузеров:

* [Firefox](https://ftp.mozilla.org/pub/firefox/releases/)
* Opera [Chromium desktop](http://get.opera.com/ftp/pub/opera/desktop/), [все платформы](http://get.opera.com/ftp/pub/opera/)
  * Отключить автообновление Opera на macOS 31-: "Показать содержимое пакета" -> удалить Contents/MacOS/opera_autoupdate
  * Отключить автообновление Opera на macOS [32+](https://forums.opera.com/topic/11657/how-to-disable-auto-update-in-the-macos-version-for-those-who-need-that/3)
* UCBrowser, [Android](https://plus.ucweb.com/download/)
* Chrome, [инструкция как откопать старый билд](https://stackoverflow.com/questions/54927496/how-to-download-older-versions-of-chrome-from-a-google-official-site)
* Edge на движке EdgeHTML можно найти в том или ином билде Windows 10
  * 12: v.1507, build 10240
  * 13: v.1511, build 10586
  * 14: v.1607, build 14393
  * 15: v.1703, build 15063
  * 16: v.1709, build 16299
  * 17: v.1803, build 17134
  * 18: v.1809, build 17763
  * 18: v.1903, build 18362
  * 18: v.1909, build 18363
  * Chromium-based: v.2004

### Explainers — объяснение мотивации для разработки новых API и других вещей

* 🇺🇸 [WebKit Explainers](https://github.com/WebKit/explainers)
* 🇺🇸 [Microsoft Edge Explainers](https://github.com/MicrosoftEdge/MSEdgeExplainers)

### Прочее

* 🇺🇸 [Mozilla Specification Positions](https://mozilla.github.io/standards-positions/)
* 🇺🇸 [Техподдержка SamsungInternet](https://github.com/SamsungInternet/support) 

## Работа с событиями

* 🇺🇸 [A Simple Explanation of Event Delegation in JavaScript](https://dmitripavlutin.com/javascript-event-delegation/)
* 🇺🇸 [addEventListener accepts functions and (!) objects](https://www.stefanjudis.com/today-i-learned/addeventlistener-accepts-functions-and-objects/)

## Библиотеки

* 🇺🇸 [Intro.js — Step-by-step guide and feature introduction](https://introjs.com/)
* 🇺🇸 [interactjs — JavaScript drag and drop, resizing and multi-touch gestures with inertia and snapping](https://github.com/taye/interact.js)
* 🇺🇸 [Lottie — плеер для воспроизведения анимаций из After Effect](http://airbnb.io/lottie/)
* 🇺🇸 [Micromodal — доступные модальные окна](https://github.com/ghosh/Micromodal)
* 🇺🇸 [markdown-it — Markdown parser](https://github.com/markdown-it/markdown-it)
* 🇺🇸 [FileSaver.js](https://github.com/eligrey/FileSaver.js)
* 🇺🇸 [Vanilla Tilt — анимированные 3D-плашки](https://micku7zu.github.io/vanilla-tilt.js/index.html)
* 🇺🇸 [Pure JavaScript Image Crop Component](https://dev.vizuina.com/cropper/)
* 🇺🇸 [The Vanilla JavaScript Repository — сборник различных библиотек](https://vanillalist.top/)
* 🇺🇸 🔥 [ZXing  — библиотека для распознавания штрихкодов](https://www.npmjs.com/package/@zxing/library)
* 🇺🇸 🔥 [Browser or Node.js — определение окружения](https://www.npmjs.com/package/browser-or-node)
* 🇺🇸 🔥 [Browser, please — определение версии браузера](https://dartess.github.io/browser-please/)
* 🇺🇸 🔥 [js-cookie](https://www.npmjs.com/package/js-cookie)
* 🇺🇸 🔥 [throttle-debounce](https://www.npmjs.com/package/throttle-debounce)
* 🇺🇸 🔥 [uuid — генератор UUID (universally unique identifier «универсальный уникальный идентификатор»)](https://www.npmjs.com/package/uuid)
* 🇺🇸 [Piecon — Pie charts in your favicon!](http://lipka.github.io/piecon/)
* 🇺🇸 [AR.js - Augmented Reality on the Web](https://github.com/AR-js-org/AR.js)
* 🇺🇸 [Cashify – Lightweight currency conversion library, successor of money.js](https://github.com/xxczaki/cashify)
* 🇺🇸 [Mousetrap – работа с шорткатами](https://craig.is/killing/mice)
* 🇺🇸 [shiki – Syntax Highlighter (подсветка синтаксиса)](https://shiki.matsu.io/)
* 🇺🇸 [Fluid Framework](https://fluidframework.com/)

### Карусели

* 🇺🇸 [glide](https://github.com/glidejs/glide)
* 🇺🇸 [Flickity](https://flickity.metafizzy.co/)
* 🇺🇸 [Siema](https://pawelgrzybek.github.io/siema/)

### Выпадающие списки

* 🇺🇸 [Choices](https://joshuajohnson.co.uk/Choices/)

### Даты и время

* 🇺🇸 [date-fns — Modern JavaScript date utility library](https://date-fns.org/)
* 🇺🇸 [Day.js — легковесная альтернатива Moment.js](https://github.com/iamkun/dayjs)
* 🇺🇸 [Luxon — A powerful, modern, and friendly wrapper for Javascript dates and times.](https://moment.github.io/luxon/)

Также см. JavaScript -> Intl

#### Календари

* 🇺🇸 [Duet Date Picker – на веб-компонентах](https://duetds.github.io/date-picker/)

### Формы

* 🇺🇸 [yup — до смерти простой валидатор объектов](https://github.com/jquense/yup)
* 🇺🇸 🔥 [Final Form — работа с формами](https://final-form.org/)
* 🇺🇸 🔥 [Final Form Arrays — работа с массивами в Final Form](https://www.npmjs.com/package/final-form-arrays)
* 🇺🇸 🔥 [Text Mask](https://text-mask.github.io/text-mask/)
* 🇺🇸 [Cleave.js — Format your input content when you are typing](https://nosir.github.io/cleave.js/)

### Скролл и скроллбар

* 🇺🇸 [perfect-scrollbar](https://github.com/mdbootstrap/perfect-scrollbar)
* 🇺🇸 [lax.js — imple & light weight (<3kb gzipped) vanilla javascript plugin to create smooth & beautiful animations when you scrolllll!](https://github.com/alexfoxy/lax.js)

### Анимация

* 🇺🇸 [Anime.js — a lightweight JavaScript animation library with a simple, yet powerful API](https://animejs.com/)

### Canvas

* 🇺🇸 [Rough.js — библиотека для имитации рисования на canvas "от руки"](https://github.com/pshihn/rough)
* 🇺🇸 [Canvas-Txt — Render text onto canvases without breaking a sweat](https://canvas-txt.geongeorge.com/)

### Графики и визуализация

* 🇺🇸 [Сборник библиотек для визуализации (карты, графики, данные, цвета](http://selection.datavisualization.ch/)
* 🇺🇸 [DataMaps — интерактивные карты](http://datamaps.github.io/)
* 🇺🇸 [Carbon Charts — с адаптерами под фреймворки](https://carbon-design-system.github.io/carbon-charts/)
* 🇺🇸 [Google Charts](https://developers.google.com/chart)
* 🇺🇸 [Plotly.js](https://plot.ly/javascript/)
* 🇺🇸 [Chartist - Simple responsive charts](http://gionkunz.github.io/chartist-js/)
* 🇺🇸 [ApexCharts.js](https://apexcharts.com/)
* 🇺🇸 [ECharts](https://echarts.apache.org/en/index.html)
* 🇺🇸 [Chart.js](https://www.chartjs.org/)

#### ECharts

* 🇺🇸 [Why we chose ECharts for data visualizations](https://about.gitlab.com/blog/2019/09/30/why-we-chose-echarts/)

#### Chart.js

* 🇺🇸 [Data visualization with Chart.js: An introduction](https://tobiasahlin.com/blog/introduction-to-chartjs/)

#### D3.js

* 🇺🇸 [How to learn D3.js](https://wattenberger.com/blog/d3)
* 🇷🇺 [Визуализация геоданных в D3.js](https://frontender.info/d3js-map-visualization/)
* 🇺🇸 [d3-pre](https://github.com/fivethirtyeight/d3-pre)
* 🇺🇸 [Rendering One Million Datapoints with D3 and WebGL](https://blog.scottlogic.com/2020/05/01/rendering-one-million-points-with-d3.html)
* 🇷🇺 [Просто о D3.js](https://habr.com/ru/post/342106/)
* 🇷🇺 [Визуализация сложных данных с использованием D3 и React](https://habr.com/ru/post/517562/)

##### Библиотеки на основе D3.js

* 🇺🇸 [Britecharts](https://eventbrite.github.io/britecharts/index.html)
* 🇺🇸 [billboard.js](https://naver.github.io/billboard.js/)

### Медиа (аудио, видео)

* 🇺🇸 [Plyr — a simple, accessible and customisable media player](https://plyr.io/)
* 🇺🇸 [Vime – a customizable, extensible, accessible and framework agnostic media player](https://vimejs.com/)
* 🇷🇺 [Обзор видеоплееров для веба](https://habr.com/ru/post/493674/)

### drag & drop library

* 🇺🇸 [graggable](https://shopify.github.io/draggable/)

### Физические движки

* 🇺🇸 [Matter.js](https://brm.io/matter-js/)

### Шаблонизаторы / библиотеки для рендеринга HTML

* 🇺🇸 [lit-html](https://lit-html.polymer-project.org/)
* 🇺🇸 [hyperHTML](https://viperhtml.js.org/)
* 🇺🇸 [lighterhtml](https://github.com/WebReflection/lighterhtml#lighterhtml)
* 🇺🇸 [lit-html vs hyperHTML vs lighterhtml](https://medium.com/@WebReflection/lit-html-vs-hyperhtml-vs-lighterhtml-c084abfe1285)
* 🇺🇸 [Awesome lit-html](https://github.com/web-padawan/awesome-lit-html)

### RxJS

* 🇺🇸 [RxJS: A Simple Introduction](https://medium.com/@rossbulat/rxjs-a-simple-introduction-32fb48f52a67)
* 🇺🇸 [Push-based Architectures with RxJS](https://medium.com/@thomasburlesonIA/push-based-architectures-with-rxjs-81b327d7c32d)

### Карты

* 🇷🇺 [Google Maps — кастомизируй меня полностью](https://habr.com/ru/post/324880/)
* 🇺🇸 [Google Geolocation API](https://developers.google.com/maps/documentation/geolocation/overview)
* 🇺🇸 [Farewell, Google Maps](https://www.inderapotheke.de/blog/farewell-google-maps)

### Иммутабельность

* 🇺🇸 [Immutable.js](https://facebook.github.io/immutable-js/)
* 🇺🇸 [Introduction to Immutable.js and Functional Programming Concepts](https://auth0.com/blog/intro-to-immutable-js/)

### Поиск

* 🇺🇸 [Fuse.js — powerful, lightweight fuzzy-search library](https://fusejs.io/)
* 🇺🇸 [Elasticlunr.js — Lightweight full-text search engine in Javascript for browser search and offline search](http://elasticlunr.com/)

### WYSIWYG

* 🇺🇸 [pell](https://jaredreich.com/pell/)
* 🇺🇸 [Slate.js](https://github.com/ianstormtaylor/slate)

### Локализация

* 🇺🇸 [Project Fluent](https://www.projectfluent.org/)

Также смотри: JAVASCRIPT_FRAMEWORKS.md -> Интернационализация

## PWA

* 🇷🇺 🔥 📺 [Введение в Progressive Web Apps, Сергей Пугачев (Google)](https://www.youtube.com/watch?v=skmvycNQ_TM)
* 🇺🇸 [Progressive Web Apps — Websites that took all the right vitamins](https://web.dev/progressive-web-apps/)
* 🇺🇸 📺 [Progressive Web App Training](https://www.youtube.com/playlist?list=PLNYkxOF6rcIB2xHBZ7opgc2Mv009X87Hh)
* 🇺🇸 [Progressive Web Apps](https://www.manning.com/books/progressive-web-apps)
* 🇺🇸 [A Tinder Progressive Web App Performance Case Study](https://medium.com/@addyosmani/a-tinder-progressive-web-app-performance-case-study-78919d98ece0)
* 🇺🇸 [A Pinterest Progressive Web App Performance Case Study](https://medium.com/dev-channel/a-pinterest-progressive-web-app-performance-case-study-3bd6ed2e6154)
* 🇺🇸 [MDN: Progressive web apps](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)
* 🇺🇸 [Progressive Web Apps Training от Google](https://developers.google.com/web/ilt/pwa/)
* 🇺🇸 [pwa-install-prompt](https://jacobdb.github.io/pwa-install-prompt/demo/)
* 🇺🇸 [Myth Busting PWAs – The New Edge Edition](https://www.davrous.com/2019/10/18/myth-busting-pwas-the-new-edge-edition/)
* 🇷🇺 [Могут ли PWA (Progressive Web Apps) образца 2018 года составить достойную конкуренцию нативным приложениям?](https://habr.com/ru/company/google/blog/414609/)
* 🇷🇺/🇺🇸 Сервис-воркеры в клиенте Slack: об ускорении загрузки и оффлайн-режиме [перевод](https://habr.com/ru/company/ruvds/blog/468409/)/[оригинал](https://slack.engineering/service-workers-at-slack-our-quest-for-faster-boot-times-and-offline-support/)
* 🇺🇸 [Turning Your Existing App Into a Progressive Web App](https://medium.com/better-programming/turning-your-existing-application-into-a-pwa-776d65b0aa12)
* 🇺🇸 [Building offline-first web and mobile apps using event-sourcing](https://flpvsk.com/blog/2019-07-20-offline-first-apps-event-sourcing/)
* 🇺🇸 [An Extensive Guide To Progressive Web Applications](https://www.smashingmagazine.com/2018/11/guide-pwa-progressive-web-applications/)
* 🇺🇸 Designing And Building A Progressive Web Application Without A Framework [Part 1](https://www.smashingmagazine.com/2019/07/progressive-web-application-pwa-framework-part-1/), [Part 2](https://www.smashingmagazine.com/2019/07/progressive-web-application-pwa-framework-part-2/), [Part 3](https://www.smashingmagazine.com/2019/07/progressive-web-application-pwa-framework-part-3/)
* 🇷🇺 🇺🇸 Прогрессивные веб-приложения (PWA). Будущее мобильного интернета [перевод, часть 1](https://blog.sibirix.ru/2019/11/06/PWA-book-part1/), [перевод, часть 2](https://blog.sibirix.ru/2019/11/07/PWA-book-part2/)/[оригинал](https://www.awwwards.com/PWA-ebook/)
* 🇺🇸 [Progressive Web Apps. The Superpowers of the Web and Native Apps Combined](https://www.awwwards.com/PWA-ebook-vol2/)
* 🇷🇺 [Как сделать из сайта приложение и выложить его в Google Play за несколько часов. Часть 1/2: Progressive Web App](https://habr.com/ru/company/mailru/blog/450504/)
* 🇺🇸 [Appscope - Progressive Web Apps Examples](https://appsco.pe/)
* 🇺🇸 [Javascript to check if PWA or Mobile Web](https://stackoverflow.com/questions/41742390/javascript-to-check-if-pwa-or-mobile-web)
* 🇺🇸 [Awesome Progressive Web Apps](https://github.com/TalAter/awesome-progressive-web-apps)
* 🇺🇸 [What makes a good Progressive Web App?](https://web.dev/pwa-checklist/)
* 🇺🇸 📺 [Going Offline First (Video Series)](https://bitsofco.de/going-offline-first/)
* 🇺🇸 [Add to Home Screen](https://developers.google.com/web/fundamentals/app-install-banners/)

### Web App Manifest

* 🇺🇸 [PWACompat to bring Web App Manifest to older browsers](https://github.com/GoogleChromeLabs/pwacompat)
* 🇺🇸 [You shouldn’t use Chrome’s PWACompat library in your Progressive Web Apps](https://medium.com/@firt/you-shouldnt-use-chrome-s-pwacompat-library-in-your-progressive-web-apps-6b3496faab62)
* 🇺🇸 [iWAM — An experiment to polyfill Web App Manifest (WAM) into Safari on iOS useful for Progressive Web Apps](https://github.com/firtman/iWAM)
* 🇺🇸 [PWA series: the manifest file cheatsheet](https://medium.com/samsung-internet-dev/pwa-series-the-manifest-file-cheatsheet-459b4a5e2098)
* 🇷🇺 [Выйти за грань браузера (theme-color)](https://habr.com/ru/post/245007/)
* 🇺🇸 [Creating a Custom PWA Splash Screen](https://www.simicart.com/blog/pwa-splash-screen/)
* 🇺🇸 [pwa-asset-generator ✨](https://github.com/onderceylan/pwa-asset-generator)

#### Маскируемеые иконки

* 🇺🇸 [Adaptive icon support in PWAs with maskable icons](https://web.dev/maskable-icon/)
* 🇺🇸 [Маскируемеые иконки (в Android)](https://developer.android.com/guide/practices/ui_guidelines/icon_design_adaptive)
* 🇺🇸 [New in Chrome 79 — Maskable Icons](https://developers.google.com/web/updates/2019/12/nic79#maskable-icons)
* 🇺🇸 [Maskable Icons: Android Adaptive Icons for Your PWA](https://css-tricks.com/maskable-icons-android-adaptive-icons-for-your-pwa/)

#### App shortcuts

* 🇺🇸 [Get things done quickly with app shortcuts](https://web.dev/app-shortcuts/)

### Service Worker

* 🇷🇺 [Создание сервис-воркера: разбор примера](http://prgssr.ru/development/sozdaem-service-worker.html)
* 🇺🇸 [Service Workers at Slack: Our Quest for Faster Boot Times and Offline Support](https://slack.engineering/service-workers-at-slack-our-quest-for-faster-boot-times-and-offline-support-3492cf79c88)
* 🇺🇸 📺 [Максим Сальников — Сервис-воркеры: используем накопленный опыт и смотрим в будущее](https://www.youtube.com/watch?v=sly5O_f6w6g)
* 🇺🇸 [Service workers at TPAC](https://jakearchibald.com/2019/service-workers-tpac/)
* 🇷🇺 [Продуманные запросы: стратегии кэширования в век PWA](https://habr.com/ru/company/ruvds/blog/478326/)
* 🇺🇸 [ServiceWorker Cookbook](https://serviceworke.rs/)
* 🇷🇺 [Подводные камни Service Workers](https://habr.com/ru/post/351194/)
* 🇺🇸 [Two HTTP headers related to Service Workers you never may have heard of](https://medium.com/dev-channel/two-http-headers-related-to-service-workers-you-never-may-have-heard-of-c8862f76cc60)
* 🇺🇸 [Service workers: the little heroes behind Progressive Web Apps](https://www.freecodecamp.org/news/service-workers-the-little-heroes-behind-progressive-web-apps-431cc22d0f16/)
* 🇺🇸 [Debugging Service Workers](https://codelabs.developers.google.com/codelabs/debugging-service-workers/#0)
* 🇺🇸 [Stuff I wish I'd known sooner about service workers](https://gist.github.com/Rich-Harris/fd6c3c73e6e707e312d7c5d7d0f3b2f9)
* 🇺🇸 [App shell UX with service workers and streams](https://web.dev/app-shell-ux-with-service-workers/)
* 🇺🇸 [Service Worker Lifecycle Explained](https://felixgerschau.com/service-worker-lifecycle-update/)
* 🇺🇸 [How much data should my Service Worker put upfront in the offline cache?](https://nicolas-hoizey.com/articles/2017/01/12/how-much-data-should-my-service-worker-put-upfront-in-the-offline-cache/)<!--- в общем, не кэшируйте всё пордяд, подумайте о пользователе; кэшируйте основу, то что пользователь посетил и то что будет полезно ему в режиме оффлайн --->
* 🇺🇸 [Offline POSTs with Progressive Web Apps](https://medium.com/web-on-the-edge/offline-posts-with-progressive-web-apps-fc2dc4ad895)
* 🇺🇸 [Adaptive loading with service workers](https://web.dev/adaptive-loading-with-service-workers/)
* 🇺🇸 [Understanding Service Workers](http://blog.88mph.io/2017/07/28/understanding-service-workers/)

#### Workbox

* 🇺🇸 [Workbox — JavaScript Libraries for adding offline support to web apps](https://developers.google.com/web/tools/workbox/)
* 🇷🇺 [WorkBox: ваш toolkit в мире сервис-воркеров](https://habr.com/ru/company/domclick/blog/523106/)

### Особенности платформ

* 🇺🇸 [PWA Bugs](https://github.com/PWA-POLICE/pwa-bugs)
* 🇺🇸 [Десктопные PWA в Windows](https://twitter.com/firt/status/1054442657567727616)
* 🇺🇸 [Десктопные PWA в Linux](https://twitter.com/firt/status/1054801501653221378)
* 🇺🇸 [Progressive Web Apps on Desktop](https://developers.google.com/web/progressive-web-apps/desktop)

#### Особенности PWA на iOS

* 🇺🇸 [PWAs are coming to iOS 11.3: Cupertino, we have a problem](https://medium.com/@firt/pwas-are-coming-to-ios-11-3-cupertino-we-have-a-problem-2ff49fd7d6ea)
* 🇺🇸 [What’s new on iOS 12.2 for Progressive Web Apps](https://medium.com/@firt/whats-new-on-ios-12-2-for-progressive-web-apps-75c348f8e945)
* 🇺🇸 [iPhone 11, iPadOS and iOS 13 for PWAs and web development](https://medium.com/@firt/iphone-11-ipados-and-ios-13-for-pwas-and-web-development-5d5d9071cc49)
* 🇺🇸 [Safari on iOS 14 and iPadOS 14 for PWA and Web Developers](https://firt.dev/ios-14/)
* 🇺🇸 [Don’t use iOS meta tags irresponsibly in your Progressive Web Apps](https://medium.com/@firt/dont-use-ios-web-app-meta-tag-irresponsibly-in-your-progressive-web-apps-85d70f4438cb)
* 🇺🇸 [Adding Custom iOS Splash Screens To Your Progressive Web App](https://medium.com/appscope/adding-custom-ios-splash-screens-to-your-progressive-web-app-41a9b18bdca3)
* 🇺🇸 [Changing The iOS Status Bar Of Your Progressive Web App](https://medium.com/appscope/changing-the-ios-status-bar-of-your-progressive-web-app-9fc8fbe8e6ab)

### PWA и магазины приложений

* 🇷🇺 [Play Store теперь принимает прогрессивные веб-приложения (PWA)](https://habr.com/ru/post/439238/)
* 🇺🇸 [Introducing Progressive Web Apps to Samsung Galaxy Store](https://medium.com/samsung-internet-dev/introducing-progressive-web-apps-to-samsung-galaxy-store-47ecd317725b)
* 🇺🇸 [Publishing PWA to Microsoft Store](https://kolappan.dev/2020/07/27/publishing-pwa-to-ms-store)

#### TWA

* 🇺🇸 [Introducing a Trusted Web Activity for Android](https://blog.chromium.org/2019/02/introducing-trusted-web-activity-for.html)
* 🇺🇸 [Bubblewrap — CLI that helps developers to create a Project for an Android application that launches an existing (PWAs) using a TWA](https://github.com/GoogleChromeLabs/bubblewrap)
* 🇷🇺 [Как сделать из сайта приложение и выложить его в Google Play за несколько часов. Часть 2/2: Trusted Web Activity](https://habr.com/ru/company/mailru/blog/450506/)
* 🇺🇸 [A complete implementation guide to Trusted Web Activity(TWA)- OYO Lite](https://medium.com/oyotech/a-complete-guide-to-trusted-web-activity-twa-oyo-case-study-3dd327d7afc5)
* 🇺🇸 [How can I detect if my website is opened inside a Trusted Web Actvity?](https://stackoverflow.com/questions/54580414/how-can-i-detect-if-my-website-is-opened-inside-a-trusted-web-actvity)

### favicon и другие изображения для иконок

* 🇷🇺 [Разработка анимированных фавиконов](https://habr.com/ru/company/ruvds/blog/464127/)

### Project Fugu

* 🇺🇸 [🐡 Chromium https://goo.gle/fugu-api-tracker](https://goo.gle/fugu-api-tracker)
* 🇺🇸 [Project Fugu 🐡 at W3C TPAC](https://blog.tomayac.com/2019/09/21/project-fugu-at-w3c-tpac/)

## API

### API для работы с DOM

#### IntersectionObserver — слежение за попаданием элемента в область видимости

* 🇺🇸 [Now You See Me: How To Defer, Lazy-Load And Act With IntersectionObserver](https://www.smashingmagazine.com/2018/01/deferring-lazy-loading-intersection-observer-api/)
* 🇺🇸 [Intersection Observers — Explainer Doc, Draft Spec, Polyfill](https://github.com/w3c/IntersectionObserver)
* 🇺🇸 🔥 [IntersectionObserver polyfill](https://www.npmjs.com/package/intersection-observer)

#### ResizeObserver — слежение за изменением размеров элемента

* 🇷🇺/🇺🇸 ResizeObserver — новый мощный инструмент для работы с адаптивностью [перевод](https://habr.com/ru/post/487146/)/[оригинал](https://medium.com/@barvysta/resizeobserver-a-new-powerful-tool-for-responsive-web-f9a53ed71952)
* 🇺🇸 [Resize Observer Polyfill](https://juggle.studio/resize-observer/)

#### Async DOM

* 🇺🇸 [Async DOM proposals](https://github.com/chrishtr/async-dom/blob/master/current-proposals.md)
* 🇺🇸 [Display locking proposal](https://github.com/WICG/display-locking)
* 🇺🇸 [DOMChangeList proposal](https://github.com/whatwg/dom/issues/270)
* 🇺🇸 [worker-node proposal](https://github.com/drufball/worker-node)


### API для работы с CSS

* 🇺🇸 [An Introduction and Guide to the CSS Object Model (CSSOM)](https://css-tricks.com/an-introduction-and-guide-to-the-css-object-model-cssom/)

### API для работы с камерой, микрофоном и медиа

* 🇺🇸 [JS Tidbits - MediaStream API](https://areknawo.com/js-tidbits-mediastream-api/)
* 🇺🇸 [Web 🧡 Camera](https://github.com/riju/WebCamera)

#### Media Capture and Streams API (MediaStream API) — получение аудио и видео

* 🇺🇸 [MDN — Media Capture and Streams API (Media Stream)](https://developer.mozilla.org/en-US/docs/Web/API/Media_Streams_API)
* 🇺🇸 [Audio & Video Capture](https://whatwebcando.today/camera-microphone.html)

#### MediaStream Image Capture API — продвинутое управление камерой

* 🇺🇸 [MDN — MediaStream Image Capture API](https://developer.mozilla.org/en-US/docs/Web/API/MediaStream_Image_Capture_API)
* 🇺🇸 [Advanced Camera Controls](https://whatwebcando.today/photos.html)

#### MediaStream Recording API — запись медиа

* 🇺🇸 [MDN — MediaStream Recording API](https://developer.mozilla.org/en-US/docs/Web/API/MediaStream_Recording_API)
* 🇺🇸 [Recording Media](https://whatwebcando.today/recording.html)
* 🇺🇸 [Building a Dictaphone Using Media Recorder and getUserMedia](https://24ways.org/2019/building-a-dictaphone-using-media-recorder-and-getusermedia)
* 🇺🇸 [webkit – MediaRecorder API](https://webkit.org/blog/11353/mediarecorder-api/)

#### Media Source API

* 🇺🇸 [Media Source API – MDN](https://developer.mozilla.org/en-US/docs/Web/API/Media_Source_Extensions_API)

#### WebRTC API — реал-тайм коммуникация

* 🇺🇸 [MDN — WebRTC API](https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API)
* 🇺🇸 [Real-Time Communication](https://whatwebcando.today/realtime.html)
* 🇺🇸 [A comprehensive dive into WebRTC for client-server web games](http://blog.brkho.com/2017/03/15/dive-into-client-server-web-games-webrtc/)

#### WebCodecs API

* 🇺🇸 [WebCodecs – черновик предложения](https://wicg.github.io/web-codecs/)
* 🇺🇸 [Video processing with WebCodecs](https://web.dev/webcodecs/)

#### PTZ-камеры (pan, tilt, zoom)

* 🇺🇸 [Control camera pan, tilt, and zoom](https://web.dev/camera-pan-tilt-zoom/)

#### Picture-in-Picture API

* 🇺🇸 [Picture-in-Picture](https://www.w3.org/TR/picture-in-picture/)
* 🇺🇸 [How we built Picture-in-Picture in Firefox Desktop with more control over video](https://hacks.mozilla.org/2020/01/how-we-built-picture-in-picture-in-firefox-desktop/)

#### Web Video Text Tracks Format (WebVTT) — формат субтитров (подписей) для video

* 🇺🇸 [Web Video Text Tracks Format (WebVTT)](https://developer.mozilla.org/en-US/docs/Web/API/WebVTT_API)

### Доступ к аппаратным ресурсам устройства (Device Features)

#### Network Information API

* 🇺🇸 [MDN — Network Information API](https://developer.mozilla.org/en-US/docs/Web/API/Network_Information_API)
* 🇺🇸 [Network Type & Speed](https://whatwebcando.today/network-type-speed.html)
* 🇺🇸 [Adaptive serving based on network quality](https://web.dev/adaptive-serving-based-on-network-quality/)

#### NavigatorOnLine

* 🇺🇸 [MDN — NavigatorOnLine](https://developer.mozilla.org/en-US/docs/Web/API/NavigatorOnLine)
* 🇺🇸 [Online State](https://whatwebcando.today/online-state.html)

#### Vibration API

* 🇺🇸 [MDN — Vibration API](https://developer.mozilla.org/en-US/docs/Web/API/Vibration_API)
* 🇺🇸 [Vibration](https://whatwebcando.today/vibration.html)

#### Battery Status API

* 🇺🇸 [MDN — Battery Status API](https://developer.mozilla.org/en-US/docs/Web/API/Battery_Status_API)
* 🇺🇸 [Battery Status](https://whatwebcando.today/battery-status.html)

#### Device Memory API

* 🇺🇸 [MDN — Device Memory API](https://developer.mozilla.org/en-US/docs/Web/API/Device_Memory_API)
* 🇺🇸 [Device Memory](https://whatwebcando.today/memory.html)

#### Web NFC

* 🇺🇸 [Interact with NFC devices on Chrome for Android](https://web.dev/nfc/)
* 🇺🇸 [NFC](https://whatwebcando.today/nfc.html)
* 🇺🇸 [Web NFC — черновик спецификации](https://w3c.github.io/web-nfc/)

#### Generic Sensor API

* 🇺🇸 [Generic Sensor API — черновик спецификации](https://w3c.github.io/sensors/)
* 🇺🇸 [Getting started with the Ambient Light Sensor](https://w3c.github.io/ambient-light/)
* 🇺🇸 [Device Position](https://whatwebcando.today/device-position.html)
* 🇺🇸 [Device Motion](https://whatwebcando.today/device-motion.html)

### Доступ к средствам операционной системы

#### Хренение информации

* 🇺🇸 [Offline Storage](https://whatwebcando.today/storage.html)
* 🇺🇸 [MDN — Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Storage_API)
* 🇺🇸 [Storage Quotas](https://whatwebcando.today/storage-quota.html)

##### Web Storage API

* 🇺🇸 [MDN — Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API)
* 🇺🇸 [Test of localStorage limits/quota](https://arty.name/localstorage.html)

##### IndexedDB API

* 🇺🇸 [MDN — IndexedDB API](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)
* 🇺🇸 [React, Web Workers and IndexedDB](https://dev.to/daviddalbusco/react-web-workers-and-indexeddb-55ip)

##### ServiceWorker Cache

* 🇺🇸 [MDN — Cache](https://developer.mozilla.org/en-US/docs/Web/API/Cache)

##### Storage Access API

* 🇺🇸 [Introducing the Storage Access API](https://blogs.windows.com/msedgedev/2020/07/08/introducing-storage-access-api/)

#### File — доступ к выбранным файлам

* 🇺🇸 [File Access](https://whatwebcando.today/files.html)
* 🇺🇸 [MDN — Using files from web applications](https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications)

#### File System Access (ex Native File System API ) — доступ к файловой системе

* 🇺🇸 [File System Access – черновик предложения](https://wicg.github.io/file-system-access/)
* 🇺🇸 [The File System Access API: simplifying access to local files](https://web.dev/file-system-access/)
* 🇺🇸 [Native File System API — explainer](https://github.com/WICG/file-system-access/blob/master/EXPLAINER.md)

#### Contact Picker API — доступ к контактам

* 🇺🇸 [Contact Picker API, или как поделиться своими контактами с браузером](https://habr.com/ru/post/486892/)
* 🇺🇸 [A contact picker for the web](https://web.dev/contact-picker/)
* 🇺🇸 [An introduction to the Web Contact Picker API](https://dev.to/twilio/an-introduction-to-the-web-contact-picker-api-43ap)
* 🇺🇸 [Contact Picker API Demo](https://contact-picker.glitch.me/)
* 🇺🇸 [Contact Picker API — черновик предложения](https://wicg.github.io/contact-api/spec/)
* 🇺🇸 [Contact Picker API — explainer](https://github.com/WICG/contact-api/)
* 🇺🇸 [Автозаполнение из контактов в Safari](https://github.com/mozilla/standards-positions/issues/153#issuecomment-487817706)

#### Web OTP API — получение одноразовых кодов из СМС

* 🇺🇸 [Verify phone numbers on the web with the Web OTP API](https://web.dev/web-otp/)
* 🇺🇸 [Web OTP explainer](https://github.com/samuelgoto/WebOTP)
* 🇺🇸 [Enhance SMS-delivered code security with domain-bound codes](https://developer.apple.com/news/?id=z0i801mg)
* 🇺🇸 [Автоподстановка OTP в Safari](https://developer.apple.com/documentation/security/password_autofill/enabling_password_autofill_on_an_html_input_element?language=objc)

#### Push API — уведомления из браузера

* 🇺🇸 [Push Messages](https://whatwebcando.today/push-notifications.html)
* 🇺🇸 [Web Push Book — книга про Push API и всё, что с ними связано](https://web-push-book.gauntface.com/)
* 🇺🇸 [web-push-libs](https://github.com/web-push-libs/)

#### Shape Detection API — распознавание штрихкодов, текста, лиц с изображений

* 🇺🇸 [The Shape Detection API: a picture is worth a thousand words, faces, and barcodes](https://web.dev/shape-detection/)
* 🇺🇸 [Demo и документация](https://www.chromestatus.com/feature/4757990523535360)
* 🇺🇸 [Barcode detection using Shape Detection API](https://paul.kinlan.me/barcode-detection/)

#### Badging API — вывод меток на иконке приложения

* 🇺🇸 [Badging for app icons](https://web.dev/badging-api/)
* 🇺🇸 [Badging API Explainer](https://github.com/WICG/badging/blob/master/explainer.md)

#### Task Scheduler API — запуск задач по расписанию

* 🇺🇸 [Task Scheduler API — черновик спецификации](https://www.w3.org/TR/task-scheduler/)
* 🇺🇸 [Task Scheduling](https://whatwebcando.today/scheduler.html)

#### Background Sync API — возможность отправлять данные после восстановления связи

* 🇺🇸 [Web Background Synchronization — черновик предложения](https://wicg.github.io/background-sync/spec/)
* 🇺🇸 [Background Sync](https://whatwebcando.today/background-sync.html)
* 🇺🇸 [Introducing Background Sync](https://developers.google.com/web/updates/2015/12/background-sync)

#### Periodic Background Sync API — возможность периодически запрашивать свежие данные из сервис-воркера

* 🇺🇸 [Richer offline experiences with the Periodic Background Sync API](https://web.dev/periodic-background-sync/)
* 🇺🇸 [Periodic Background Sync Explained](https://felixgerschau.com/periodic-background-sync-explained/)

#### Background Fetch API

* 🇺🇸 [Background Fetch API — черновик спецификации](https://wicg.github.io/background-fetch/)
* 🇺🇸 [Introducing Background Fetch](https://developers.google.com/web/updates/2018/12/background-fetch)
* 🇺🇸 [Background Fetch API: Get Ready To Use It!](https://medium.com/google-developer-experts/background-fetch-api-get-ready-to-use-it-69cca522cd8f)

#### Notifications API

* 🇺🇸 📺 [Implementing Web Notifications](https://channel9.msdn.com/Blogs/One-Dev-Minute/Implementing-Web-Notifications)
* 🇺🇸 [Local Notifications](https://whatwebcando.today/local-notifications.html)
* 🇺🇸 [Notification Triggers Explainer](https://github.com/rknoll/notification-triggers)

#### Page Visibility API

* 🇺🇸 [Foreground Detection](https://whatwebcando.today/foreground-detection.html)

#### Idle Detection API — определение отсутствие активности пользователя

* 🇺🇸 [Detect inactive users with the Idle Detection API](https://web.dev/idle-detection/)

#### Geolocation API

* 🇺🇸 [Geolocation](https://whatwebcando.today/geolocation.html)

##### Geolocation Sensor (не имплементировано)

* 🇺🇸 Geolocation Sensor: W3C [Working Draft](https://www.w3.org/TR/geolocation-sensor/), [Editor's Draft](https://w3c.github.io/geolocation-sensor/)

#### Permissions API

* 🇺🇸 [Permissions](https://whatwebcando.today/permissions.html)

#### Local Font Access API — низкоуровневая работа со шрифтами

* 🇺🇸 [Use advanced typography with local fonts](https://web.dev/local-fonts/)

#### Media Session API — доступ к мультимедийным клавишам и интерфейсу

* 🇺🇸 [Customize media notifications and playback controls with the Media Session API](https://web.dev/media-session/)

### Взаимодействие между приложениями

* 🇺🇸 [Web Share Demo (Web Share Level 2 and Web Share Target API Level 2)](https://github.com/GoogleChrome/samples/tree/gh-pages/web-share)

#### Web Share API

* 🇺🇸 [Share like a native app with the Web Share API](https://web.dev/web-share/)
* 🇺🇸 [Web Share API — черновик спецификации](https://w3c.github.io/web-share/)
* 🇺🇸 [How to Use the Web Share API](https://css-tricks.com/how-to-use-the-web-share-api/)
* 🇺🇸 [On the Web Share API](https://css-tricks.com/on-the-web-share-api/)

#### Web Share Target API

* 🇺🇸 [Receiving shared data with the Web Share Target API](https://web.dev/web-share-target/)
* 🇺🇸 [Web Share Target API — черновик предложения](https://wicg.github.io/web-share-target/)
* 🇺🇸 [Web Share Target API — Level 2 — черновик предложения](https://wicg.github.io/web-share-target/level-2/)

#### File Handling API

* 🇺🇸 [Let web applications be file handlers](https://web.dev/file-handling/)
* 🇺🇸 [File Handling explainer](https://github.com/WICG/file-handling/blob/master/explainer.md)

### API для платежей

#### Payment Request API

* 🇺🇸 [Payment Request API — спецификация](https://www.w3.org/TR/payment-request/)
* 🇺🇸 [Web Payments Overview](https://developers.google.com/web/fundamentals/payments/)
* 🇺🇸 [Deep Dive into the Payment Request API](https://developers.google.com/web/fundamentals/payments/merchant-guide/deep-dive-into-payment-request)
* 🇷🇺 [Стандартный браузерный API Payment Request](https://habr.com/ru/company/ruvds/blog/460799/)
* 🇺🇸 [Introducing Web Payments: Easier Online Purchases With The Payment Request API](https://www.smashingmagazine.com/2018/01/online-purchase-payment-request-api/)
* 🇺🇸 [Introducing the Payment Request API for Apple Pay](https://webkit.org/blog/8182/introducing-the-payment-request-api-for-apple-pay/)
* 🇺🇸 [Accepting Payments using JavaScript Payment Request API](https://dev.to/attacomsian/understanding-javascript-payment-request-api-2kh)
* 🇺🇸 [What’s New in the Payment Request API for Apple Pay (Jun 6, 2019)](https://webkit.org/blog/9167/whats-new-in-the-payment-request-api-for-apple-pay/)

#### Payment Handler API

* 🇺🇸 [Payment Handler API — черновик спецификации](https://w3c.github.io/payment-handler/)

#### Прочие API, связанные с финансами

* 🇺🇸 [Google Pay API](https://developers.google.com/pay/api/web/overview)

### API для авторизации

#### Web Authentication API (WebAuthn)

* 🇺🇸 [Guide to Web Authentication](https://webauthn.guide/)
* 🇷🇺 [Новые стандарты для беспарольной аутентификации: как они работают](https://habr.com/ru/company/1cloud/blog/353966)
* 🇷🇺 [WebAuthn в реальной жизни](https://habr.com/ru/company/mailru/blog/489270/)
* 🇺🇸 [Meet Face ID and Touch ID for the Web](https://webkit.org/blog/11312/meet-face-id-and-touch-id-for-the-web/)

#### Credential Management API

* 🇷🇺 [Автоматический вход на сайт с использованием Credential Management API](https://noteskeeper.ru/1373/)
* 🇺🇸 [Credentials](https://whatwebcando.today/credentials.html)

#### Прочие API, связанные с авторизацией

* 🇷🇺 [Внедряем Sign in with Apple — систему авторизации от Apple](https://habr.com/ru/company/cian/blog/475062/)

### Ввод/вывод информации

#### Pointer Events API

* 🇺🇸 [Pointer Events API](https://developers.google.com/web/updates/2016/10/pointer-events)

#### Pointer Lock API

* 🇺🇸 [Pointer Lock – спецификация](https://www.w3.org/TR/pointerlock/)

##### unadjustedMovement – отключение ускорения указателя

* 🇺🇸 [Disable mouse acceleration to provide a better FPS gaming experience](https://web.dev/disable-mouse-acceleration/)

#### Clipboard API — работа с буфером обмена

* 🇺🇸 [Clipboard API and events Editor’s Draft](https://w3c.github.io/clipboard-apis/)
* 🇺🇸 [Clipboard (Copy & Paste)](https://whatwebcando.today/clipboard.html)

#### Early detection of input events

* 🇺🇸 [Early detection of input events — черновик предложения](https://wicg.github.io/is-input-pending/)
* 🇺🇸 [isInputPending — explainer](https://github.com/WICG/is-input-pending)
* 🇷🇺/🇺🇸 Первый вклад в API браузера от Facebook [перевод](https://habr.com/ru/post/451900/)/[оригинал](https://engineering.fb.com/developer-tools/isinputpending-api/)

### API для работы с экранами

#### Multi-Screen Window Placement API

* 🇺🇸 [Managing several displays with the Multi-Screen Window Placement API](https://web.dev/multi-screen-window-placement/)

#### Fullscreen API

* 🇺🇸 [Fullscreen](https://whatwebcando.today/fullscreen.html)

#### Screen Orientation API

* 🇺🇸 [Screen Orientation & Lock](https://whatwebcando.today/screen-orientation.html)

#### Wake Lock API

* 🇺🇸 [Wake Lock](https://whatwebcando.today/wake-lock.html)
* 🇺🇸 [Stay awake with the Wake Lock API](https://web.dev/wakelock/)
* 🇺🇸 [Wake Lock API Specification](https://w3c.github.io/wake-lock/)
* 🇺🇸 [Wake Lock API case study: 300% increase in purchase intent indicators on BettyCrocker.com](https://web.dev/betty-crocker/)

#### Presentation API

* 🇺🇸 [Presentation Features](https://whatwebcando.today/presentation.html)
* 🇺🇸 [Present web pages to secondary attached displays](https://developers.google.com/web/updates/2018/04/present-web-pages-to-secondary-attached-displays)
* 🇺🇸 [Presentation API Specification](https://w3c.github.io/presentation-api/)
* 🇺🇸 [Presentation API demos](https://www.w3.org/community/webscreens/presentation-api-demos/)
* 🇺🇸 [Google Cast for Chrome on Android](https://developers.google.com/web/updates/2015/11/presentation-api?hl=en)

#### Visual Viewport API — определение размера визуально видимой части страницы

* 🇺🇸 [Visual Viewport API — черновик предложения](https://wicg.github.io/visual-viewport/)
* 🇺🇸 [Visual Viewport API — explainer](https://github.com/WICG/visual-viewport)

#### WebXR Device API

* 🇺🇸 [Virtual & Augmented Reality](https://whatwebcando.today/vr.html)
* 🇺🇸 [WebXR Device API Explained](https://github.com/immersive-web/webxr/blob/master/explainer.md)
* 🇺🇸 [WebXR Device API Specification](https://immersive-web.github.io/webxr/)
* 🇺🇸 [Virtual reality comes to the web](https://web.dev/vr-comes-to-the-web/)
* 🇺🇸 [Virtual reality comes to the web, part II](https://web.dev/vr-comes-to-the-web-pt-ii/)
* 🇺🇸 [Positioning virtual objects in real-world views](https://web.dev/ar-hit-test/)

### API для работы со звуком

#### Web Speech API — распознавание и синтезация речи

* 🇺🇸 [Speech Recognition](https://whatwebcando.today/speech-recognition.html)

#### Web Audio API

* 🇷🇺/🇺🇸 Концепции, лежащие в основе Web Audio API [перевод](https://habr.com/ru/post/495690/)/[оригинал](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API)

### API для работы с устройствами

#### Gamepad API

* 🇺🇸 [Play the Chrome dino game with your gamepad](https://web.dev/gamepad/)
🇷🇺/🇺🇸 Серфинг интернета геймпадом (Javascript) [перевод](https://habr.com/ru/post/485562/)/[оригинал](https://www.voorhoede.nl/en/blog/navigating-the-web-with-a-gamepad/)
* 🇺🇸 [The Gamepad Reloaded](https://medium.com/samsung-internet-dev/the-gamepad-reloaded-5ba866770003)

#### Web Bluetooth API

* 🇺🇸 [Bluetooth](https://whatwebcando.today/bluetooth.html)

#### WebUSB API

* 🇺🇸 [USB](https://whatwebcando.today/usb.html)
* 🇺🇸 [WebUSB API — черновик предложения](https://wicg.github.io/webusb/)
* 🇺🇸 [Access USB Devices on the Web](https://developers.google.com/web/updates/2016/03/access-usb-devices-on-the-web)

#### WebHID API

* 🇺🇸 [WebHID API – черновик предложения](https://wicg.github.io/webhid/)
* 🇺🇸 [Human interface devices on the web: a few quick examples](https://web.dev/hid-examples/)
* 🇺🇸 [Connecting to uncommon HID devices](https://web.dev/hid/)
* 🇺🇸 [Upcoming WebHID API - access Bluetooth/USB HID devices in web applications](https://blog.scottlogic.com/2019/04/03/upcoming-webhid-api.html)

#### Serial API

* 🇺🇸 [Read and write from a serial port](https://web.dev/serial/)
* 🇺🇸 [Serial API — черновик предложения](https://wicg.github.io/serial/)

### API для разработки, отладки и оптимизации

#### Console API / Command Line API

* 🇷🇺/🇺🇸 Используем console на полную [перевод](https://habr.com/ru/post/114483/)/[оригинал](https://www.thecssninja.com/javascript/console)
* 🇷🇺/🇺🇸 Руководство по API командной строки [перевод](https://medium.com/@stylesam/api-%D0%BA%D0%BE%D0%BC%D0%B0%D0%BD%D0%B4%D0%BD%D0%BE%D0%B9-%D1%81%D1%82%D1%80%D0%BE%D0%BA%D0%B8-%D0%BA%D0%BE%D0%BD%D1%81%D0%BE%D0%BB%D0%B8-%D1%81%D0%BF%D1%80%D0%B0%D0%B2%D0%BA%D0%B0-%D0%BA%D0%BE%D0%BC%D0%BC%D0%B0%D0%BD%D0%B4-d5b87608cbf1)/[оригинал](https://developers.google.com/web/tools/chrome-devtools/console/utilities)
* 🇺🇸 [Mastering JS console.log like a Pro](https://medium.com/javascript-in-plain-english/mastering-js-console-log-like-a-pro-1c634e6393f9)
* 🇺🇸 [A Guide to Console Commands](https://css-tricks.com/a-guide-to-console-commands/)

#### Layout Instability API

* 🇺🇸 [Fixing layout instability](https://web.dev/fixing-layout-instability/)

#### Reporting API — апи для сбора информации о клиентских ошибках

* 🇺🇸 [Reporting API Editor’s Draft](https://w3c.github.io/reporting/)
* 🇷🇺/🇺🇸 API ReportingObserver: взгляд на код веб-страниц с новой точки зрения [перевод](https://habr.com/ru/company/ruvds/blog/427403/)/[оригинал](https://www.codementor.io/@robertwozniak/reportingobserver-new-look-at-your-code-o6xd479b3)
* 🇺🇸 [The Reporting API](https://developers.google.com/web/updates/2018/09/reportingapi)

#### Server Timing

* 🇺🇸 Server Timing [Working Draft](https://www.w3.org/TR/server-timing/)

#### JavaScript Self-Profiling API

* 🇺🇸 [JavaScript Self-Profiling API Proposal](https://github.com/WICG/js-self-profiling)


### API для работы с сетью

#### FormData

* 🇺🇸 🔥 [formdata-polyfill](https://www.npmjs.com/package/formdata-polyfill)

#### XMLHttpRequest

#### Fetch API

#### WebSocket API (WebSockets)

* 🇺🇸 [WebSockets - A Conceptual Deep Dive](https://www.ably.io/topic/websockets)

#### Server-sent events

* 🇷🇺 [Server Sent Events – learn.javascript.ru](https://learn.javascript.ru/server-sent-events)

#### Beacon API

* 🇺🇸 [Logging Activity With The Web Beacon API](https://www.smashingmagazine.com/2018/07/logging-activity-web-beacon-api/)

#### Raw Sockets API — низкоуровневый прямой доступ к TCP/UDP

* 🇺🇸 [Direct Sockets explainer](https://github.com/WICG/raw-sockets/blob/master/docs/explainer.md)

### Прочие API

#### requestAnimationFrame

* 🇺🇸 [Browsers may throttle requestAnimationFrame](https://mattperry.is/writing-code/browsers-may-throttle-requestanimationframe-to-30fps)

#### Cooperative Scheduling of Background Tasks

* 🇺🇸 [Cooperative Scheduling of Background Tasks – спецификация](https://w3c.github.io/requestidlecallback/)
* 🇷🇺/🇺🇸 Как организовать выполнение фоновых задач в JavaScript [перевод](http://prgssr.ru/development/kak-organizovat-vypolnenie-fonovyh-zadach-v-javascript.html)/[оригинал](https://www.sitepoint.com/how-to-schedule-background-tasks-in-javascript/)

#### Streams API

* 🇺🇸 [Streams for reactive programming](https://dassur.ma/things/streams-for-reactive-programming/)
* 🇺🇸 [Compression Streams Explained](https://github.com/WICG/compression/blob/master/explainer.md)

#### Content Indexing API

* 🇺🇸 [Indexing your offline-capable pages with the Content Indexing API](https://web.dev/content-indexing-api/)

#### Web Animations API

* 🇺🇸 [Playing With Particles Using the Web Animations API](https://css-tricks.com/playing-with-particles-using-the-web-animations-api/)

#### Web Cryptography API

* 🇺🇸 [Web Cryptography API – спецификация](https://www.w3.org/TR/WebCryptoAPI/)
* 🇺🇸 [Update on Web Cryptography](https://webkit.org/blog/7790/update-on-web-cryptography/)

## Совсем прочее

* 🇺🇸 [How to display a "new version available" for a Progressive Web App](https://deanhume.com/displaying-a-new-version-available-progressive-web-app/)
* 🇺🇸 [Mock Service Worker](https://github.com/open-draft/msw)
* 🇺🇸 [How to Detect an Ad Blocker — как определить наличие блокировщика рекламы](https://davidwalsh.name/detect-ad-blocker)

### Вспомогательные инструменты

* 🇺🇸 [PWA Builder](https://www.pwabuilder.com/generator)

## Web Bundles — упаковка сайта в один файл

* 🇺🇸 [Get started with Web Bundles](https://web.dev/web-bundles/)

## Web Workers

* 🇷🇺 [JavaScript Web Workers: руководство для начинающих](https://webdevblog.ru/javascript-web-workers-rukovodstvo-dlya-nachinajushhih/)
* 🇺🇸 [Use web workers to run JavaScript off the browser's main thread](https://web.dev/off-main-thread/)
* 🇺🇸 [Threading the web with module workers](https://web.dev/module-workers/)
* 🇺🇸 [Workers overview](https://web.dev/workers-overview/)

## Canvas

Также см. Библиотеки - Canvas

* 🇷🇺 [Как мы учились рисовать тексты на Canvas](https://habr.com/ru/company/miro/blog/458624/)
* 🇺🇸 [HiDPI Canvas Polyfill](https://github.com/jondavidjohn/hidpi-canvas-polyfill)
* 🇺🇸 [Вычисление коллизий объектов в Canvas (Simulating Object Collisions With Canvas)](https://joshbradley.me/object-collisions-with-canvas/)

## WebGL

* 🇷🇺 [Введение в программирование шейдеров для верстальщиков](https://habr.com/ru/post/420847/)
* 🇺🇸 [Raw WebGL — An overview on how to write a WebGL application. Learn what key data structures and types are needed to draw in WebGL](https://alain.xyz/blog/raw-webgl)
* 🇷🇺 [Применяем мозаику Вороного, пикселизацию и геометрические маски в шейдерах для украшения сайта](https://habr.com/ru/post/421821/)
* 🇷🇺/D [Быстрая генерализация маркеров на WebGL-карте](https://habr.com/ru/company/2gis/blog/442720/)/[defront](https://defront.ru/posts/2019/03-march/12-fast-generalization-of-markers/)
* 🇺🇸 [WebGL guide](https://xem.github.io/articles/webgl-guide.html)

### WebGL2

* 🇺🇸 [WebGL2 Fundamentals](https://webgl2fundamentals.org/)

### Библиотеки для WebGL

* 🇺🇸 [Your WebGL aiders](Your WebGL aiders)
* 🇺🇸 [ogl](https://oframe.github.io/ogl/)
* 🇺🇸 [Post Processing](https://vanruesc.github.io/postprocessing/)
* 🇺🇸 [three.js](https://threejs.org/)

#### Three.js

* 🇺🇸 [JavaScript in 3D: an Introduction to Three.js](https://medium.com/javascript-in-plain-english/javascript-in-3d-an-introduction-to-three-js-780f1e4a2e6d)
* 🇷🇺 [Трехмерные презентации товаров на Three.js для самых маленьких](https://habr.com/ru/post/433876/)
* 🇷🇺 [Продвинутый Three.js: шейдерные материалы и постобработка](https://habr.com/ru/post/436482/)
* 🇺🇸 [How to Learn Three.js for Game Development](https://gamedevelopment.tutsplus.com/articles/how-to-learn-threejs-for-game-development--gamedev-11787)
* 🇷🇺 [Рендер в текстуру с использованием Three.js](https://habr.com/ru/company/plarium/blog/305408/)

### Демо WebGL

* 🇺🇸 [Animated Heat Distortion Effects with WebGL](http://tympanus.net/codrops/2016/05/03/animated-heat-distortion-effects-webgl/)

## UserAgent и Client Hints

* 🇺🇸 [Detect mobile browsers without user agent string parsing: Client Hints](https://medium.com/@omrilotan/detect-mobile-browsers-without-user-agent-string-parsing-66e3694ce8cd)

## PDF и браузер

* 🇺🇸 [How To Create A PDF From Your Web Application](https://www.smashingmagazine.com/2019/06/create-pdf-web-application/)
* 🇺🇸 [pdfmake — Client/server side PDF printing in pure JavaScript](http://pdfmake.org)

Также см. React -> Библиотеки -> PDF


## WebAssembly (WASM)

* 🇷🇺/🇺🇸 Начало работы с WebAssembly, используя только 14 строк на JavaScript [перевод](https://medium.com/devschacht/daniel-simmons-get-started-with-webassembly-using-only-14-lines-of-javascript-89960df71498)/[оригинал](https://www.freecodecamp.org/news/get-started-with-webassembly-using-only-14-lines-of-javascript-b37b6aaca1e4/)
* 🇷🇺 [Как мы внедряли WebAssembly в Яндекс.Картах и почему оставили JavaScript](https://habr.com/ru/company/yandex/blog/475382/)
* 🇺🇸 [WebAssembly Studio](https://webassembly.studio/)
* 🇷🇺/🇺🇸 Как мы при помощи WebAssembly в 20 раз веб-приложение ускорили [перевод](https://habr.com/ru/company/skillbox/blog/452190/)/[оригинал](https://www.smashingmagazine.com/2019/04/webassembly-speed-web-app/)
* 🇺🇸 [WebAssembly: How and why](https://blog.logrocket.com/webassembly-how-and-why-559b7f96cd71/)
* 🇺🇸 [Hands-on WebAssembly: Try the basics](https://evilmartians.com/chronicles/hands-on-webassembly-try-the-basics)
* 🇺🇸 [Get Started Using WebAssembly (wasm)](https://egghead.io/courses/get-started-using-webassembly-wasm)

### AssemblyScript (компиляция из TypeScript-like подобного языка)

* 🇺🇸 [AssemblyScript — A language made for WebAssembly](https://www.assemblyscript.org/)
* 🇷🇺/🇺🇸 Первое знакомство с AssemblyScript [перевод](https://habr.com/ru/company/ruvds/blog/477272/)/[оригинал](https://blog.logrocket.com/the-introductory-guide-to-assemblyscript/)
* 🇺🇸 [Adding a WebAssembly component to a React App](https://blog.scottlogic.com/2019/06/14/add-webassembly-to-react-app.html)

### Emscripten (компиляция из C или C++)

* 🇺🇸 [Emscripten — toolchain for compiling to asm.js and WebAssembly, built using LLVM, that lets you run C and C++ on the web at near-native speed without plugins.](https://emscripten.org/)

## Web Components (веб-компоненты)

* 🇺🇸 [Web Components bookmarks](https://www.notion.so/Web-Components-bookmarks-64066078f891433dbc74997dc4d64302)
* 🇺🇸 [Web Components and the Accessibility Object model (AOM)](https://www.24a11y.com/2019/web-components-and-the-aom/)
* 🇺🇸 [Web Components will replace your frontend framework](https://www.dannymoerkerke.com/blog/web-components-will-replace-your-frontend-framework)
* 🇷🇺 Веб-компоненты в реальном мире [часть 1](https://habr.com/ru/post/443032/), [часть 2](https://habr.com/ru/post/515332/)

### Shadow DOM

#### Declarative Shadow DOM

* 🇺🇸 [Declarative Shadow DOM](https://web.dev/declarative-shadow-dom/)

## Устройство браузеров

* 🇷🇺/🇺🇸 Устройство современного веб-браузера Chrome – перевод [часть 1](https://habr.com/ru/post/526696/), [часть 2](https://habr.com/ru/post/529248/), [часть 3](https://habr.com/ru/post/529252/), [часть 4](https://habr.com/ru/post/529258/)/оригинал [часть 1](https://developers.google.com/web/updates/2018/09/inside-browser-part1), [часть 2](https://developers.google.com/web/updates/2018/09/inside-browser-part2), [часть 3](https://developers.google.com/web/updates/2018/09/inside-browser-part3), [часть 4](https://developers.google.com/web/updates/2018/09/inside-browser-part4)
* 🇺🇸 [JavaScript Engines: An Overview](https://blog.bitsrc.io/javascript-engines-an-overview-2162bffa1187)

## well-known URL

* 🇺🇸 [Help users change passwords easily by adding a well-known URL for changing passwords](https://web.dev/change-password-url/)
