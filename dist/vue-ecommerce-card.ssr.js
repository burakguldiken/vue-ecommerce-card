'use strict';Object.defineProperty(exports,'__esModule',{value:true});//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script = {
  props: {
    imageUrl: {
      type: String,
      default: "https://png.pngtree.com/element_our/20190531/ourlarge/pngtree-color-glare-computer-free-map-image_1276302.jpg"
    },
    description: {
      type: String,
      default: "Designed for serious gaming and real-world durability, \n          TUF Gaming A15 is a gaming laptop that can lead you to victory. \n          Powered by the latest AMD Ryzen \u2122 4000 Series CPU and GeForce GTX 1650Ti GPU, \n          this gaming cavan is fast and smooth in action-packed games."
    },
    title: {
      type: String,
      default: "Asus X556U Series"
    },
    price: {
      type: Number,
      default: 1200
    },
    info: {
      type: String,
      default: "Asus Grey Laptop"
    },
    addDescription: {
      type: String,
      default: "Add To Card"
    },
    cardHeight: {
      type: String,
      default: "350"
    },
    cardWidth: {
      type: String,
      default: "520"
    }
  }
};function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}function createInjectorSSR(context) {
    if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
    }
    if (!context)
        return () => { };
    if (!('styles' in context)) {
        context._styles = context._styles || {};
        Object.defineProperty(context, 'styles', {
            enumerable: true,
            get: () => context._renderStyles(context._styles)
        });
        context._renderStyles = context._renderStyles || renderStyles;
    }
    return (id, style) => addStyle(id, style, context);
}
function addStyle(id, css, context) {
    const group =  css.media || 'default' ;
    const style = context._styles[group] || (context._styles[group] = { ids: [], css: '' });
    if (!style.ids.includes(id)) {
        style.media = css.media;
        style.ids.push(id);
        let code = css.source;
        style.css += code + '\n';
    }
}
function renderStyles(styles) {
    let css = '';
    for (const key in styles) {
        const style = styles[key];
        css +=
            '<style data-vue-ssr-id="' +
                Array.from(style.ids).join(' ') +
                '"' +
                (style.media ? ' media="' + style.media + '"' : '') +
                '>' +
                style.css +
                '</style>';
    }
    return css;
}/* script */
var __vue_script__ = script;
/* template */

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "container",
    style: {
      height: _vm.cardHeight + 'px',
      width: _vm.cardWidth + 'px'
    }
  }, [_vm._ssrNode("<div class=\"front\" data-v-2cb75330><div class=\"images\" data-v-2cb75330><img" + _vm._ssrAttr("src", _vm.imageUrl) + " data-v-2cb75330></div> <div class=\"product\" data-v-2cb75330><p data-v-2cb75330>" + _vm._ssrEscape(_vm._s(_vm.info)) + "</p> <h1 data-v-2cb75330>" + _vm._ssrEscape(_vm._s(_vm.title)) + "</h1> <h2 data-v-2cb75330>" + _vm._ssrEscape("$" + _vm._s(_vm.price)) + "</h2> <p class=\"desc\" data-v-2cb75330>" + _vm._ssrEscape("\n        " + _vm._s(_vm.description) + "\n      ") + "</p> <div class=\"buttons\" data-v-2cb75330><button class=\"add\" data-v-2cb75330>" + _vm._ssrEscape(_vm._s(_vm.addDescription)) + "</button></div></div></div> <div class=\"back\" data-v-2cb75330><link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\" data-v-2cb75330> <i class=\"fa fa-heart back-icon\" data-v-2cb75330></i></div>")]);
};

var __vue_staticRenderFns__ = [];
/* style */

