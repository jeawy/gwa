
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/projects/projects","pages/community/community","pages/services/services","pages/profile/profile"],"window":{"navigationBarTextStyle":"black","navigationBarBackgroundColor":"#FFFFFF","backgroundColor":"#f8f8f8"},"tabBar":{"selectedColor":"#ffffff","borderStyle":"#1F1F1F","backgroundColor":"#1F1F1F","list":[{"pagePath":"pages/index/index","iconPath":"static/tabbar/ba.png","selectedIconPath":"static/tabbar/baa.png","text":"Hotels"},{"pagePath":"pages/projects/projects","iconPath":"static/tabbar/bb.png","selectedIconPath":"static/tabbar/bba.png","text":"Residence"},{"pagePath":"pages/community/community","iconPath":"static/tabbar/bc.png","selectedIconPath":"static/tabbar/bca.png","text":"Discover"},{"pagePath":"pages/services/services","iconPath":"static/tabbar/bd.png","selectedIconPath":"static/tabbar/bda.png","text":"Service"},{"pagePath":"pages/profile/profile","iconPath":"static/tabbar/be.png","selectedIconPath":"static/tabbar/bea.png","text":"Profile"}]},"nvueCompiler":"uni-app","nvueStyleCompiler":"weex","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"OAS","compilerVersion":"3.1.4","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"backgroundColor":"#FFFFFF","titleNView":false,"bounce":"none"}},{"path":"/pages/projects/projects","meta":{"isQuit":true,"isTabBar":true},"window":{"backgroundColor":"#1F1F1F","titleNView":false,"bounce":"none"}},{"path":"/pages/community/community","meta":{"isQuit":true,"isTabBar":true},"window":{"backgroundColor":"#1F1F1F","titleNView":false,"bounce":"none"}},{"path":"/pages/services/services","meta":{"isQuit":true,"isTabBar":true},"window":{"backgroundColor":"#1F1F1F","titleNView":false,"bounce":"none"}},{"path":"/pages/profile/profile","meta":{"isQuit":true,"isTabBar":true},"window":{"backgroundColor":"#1F1F1F","titleNView":false,"bounce":"none"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
