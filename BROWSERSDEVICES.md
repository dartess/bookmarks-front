# Браузеры, API, PWA

## Браузеры

* 🇺🇸 [Особенности использования модулей в браузере](https://jakearchibald.com/2017/es-modules-in-browsers/)
* 🇺🇸 [Поддержка старых браузеров без вреда для остальных](https://sgom.es/posts/2019-03-06-supporting-old-browsers-without-hurting-everyone/)
* 🇷🇺 [Как рисует браузер. Доклад Яндекса](https://habr.com/ru/company/yandex/blog/468165/)
* 🇺🇸 [Hide iPhone HTML5 video play button](https://stackoverflow.com/questions/8911247/hide-iphone-html5-video-play-button)

### Браузерные API

#### IntersectionObserver — попадание элемента в область видимости

* 🇺🇸 [Now You See Me: How To Defer, Lazy-Load And Act With IntersectionObserver](https://www.smashingmagazine.com/2018/01/deferring-lazy-loading-intersection-observer-api/)
* 🇺🇸 [Intersection Observers — Explainer Doc, Draft Spec, Polyfill](https://github.com/w3c/IntersectionObserver)

#### Shape Detection API — распознавание лиц, штрихкодов, текста

* 🇺🇸 [Demo и документация](https://www.chromestatus.com/feature/4757990523535360)
* 🇺🇸 [Barcode detection using Shape Detection API](https://paul.kinlan.me/barcode-detection/)

#### SMS Receiver API — получение одноразовых кодов из СМС

* 🇺🇸 [Verify phone numbers on the web with the SMS Receiver API](https://web.dev/sms-receiver-api-announcement/)

#### Адаптивные иконки

* 🇺🇸 [Адаптивные значки (в Android)](https://developer.android.com/guide/practices/ui_guidelines/icon_design_adaptive)
* 🇺🇸 [New in Chrome 79 — Maskable Icons](https://developers.google.com/web/updates/2019/12/nic79#maskable-icons)
* 🇺🇸 [Maskable Icons: Android Adaptive Icons for Your PWA](https://css-tricks.com/maskable-icons-android-adaptive-icons-for-your-pwa/)

### Расширения для Chrome и других браузеров

* [WhatRuns — определитель технологий сайта](https://chrome.google.com/webstore/detail/whatruns/cmkdbmfndkfgebldhnkbfhlneefdaaip)
* [JsonDiscovery — самый годный просмотрщик JSON](https://github.com/discoveryjs/browser-extension-json-discovery)
* [Обход блокировок Рунета](https://chrome.google.com/webstore/detail/%D0%BE%D0%B1%D1%85%D0%BE%D0%B4-%D0%B1%D0%BB%D0%BE%D0%BA%D0%B8%D1%80%D0%BE%D0%B2%D0%BE%D0%BA-%D1%80%D1%83%D0%BD%D0%B5%D1%82%D0%B0/npgcnondjocldhldegnakemclmfkngch)

### Про отладку в браузерах

* 🇷🇺 [10 малоизвестных возможностей инструментов разработчика Chrome](https://habr.com/ru/company/ruvds/blog/470411/)
* [Eruda — подключаемый DevTools для мобильных браузеров](https://github.com/liriliri/eruda)
* [Отладка Mobile Firefox](https://developer.mozilla.org/en-US/docs/Tools/Remote_Debugging/Debugging_Firefox_for_Android_with_WebIDE)
* [Touch Bar Demo App — эмулятор тачбара MacBook](https://github.com/bikkelbroeders/TouchBarDemoApp)
* [Feature Queries Manager — отладка браузеров с разным значением @supports](https://github.com/ireade/feature-queries-manager)

### Про новинки в браузерах

* 🇺🇸 [Microsoft Edge](https://docs.microsoft.com/en-us/microsoft-edge/dev-guide/whats-new)

### Где найти старые версии браузеров:

* [Firefox](https://ftp.mozilla.org/pub/firefox/releases/)
* Opera [Chromium, desktop](http://get.opera.com/ftp/pub/opera/desktop/), [все платформы](http://get.opera.com/ftp/pub/opera/)
* Отключить автообновление Opera на macOS:
  * 31-: "Показать содержимое пакета" -> удалить Contents/MacOS/opera_autoupdate
  * [32+](https://forums.opera.com/topic/11657/how-to-disable-auto-update-in-the-macos-version-for-those-who-need-that/3)
* UCBrowser, [Android](https://plus.ucweb.com/download/)
* Chrome, [инструкция как откопать старый билд](https://stackoverflow.com/questions/54927496/how-to-download-older-versions-of-chrome-from-a-google-official-site)
* Edge можно найти в том или ином билде Windows 10
  * 10240: 12
  * 10586: 13
  * 14393: 14
  * 15063: 15
  * 16299: 16
  * ?????: 17
  * ?????: 18

### Прочее

* 🇺🇸 [Техподдержка SamsungInternet](https://github.com/SamsungInternet/support)

## PWA

### Общая информация

* 🇺🇸 ✈️ [Progressive Web App Training](https://www.youtube.com/playlist?list=PLNYkxOF6rcIB2xHBZ7opgc2Mv009X87Hh)
* 🇺🇸 [Progressive Web Apps](https://www.manning.com/books/progressive-web-apps)
* 🇺🇸 [A Tinder Progressive Web App Performance Case Study](https://medium.com/@addyosmani/a-tinder-progressive-web-app-performance-case-study-78919d98ece0)
* 🇺🇸 [A Pinterest Progressive Web App Performance Case Study](https://medium.com/dev-channel/a-pinterest-progressive-web-app-performance-case-study-3bd6ed2e6154)
* 🇺🇸 [MDN: Progressive web apps](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)
* 🇺🇸 [Progressive Web Apps Training от Google](https://developers.google.com/web/ilt/pwa/)

### Service Worker

* 🇷🇺 [Создание сервис-воркера: разбор примера](http://prgssr.ru/development/sozdaem-service-worker.html)
* 🇺🇸 [Service Workers at Slack: Our Quest for Faster Boot Times and Offline Support](https://slack.engineering/service-workers-at-slack-our-quest-for-faster-boot-times-and-offline-support-3492cf79c88)

### Особенности платформ

* 🇺🇸 [Don’t use iOS meta tags irresponsibly in your Progressive Web Apps](https://medium.com/@firt/dont-use-ios-web-app-meta-tag-irresponsibly-in-your-progressive-web-apps-85d70f4438cb)
* 🇺🇸 [PWAs are coming to iOS 11.3: Cupertino, we have a problem](https://medium.com/@firt/pwas-are-coming-to-ios-11-3-cupertino-we-have-a-problem-2ff49fd7d6ea)
* 🇺🇸 [What’s new on iOS 12.2 for Progressive Web Apps](https://medium.com/@firt/whats-new-on-ios-12-2-for-progressive-web-apps-75c348f8e945)
* 🇺🇸 [PWA Bugs](https://github.com/PWA-POLICE/pwa-bugs)
* 🇺🇸 [Десктопные PWA в Windows](https://twitter.com/firt/status/1054442657567727616)
* 🇺🇸 [Десктопные PWA в Linux](https://twitter.com/firt/status/1054801501653221378)

### PWA и магазины приложений

* 🇺🇸 [Introducing a Trusted Web Activity for Android](https://blog.chromium.org/2019/02/introducing-trusted-web-activity-for.html)
* 🇷🇺 [Play Store теперь принимает прогрессивные веб-приложения (PWA)](https://habr.com/ru/post/439238/)

### API для работы с устройством

#### Badging API — вывод меток на иконке приложения

* 🇺🇸 [Badging API Explainer](https://github.com/WICG/badging/blob/master/explainer.md)
* 🇺🇸 [Badging for App Icons](https://developers.google.com/web/updates/2018/12/badging-api)

### Совсем прочее

* 🇺🇸 [How to display a "new version available" for a Progressive Web App](https://deanhume.com/displaying-a-new-version-available-progressive-web-app/)
* 🇺🇸 [Mock Service Worker](https://github.com/open-draft/msw)

### Вспомогательные инструменты

* 🇺🇸 [PWA Builder](https://www.pwabuilder.com/generator)

## Тёмная тема

* 🇺🇸 [A guide to implementing dark modes on websites](https://www.kooslooijesteijn.net/blog/add-dark-mode-to-website?ref=heydesigner)
* 🇺🇸 [Dark Mode Support in WebKit](https://webkit.org/blog/8840/dark-mode-support-in-webkit/)
