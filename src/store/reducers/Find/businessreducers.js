import {GET_ONE_BUSINESS} from '../../action/actionType';
import apple from '../../../assets/img/find/fruit-apple.jpg';
import chengzi from '../../../assets/img/find/fruit-chengzi.jpg';
import huolongguo from '../../../assets/img/find/fruit-huolongguo.jpg';
import liulian from '../../../assets/img/find/fruit-liulian.jpg';
import mangguo from '../../../assets/img/find/fruit-mangguo.jpg';
import xigua from '../../../assets/img/find/fruit-xigua.jpg';
import youzi from '../../../assets/img/find/fruit-youzi.jpg';

const list=[
    {id:0,name:'优惠',title:"大家都喜欢吃,才叫真好吃",
        content:[
            {img:apple,name:"苹果",main:"老板疯了!不要钱免费送啦",evaluate:"月售66份 好评度100%",price:"¥ 0.1",num:0},
            {img:youzi,name:"柚子",main:"新鲜的柚子,跳楼价~",evaluate:"月售312份 好评度99%",price:"¥ 1.2",num:0},
            {img:huolongguo,name:"火龙果",main:"这火龙果甜的牙都掉了",evaluate:"月售971份 好评度98%",price:"¥ 2.4",num:0},
            {img:xigua,name:"西瓜",main:"皇室西瓜,买到就是赚到!!!",evaluate:"月售746份 好评度100%",price:"¥ 1.5",num:0}
        ]
    },
    {id:1,name:'热销榜',title:"这里是本店销量最好的水果",
        content:[
            {img:chengzi,name:"橘子",main:"又大又圆的甜橙!!!",evaluate:"月售2144份 好评度99%",price:"¥ 3.8",num:0},
            {img:mangguo,name:"芒果",main:"哇,我家的芒果你没吃过就是遗憾",evaluate:"月售8773份 好评度100%",price:"¥ 4.6",num:0},
            {img:liulian,name:"榴莲",main:"听过臭豆腐吗?问的臭吃得香",evaluate:"月售5983份 好评度97%",price:"¥ 12.2",num:0},
        ]
    },
    {id:2,name:"进店领券",title:"买不买无所谓,进店瞧一瞧",content:[]},
    {id:3,name:"折扣水果",title:"每天一折扣,水果天天有",content:[]},
    {id:4,name:"回馈顾客",title:"新老顾客的福音",content:[]},
    {id:5,name:"新鲜水果",title:"新鲜水果我家强",content:[]},
    {id:6,name:"水果拼盘",title:"特级水果拼盘",content:[]},
    {id:7,name:"秘制水果",title:"独家秘制水果沙拉",content:[]},
    {id:8,name:"❤鲜榨❤",title:"鲜榨各类果汁",content:[]},
    {id:9,name:"西瓜甜瓜",title:"西瓜,甜瓜,烧瓜,哈密瓜",content:[]},
    {id:10,name:"葡萄提子",title:"葡萄,提子,一串的都有",content:[]},

]

let businessindex = (state = list, action)=>{
    //console.log('正价值',state==list)
    if(action.type === GET_ONE_BUSINESS){
        const newState = JSON.parse(JSON.stringify(state));
        return newState;
    }
    if(action.type === "add_one_num"){
        const newState = JSON.parse(JSON.stringify(state));
        newState[action.change.index1].content[action.change.index].num+=1;
        return newState;
    }
    if(action.type === "reduce_one_num"){
        if(action.change.num==0){
            state[action.change.index1].content[action.change.index].num=0;
            const newState = JSON.parse(JSON.stringify(state));
            return newState;
        }else{
            state[action.change.index1].content[action.change.index].num-=1;
            const newState = JSON.parse(JSON.stringify(state));
            return newState;
        }
    }
    if(action.type === "clear_all_num"){
        return list;
    }

    return state;
}

export default businessindex;