var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-2cb75330_0", {
    source: "@import url(https://fonts.googleapis.com/css?family=Lato:400,700);.back-icon[data-v-2cb75330]{font-size:75px;color:#fff;margin-top:120px}.back[data-v-2cb75330]{background:linear-gradient(-45deg,#fc575e,#f7b42c);-webkit-backface-visibility:hidden;-moz-backface-visibility:hidden;-o-backface-visibility:hidden;backface-visibility:hidden;-webkit-transition:.6s;-webkit-transform-style:preserve-3d;-moz-transition:.6s;-moz-transform-style:preserve-3d;-o-transition:.6s;-o-transform-style:preserve-3d;-ms-transition:.6s;-ms-transform-style:preserve-3d;transition:.6s;transform-style:preserve-3d;position:absolute;text-align:center;left:0;width:100%;height:100%}.front[data-v-2cb75330]{-webkit-backface-visibility:hidden;-moz-backface-visibility:hidden;-o-backface-visibility:hidden;backface-visibility:hidden;-webkit-transition:.6s;-webkit-transform-style:preserve-3d;-moz-transition:.6s;-moz-transform-style:preserve-3d;-o-transition:.6s;-o-transform-style:preserve-3d;-ms-transition:.6s;-ms-transform-style:preserve-3d;transition:.6s;transform-style:preserve-3d;position:absolute;top:0;left:0;width:100%;height:100%}.back[data-v-2cb75330]{-webkit-transform:rotateY(-180deg);-moz-transform:rotateY(-180deg);-o-transform:rotateY(-180deg);-ms-transform:rotateY(-180deg);transform:rotateY(-180deg)}.container.hover .back[data-v-2cb75330],.container:hover .back[data-v-2cb75330]{-webkit-transform:rotateY(0);-moz-transform:rotateY(0);-o-transform:rotateY(0);-ms-transform:rotateY(0);transform:rotateY(0);transition:all 2s ease-in-out}.container.hover .front[data-v-2cb75330],.container:hover .front[data-v-2cb75330]{-webkit-transform:rotateY(180deg);-moz-transform:rotateY(180deg);-o-transform:rotateY(180deg);-ms-transform:rotateY(180deg);transform:rotateY(180deg);transition:all 2s ease-in-out}.front[data-v-2cb75330]{z-index:2}html[data-v-2cb75330]{display:grid;min-height:100%}body[data-v-2cb75330]{display:grid;background:#e0c9cb;font-family:Lato,sans-serif,sans-serif;text-transform:uppercase}.container[data-v-2cb75330]{perspective:1000;-moz-transform:perspective(1000px);-moz-transform-style:preserve-3d;position:relative;margin:auto;overflow:hidden;background:#f5f5f5;box-shadow:5px 5px 15px rgba(78,78,78,.5);border-radius:10px}p[data-v-2cb75330]{font-size:.6em;color:#e64444;letter-spacing:1px}h1[data-v-2cb75330]{font-size:1.2em;color:#01010c;margin-top:-5px}h2[data-v-2cb75330]{color:#e64444;margin-top:-5px}img[data-v-2cb75330]{width:40%;margin-top:47px;margin-left:47px;background-color:transparent}.product[data-v-2cb75330]{position:absolute;width:40%;height:100%;top:10%;left:60%}.desc[data-v-2cb75330]{text-transform:none;letter-spacing:0;margin-bottom:17px;color:#4e4e4e;font-size:.7em;line-height:1.6em;margin-right:25px;text-align:justify}button[data-v-2cb75330]{background:linear-gradient(-45deg,#fc575e,#f7b42c);padding:10px;display:inline-block;outline:0;border:0;margin:-1px;border-radius:2px;text-transform:uppercase;letter-spacing:1px;color:#f5f5f5;cursor:pointer}button[data-v-2cb75330]:hover{background:linear-gradient(-45deg,#fc575e,#f7b42c);transition:all .4s ease-in-out}.add[data-v-2cb75330]{width:67%}.like[data-v-2cb75330]{width:22%}.focus[data-v-2cb75330]{background:#ba7e7e;color:#f5f5f5}footer[data-v-2cb75330]{position:absolute;bottom:0;right:0;font-size:.8em;text-transform:uppercase;padding:10px}footer p[data-v-2cb75330]{letter-spacing:3px}footer a[data-v-2cb75330]{color:#fff;text-decoration:none}footer a[data-v-2cb75330]:hover{color:#7d7d7d}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__ = "data-v-2cb75330";
/* module identifier */

var __vue_module_identifier__ = "data-v-2cb75330";
/* functional template */

var __vue_is_functional_template__ = false;
/* style inject shadow dom */

var __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, createInjectorSSR, undefined);// Import vue component

var install = function installVueEcommerceCard(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component('VueEcommerceCard', __vue_component__);
}; // Create module definition for Vue.use()


var plugin = {
  install: install
}; // To auto-install on non-es builds, when vue is found
// eslint-disable-next-line no-redeclare

/* global window, global */

{
  var GlobalVue = null;

  if (typeof window !== 'undefined') {
    GlobalVue = window.Vue;
  } else if (typeof global !== 'undefined') {
    GlobalVue = global.Vue;
  }

  if (GlobalVue) {
    GlobalVue.use(plugin);
  }
} // Inject install function into component - allows component
// to be registered via Vue.use() as well as Vue.component()


__vue_component__.install = install; // Export component by default
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = component;
exports.default=__vue_component__;