var tabs = document.querySelectorAll('.tab');
var tabContents = document.querySelectorAll('.panel');
// let ids = document.querySelector('#one')
var tabify = function (e) {
    var _a;
    console.log('hello');
    var target = e.target;
    tabContents.forEach(function (each, i) {
        each.classList.remove('active');
    });
    tabs.forEach(function (each) { return each.classList.remove("active"); });
    target.classList.add("active");
    var panel = target.getAttribute('data-target');
    console.log(document.getElementById("" + panel));
    (_a = document.getElementById("" + panel)) === null || _a === void 0 ? void 0 : _a.classList.add('active');
};
tabs.forEach(function (each) {
    // console.log('tab')
    each.addEventListener('click', function (e) { return tabify(e); });
});
