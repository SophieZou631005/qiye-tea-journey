/* 内容集中在这里：正文、来源、照片与文创展柜可独立更新，不必改动页面布局。 */
window.QIYE_CONTENT = {
  // 留空时自动使用当前网页地址。迁移托管后，扫码与分享不会返回旧网站。
  siteUrl: '',
  chapters: [
    { id:'seed', number:'01', name:'种下', eyebrow:'一山 · 七叶', title:'故事，从七株茶树开始。', text:'蒙顶山的云雾里，藏着一段关于种茶的地方记忆。相传，吴理真在这里手植七株茶树，后世以皇茶园守护这份记忆。七叶将它化作舒展的七片叶，带着故乡出发。', note:'吴理真手植七株茶树为地方传说与传统记忆；七叶是据此创作的幻想角色。', quote:'每一片叶，都记得最初的山。', task:'轻触七枚茶种，让记忆在山间发芽。', sourceIds:['history'] },
    { id:'craft', number:'02', name:'采制', eyebrow:'一双手 · 一份传承', title:'一片叶，经双手成为茶。', text:'在雅安名山，蒙山茶传统制作技艺讲究“看茶制茶”：制茶人依据芽叶状态调整手法与火候。蒙顶甘露、蒙顶黄芽与蒙顶石花各有形、香、滋味，也各有工艺。', note:'下方是捧、揉、撒三种手法的科普互动，不是完整制茶流程，也不模拟实际锅温。不同茶类不能套用同一工艺。', quote:'把时间，交给懂茶的手。', task:'依次体验三种手法，感受芽叶的变化。', sourceIds:['craft','unesco'] },
    { id:'road', number:'03', name:'出山', eyebrow:'一篓茶 · 一条路', title:'茶离开山，把山带向远方。', text:'雅安是川藏茶马古道的重要起点，南路边茶由此通往高原。茶篓、背夫与马帮，让山地之间有了长久的往来。七叶沿着这份交流的记忆前行，遇见不同的生活。', note:'这是文化叙事示意，展示雅安—康定—拉萨的联系，不对应唯一古道线路，也不提供旅行导航。蒙山绿茶与南路边茶是不同的茶类与技艺传统。', quote:'路的尽头，是另一张茶桌。', task:'点亮四个节点，读一段茶路记忆。', sourceIds:['history','route'] },
    { id:'city', number:'04', name:'入城', eyebrow:'一杯茶 · 今日生活', title:'走过古道，也走进你的日常。', text:'茶园、古镇、茶村与城市，共同构成今天的雅安。七叶把山间的记忆带到一杯日常的茶里：可以留给自己片刻安静，也可以成为与朋友见面的理由。', note:'下方文创为概念延展，尚未打样或销售；后续实物照片会加入茶物展柜。', quote:'让古老的温度，在今天发生。', task:'选一个饮茶时刻，收藏你的今日心境。', sourceIds:['travel','unesco'] },
    { id:'share', number:'05', name:'分享', eyebrow:'一份心意 · 再次出发', title:'下一段茶路，交给你。', text:'茶的旅程，不停在一座山、一条路。写下一句想分享的话，把七叶和今天的心境装进一张茶路卡。让一次小小的分享，成为新故事的起点。', note:'昵称与留言只在当前浏览器处理，不上传服务器。茶路卡为数字纪念，不是证书或兑换凭证。', quote:'七株茶，万里路；下一站，与你。', task:'写下心意，生成并保存自己的茶路卡。', sourceIds:['unesco'] }
  ],
  sources: [
    {id:'history', title:'“茶城”雅安：中国茶史浓缩于此', publisher:'雅安市人民政府',url:'https://www.yaan.gov.cn/zhangzhe/show/2c64889b-da94-4cad-8152-e9b4eabcc631.html'},
    {id:'craft',title:'绿茶制作技艺（蒙山茶传统制作技艺）',publisher:'中国非物质文化遗产网',url:'https://www.ihchina.cn/project_details/23781.html'},
    {id:'unesco',title:'中国传统制茶技艺及其相关习俗 · 2022年列入代表作名录',publisher:'联合国教科文组织',url:'https://ich.unesco.org/en/RL/traditional-tea-processing-techniques-and-associated-social-practices-in-china-01884'},
    {id:'route',title:'川藏茶马古道及其多条路径',publisher:'中国民族博物馆',url:'https://www.cnmuseum.com/cn/category/2509/0378-1.htm'},
    {id:'travel',title:'四川·雅安“世界茶源寻根”之旅',publisher:'文化和旅游部',url:'https://zhuanti.mct.gov.cn/xczgshsh2023/cxyh/detail_cha/3865.html'}
  ],
  // 将 image 从空字符串改为 assets/your-photo.jpg，即可替换相应展柜插画。
  // 支持相对地址；alt 描述照片内容；caption 显示照片说明。
  products: [
    {title:'茶路折页',tag:'把一段旅程带走',image:'',alt:'七叶茶路折页概念插画',caption:'一张展开的山路，收藏一段茶的记忆。',type:'map'},
    {title:'随行茶器',tag:'让一杯茶陪你出发',image:'',alt:'七叶随行茶器概念插画',caption:'用轻便的茶器，把片刻从容带在身边。',type:'cup'},
    {title:'七叶茶礼',tag:'把山间的心意送给你',image:'',alt:'七叶茶礼概念插画',caption:'以茶为信，让一份温柔继续流转。',type:'box'}
  ]
};
