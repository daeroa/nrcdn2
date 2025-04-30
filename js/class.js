const africaLevels = [
	{
		name: '农场主',
		history: '掌握庄园所有权，拥有最高权力和财富',
		intros: [
		    '每天无所事事，就知道坐享其成收租金',
		    '今天随机挑选幸运奴隶表演胸口碎大石',
		    '坐在别墅阳台，喝着红酒，看美美哒夕阳',
		    '庄园里奴隶的生死，只在我一念之间',
		    '哎呀，你怎么知道我每天数钱数到手抽筋呀'
		]
	},
    {
        name: '监工',
        history: '农场主亲信，主要监督奴隶工作',
        intros: [
            '每天优哉游哉地监督奴隶摘棉花',
            '今天的下午茶是奴隶闻不到的仰望星空派',
            '享受的伙食待遇比奴隶好不知道多少倍',
            '每周汇报重点：如何用奴隶血泪写诗朗诵',
            '不听话？铜哨子吵死你，皮鞭子抽死你'
        ]
    },
    {
        name: '佃户',
        history: '租种土地的农民，收成交大部分地租',
        intros: [
            '攒钱进度：0/1000E（土地贷了解一下）',
            '给孩子的礼物：迷你锄头套装',
            '一代传三代的祖传锄头正在申请非遗保护',
            '天天梦想攒钱把农场主砸死',
            '冬天生存指南：呼吸减肥法+光合作用'
        ]
    },
    {
        name: '黑奴',
        history: '最低等的奴隶，从事最危险工作',
        intros: [
            '免费体验健身房VIP套餐：太阳棉花浴',
            '擦汗舞姿不够优美？获得监工爱的拍拍',
            '请假已驳回：烧到43度不影响摘棉花哦',
            '脚上的镣铐最爱送给我破伤风',
            '牛棚星空房，附赠纯天然淋浴系统'
        ]
    },
    {
        name: '奴隶',
        history: '无人身自由，被迫从事体力劳动',
        intros: [
            '手茧厚到可以表演空手接白刃',
            '凌晨三点，全自动人形棉花收割机，启动',
            '最大的愿望是：吃顿正经的饭',
            '碎布条收集进度99%/1000%',
            '每天被监工呼来来来来来，喝去去去去去'
        ]
    },
];
		
const indiaLevels = [
    {
        name: '婆罗门',
        history: '祭司贵族，掌握宗教和知识权力',
        intros: [
            '今天主持祭祀不小心又收了头大象',
            '经典注释权≈宇宙级VIP修改权限',
            '每天定时穿着白袍在神庙长廊走秀',
            '吃贡品吃到痛风，真是甜蜜的烦恼哟',
            '在刹帝利行礼的时候思考：今晚吃什么'
        ]
    },
    {
        name: '刹帝利',
        history: '军事行政贵族，负责统治管理',
        intros: [
            '战象座驾已升级真皮座椅+星空顶',
            '军事决策就像选盲盒一样刺激',
            '我的黄金佩剑可是镶嵌宝石的',
            '地方官员定期进贡搞得不好意思了',
            '上百名仆人VS我一个人'
        ]
    },
    {
        name: '吠舍',
        history: '平民阶层，从事工商业生产',
        intros: [
            '祖传店铺必杀技：买香料送衣服',
            '商队生存指南：如何在沙漠找WIFI',
            '婚礼预算：清空三代人财产',
            '神庙捐款自动扣费服务已开通',
            '遇土匪时大喊：我老板是刹帝利！'
        ]
    },
    {
        name: '首陀罗',
        history: '服务阶层，专为高级种姓服役',
        intros: [
            '闪现技能直接满级，躲避攻击必须点满',
            '吃饭？我们靠光合作用（战术后仰）',
            '孩子教育规划：垃圾桶分类速成班',
            '下辈子投胎当个陶罐，至少能装恒河水',
            '摸鱼失败，连水里的鱼都自带种姓隔离'
        ]
    },
	{
        name: '达利特',
        history: '种姓制度外的不可接触者',
        intros: [
            '全服隐藏成就：被三界同时拉黑',
            '获得buff：自带方圆十米人群驱散',
            '因自焚污染婆罗门视线被罚款千万',
            '跑到垃圾桶旁边睡结果垃圾桶长脚跑了',
            '凭什么就连蟑螂都有资格住贫民窟'
        ]
    }
];
const japanLevels = [
    {
        name: '士',
        history: '江户幕府统治核心，享有佩刀特权与俸禄',
        intros: [
            '全新副业：用武士刀削荞麦面',
            '切腹文化十级学者正在线指导礼仪',
            '微薄俸禄全用来还吉原的赊账了',
            '祖传甲胄在壁橱里和蠹虫搏斗三百年',
            '佩刀已从实战武器沦为开快递专用工具'
        ]
    },
    {
        name: '农',
        history: '社会基石但生活困苦，承担沉重年贡',
        intros: [
            '凌晨三点自动插秧模式，激活',
            '欢迎收看：米缸陈米表演量子消失术',
            '想用稻草编出比和服还精致的蓑衣',
            '祈雨仪式比天气预报刷新还频繁',
            '田埂边的野花——全家唯一的奢侈品'
        ]
    },
    {
        name: '工',
        history: '手工业者，地位低于农民高于商人',
        intros: [
            '偷偷地在漆器上画了八百遍富士山',
            '私藏秘技比忍者卷轴还严防死守',
            '在指甲盖上雕出浮世绘被客户说不够浮夸',
            '木屐雕花大赛完美蝉联二十年冠军',
            '在发簪里雕刻完整版《源氏物语》被退货'
        ]
    },
    {
        name: '商',
        history: '表面地位最低却掌握经济命脉',
        intros: [
            '钱箱里的银判正在玩分裂游戏',
            '偷偷给幕府要人定制彩虹色兜裆布',
            '用赌场概率学重新定义神社抽签',
            '囤积的蜡烛足够让全日本夜如白昼',
            '正在筹建日本首家高利贷连锁店'
        ]
    },
    {
        name: '秽多非人',
        history: '从事"不洁"行业的被歧视阶层',
        intros: [
            '皮革作坊年度VIP客户——苍蝇',
            '殡葬服务买一送一，非自然死亡除外',
            '刑场最佳观刑位附带解说服务',
            '给野狗取名都比自己的姓氏更尊贵',
            '皮革鞣制味荣获江户最刺鼻空气奖'
        ]
    }
];

