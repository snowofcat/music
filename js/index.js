import Vue from "vue";
/* css */
import "./../css/init.css";
import "./../css/common.css";

/* component */
import myheader from "./header";
import myfooter from "./footer";
import {mylogin, flogin} from "./login";
import {clogin, llogin} from "./login02";

new Vue({
    el: "#app",
    data: {
        name: "Snow"
    },
    components: {
        myheader,
        myfooter,
        mylogin,
        flogin,
        clogin,
        llogin
    }
})