import fivestar from '../../../assets/img/find/fivestar.png'
import touxiang from "../../../assets/img/find/touxiang.jpg"
import gaifan1 from "../../../assets/img/find/gaifan1.jpg";
import gaifan2 from "../../../assets/img/find/gaifan2.jpg";
import gaifan3 from "../../../assets/img/find/gaifan3.jpg";
import gaifan4 from "../../../assets/img/find/gaifan4.jpg";



const list=[
    {id:1,name:"全部",num:"5465",good:true,
        content:[
            {uid:"1",name:"妮蔻妮蔻妮",time:"2019-03-23",star:fivestar,starmeanming:"超赞",text:"品尝了小米红枣养生粥和银耳红枣羹,真的超级超级好喝,超级超级美味,100000颗星好评!这也太好吃了,我这辈子都没有吃过这么好吃的东西",img:gaifan1},
            {uid:"2",name:"德玛西亚皇子",time:"2017-11-02",star:fivestar,starmeanming:"很赞",text:"临近国庆，越来越多的人换上带有国旗的头像，毕竟这一周的工作重点就是等待国庆用自己的方式表达对祖国的热爱，本无可厚非。",img:gaifan2},
            {uid:"3",name:"蛮王泰达米尔",time:"2018-08-13",star:fivestar,starmeanming:"超赞",text:"但是，不少公众号借用国旗头像作为营销吸粉的手段，还有人用此进行诈骗，无疑触犯了相关规定，目前已被封号。本次公众号违反国旗法的事并非个例，近年来，",img:gaifan3},
            {uid:"4",name:"压缩疾风剑豪",time:"2011-05-31",star:fivestar,starmeanming:"赞吧",text:"北京某公司在其官方网站中使用或变相使用中华人民共和国国旗进行宣传、青海某餐厅店主把国旗裁一半做门帘、一男子在舞狮表演过程中用国旗当红布摆放祭品并",img:gaifan4}
        ]
    },
    {id:2,name:"最新",num:"",good:true,
        content:[
            {uid:"1",name:"php是世界上最好的语言",time:"2019-03-23",star:fivestar,starmeanming:"超赞",text:"你说啥",img:gaifan1},
        ],
    },
    {id:3,name:"好评",num:"3386",good:true,
        content:[
            {uid:"1",name:"java才是最好的语言",time:"2019-03-23",star:fivestar,starmeanming:"超赞",text:"都起开,java最好用,其他的都是渣渣",img:gaifan1},
        ],
    },
    {id:4,name:"差评",num:"115",good:false,
        content:[
            {uid:"1",name:"真难吃",time:"2019-03-23",star:fivestar,starmeanming:"差评",text:"我去,我这辈子没有吃过这么难吃的东西,真的太恶心了!!!五星差评",img:gaifan1},
        ],
    },
    {id:5,name:"有图",num:"382",good:true,
        content:[
            {uid:"1",name:"真难吃",time:"2019-03-23",star:fivestar,starmeanming:"差评",text:"我去,我这辈子没有吃过这么难吃的东西,真的太恶心了!!!五星差评",img:gaifan1},
        ],
    },
    {id:6,name:"味道好",num:"64",good:true,
        content:[
            {uid:"1",name:"真难吃",time:"2019-03-23",star:fivestar,starmeanming:"差评",text:"我去,我这辈子没有吃过这么难吃的东西,真的太恶心了!!!五星差评",img:gaifan1},
        ],
    },
    {id:7,name:"不好吃",num:"18",good:false,
        content:[
            {uid:"1",name:"真难吃",time:"2019-03-23",star:fivestar,starmeanming:"差评",text:"我去,我这辈子没有吃过这么难吃的东西,真的太恶心了!!!五星差评",img:gaifan1},
        ],
    },
    {id:8,name:"包装精美",num:"789",good:true,
        content:[
            {uid:"1",name:"真难吃",time:"2019-03-23",star:fivestar,starmeanming:"差评",text:"我去,我这辈子没有吃过这么难吃的东西,真的太恶心了!!!五星差评",img:gaifan1},
        ],
    },
    {id:9,name:"分量一般",num:"11",good:false,
        content:[
            {uid:"1",name:"真难吃",time:"2019-03-23",star:fivestar,starmeanming:"差评",text:"我去,我这辈子没有吃过这么难吃的东西,真的太恶心了!!!五星差评",img:gaifan1},
        ],
    }
]

let commentindex = (state = list, action)=>{
    if(action.type === "get_one_comment"){
        const newState = JSON.parse(JSON.stringify(state));
        return newState;
    }
    return state;
}

export default commentindex;
