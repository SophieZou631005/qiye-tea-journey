/*
 * 七叶内容档案
 * 修改文案、替换图片或增加作品时，优先编辑本文件。
 * 图片名称采用稳定的英文标识，与原始素材文件名无关。
 * 所有产品名称、说明与规格均依据画面内容整理；规格为设计建议。
 */
window.QIYE_CONTENT = {
  siteUrl: '', // 自动使用当前部署地址，兼容 GitHub Pages 的项目子目录。
  chapters: [
    {
      id: 'seed', number: '01', name: '种下', eyebrow: '一山 · 七叶',
      title: '故事，从七株茶树开始。',
      text: '蒙顶山的云雾里，藏着一段关于种茶的地方记忆。相传，吴理真在这里手植七株茶树，后世以皇茶园守护这份记忆。七叶将它化作舒展的七片叶，带着故乡出发。',
      note: '吴理真手植七株茶树为地方传说与传统记忆；七叶是据此创作的幻想角色。',
      quote: '每一片叶，都记得最初的山。',
      journal: '出发前，我想先记住来处。请和我一起，种下七株小小的记忆。',
      task: '轻触七枚茶种，让记忆在山间发芽。',
      sourceIds: ['history'], productId: 'seven-leaf-sculpture'
    },
    {
      id: 'craft', number: '02', name: '采制', eyebrow: '一双手 · 一份传承',
      title: '一片叶，经双手成为茶。',
      text: '在雅安名山，蒙山茶传统制作技艺讲究“看茶制茶”：制茶人依据芽叶状态调整手法与火候。蒙顶甘露、蒙顶黄芽与蒙顶石花各有形、香、滋味，也各有工艺。',
      note: '捧、揉、撒是手法的科普互动，并非完整制茶流程。不同茶类的工序与手法不能一概而论。',
      quote: '把时间，交给懂茶的手。',
      journal: '叶子被轻轻捧起，又在掌心翻转。原来，传承也藏在一个细小的动作里。',
      task: '依次体验三种手法，感受芽叶的变化。',
      sourceIds: ['craft', 'unesco'], productId: 'craft-badge'
    },
    {
      id: 'road', number: '03', name: '出山', eyebrow: '一篓茶 · 一条路',
      title: '茶离开山，把山带向远方。',
      text: '雅安是川藏茶马古道的重要起点，南路边茶由此通往高原。茶篓、背夫与马帮，让山地之间有了长久的往来。七叶沿着这份交流的记忆前行，遇见不同的生活。',
      note: '路线是文化联系示意，不是地理导航；蒙山绿茶与南路边茶属于不同的茶类和技艺传统。',
      quote: '路的尽头，是另一张茶桌。',
      journal: '茶篓里装着故乡，路上遇见的是世界。每一次抵达，都让故事多了一位讲述者。',
      task: '点亮四个节点，读一段茶路记忆。',
      sourceIds: ['history', 'route'], productId: 'journey-tag'
    },
    {
      id: 'city', number: '04', name: '入城', eyebrow: '一杯茶 · 一座正在生长的城',
      title: '走过古道，走进名山的今天。',
      text: '茶的故事，也在街巷和河岸继续。甘露坊让茶马记忆进入市井生活，名山河滨水空间把休憩与茶文化串在一起。七叶把山间的记忆带回城里，邀你想象一次新的停留。',
      note: '五个地点来自参赛命题资料；互动中的停留方式为本项目的创意设想，不表示已有对应活动或服务。',
      quote: '山为底，水为脉，茶为魂。',
      journal: '今天，我不急着赶路。想在一条河、一条街，和一个愿意一起喝茶的人身边停下。',
      task: '选择一个城市停留点，再收藏此刻的心境。',
      sourceIds: ['ganlu', 'riverside', 'teatown'], productId: 'travel-teaware'
    },
    {
      id: 'share', number: '05', name: '分享', eyebrow: '一份心意 · 再次出发',
      title: '下一段茶路，交给你。',
      text: '一颗茶种的远行，最终回到人与人的相遇。写一句心意，把喜欢的茶物放进自己的茶篓，再将今天的心境与城市停留装进一张卡。让古老的茶，在新的生活里继续生长。',
      note: '昵称、留言、心境和茶篓仅保存在当前浏览器。茶路卡为数字纪念，不是商品订单或兑换凭证。',
      quote: '七株茶，万里路；下一站，与你。',
      journal: '我的故事，在你愿意分享的这一刻，才真正有了下一站。',
      task: '写下心意，生成并保存自己的茶路卡。',
      sourceIds: ['unesco'], productId: 'tea-road-stamps'
    }
  ],
  cityPlaces: [
    { id: 'ganlu', name: '甘露坊步行街', short: '甘露坊', type: '街巷 · 相遇', scene: 'street', title: '让茶香，走进街巷。', text: '甘露坊将茶马文化展示与街区生活相连。七叶提议：一杯茶、一次盖章，成为陌生人开始交谈的理由。', idea: '七叶的停留提案：街巷集章', productId: 'tea-road-stamps' },
    { id: 'river', name: '名山河滨水带', short: '名山河', type: '滨水 · 慢行', scene: 'river', title: '把一刻从容，留在河边。', text: '名山河沿岸的公共空间更新，让茶文化进入景观与日常。七叶提议：带一套随行茶器，在漫步后为自己留一个片刻。', idea: '七叶的停留提案：滨水慢茶', productId: 'travel-teaware' },
    { id: 'town', name: '茶马古城', short: '茶马古城', type: '茶市 · 往来', scene: 'town', title: '在一场相遇里，读懂茶路。', text: '今天的茶马古城集合茶品牌展示、交易与文化体验。七叶提议：以一枚可拼接的建筑磁贴，收藏关于城市的记忆。', idea: '七叶的停留提案：建筑寻茶', productId: 'architecture-magnets' },
    { id: 'factory', name: '火柴厂工业遗址', short: '火柴厂', type: '旧址 · 新的想象', scene: 'factory', title: '为旧空间，点一盏新灯。', text: '命题将工业遗址列为创意节点。七叶在这里想象一场纸雕光影展，让旧空间的记忆与茶山的层次在光里相遇。', idea: '更新想象：茶山光影展', productId: 'tea-mountain-light' },
    { id: 'courtyard', name: '原人民医院医养中心旧址', short: '旧址庭院', type: '旧址 · 日常陪伴', scene: 'courtyard', title: '让一件茶物，陪伴新的日常。', text: '以命题中的旧址为起点，七叶提议以阅读、茶叙与可参与的手作为日常内容，想象面向不同年龄的公共相聚空间。', idea: '更新想象：共享茶叙庭院', productId: 'seven-leaf-sculpture' }
  ],
  sources: [
    { id: 'history', title: '“茶城”雅安：中国茶史浓缩于此', publisher: '雅安市人民政府', url: 'https://www.yaan.gov.cn/zhangzhe/show/2c64889b-da94-4cad-8152-e9b4eabcc631.html' },
    { id: 'craft', title: '绿茶制作技艺（蒙山茶传统制作技艺）', publisher: '中国非物质文化遗产网', url: 'https://www.ihchina.cn/project_details/23781.html' },
    { id: 'unesco', title: '中国传统制茶技艺及其相关习俗', publisher: '联合国教科文组织', url: 'https://ich.unesco.org/en/RL/traditional-tea-processing-techniques-and-associated-social-practices-in-china-01884' },
    { id: 'route', title: '川藏茶马古道及其多条路径', publisher: '中国民族博物馆', url: 'https://www.cnmuseum.com/cn/category/2509/0378-1.htm' },
    { id: 'travel', title: '四川·雅安“世界茶源寻根”之旅', publisher: '文化和旅游部', url: 'https://zhuanti.mct.gov.cn/xczgshsh2023/cxyh/detail_cha/3865.html' },
    { id: 'ganlu', title: '名山甘露坊：茶文化走入街巷', publisher: '四川在线·川观新闻', url: 'https://sichuan.scol.com.cn/xwtg/202501/82882326.html' },
    { id: 'riverside', title: '名山河滨水空间与城市更新', publisher: '四川在线', url: 'https://sichuan.scol.com.cn/ggxw/202609/83315413.html' },
    { id: 'teatown', title: '四川名山茶旅线路', publisher: '农业农村部', url: 'https://gjcr.moa.gov.cn/cty/202005/t20200519_6344521.htm' },
    { id: 'sandware', title: '陶器烧制技艺（荥经砂器烧制技艺）', publisher: '中国非物质文化遗产网', url: 'https://www.ihchina.cn/project_details/14455/' }
  ],
  categories: [
    { id: 'all', name: '全部茶物' },
    { id: 'mountain', name: '山的记忆' },
    { id: 'tea', name: '一席茶事' },
    { id: 'road', name: '随茶远行' },
    { id: 'gift', name: '一份心意' }
  ],
  // image 为完整展板，thumb 为列表预览；均保持原图比例，不裁切。
  // 增加作品时，复制一个对象并使用唯一 id；其他展示位置通过 id 引用。
  products: [
    {
      id: 'seven-leaf-sculpture', title: '七株茶树拼插摆件', category: 'mountain',
      tag: '一株茶树，也是一页书签',
      caption: '七片叶形组件聚成七叶，也能拆开陪伴一次阅读。',
      culture: '将七株茶树的地方记忆，转译为可拆、可拼、可使用的七叶结构。',
      material: '建议纸板、竹材或薄木片，激光切割与插槽拼接。',
      size: '摆件建议高约 120–160 mm',
      image: 'assets/collection/seven-leaf-sculpture-board.webp', thumb: 'assets/collection/seven-leaf-sculpture-thumb.webp',
      alt: '七叶拼插摆件的整体造型、叶片拆解与书桌使用设计图', chapter: 0
    },
    {
      id: 'travel-teaware', title: '七叶旅行茶具', category: 'tea',
      tag: '一叶一世界，茶香伴旅程',
      caption: '茶杯、茶罐与便携收纳，让茶山的记忆陪你抵达下一站。',
      culture: '角色进入杯身，竹篓纹理进入茶罐，把“携茶而行”转成使用方式。',
      material: '建议陶瓷茶杯、金属或陶瓷茶罐内胆、织物收纳包。',
      size: '茶杯建议约 140–180 ml，整套约 Ø100 × 85 mm',
      image: 'assets/collection/travel-teaware-board.webp', thumb: 'assets/collection/travel-teaware-thumb.webp',
      alt: '印有七叶的旅行茶杯、竹篓纹茶罐、素色收纳包及拆解结构', chapter: 3
    },
    {
      id: 'tea-mountain-light', title: '茶山云海·光影纸雕灯', category: 'mountain',
      tag: '把一座茶山，藏进一盏灯',
      caption: '牌坊、茶树、梯田与廊桥，层层透光；七叶提灯走入山雾。',
      culture: '把茶源空间的前后层次，转译为五层纸雕与光影景深。',
      material: '建议透光艺术纸、竹木外框与暖光 LED。',
      size: '建议约 150 × 150 × 55 mm',
      image: 'assets/collection/tea-mountain-light-board.webp', thumb: 'assets/collection/tea-mountain-light-thumb.webp',
      alt: '茶山云海五层纸雕小夜灯的完整方案及开灯前后对比', chapter: 0
    },
    {
      id: 'tea-road-stamps', title: '茶路印章套装', category: 'gift',
      tag: '把每一次相遇，盖成印记',
      caption: '七枚印章、一册地图，让一段可探索的茶路留在手中。',
      culture: '将茶园、采摘、制茶、古道、茶席、分享与回归编成集章叙事。',
      material: '建议樟木柄、黄铜章面、特种纸集章册与硬纸礼盒。',
      size: '七枚主题印章，配集章册、地图与印泥',
      image: 'assets/collection/tea-road-stamps-board.webp', thumb: 'assets/collection/tea-road-stamps-thumb.webp',
      alt: '七枚茶文化印章、木柄黄铜章面、彩色印泥与茶路集章地图展板', chapter: 4
    },
    {
      id: 'contour-scarf', title: '万里茶路·茶席方巾', category: 'road',
      tag: '让山路，随身体流动',
      caption: '等高线、建筑与茶路落在织物上，也从茶席走向日常穿搭。',
      culture: '以线条连接蒙顶山地形、皇茶园空间意象与远行路线。',
      material: '建议桑蚕丝或天丝混纺，采用茶绿、山雾灰与茶汤金配色。',
      size: '建议约 650 × 650 mm',
      image: 'assets/collection/contour-scarf-board.webp', thumb: 'assets/collection/contour-scarf-thumb.webp',
      alt: '万里茶路方巾的等高线纹样、茶席使用与颈部穿搭设计展示', chapter: 2
    },
    {
      id: 'architecture-magnets', title: '一芽一叶·建筑磁贴', category: 'road',
      tag: '一枚建筑，一段城市记忆',
      caption: '皇茶园、古建筑、廊桥与驿站，随七叶拼成一条自己的茶路。',
      culture: '建筑意象与角色组合，通过可拼接的结构建立空间记忆。',
      material: '建议木质多层雕刻与背面软磁，也可探索树脂浮雕。',
      size: '单枚建议约 45 × 60 mm，一套 4–7 枚',
      image: 'assets/collection/architecture-magnets-board.webp', thumb: 'assets/collection/architecture-magnets-thumb.webp',
      alt: '七叶与皇茶园、古建筑、雅安廊桥、驿站组合的木质磁贴设计', chapter: 3
    },
    {
      id: 'mountain-diffuser', title: '蒙顶山雾·扩香茶石', category: 'mountain',
      tag: '在桌上，留一片山雾',
      caption: '茶田的起伏化成层叠曲面，山间的感受进入桌面日常。',
      culture: '梯田层次成为扩香石造型，古道线条成为底座刻纹。',
      material: '建议石膏或素烧白瓷，搭配胡桃木底座。',
      size: '建议直径约 80–90 mm，高约 65 mm',
      image: 'assets/collection/mountain-diffuser-board.webp', thumb: 'assets/collection/mountain-diffuser-thumb.webp',
      alt: '层叠茶田造型的白色扩香石、七叶角色与木质底座礼盒', chapter: 0
    },
    {
      id: 'craft-badge', title: '制茶记忆·旋转徽章', category: 'road',
      tag: '让一个动作，成为随身记忆',
      caption: '转动内圈，看见制茶工艺图标与七叶的相遇。',
      culture: '将制茶动作转成可旋转的图像档案。图中的七个图标属于设计叙事，不代表所有茶类使用相同流程。',
      material: '建议锌合金烤漆或仿珐琅，茶绿与金色分区。',
      size: '建议直径约 45–50 mm',
      image: 'assets/collection/craft-badge-board.webp', thumb: 'assets/collection/craft-badge-thumb.webp',
      alt: '七叶双层旋转徽章、七个制茶工艺图标与佩戴效果设计', chapter: 1
    },
    {
      id: 'journey-tag', title: '古道茶牌·行李牌', category: 'road',
      tag: '把故乡，系在每一次出发上',
      caption: '茶篓的轮廓与古道的线，成为行李上温柔的识别。',
      culture: '将运茶器具转为随行标识，也可作为礼物上的一枚茶牌。',
      material: '建议木、软木或再生皮革，搭配编绳。',
      size: '建议约 55 × 90 mm，厚约 3–4 mm',
      image: 'assets/collection/journey-tag-board.webp', thumb: 'assets/collection/journey-tag-thumb.webp',
      alt: '茶篓轮廓行李牌的尺寸、材料细节及挂在旅行箱上的效果', chapter: 2
    },
    {
      id: 'tea-brick-notes', title: '古道茶砖·纸雕便签', category: 'gift',
      tag: '每写下一页，山路近一点',
      caption: '一块像茶砖的便签，随使用逐渐显露七叶、茶山与廊桥。',
      culture: '紧压边茶的外形成为纸品语言，撕页的时间成为探索过程。',
      material: '建议多层艺术纸，采用古道赭与茶绿叠色。',
      size: '建议约 85 × 85 × 45 mm，页数待结构打样确认',
      image: 'assets/collection/tea-brick-notes-board.webp', thumb: 'assets/collection/tea-brick-notes-thumb.webp',
      alt: '茶砖形纸雕便签的撕页过程、内部七叶与廊桥景观及桌面使用图', chapter: 2
    },
    {
      id: 'roof-tile-coasters', title: '瓦当茶饼·杯垫套组', category: 'tea',
      tag: '散是一席茶，聚是一篓记忆',
      caption: '瓦当纹杯垫叠入竹篓，像一筒可以在日常使用的小茶饼。',
      culture: '将建筑纹样、茶饼形制与竹编器具转成可拆用的收纳系统。',
      material: '建议硅胶杯垫与竹编收纳筒。',
      size: '单垫建议直径约 90 mm，整筒高约 75 mm',
      image: 'assets/collection/roof-tile-coasters-board.webp', thumb: 'assets/collection/roof-tile-coasters-thumb.webp',
      alt: '瓦当浮雕杯垫、七片叠放收纳过程与竹编底座的设计展示', chapter: 3
    },
    {
      id: 'royal-garden-calendar', title: '皇茶园·桌面万年历', category: 'mountain',
      tag: '把茶山的时间，拨进今天',
      caption: '檐下的日期滑块与七叶标记，让节气与饮茶进入工作日。',
      culture: '石栏、川西木构与茶时节气共同形成一座桌面微建筑。',
      material: '建议陶瓷、山毛榉木与黄铜滑轨。',
      size: '建议约 130 × 65 × 95 mm',
      image: 'assets/collection/royal-garden-calendar-board.webp', thumb: 'assets/collection/royal-garden-calendar-thumb.webp',
      alt: '皇茶园建筑造型万年历的木构屋檐、日期滑块、石栏与七叶饮茶标记', chapter: 0
    },
    {
      id: 'eaves-tea-pet', title: '皇茶园飞檐·茶宠与茶则', category: 'tea',
      tag: '在一片檐下，等一杯茶',
      caption: '七叶栖在飞檐般的弧面上，让建筑的记忆回到茶席。',
      culture: '飞檐转译为茶则弧度，石栏转译为细节肌理，温感釉为待验证的工艺设想。',
      material: '建议陶土或紫砂；釉面效果与使用性能需打样验证。',
      size: '茶宠建议高约 55–65 mm，茶则约 140 × 60 mm',
      image: 'assets/collection/eaves-tea-pet-board.webp', thumb: 'assets/collection/eaves-tea-pet-thumb.webp',
      alt: '飞檐弧面茶则与七叶茶宠的组合、淋茶效果和陶土肌理设计', chapter: 3
    },
    {
      id: 'teaware-paper-box', title: '七叶茶器·素纸礼盒', category: 'gift',
      tag: '把留白，留给赠予的人',
      caption: '压凹纸面、棉纸包裹与柔和留白，让茶器的温度慢慢显露。',
      culture: '以克制的包装语言容纳角色与茶器，预留书写日期或地点的位置。',
      material: '建议特种纸裱灰板，布纹压痕与内衬棉纸。',
      size: '建议约 130 × 90 × 70 mm',
      image: 'assets/collection/teaware-paper-box-board.webp', thumb: 'assets/collection/teaware-paper-box-thumb.webp',
      alt: '七叶素白压凹茶器礼盒、棉纸开盒状态与陶瓷茶器组合陈列', chapter: 4
    },
    {
      id: 'black-sand-tea-stove', title: '荥经黑砂·古道温茶炉', category: 'tea',
      tag: '一炉微光，连接茶与器',
      caption: '黑砂的肌理、炉窗的光与七叶浮雕，让雅安工艺在茶席相遇。',
      culture: '以荥经砂器烧制技艺为文化参照，结合古道与茶篓意象进行当代器物设计。',
      material: '建议黑砂材质与黄铜烤网。结构、耐热和使用性能需另行验证。',
      size: '炉径建议约 110–120 mm，高约 85 mm',
      image: 'assets/collection/black-sand-tea-stove-board.webp', thumb: 'assets/collection/black-sand-tea-stove-thumb.webp',
      alt: '黑砂七叶茶壶、马帮纹温茶炉、黄铜烤网及烛光设计效果', chapter: 3
    },
    {
      id: 'tea-journey-gift', title: '七株茶，万里路·茶礼', category: 'gift',
      tag: '让一份茶，讲完一段远行',
      caption: '茶篓、纸套与礼盒，在同一幅山水里讲述从茶山到分享的故事。',
      culture: '用一套包装视觉串联七株茶、蒙顶山、茶马古道与回归生活四段意象。',
      material: '牛皮纸礼盒、竹编与纸套的组合提案。',
      size: '包装结构、茶品形制与装量待打样确认',
      image: 'assets/collection/tea-journey-gift-board.webp', thumb: 'assets/collection/tea-journey-gift-thumb.webp',
      alt: '七株茶万里路主题茶礼包装，含七叶角色、竹篓、茶饼纸套和茶路故事', chapter: 4
    },
    {
      id: 'qiye-story-gift', title: '七叶·故事随行礼盒', category: 'gift',
      tag: '打开一盒，走进一段故事',
      caption: '角色造型片、山形主视觉与折叠包装，把七叶的故事变成可以展开的礼物。',
      culture: '包装里的四段图文把茶树、茶园、古道与分享连接起来，让阅读与开盒成为同一次探索。',
      material: '纸基折叠包装与角色造型件的组合提案。',
      size: '角色件材质、连接方式与整套尺寸待打样确认',
      image: 'assets/collection/qiye-story-gift-board.webp', thumb: 'assets/collection/qiye-story-gift-thumb.webp',
      alt: '打开的牛皮纸故事礼盒、四枚七叶角色造型片、山形主视觉和茶文化故事折页', chapter: 4
    }
  ]
};
