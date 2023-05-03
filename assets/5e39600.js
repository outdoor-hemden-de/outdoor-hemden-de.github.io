(window.webpackJsonp=window.webpackJsonp||[]).push([[25,7],{256:function(t,e,r){"use strict";r.r(e);r(141),r(10),r(30);var n=r(19),o=r(68),c=r(140),l=r(257),d={name:"productItem",props:{product:Object},data:function(){var t=this,e=this.product.categories[this.product.categories.length-2],r=o.find((function(t){return t.key===e.toLowerCase()||t.subCategories.find((function(t){return t.key==e.toLowerCase()}))||"sonstiges"===t.key})),l=c.find((function(e){return e.name===t.product.brand}));return{config:n,categoryData:r,brandData:l}},methods:{decode:function(t){return l.decode(t)}}},m=r(18),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"course-item bg-light"},[r("div",{staticClass:"position-relative overflow-hidden"},[r("NuxtLink",{attrs:{to:"/produkt/"+t.product.slug+"/",title:t.product.linkTitle}},[r("nuxt-img",{staticClass:"img-fluid",attrs:{preset:"productThumbnail",src:""+t.config.imageFolder+t.product.localThumb,alt:t.product.linkTitle}})],1),t._v(" "),r("div",{staticClass:"\n          w-100\n          d-flex\n          justify-content-center\n          position-absolute\n          bottom-0\n          start-0\n          mb-4\n        "},[r("NuxtLink",{staticClass:"flex-shrink-0 btn btn-sm btn-primary px-3 border-end",staticStyle:{"border-radius":"30px 0 0 30px"},attrs:{to:"/produkt/"+t.product.slug+"/",title:t.product.linkTitle}},[t._v("Testbericht")]),t._v(" "),r("a",{staticClass:"flex-shrink-0 btn btn-sm btn-primary px-3",staticStyle:{"border-radius":"0 30px 30px 0"},attrs:{href:t.product.shopLink,target:"_blank",rel:"nofollow noopener"}},[t._v("Bestellen")])],1)],1),t._v(" "),r("div",{staticClass:"text-center p-4 pb-0"},[r("div",{staticClass:"mb-0 h3"},[t._v(t._s(parseFloat(t.product.price).toFixed(2))+" €")]),t._v(" "),r("div",{staticClass:"mb-3"},[t._l(t.product.stars,(function(t){return r("small",{key:t,staticClass:"pl-3 fa fa-star text-primary"})})),t._v(" "),t._l(5-t.product.stars,(function(t){return r("small",{key:t,staticClass:"fa fa-star text-default"})})),t._v(" "),r("small",[t._v("("+t._s(t.product.reviewCount)+")")])],2),t._v(" "),r("div",{staticClass:"mb-4 h5"},[r("nuxt-link",{staticClass:"noLinkStyle",attrs:{to:"/produkt/"+t.product.slug+"/",title:t.product.name}},[t._v("\n          "+t._s(t.product.name)+"\n        ")])],1)]),t._v(" "),r("div",{staticClass:"d-flex border-top"},[r("small",{staticClass:"flex-fill text-center border-end py-2"},[r("i",{staticClass:"fa fa-toilet text-primary me-2"}),t._v(" "),r("NuxtLink",{attrs:{to:"/marken/"+t.brandData.slug+"/",title:t.decode(t.product.brand)},domProps:{innerHTML:t._s(t.product.brand)}})],1),t._v(" "),r("small",{staticClass:"flex-fill text-center border-end py-2"},[r("i",{staticClass:"fa text-primary me-2"}),t._v(" "),r("NuxtLink",{attrs:{to:"/kategorie/"+t.categoryData.slug+"/",title:t.categoryData.name}},[t._v("\n          "+t._s(t.categoryData.name))])],1)])])])}),[],!1,null,null,null);e.default=component.exports},259:function(t,e,r){"use strict";r.r(e);var n={name:"products",props:{products:Array}},o=r(18),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row"},t._l(t.products,(function(t,e){return r("div",{key:e,staticClass:"col-lg-2 col-md-4 col-sm-6 col-xs-12 fadeInUp"},[r("ProductItem",{staticClass:"mt-5",attrs:{product:t}})],1)})),0)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ProductItem:r(256).default})},260:function(t,e,r){"use strict";r.r(e);var n=r(19),o={data:function(){return{config:n}}},c=r(18),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row gy-2 gx-4 mb-4 mt-5"},t._l(t.config.checklist,(function(e,n){return r("div",{key:n,staticClass:"col-sm-6"},[r("p",{staticClass:"mb-0"},[r("i",{staticClass:"fa fa-arrow-right text-primary me-2"}),t._v(t._s(e)+"\n    ")])])})),0)}),[],!1,null,null,null);e.default=component.exports},268:function(t,e,r){"use strict";r.r(e);var n=r(19),o=r(257),c={name:"productheader",props:{product:Object},data:function(){return{config:n}},methods:{decode:function(t){return o.decode(t)}}},l=r(18),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"container-xxl py-5"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row g-5"},[r("div",{staticClass:"col-lg-6 fadeInUp",staticStyle:{"min-height":"400px"}},[r("div",{staticClass:"position-relative h-100"},[r("nuxt-img",{staticClass:"img-fluid position-absolute w-100 h-100",staticStyle:{"object-fit":"cover","object-position":"center bottom"},attrs:{src:""+t.config.imageFolder+t.product.localThumb,alt:t.product.name,preset:"productHeader"}})],1)]),t._v(" "),r("div",{staticClass:"col-lg-6 fadeInUp"},[r("div",{staticClass:"section-title bg-white text-start text-primary pe-3 h6"},[t._v("\n            "+t._s(t.config.seo.mainKeyword)+"\n          ")]),t._v(" "),r("h1",{staticClass:"mb-4"},[t._v(t._s(t.product.name))]),t._v(" "),r("p",{staticClass:"mb-4"},[t._v("\n            Die "+t._s(t.product.name)+" ist eine\n            "+t._s(t.product.categories[this.product.categories.length-2].slice(0,-1))+"\n            von der Marke "+t._s(t.decode(t.product.brand))+". Sie ist für einen Preis\n            von "+t._s(t.product.price)+" EUR verfügbar und ist sofort lieferbar.\n            Die "+t._s(t.decode(t.product.name))+" hat eine Gesamtbewertung von\n            "+t._s(t.product.stars)+"/5.\n          ")]),t._v(" "),r("p",{staticClass:"mb-4"},[t._v("\n            Das Produkt "),r("strong",[t._v(t._s(t.product.name))]),t._v(" bestand folgende\n            Testkriterien:\n          ")]),t._v(" "),r("Checklist"),t._v(" "),r("a",{staticClass:"btn btn-primary py-3 px-5 mt-2",attrs:{href:"#testbericht"}},[t._v("Zum Testbericht")])],1)])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Checklist:r(260).default})},269:function(t,e,r){"use strict";r.r(e);r(141),r(10),r(30);var n=r(19),o=r(68),c=r(140),l=r(257),d={name:"productcard",props:{product:Object},data:function(){var t=this,e=this.product.categories[this.product.categories.length-2],r=o.find((function(t){return t.key===e.toLowerCase()||t.subCategories.find((function(t){return t.key==e.toLowerCase()}))||"sonstiges"===t.key})),l=c.find((function(e){return e.name===t.product.brand}));return{config:n,categoryData:r,brandData:l}},methods:{decode:function(t){return l.decode(t)}}},m=r(18),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"sidebar-widget schedule-widget mt-5"},[r("div",{staticClass:"mb-4 h5"},[t._v(t._s(t.product.name))]),t._v(" "),r("ul",{staticClass:"list-unstyled"},[r("li",{staticClass:"d-flex justify-content-between align-items-center"},[r("span",[t._v("Marke")]),t._v(" "),r("span",[r("nuxt-link",{attrs:{title:t.config.seo.mainKeyword+" von "+t.decode(t.product.brand),to:"/marken/"+t.brandData.slug+"/"},domProps:{innerHTML:t._s(t.product.brand)}})],1)]),t._v(" "),r("hr"),t._v(" "),r("li",{staticClass:"d-flex justify-content-between align-items-center"},[r("span",[t._v("Kategorie")]),t._v(" "),r("nuxt-link",{attrs:{to:"/kategorie/"+t.categoryData.slug+"/",title:t.categoryData.name}},[r("span",[t._v(t._s(t.categoryData.name))])])],1),t._v(" "),r("hr"),t._v(" "),t._l(t.product.specifications,(function(e,n){return r("div",{key:n},[r("li",{staticClass:"d-flex justify-content-between align-items-center"},[r("span",[t._v(t._s(Object.keys(e)[0]))]),t._v(" "),r("span",[t._v(t._s(Object.values(e)[0]))])]),t._v(" "),r("hr")])})),t._v(" "),r("li",{staticClass:"d-flex justify-content-between align-items-center"},[r("span",[t._v("Bewertung")]),t._v(" "),r("div",{staticClass:"mb-1 mt-3"},[t._l(t.product.stars,(function(t){return r("small",{key:t,staticClass:"pl-3 fa fa-star text-primary"})})),t._v(" "),t._l(5-t.product.stars,(function(t){return r("small",{key:t,staticClass:"fa fa-star text-default"})}))],2)]),t._v(" "),r("hr")],2),t._v(" "),r("div",{staticClass:"sidebar-contact-info mt-4"},[r("p",{staticClass:"mb-0"},[t._v("Preis")]),t._v(" "),r("h3",[t._v(t._s(parseFloat(t.product.price).toFixed(2))+" EUR")])])])])}),[],!1,null,null,null);e.default=component.exports},287:function(t,e,r){"use strict";r.r(e);r(84),r(33),r(114),r(69),r(262),r(30),r(43),r(20),r(10),r(44),r(56),r(35),r(36),r(275),r(193),r(53),r(145),r(83),r(277);var n=r(19),o=r(50),c=r(109);var l={name:"product",head:function(){return{title:this.seoData&&this.seoData.seo&&this.seoData.seo.title?this.seoData.seo.title.replaceAll("$PRODUKT",this.product.name).replaceAll("$HERSTELLER",this.product.brand).replaceAll("$KATEGORIE",this.category).replaceAll("$DOMAIN",this.config.domain):n.productSeo.defaultTitle.replaceAll("$PRODUKT",this.product.name).replaceAll("$HERSTELLER",this.product.brand).replaceAll("$KATEGORIE",this.category).replaceAll("$DOMAIN",this.config.domain),meta:[{hid:"description",name:"description",content:this.seoData&&this.seoData.seo&&this.seoData.seo.metaDescription?this.seoData.seo.metaDescription.replaceAll("$PRODUKT",this.product.name).replaceAll("$HERSTELLER",this.product.brand).replaceAll("$KATEGORIE",this.category).replaceAll("$DOMAIN",this.config.domain):n.productSeo.defaultMetaDescription.replaceAll("$PRODUKT",this.product.name).replaceAll("$HERSTELLER",this.product.brand).replaceAll("$KATEGORIE",this.category).replaceAll("$DOMAIN",this.config.domain)},{hid:"robots",name:"robots",content:this.seoData&&this.seoData.seo&&this.seoData.seo.robots?this.seoData.seo.robots:n.productSeo.defaultRobots}]}},data:function(){var t=this.$route.params.slug,e=c.a.products.getProductFromSlug(t),r=c.a.seo.getSeoForProduct(e),l=e.categories[e.categories.length-2],d=o.filter((function(t){return t.categories.includes(l)})).slice(0,12);return{product:e,config:n,seoData:r,category:l,relevantProducts:d}},computed:{affiliateLink:function(){var t=this.config.affiliate.defaultLink,e=this.product.name.split(" ").join("+"),r=new URL(t);r.searchParams.delete("k"),r.searchParams.delete("sprefix");var n="k=".concat(e,"&sprefix=").concat(e);return r.search=r.search?"".concat(r.search,"&").concat(n):"?".concat(n),r.toString()}},jsonld:function(){return{"@context":"https://schema.org","@graph":[{"@context":"https://schema.org/","@type":"Product",name:this.product.name,image:[n.hostname+n.imageFolder+this.product.localThumb],description:this.seoData&&this.seoData.seo.metaDescription?this.seoData.seo.metaDescription:this.product.name+" - "+this.product.brand,sku:this.product.sku,brand:{"@type":"Brand",name:this.product.brand},review:{"@type":"Review",reviewRating:{"@type":"Rating",ratingValue:this.product.stars.toString(),bestRating:this.product.stars.toString()},author:{"@type":"Organization",name:n.organization}},aggregateRating:{"@type":"AggregateRating",ratingValue:(1*Math.random()+4).toFixed(1).toString(),reviewCount:this.product.reviewCount},offers:{"@type":"Offer",url:n.hostname+n.productUrl+this.product.slug+"/",priceCurrency:"EUR",price:this.product.price,priceValidUntil:"2024-11-20",itemCondition:"https://schema.org/NewCondition",availability:"https://schema.org/InStock"}},{"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":n.hostname,name:n.seo.mainKeyword}},{"@type":"ListItem",position:2,item:{"@id":n.hostname+n.kategorieUrl+this.category.toLowerCase()+"/",name:this.category}},{"@type":"ListItem",position:3,item:{"@id":n.hostname+n.productUrl+this.product.slug+"/",name:this.product.name}}]}]}}},d=r(18),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("ProductHeader",{attrs:{product:t.product,productName:t.product.name,textContent:t.product.description,productImage:""+t.config.imageFolder+t.product.localThumb}}),t._v(" "),r("div",{staticClass:"container-xxl py-5",attrs:{id:"testbericht"}},[r("div",{staticClass:"container"},[r("div",{staticClass:"row g-5"},[r("div",{staticClass:"col-lg-8 fadeInUp",staticStyle:{"min-height":"400px"}},[t.seoData?t._e():r("h2",{staticClass:"mb-4"},[t._v(t._s(t.product.name))]),t._v(" "),t.seoData&&t.seoData.seo&&t.seoData.seo.texts?r("div",t._l(t.seoData.seo.texts,(function(text,e){return r("div",{key:e},[r("div",{staticClass:"mb-3 mt-5 h5"},[r("h2",[t._v(t._s(text.title))])]),t._v(" "),r("p",{staticClass:"mb-4",domProps:{innerHTML:t._s(text.text)}})])})),0):t._e(),t._v(" "),r("Checklist"),t._v(" "),r("a",{staticClass:"btn btn-primary py-3 px-5",attrs:{target:"_blank",rel:"nofollow noopener",href:t.affiliateLink}},[t._v("\n            Bestellen\n          ")])],1),t._v(" "),r("div",{staticClass:"col-lg-4 fadeInUp"},[r("ProductCard",{attrs:{product:t.product}}),t._v(" "),r("div",{staticClass:"mt-5"},[r("a",{staticClass:"btn btn-primary py-3 px-5",staticStyle:{display:"block",width:"100%"},attrs:{target:"_blank",rel:"nofollow noopener",href:t.affiliateLink}},[t._v("\n              "+t._s(t.product.brand)+" Online Shop\n            ")])])],1)])])]),t._v(" "),r("div",{staticClass:"container"},[r("div",{staticClass:"text-center fadeInUp"},[r("div",{staticClass:"section-title bg-white text-center text-primary px-3 h6"},[t._v("\n        Ähnliche Produkte\n      ")]),t._v(" "),r("div",{staticClass:"mb-5 h2"},[t._v(t._s(t.category))])]),t._v(" "),r("Products",{attrs:{products:t.relevantProducts}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ProductHeader:r(268).default,Checklist:r(260).default,ProductCard:r(269).default,Products:r(259).default})}}]);