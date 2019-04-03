import "./../css/footer.css"

export default {
    template:
        `<div class="myfooter">
            <div class="footer">
                <div class="left">
                    <ul class="content">
                        <li><a href="" v-for="item in links">{{item.value}}</a></li>
                    </ul>
                    <ul class="abstract left">
                        <li v-for="item in abstract">
                            <ul>
                                <li class="left">{{item.first}}</li>
                                <li class="left">{{item.second}}<a href="">{{item.third}}</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div class="icon right">
                    <ul>
                        <li class="area left">
                            <a href=""><span class="iconfont">&#xe637;</span></a>
                            <div>用户认证</div>
                        </li>
                        <li class="area left">
                            <a href=""><span class="iconfont">&#xe50a;</span></a>
                            <div>独立音乐人</div>
                        </li>
                        <li class="area left">
                            <a href=""><span class="iconfont">&#xe520;</span></a>
                            <div>赞赏</div>
                        </li>
                        <li class="area left">
                            <a href=""><span class="iconfont">&#xe717;</span></a>
                            <div>视频奖励</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>`,
    data() {
        return {
            links: [{
                href: "",
                value: "关于网易"
            },{
                href: "",
                value: "客户服务"
            },{
                href: "",
                value: "服务条款"
            },{
                href: "",
                value: "网站导航"
            },{
                href: "",
                value: "意见反馈"
            }],
            abstract: [{
                first: "网易公司版权所有©1997-2019",
                second: "杭州乐读科技有限公司运营：",
                third: "浙网文[2018]3506-263号"
            },{
                first: "违法和不良信息举报电话：0571-89853516",
                second: "举报邮箱：：",
                third: "ncm5990@163.com"
            }],
            icons: [{
                icon: "&#xe637;",
                value: "用户认证"
            },{
                icon: "&#xe50a;",
                value: "独立音乐人"
            },{
                icon: "&#xe520;",
                value: "赞赏"
            },{
                icon: "&#xe717;",
                value: "视频奖励"
            }]
        }
    }
}