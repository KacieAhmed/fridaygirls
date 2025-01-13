
/*jslint browser: true, multivar: true */

if (window.__AudioEyePerformance) {
    window.__AudioEyePerformance.loaderJsStartTime = performance.now();
}

if (!window.__AudioEyeSiteHash) {
    window.__AudioEyeSiteHash = '343e19bfffc5268181b9d99c252c7b97';
}

var aecb = "8a92d55bd";
var pscb = '';

function ae_choose(a, b, rate) {
    if(!rate || !b) {
        return a;
    }
    return rate <= Math.random() ? b : a;
}

function loadStaticScript(path) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = "https://wsv3cdn.audioeye.com/static-scripts/v2/__BROWSER_JS_VERSION__/".replace("__BROWSER_JS_VERSION__", window.__audioEyeContext.browserJsVersion) + path;
    document.body.appendChild(script);
}

var loaderFunction = function (tries) {
    window.__AudioEyeLoaderStartTime = new Date().getTime();
    // Singleton pattern: if the loader has already run, do not overwrite.
    if (window.AudioEye && window.AudioEye.version !== undefined) {
        return;
    }

    // declare define here so that when jquery is imported in startupRoutine.js it will
    // find this define instead of any global define that a customer might use
    var define = function(){};

    window.AudioEye = Object.assign({}, window.AudioEye || {});

    var options = {};
    var protocol = "https:";
    var device = "desktop";
    var site_id = null;


    
    var options = {"live-monitoring":{"limit":0.88,"service":true,"includeHashFragment":false,"allowedQueryKeys":[]},"help":{"service":true,"aria-label":{"en":"Help Menu. Press enter or use question mark key to turn on or off."},"tooltip-title":{"en":"Help"},"tooltip-keycommand":{"en":"(press ?)"}},"admin":{"service":true,"aria-label":{"en":"AudioEye portal"},"at-message":{"en":"AudioEye portal login"},"cancel":{"en":"Cancel"},"popup_content_opening":{"en":"Opening the Admin Panel requires the page to reload"},"popup_content_closing":{"en":"Closing the Admin Panel requires the page to reload"},"popup_title":{"en":"Confirm reload"},"reload":{"en":"Reload"},"tooltip-title":{"en":"Admin Panel"}},"rotor":{"service":true,"aria-label":{"en":"Page Elements Menu. Press enter or use d key to turn on or off."},"tooltip-title":{"en":"Page Elements Menu"},"tooltip-keycommand":{"en":"(press D)"},"skipto_rotor-link":false},"helpers":{"service":true},"toolbar":{"service":false,"color":{"background":"#252930","foreground":"#96a0ab"},"theme":"light","defaultVTKTab":"report","at-message":{"en":"AudioEye Toolbar. Explore the tools below or press escape to quit the toolbar."},"aria-label":{"en":"AudioEye Toolbar. Explore the tools below or press escape to quit the toolbar."}},"helpdesk":{"service":true,"at-message":{"en":"The AudioEye Help Desk to report accessibility and usability related issues."},"aria-label":{"en":"AudioEye Help Desk. To report accessibility and usability related issues, press enter or use h key to turn on or off."},"tooltip-title":{"en":"Help Desk"},"tooltip-keycommand":{"en":"(press H)"}},"launcher":{"service":false,"position":"right-lower","cta-color":"#1275B3","pre-opt-in-messaging":{"at-message":{"en":"This website is AudioEye enabled and is being optimized for accessibility. Additionally, free web personalization tools have been provided via the AudioEye Toolbar, which may be enabled from the Accessibility Statement link found on this page."}},"opt-in":false,"at-message":{"en":"This website is AudioEye enabled and is being optimized for accessibility. To open the AudioEye Toolbar, press shift + =. The toolbar contains the following"},"aria-label":{"en":"Accessibility options"},"tooltip-title":{"en":"Explore your accessibility options."},"preview-mode-message":{"en":"AudioEye is in preview mode. Some functionality will be limited."},"preview-mode-modal-close":{"en":"Close"},"preview-mode-modal-title":{"en":"Preview Mode"},"at-messages":{"admin":{"en":"AudioEye portal login"},"voice":{"en":"The Voice (beta) tool to control and interact with this site using your voice."},"player":{"en":"The Player tool to listen to this site read aloud. The Player is not intended as a substitute for your screen reader."},"reader":{"en":"The Reader tool to customize the visual display of this site."},"toolbar":{"en":"AudioEye Toolbar. Explore the tools below or press escape to quit the toolbar."},"helpdesk":{"en":"The AudioEye Help Desk to report accessibility and usability related issues."},"launcher":{"en":"This website is AudioEye enabled and is being optimized for accessibility. To open the AudioEye Toolbar, press shift + =. The toolbar contains the following"},"lite-reader":{"en":"AudioEye Visual Toolkit"}}},"pc_preset":"custom-mode","site-menu":{"service":false,"selectors":{"main-menu":{"label":{"en":""},"link":false,"selector":"","search-algorithm":"default"},"aside-menu":{"label":{"en":""},"link":false,"selector":"","search-algorithm":"default"},"other-menu":{"label":{"en":""},"link":false,"selector":"","search-algorithm":"default"},"footer-menu":{"label":{"en":""},"link":false,"selector":"","search-algorithm":"default"},"utility-menu":{"label":{"en":""},"link":false,"selector":"","search-algorithm":"default"},"additional-menus":[{"label":"","selector":"","link":false,"search-algorithm":"default"}]},"aria-label":{"en":"Site Menu. Press enter or use n key to turn on or off."},"tooltip-title":{"en":"Site Menu"},"tooltip-keycommand":{"en":"(press N)"},"search-algorithms":{"default":"Default"}},"compliance":{"service":false,"auto-remediations":false,"smart-remediations":false,"manual-remediations":false,"live-monitoring-limit":"1","spaOptIn":false,"edge-remediations":false,"skip-remediations":"","skipto_main-content-link":false,"tab-triggers-outline":false,"skipto_main-link-text":{"en":"Skip to Main Content"},"aria-landmarks":{"banner":"","search":"","content":"","complementary":"","contentinfo":""},"aria-live":{"polite":"","assertive":"","live":"","alert":""},"new_window_text":{"en":"Opens a New Window."},"accessible-carousel-link-text":{"en":"Accessible Carousel"},"accessible-carousel-link-label":{"en":"Accessible Carousel"},"disabled-carousel-message":{"en":"Original carousel disabled. Use accessible carousel or refresh page to access."}},"lite-reader":{"service":true,"aria-label":{"en":"AudioEye Visual Toolkit"},"at-message":{"en":"AudioEye Visual Toolkit"},"tooltip-title":{"en":"Visual Toolkit"},"tooltip-keycommand":{"en":"(Press T)"}},"certification":{"service":false,"version":"5","versionlist":{"3":"Partner Pro","4":"Pro Commitment Statement","5":"Managed"},"tooltip-title":{"en":"Certification"},"tooltip-keycommand":{"en":"(press B)"},"trusted_title":"","aria-label":{"en":"AudioEye Certification Statement. Press enter or use b key to turn on or off."},"at-message":{"en":"The AudioEye Certification Statement to explain the ongoing web accessibility and usability enhancements for this website."}},"user-settings":{"service":true,"aria-label":{"en":"Settings Menu. Press enter or use s key to turn on or off."},"tooltip-title":{"en":"Settings"},"tooltip-keycommand":{"en":"(press S)"}},"carousels":[{"carousel":"","slides":"","link":false,"click-proxy":false,"next_slide":{"en":"Next Slide"},"prev_slide":{"en":"Previous Slide"},"slide_count":{"en":"Slide {{num}} of {{total}}"}}],"external-links":{"service":true,"interface":{"popup_title":{"en":"Confirm Navigation"},"popup_content2":{"en":"You are navigating away from the <span class=\"notranslate\">[[site-name]]<\/span> website. <span class=\"notranslate\">[[site-name]]<\/span> does not own, operate, or control the link or its content. <span class=\"notranslate\">[[site-name]]<\/span> is not responsible for the content of the external website. Privacy and security policies of the external website may differ from those practiced by <span class=\"notranslate\">[[site-name]]<\/span>."},"popup_content":{"en":"By activating 'Continue' below, you acknowledge the previous statement and will be taken to the external website. If you want to remain on this website, activate 'Cancel'."},"popup_content3":{"en":"By activating 'Continue' below, you will open a new window of AudioEye. If you want to remain on the same page, activate 'Cancel'."},"cancel":{"en":"Cancel"},"continue":{"en":"Continue"}}},"persist-settings":{"service":false,"persist":false},"excludes":"","timers":"","tabsets":{"tabset":"","tabs":"","active-tab":"","content":""},"iframes":{"allowed-origins":[],"searchAndInject":false,"unsafe-sources":["gateway.answerscloud.com","cc.hostedpci.com"],"unsafeIframeSelectors":[]},"live-monitoring-limit":"1","content-modifiers-version":"2","ga-account":"","startup_modules":["launcher","compliance"],"languages":{"aliases":{"en":["en"],"zh-cn":["zh"],"sv-se":["sv"],"ru-ru":["ru"],"pt-pt":["pt"],"pl-pl":["pl"],"no-no":["no"],"nl-nl":["nl"],"ko-kr":["ko"],"ja-jp":["jp","ja"],"it-it":["it"],"hu-hu":["hu"],"fr-fr":["fr"],"es":["es"],"el-gr":["el"],"de-de":["de"],"da-dk":["da"],"cs-cz":["cs"],"ca":["ca"],"ar-sa":["ar"]},"supported":{"auto":"Automatic","en":"English","en-gb":"English (UK)","zh-tw":"Chinese (Taiwan)","zh-hk":"Chinese (Hong Kong)","zh-cn":"Chinese (China)","sv-se":"Swedish","ru-ru":"Russian","pt-pt":"Portuguese (Portugal)","pt-br":"Portuguese (Brazil)","pl-pl":"Polish","no-no":"Norwegian","nl-nl":"Dutch","ko-kr":"Korean","ja-jp":"Japanese","it-it":"Italian","hu-hu":"Hungarian","fr-fr":"French (France)","fr-ca":"French (Canada)","fi-fi":"Finnish","es":"Spanish","es-mx":"Spanish (Mexico)","el-gr":"Greek","de-de":"German","da-dk":"Danish","cs-cz":"Czech","ca":"Catalan","ar-sa":"Arabic"},"supported-translated":{"auto":"Automatic","en":"English","zh-tw":"\u7e41\u9ad4\u4e2d\u6587","zh-hk":"\u4e2d\u6587\uff08\u9999\u6e2f\uff09","zh-cn":"\u7b80\u4f53\u4e2d\u6587","sv-se":"Svenska","ru-ru":"\u0420\u0443\u0441\u0441\u043a\u0438\u0439","pt-pt":"Portugu\u00eas","pt-br":"Portugu\u00eas","pl-pl":"Polski","no-no":"Norsk","nl-nl":"Nederlands","ko-kr":"\ud55c\uad6d\uc5b4","ja-jp":"\u65e5\u672c\u8a9e","it-it":"Italiano","hu-hu":"Hungarian","fr-fr":"Fran\u00e7ais","fr-ca":"Fran\u00e7ais","fi-fi":"suomi","es-mx":"Espa\u00f1ol","en-gb":"English","el-gr":"\u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac","de-de":"Deutsch","da-dk":"Dansk","cs-cz":"\u010cesky","ca":"Catal\u00e0","ar-sa":"\u0627\u0644\u0639\u0631\u0628\u064a\u0629","es":"Spanish"},"primary":"auto","detected":"en-US"},"off-limits":null,"toolbar-promo":false,"consentManagementConfig":{"service":false,"cookieConsentConfig":null}},
        site_id = "d9c20724-becd-4239-97a2-d3a89642a0a3",
        encrypted_site_id = "Bbg1B1u\/1ncnujCZc7rx+vH2Tn+NjH3u7jgU4V2DfU\/Gj6D9QGMmjJhdn\/79QeLz";
        
    AudioEye.site_id = site_id;
    AudioEye.encrypted_site_id = encrypted_site_id;
    AudioEye.site_name = "joinmondaygirl.com";
    AudioEye.base_url = "joinmondaygirl.com\/m";
    AudioEye.analytics_url = ae_choose(
        "https://report-prod.audioeye.com/v1/send",
        "https://analytics.audioeye.com/air/v0/send",
        0.000001    );
    AudioEye.last_publish = "2024-12-09T09:04:26.580Z";

    // Unit Test Mode
    options.testmode = (window.audioeye_test_mode) ? window.audioeye_test_mode : false;

    // Make options accessible by other modules
    AudioEye.productConfig = options;

    AudioEye.cb = aecb;
    AudioEye.pscb = pscb;
    AudioEye.device = device;
    AudioEye.version = "3.0" + (aecb ? "-" + aecb : "");
    AudioEye.protocol = protocol;
    AudioEye.client_url = "https:\/\/wsv3cdn.audioeye.com\/v2";
    AudioEye.static_scripts_base_url = "https://wsv3cdn.audioeye.com/static-scripts/v2/__BROWSER_JS_VERSION__".replace("__BROWSER_JS_VERSION__", window.__audioEyeContext.browserJsVersion);
    AudioEye.cdn_bypass_url = "https:\/\/wsv3cdn.audioeye.com\/v2";

    AudioEye.assets_url = "https:\/\/assets.audioeye.com\/m";
    AudioEye.gtm_url = "https:\/\/wsv3cdn.audioeye.com\/bootstrap.js?h=343e19bfffc5268181b9d99c252c7b97";
    AudioEye.voice_url = "https:\/\/vs.audioeye.com\/m";
    AudioEye.voice_client_entry = "\/scripts\/build\/voice.js\/m";
    AudioEye.build = "prod\/m";
    AudioEye.portal_url = "portal.audioeye.com";
    AudioEye.portal_preview = false;
    AudioEye.site_version = "";
    AudioEye.toolbar_version = "2";
    AudioEye.toolbar_version_provider = "sd";
    AudioEye.loaderVersion = 2;
    AudioEye.a11yTestingReportTo = 'https://analytics.audioeye.com/v2/report';
    AudioEye.excludedFixes = [];
    
    var a11yRulesFactories = [];

        
    AudioEye.a11yRulesFactories = a11yRulesFactories;






    // many of our modules make use of JSON encoding/decoding. We have detected that Prototype.js mangles certain varType to JSON conversions. Let's get rid of those
    if(window.Prototype) {
        delete Object.prototype.toJSON;
        delete Array.prototype.toJSON;
        delete String.prototype.toJSON;
    }

    // create Array.reduce alternative for environments that have overridden the native reduce

if (Array.prototype.reduce.toString().indexOf('[native code]') > -1) {
  Array.prototype.ae_reduce = Array.prototype.reduce;
} else {
  Array.prototype.ae_reduce = function (callback) {
    'use strict';
    if (this == null) {
      throw new TypeError('Array.prototype.reduce called on null or undefined');
    }
    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
    }
    var t = Object(this),
      len = t.length >>> 0,
      k = 0,
      value;
    if (arguments.length == 2) {
      value = arguments[1];
    } else {
      while (k < len && !(k in t)) {
        k++;
      }
      if (k >= len) {
        throw new TypeError('Reduce of empty array with no initial value');
      }
      value = t[k++];
    }
    for (; k < len; k++) {
      if (k in t) {
        value = callback(value, t[k], k, t);
      }
    }
    return value;
  };
}
Object.defineProperty(Array.prototype, 'ae_reduce', { enumerable: false });

    /* Built Files */
    /* Serving build => prod */

    /**
 * This is necessary as legacy support for some helpers and remediations that
 * depend on 'AudioEye.require()' calls to function.
 * That the time of writing, this library only needs to support the following
 * types of calls:
 *  AudioEye.require('lib/mutations'
    AudioEye.require(['ae_options']...
    AudioEye.require('lib/mutations'
    AudioEye.require(['ae_options']...
    AudioEye.require(["utilities"], function(util)...
    AudioEye.require(['utilities'], function(u) {
 */
