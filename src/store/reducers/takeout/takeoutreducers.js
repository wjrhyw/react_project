let data={
    takeouthead:{
        title:'昆明理工大学',
    },
    takeoutnav:{
                    imgurl:['http://p1.music.126.net/Pj5btpNr_LNYRnzkY2Oklw==/109951164340630437.jpg','http://p1.music.126.net/KxpKJc1IQmuYRQaoFCvi_g==/109951164340632770.jpg','http://p1.music.126.net/q5tGuVS--IY8sQCrItsDZQ==/109951164341168942.jpg'],
            list:[
                [
                    {title:'美食',url:require('../../../assets/img/1.png')},
                    {title:'下午茶',url:require('../../../assets/img/2.jpg')},
                    {title:'外码',url:'http://p2.music.126.net/K_84LZWdizS0cN7Hwl0laQ==/109951163353347041.jpg?param=140y140'},
                    {title:'外码',url:'http://p2.music.126.net/l_g4Wed5Rt_aMB5hwlaGrw==/109951164337806999.jpg?param=140y140'},
                    {title:'外码',url:'http://p2.music.126.net/cx2OS7N5saENHQQ9HoYpZQ==/109951164327301283.jpg?param=140y140'},
                    {title:'外码',url:'http://p2.music.126.net/5i9Ylli9nrKtEWpwSIXtcw==/109951164325323174.jpg?param=140y140'},
                    {title:'外码',url:'http://p2.music.126.net/qmbFWiN49TtarBvTYQx0tw==/109951164318387094.jpg?param=140y140'},
                    {title:'外码',url:'http://p2.music.126.net/A6SvIvbg5w1OM_aiLNHNjA==/109951164226451255.jpg?param=140y140'},
                    {title:'外码',url:'http://p2.music.126.net/jI_fHHxlFWicdSnDirr2QQ==/109951164327936286.jpg?param=140y140'},
                    {title:'外码',url:'http://p2.music.126.net/uuCy-SU2-IX7opO9R9KyKQ==/109951163805997802.jpg?param=140y140'}
                ],
                [
                    {title:'炸鸡',url:'http://p2.music.126.net/y-vXNri5fK8AY0d3scpFvQ==/109951164317521031.jpg?param=140y140'},
                    {title:'炸鸡',url:'http://p2.music.126.net/C3jlX_XWFZUtD8-p-Eus-g==/109951164328608378.jpg?param=140y140'},
                    {title:'炸鸡',url:'http://p2.music.126.net/FyYufJ6GDp5Krqb3ecihow==/109951164001046710.jpg?param=140y140'},
                    {title:'炸鸡',url:'http://p1.music.126.net/ptx2Jf4PZl3oNLxv4NiADg==/109951164018765577.jpg?param=140y140'},
                    {title:'炸鸡',url:'http://p1.music.126.net/BVmCuYEbrZA5KRYES0yqGQ==/109951164261994242.jpg?param=140y140'},
                    {title:'炸鸡',url:'http://p1.music.126.net/hm8FEs9GcrZOeu5Ct3oPuQ==/109951164258347355.jpg?param=140y140'},
                    {title:'炸鸡',url:'http://p1.music.126.net/GzJPH3Wp3hGWAbeHNqN9-Q==/109951164236504386.jpg?param=140y140'},
                    {title:'炸鸡',url:'http://p2.music.126.net/lA1e5m3WtzBb9L7TAPf2zA==/109951164279740620.jpg?param=140y140'},
                    {title:'炸鸡',url:'http://p2.music.126.net/qmbFWiN49TtarBvTYQx0tw==/109951164318387094.jpg?param=140y140'},
                    {title:'炸鸡',url:'http://p2.music.126.net/l_g4Wed5Rt_aMB5hwlaGrw==/109951164337806999.jpg?param=140y140'}
                ]
        ]
    },
    takeoutmid:{
        imgurl:['http://p1.music.126.net/Pj5btpNr_LNYRnzkY2Oklw==/109951164340630437.jpg','http://p1.music.126.net/KxpKJc1IQmuYRQaoFCvi_g==/109951164340632770.jpg','http://p1.music.126.net/q5tGuVS--IY8sQCrItsDZQ==/109951164341168942.jpg'],
        uldata:[{title:'品质套餐',tip:'搭配齐全吃的好',href:'立即抢购'},{title:'品质套餐',tip:'搭配齐全吃的好',href:'立即抢购'}]
    },
    takeoutlist:{
        list:[
        {
            title:'测试'
        },
        {
            title:'测试'
        },
        {
            title:'测试'
        },
        {
            title:'测试'
        }
        ]
    }
}
let takeoutindex=(state=data,action)=>{
    if(action.type==='gps'){
        var newstate=JSON.stringify(state);
        newstate=JSON.parse(newstate);
        newstate.takeouthead={
                   title:action.value
                }
        console.log(newstate.takeouthead);
        return newstate
    }
    return state
}
export default takeoutindex