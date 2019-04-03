import "./../css/header.css";

export default {
    template:
        `<div class="header">
            <div class="content">
                <a href="" class="logo left">
                    <img src="/music/img/logo.png" alt="" class="image">
                </a>
                <ul class="navFirst">
                    <li class="left" v-for="(item,index) in navArray">
                        <a href="">{{item}}</a>
                        <div v-if="index == 5" class="hot">HOT</div> 
                     </li>
                </ul>
                <ul class="right navSecond">
                    <li class="search left">
                        <div class="icon left iconfont">&#xe601;</div>
                        <input type="text" class="left" placeholder="音乐/视频/电台/用户">
                    </li>
                    <li class="left ">
                           <a href="" class="center">创客者中心</a>
                    </li>
                    <li class="right login">
                          <a href="">登录</a>
                          <span class="iconfont right">&#xe604;</span>
                    </li>
                </ul>
            </div>
        </div>`,
    data() {
        return {
            navArray: [
                "发现音乐",
                "我的音乐",
                "朋友",
                "商城",
                "音乐人",
                "下载客户端"
            ]
        }
    }
}