(function () {
  if (!window.AudioEye) {
    return;
  }

  var log = function (str) {
    if (!window.console || !window.console.log) {
      return;
    }

    console.log(str);
  };

  // Stub the AudioEye.require function for old helpers and remediations
  // @param dependency {array|string}
  // @param callback {fn} - called if it is passed in
  // @returns {object} - returns dependency always
  window.AudioEye.require = function (dependency, callback) {
    try {
      // stub with empty function if no callback passed
      if (typeof callback !== 'function') {
        callback = function () {};
      }

      // Create an object to store depdencies in
      // These will be referenced later when a call to define defines them
      if (!AudioEye.require._definedDeps) {
        AudioEye.require._definedDeps = {};
      }

      // Create an object to store callback functions in
      // The callbacks will be called when define defines their requested
      // dependency.
      if (!AudioEye.require._definedDeps) {
        AudioEye.require._callbacks = {};
      }

      // ensure dep is the string name of the dependency
      var dep = Array.isArray(dependency) ? dependency[0] : dependency;

      // The only known calls to this function look for the following
      // dependencies: 'ae_options', 'lib/mutations', and 'utilities'. All
      // other params will be rejected
      var possible_deps = ['ae_options', 'lib/mutations', 'utilities'];
      if (possible_deps.indexOf(dep) === -1) {
        throw new Error('AudioEye.require was called with "' + dep + '", which is not supported.');
      }

      switch (dep) {
        case 'ae_options':
          callback(AudioEye.productConfig);
          return AudioEye.productConfig;

        case 'lib/mutations':
        case 'utilities':
          // the requested library is already defined, pass it to the callback
          // and return it as well.
          if (AudioEye.require._definedDeps[dep]) {
            callback(AudioEye.require._definedDeps[dep]);
            return AudioEye.require._definedDeps[dep];
          }

          // Set the callback for this dependency. The callback will be
          // called when the platform defines the requested library.
          if (!AudioEye.require._callbacks[dep]) {
            AudioEye.require._callbacks[dep] = [];
          }
          AudioEye.require._callbacks.push(callback);
          return;
      }
    } catch (e) {
      log('Unable to satisfy call to AudioEye.require(). See next error for more info.');
      throw e;
    }
  };

  // Either set the factory to an object to be used later, or immediately pass
  // it to any awaiting callbacks.
  window.AudioEye.define = function (dep, factory) {
    if (!AudioEye.require._definedDeps) {
      AudioEye.require._definedDeps = {};
    }

    AudioEye.require._definedDeps[dep] = factory;

    // nothing has required anything yet
    if (!AudioEye.require._callbacks) return;

    // nothing has required this lib yet
    if (Array.isArray(AudioEye.require._callbacks[dep])) {
      // pass the factory to each callback
      AudioEye.require._callbacks[dep].forEach(function (cb) {
        cb(factory);
      });

      // remove the callbacks to prevent duplicate calls
      AudioEye.require._callbacks[dep] = [];
    }
  };
})();

    loadStaticScript("startup.bundle.js");


    // Determine startup routine
    AudioEye.mode = (function () {

        var extension = false;
        if(!site_id && extension){
            return 'anonymous'
        }

        return 'standard';
    })();

    var loaderRunStartup = function(tries) {
        if (!AudioEye.runStartup) {
            var wait = 100;
            if (tries > 50) {
                wait = wait * tries;
            }
            setTimeout(function() {
                loaderRunStartup(++tries)
            }, wait);
            return;
        }

        AudioEye.runStartup(AudioEye.mode, {
            'portal_url': 'portal.audioeye.com',
            'interface': "<div id=\"ae_app\" data-nosnippet>\n    \n        <!--\n        Layout, Style or Voice Helpers\n    -->\n    <div id=\"ae_helpers\" class=\"ae-module\" style=\"display: none;\">\n\n    \n    <\/div>\n    \n\n    \n    <!--\n        Versioning Control Panel if versioning = true !\n    -->\n        \n    <!--\n        Launcher\n    -->\n    <span id=\"ae_placeholder_launcher\" style=\"display: none;\" aria-hidden=\"true\"><\/span>\n\n    <!-- Toolbar -->\n\n    <span id=\"ae_placeholder_toolbar\" style=\"display: none;\" aria-hidden=\"true\"><\/span>\n\n    <!--\n        Site Menu\n    -->\n    <span id=\"ae_placeholder_site-menu\" style=\"display: none;\" aria-hidden=\"true\"><\/span>\n\n    \n    <!--\n        Generic Aria Live message container\n    -->\n    <div class=\"ae-blurb-noaudio\" id=\"ae_enabled_messages\" aria-relevant=\"additions\" aria-live=\"assertive\"><\/div>\n\n    \n    <!-- Symbol definitions -->\n    <svg style=\"position: absolute; width: 0; height: 0; overflow: hidden;\" version=\"1.1\" xmlns=\"http:\/\/www.w3.org\/2000\/svg\" xmlns:xlink=\"http:\/\/www.w3.org\/1999\/xlink\">\n        <defs>\n            <symbol id=\"icon-close-carousel\" viewBox=\"0 0 32 32\">\n                <title>close carousel<\/title>\n                <path fill=\"#ffffff\" style=\"fill: var(--color1, #ffffff)\" d=\"M28.992 0l-12.992 12.992-12.992-12.992-3.008 3.008 12.992 12.992-12.992 12.992 3.008 3.008 12.992-12.992 12.992 12.992 3.008-3.008-12.992-12.992 12.992-12.992-3.008-3.008z\"><\/path>\n            <\/symbol>\n        <\/defs>\n    <\/svg>\n\n<\/div><!-- end #ae_app -->".replace(/__BROWSER_JS_VERSION__/g, window.__audioEyeContext.browserJsVersion),
            'container_id': "5719",
            'site_id': site_id,
            'version_id': "",
            'is_working_version_request': false,
            'monitor': false,
            'live_monitor_endpoint_url': ae_choose(
                "https://report-prod.audioeye.com/v1/report",
                "https://analytics.audioeye.com/air/report",
                0.000001            ),

                        'perf_endpoint_url': '',
            'loader_timing_endpoint_url': "https:\/\/zalywzdew6.execute-api.us-west-2.amazonaws.com\/prod\/v0\/timing",
            'product_config': options,
            'device': device,
            'testmode': window.AEUnitTests,
            'site_hash': "343e19bfffc5268181b9d99c252c7b97",
            'toolbar_version': 2        });
    };

    // Execute startup routine
    loaderRunStartup(1);
    
    window.AudioEye = Object.assign(window.AudioEye || {}, AudioEye);
};

loaderFunction(1);