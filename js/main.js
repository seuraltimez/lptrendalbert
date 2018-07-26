window.onload = function(){
mdc.tabs.MDCTabBar.attachTo(document.querySelector('#main-nav-tab-bar'));

let drawer = new mdc.drawer.MDCTemporaryDrawer(document.querySelector('.mdc-drawer--temporary'));
document.querySelector('#menu-open').addEventListener('click', () => drawer.open = true);

};

