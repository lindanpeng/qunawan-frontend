var DOMAIN="http://localhost:80"
var INDEX_URL=DOMAIN+"/index.html"
var HOME_URL=DOMAIN+"/home.html"
var LOGIN_URL=DOMAIN+"/login.html"
var RECOMMEND_SCENIC_VIEW_URL=DOMAIN+"/scenic_recommend.html"
var RANK_SCENIC_VIEW_URL=DOMAIN+"/scenic_rank.html"
var NEW_EVALUATE_VIEW_URL=DOMAIN+"/evaluate.html"
var SCENIC_DETAIL_VIEW_URL=DOMAIN+"/scenic_detail.html"
var DO_LOGIN_URL=DOMAIN+"/api/doLogin"
var DO_REGISTER_URL=DOMAIN+"/api/doRegister"
var LOGOUT_URL=DOMAIN+"/api/logout"
var USER_INFO_URL=DOMAIN+"/api/userInfo"
var RANK_SCENIC_PREVIEW_DATA_URL=DOMAIN+"/api/scenicPreview"
var RANK_SCENIC_RANK_DATA_URL=DOMAIN+"/api/scenicRank"
var RECOMMEND_SCENIC_PREVIEW_DATA_URL=DOMAIN+"/api/recommendScenicPreview"
var RECOMMEND_SCENIC_DATA_URL=DOMAIN+"/api/recommendScenic"
var NEW_EVALUATE_DATA_URL=DOMAIN+"/api/evaluates"
var USER_EVALUATE_DATA_URL="/api/userEvaluates"

var SCENIC_DETAIL_DATA_URL=DOMAIN+"/api/scenicDetail"
var USER_SKIM_URL="/api/userSkim"

var LOAD_PROVINCE_URL=DOMAIN+"/api/loadProvinces"
var LOAD_CITY_URL=DOMAIN+"/api/loadCitiesByProvinceId"
function cutString(str, len) {
    //length属性读出来的汉字长度为1
    if (str.length * 2 <= len) {
        return str;
    }
    var strlen = 0;
    var s = "";
    for (var i = 0; i < str.length; i++) {
        s = s + str.charAt(i);
        if (str.charCodeAt(i) > 128) {
            strlen = strlen + 2;
            if (strlen >= len) {
                return s.substring(0, s.length - 1) + "...";
            }
        } else {
            strlen = strlen + 1;
            if (strlen >= len) {
                return s.substring(0, s.length - 2) + "...";
            }
        }
    }
    return s;
}
function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) {
            return pair[1];
        }
    }
    return "";
}