const chinaLevels = [
    {
        name: '门阀士族',
        history: '垄断官场的世家大族，掌握文化与政治特权',
        intros: [
            '族谱厚度≈攻城锤',
            '九品中正制专业评委已上岗',
            '藏书阁里藏着皇帝都眼馋的孤本',
            '族学考试难度>国子监自主招生',
            '祖传避税攻略让户部尚书连夜做笔记'
        ]
    },
    {
        name: '编户齐民',
        history: '承担赋税徭役的普通百姓',
        intros: [
            '徭役众筹修运河被抽成90%',
            '今年徭役主题：长城贴瓷砖项目',
            '今年徭役主题：珠穆朗玛峰装电梯项目',
            '税赋接力赛：从曾曾祖传到玄孙的负债',
            '屋顶茅草符合ISO-1840灾荒标准'
        ]
    },
    {
        name: '贱籍',
        history: '世代无法改变身份的特殊户籍',
        intros: [
            '成就‘流放地图全部解锁’即将达成',
            '流放路线完美避开所有干净水源',
            '用脚镣演奏《广陵散》被九族消消乐',
            '刑徒的健身日常：搬砖马拉松',
            '乞讨许可证年审比科举还严格数倍'
        ]
    }
];
const egyptLevels = [
    {
        name: '法老',
        history: '神权君主，被视为荷鲁斯化身',
        intros: [
            '今天份的日常：在神庙壁画上给自己加光环',
            '建筑师提议把金字塔改成盲盒款，已处决',
            '用尼罗河当游泳池的梦想即将实现',
            '祭司们又托梦说需要扩建陵墓了',
            '看着跪拜的贵族们思考：要不要换个活人殉葬套餐'
        ]
    },
    {
        name: '贵族',
        history: '地方总督与神庙祭司',
        intros: [
            '用莎草纸写日记：今天贪污了300袋小麦',
            '在自家金字塔里开泳池派对被法老征用',
            '养鳄鱼当宠物以彰显权威',
            '正在训练奴隶表演"尼罗河泛滥预言术"',
            '和法老玩权力游戏：输的人变木乃伊'
        ]
    },
    {
        name: '书吏',
        history: '官僚体系核心，掌握文字权力',
        intros: [
            '在税收账本上偷偷画猫被抓包',
            '用象形文字写情书被当成诅咒',
            '发明"圣书体草书"被祭司举报亵渎',
            '靠记录法老语录混成宫廷KOL',
            '暗搓搓在记录里丑化讨厌的贵族'
        ]
    },
    {
        name: '农民',
        history: '承担赋税与劳役的自由民',
        intros: [
            '今年第108次被征调去修金字塔',
            '用芦苇编的鞋子申请了专利',
            '偷偷在麦田里堆微型金字塔被罚',
            '全家口粮=神庙贡品剩下的发霉面包',
            '向上帝祈祷：让尼罗河泛滥但别太泛滥'
        ]
    },
    {
        name: '奴隶',
        history: '战俘与债务奴隶',
        intros: [
            '在采石场体验"太阳神健身套餐"',
            '脚镣时尚秀：今年流行青铜铆钉款',
            '被分配去测试新金字塔的通风系统',
            '主人说"死后赐你自由"——先活到那天吧',
            '用血泪给贵族花园挖出爱心形池塘'
        ]
    }
];
const spartaLevels = [
    {
        name: '斯巴达人',
        history: '全职战士阶级',
        intros: [
            '今天的训练：徒手和熊玩摔跤',
            '用敌人头骨当酒杯被妈妈表扬',
            '在军营偷偷敷橄榄油面膜被抓现行',
            '把希洛人当移动箭靶练射击',
            '思考人生：杀多少个希洛人能换勋章'
        ]
    },
    {
        name: '边民',
        history: '自由但无政治权利的手工业者',
        intros: [
            '打造的盾牌被斯巴达人当菜板用',
            '偷偷给希洛人卖黑市面包被捕',
            '申请成为斯巴达人被笑掉大牙',
            '用战利品边角料做首饰被发现',
            '在城墙刻"斯巴达 sucks"被罚洗全城铠甲'
        ]
    },
    {
        name: '希洛人',
        history: '国有奴隶，可被随意屠杀',
        intros: [
            '年度KPI：种够粮食且不被杀掉',
            '在粪堆里找到半块面包算加餐',
            '被斯巴达少年当狩猎模拟器靶子',
            '偷偷练习格斗被发现——已处决',
            '最大的愿望：下辈子当块石头'
        ]
    }
];
function compHash(name) {
    const scale = 10000;
    let sin = 0, cos = 0, tan = 0, jh = 0;
    for (let i = 0; i < name.length; i++) {
        const charc = name.charCodeAt(i);
        const pos = i + 1;
        jh ^= charc;
        jh += (jh << 10) | (jh >>> 22);
        jh ^= (jh << 6) | (jh >>> 26);
        jh += (jh << 3) | (jh >>> 29);
        jh ^= (jh << 11) | (jh >>> 21);
        jh += (jh << 15) | (jh >>> 17);
        sin += Math.sin(charc * pos) * scale;
        cos += Math.cos(charc * pos) * scale;
        tan += Math.tan(charc * 0.5) * scale; 
    }
    return Math.abs((
        jh +
        Math.abs(sin | 1) +
        Math.abs(cos | 0) +
        Math.abs(tan | 1)
		) | 1
	);
	// Jenkins Hash + Trig Hash
}
function rdSeed(seed) {
	return function() {
	    seed = (seed * 7940 + 2444340) % 233280;
		return seed / 233280;
	};
}
export function rank(name) {
    const hash = compHash(name);
    const rand = rdSeed(hash);
	const rd = (array, randFn, salt) => {
	   const perturb = compHash(name + salt) % 100 / 100;
	   const randValue = (randFn() + perturb) % 1;
	   return array[Math.floor(randValue * array.length)];
	};

   const africa = rd(africaLevels, rand, "africa"),
		 africaIntro = rd(africa.intros, rand, "africa_intro"),
		 india = rd(indiaLevels, rand, "india"),
		 indiaIntro = rd(india.intros, rand, "india_intro"),
		 japan = rd(japanLevels, rand, "japan"),
		 japanIntro = rd(japan.intros, rand, "japan_intro"),
		 china = rd(chinaLevels, rand, "china"),
		 chinaIntro = rd(china.intros, rand, "china_intro"),
		 egypt = rd(egyptLevels, rand, "egypt"),
		 egyptIntro = rd(egypt.intros, rand, "egypt_intro"),
		 sparta = rd(spartaLevels, rand, "sparta"),
		 spartaIntro = rd(sparta.intros, rand, "sparta_intro");
    // @ts-ignore
    return {
		"aName":`${africa.name}`,
		"aHist":`${africa.history}`,
		"aIntr":`${africaIntro}`,
		"iName":`${india.name}`,
		"iHist":`${india.history}`,
		"iIntr":`${indiaIntro}`,
		"jName":`${japan.name}`,
		"jHist":`${japan.history}`,
		"jIntr":`${japanIntro}`,
		"cName":`${china.name}`,
		"cHist":`${china.history}`,
		"cIntr":`${chinaIntro}`,
		"eName":`${egypt.name}`,
		"eHist":`${egypt.history}`,
		"eIntr":`${egyptIntro}`,
		"sName":`${sparta.name}`,
		"sHist":`${sparta.history}`,
		"sIntr":`${spartaIntro}`
    };
}
