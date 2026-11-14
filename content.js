/*
 * 七叶内容档案
 * 修改文案、替换图片或增加作品时，优先编辑本文件。
 * 图片名称采用稳定的英文标识，与原始素材文件名无关。
 * 所有产品名称、说明与规格均依据画面内容整理；规格为设计建议。
 */
window.QIYE_CONTENT = {
  siteUrl: 'https://sophiezou631005.github.io/qiye-tea-journey/', // 所有二维码、复制链接和分享统一指向 GitHub 公开入口。
  chapters: [
    {
      id: 'seed', number: '01', name: '种下', eyebrow: '一山 · 七叶',
      title: '故事，从七株茶树开始。',
      text: '蒙顶山的云雾里，藏着一段关于种茶的地方记忆。相传，吴理真在这里手植七株茶树，后世以皇茶园守护这份记忆。七叶将它化作舒展的七片叶，带着故乡出发。',
      note: '吴理真手植七株茶树为地方传说与传统记忆；七叶是据此创作的幻想角色。',
      quote: '每一片叶，都记得最初的山。',
      journal: '出发前，我想先记住来处。请和我一起，种下七株小小的记忆。',
      task: '落种、润雨、见光，和七叶一起照料一座记忆茶山。',
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
      title: '走过山路，把雅安带进日常。',
      text: '四川雅安，在山与世界之间。茶从山间走来，也走进我们读书、相聚、出发的普通一天。七叶想带走的不只是一片风景，还有那份愿意慢下来、与人分享的生活温度。',
      note: '摄影呈现地方氛围，茶物承载生活想象；下方为七叶的文化转译，不对应具体活动或游览路线。',
      quote: '把一座山的温柔，放回每一天。',
      journal: '今天，我不急着赶路。想在一条河、一条街，和一个愿意一起喝茶的人身边停下。',
      task: '选一个生活片刻，再收藏此刻的心境。',
      sourceIds: ['travel', 'unesco'], productId: 'travel-teaware'
    },
    {
      id: 'share', number: '05', name: '分享', eyebrow: '一份心意 · 再次出发',
      title: '下一段茶路，交给你。',
      text: '一颗茶种的远行，最终回到人与人的相遇。写一句心意，把喜欢的茶物放进自己的茶篓，再将今天的心境与生活片刻装进一张卡。让古老的茶，在新的生活里继续生长。',
      note: '昵称、留言、心境和茶篓仅保存在当前浏览器。茶路卡为数字纪念，不是商品订单或兑换凭证。',
      quote: '七株茶，万里路；下一站，与你。',
      journal: '我的故事，在你愿意分享的这一刻，才真正有了下一站。',
      task: '写下心意，生成并保存自己的茶路卡。',
      sourceIds: ['unesco'], productId: 'tea-road-stamps'
    }
  ],
  // 生长是一段文化意象，以三个不同动作代替七次重复点击。
  gardenSteps: [
    {eyebrow:'01 / 把记忆交给山', title:'一同落种，记住来处。', text:'七株茶树，是一个故事共同的起点。将七枚茶种放进同一座山，让故事从此生根。', action:'把七枚茶种交给山'},
    {eyebrow:'02 / 让云雾化作雨', title:'山雨落下，记忆苏醒。', text:'一场细雨，让沉睡的茶种抽出新芽。轻推云层，看雨丝沿着山势落下。', action:'轻点，让山雨落下'},
    {eyebrow:'03 / 让新绿遇见光', title:'拂开山雾，等一片新绿。', text:'雨已润过茶山。让光落进叶间，七株记忆便在同一座山里舒展开来。', action:'拂开山雾，让光进来'},
    {eyebrow:'七株记忆 / 已在此生根', title:'一座山，生长出七叶的远行。', text:'从种下到生长，记忆因照料而延续。七叶带着这份来处，准备走向世界。', action:'再照料一次这座山'}
  ],
  craftMedia: {
    image:'assets/craft/mengshan-process.webp', width:800, height:536,
    alt:'蒙山茶真实工序组图：红锅杀青、三炒三揉、做形提毫与烘焙提香，制茶师在锅边以双手操作芽叶。',
    caption:'蒙山茶制作技艺流程工序（部分）。真实工艺包含火候、芽叶状态与手法配合；互动仅取捧、揉、撒三个动作意象。',
    credit:'图源：中国非遗网 · 查看原文', source:'https://www.ihchina.cn/news_1_details/27436.html'
  },
  // 作者提供的实地采风摄影；命名根据画面内容整理。
  fieldNotes: [
    {label:'山色', title:'山，是一片叶的来处。', text:'茶垄沿山势展开，桥梁从雾里穿过。古老的茶山与今天的往来，在同一幅风景里相遇。', place:'雅安 · 茶山采风', image:'assets/field/tea-hills.webp', alt:'雅安实地采风：绿色茶垄、远山与穿行山间的桥梁', width:1600, height:1200},
    {label:'古镇', title:'路，留在日常的纹理里。', text:'雨后的石板、深深的木檐，仍留着生活的温度。让七叶走入真实街巷，茶路的故事便有了可以亲近的尺度。', place:'雅安 · 望鱼古镇采风', image:'assets/field/old-town.webp', alt:'望鱼古镇雨后的石板街巷与两侧木构老屋', width:1068, height:1600},
    {label:'共生', title:'在同一片绿意里，<br>慢下来。', text:'从茶山到林间，目光也从一片叶走向更多生命。雅安的吸引力，既在文化的延续，也在这份值得珍惜的自然日常。', place:'雅安 · 熊猫基地采风', image:'assets/field/forest-life.webp', alt:'作者采风摄影：林间一只大熊猫低头走过草地', width:1200, height:1600}
  ],
  // 生活主题不标具体点位；摄影为用户提供的网络素材，文创仍为设计提案。
  cityMoments: [
    {
      id: 'tea-time', name: '一席茶间', type: '窗影 · 茶香',
      title: '让山间的茶香，回到一席日常。',
      text: '光穿过窗棂，落在安静的一刻。七叶把茶芽与茶篓的记忆带上杯身，让一次普通的饮茶，也成为与雅安相遇的方式。',
      image: 'assets/yaan/window-light.webp', alt: '绿叶掩映下的木质窗棂与柔和光影',
      photoNote: '雅安印象 · 窗影与新绿', productId: 'travel-teaware'
    },
    {
      id: 'slow-walk', name: '一刻慢行', type: '树影 · 远行',
      title: '走得再远，也记得一座山。',
      text: '顺着树影往前走，暂时把匆忙放在身后。一枚系在行李上的七叶茶牌，像一封写给远方的短信：我从四川雅安的故事里出发。',
      image: 'assets/yaan/forest-walk.webp', alt: '绿树与青苔环绕的山间石阶步道',
      photoNote: '雅安印象 · 山间慢行', productId: 'journey-tag'
    },
    {
      id: 'shared-story', name: '一份心意', type: '门庭 · 相遇',
      title: '让一份心意，把雅安带向世界。',
      text: '一扇门连接内外，一件茶物连接彼此。把七叶、茶山和茶路的故事装进礼盒，让收到它的人，也愿意听一听雅安的名字。',
      image: 'assets/yaan/courtyard-light.webp', alt: '树荫下的红色院门、石阶和青苔',
      photoNote: '雅安印象 · 门庭光阴', productId: 'qiye-story-gift'
    }
  ],
  sources: [
    { id: 'history', title: '“茶城”雅安：中国茶史浓缩于此', publisher: '雅安市人民政府', url: 'https://www.yaan.gov.cn/zhangzhe/show/2c64889b-da94-4cad-8152-e9b4eabcc631.html' },
    { id: 'craft-image', title: '知节气 识茶事 和天下丨芒种：麦浪飘香 茶润仲夏', publisher: '中国非物质文化遗产网', url: 'https://www.ihchina.cn/news_1_details/27436.html' },
    { id: 'craft', title: '绿茶制作技艺（蒙山茶传统制作技艺）', publisher: '中国非物质文化遗产网', url: 'https://www.ihchina.cn/project_details/23781.html' },
    { id: 'unesco', title: '中国传统制茶技艺及其相关习俗', publisher: '联合国教科文组织', url: 'https://ich.unesco.org/en/RL/traditional-tea-processing-techniques-and-associated-social-practices-in-china-01884' },
    { id: 'route', title: '川藏茶马古道及其多条路径', publisher: '中国民族博物馆', url: 'https://www.cnmuseum.com/cn/category/2509/0378-1.htm' },
    { id: 'travel', title: '四川·雅安“世界茶源寻根”之旅', publisher: '文化和旅游部', url: 'https://zhuanti.mct.gov.cn/xczgshsh2023/cxyh/detail_cha/3865.html' },
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
