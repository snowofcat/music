import "./../css/login02.css"
let login = {
    template:
        ` <div class="login02">
            <div class="left zc">
                <img src="/music/img/platform.png" alt="">
                <a href="">手机号登录</a>
                <a href="">注册</a>
            </div>
            <div class="right">
                <ul class="icons">
                    <li>
                        <a href="">
                            <div class="left">微</div>
                            <span>微信登录</span>
                        </a>
                    </li>
                     <li>
                        <a href="">
                            <div class="left">Q</div>
                            <span>qq登录</span>
                        </a>
                    </li>
                     <li>
                        <a href="">
                            <div class="left">博</div>
                            <span>微博登录</span>
                        </a>
                    </li>
                     <li>
                        <a href="">
                            <div class="left">易</div>
                            <span>网易邮箱账号登录</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>`
}

let clogin = {
    template:
        `<div class="clogin">
            <div class="content">
                <div class="title">
                    <h2>请使用你的云音乐账号登录</h2>
                </div>
               <login></login>
            </div>
        </div>`,
    components: {
        login
    }
}

let llogin = {
    template:
        `<div class="llogin">
           <div class="title">
                <h4 class="left">登录</h4>
                <span class="right">a</span>
           </div>
           <login></login>
        </div>`,
    components: {
        login
    }
}

export {
    clogin,
    llogin
}