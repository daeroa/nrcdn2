function deterministicHash(name) {
	let hash = 0;
	for (let i = 0; i < name.length; i++) {
		hash = (hash << 5) - hash + name.charCodeAt(i);
	    hash |= 0;
	}
    return Math.abs(hash);
}
		
function createSeededRandom(seed) {
	return function() {
	    seed = (seed * 7164 + 100000) % 233280;
		return seed / 233280;
	};
}
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
        name: '奴隶',
        history: '无人身自由，被迫从事体力劳动',
        intros: [
            '手茧厚到可以表演空手接白刃',
            '凌晨三点，全自动人形棉花收割机，启动',
            '最大的愿望是吃顿饱饭',
            '碎布条收集进度99%',
            '每天被监工呼来来来来来，喝去去去去去'
        ]
    },
    {
        name: '黑奴',
        history: '最低等的奴隶，从事最危险工作',
        intros: [
            '免费体验健身房VIP套餐：太阳棉花浴',
            '擦汗舞姿不够优美？获得监工爱的拍拍',
            '脚上的镣铐迟早送我破伤风啊',
            '牛棚星空房，附赠天然淋浴系统',
            '请假已驳回：烧到39度不影响摘棉花哦'
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
        history: '地位最低，无任何权利，专为高级种姓服役',
        intros: [
            '闪现技能满级，躲避攻击点满',
            '吃饭？我们靠光合作用（战术后仰）',
            '孩子教育规划：垃圾桶分类速成班',
            '跑到垃圾桶旁边睡结果垃圾桶长脚跑了',
            '今日KPI：活着（0/1）'
        ]
    }
];
const japanLevels = [
    {
        name: '士',
        history: '江户幕府统治核心，享有佩刀特权与俸禄',
        intros: [
            '今天又用祖传打刀吓哭三个町人',
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
            '听说城里的米价涨了？关我屁事'
        ]
    },
    {
        name: '工',
        history: '手工业者，地位低于农民高于商人',
        intros: [
            '偷偷在漆器上画了八百遍富士山',
            '私藏秘技比忍者卷轴还严防死守',
            '在指甲盖上雕出浮世绘被客户说不够浮夸',
            '木屐雕花大赛完美蝉联二十年冠军',
            '祖传凿子正在申请老字号商标'
        ]
    },
    {
        name: '商',
        history: '表面地位最低却掌握经济命脉',
        intros: [
            '钱箱里的银判正在玩分裂游戏',
            '夜间茶会偷偷炫耀唐织里衣被举报了',
            '开发出用过期礼券抵债的武士收割大法',
            '囤积的桐油足够让全日本的木鱼漂起来',
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
            '皮革鞣制味获江户最刺鼻空气奖',
            '在垃圾堆里淘出将军家的过期和果子'
        ]
    }
];

const chinaLevels = [
    {
        name: '门阀士族',
        history: '垄断官场的世家大族，掌握文化与政治特权',
        intros: [
            '族谱厚度能拿去当攻城锤用',
            '九品中正制专业评委已上岗',
            '藏书阁里藏着皇帝都眼馋的孤本',
            '族学考试难度>国子监自主招生',
            '今天又是嫌弃寒门子弟的一天'
        ]
    },
    {
        name: '编户齐民',
        history: '承担赋税徭役的普通百姓',
        intros: [
            '徭役劵收集进度：3/300',
            '今年徭役主题：长城贴瓷砖项目',
            '今年徭役主题：珠穆朗玛峰装电梯项目',
            '税赋接力赛：从曾祖传到玄孙的负债',
            '儿子私塾作业：背诵《盐铁论》全文'
        ]
    },
    {
        name: '贱籍',
        history: '世代无法改变身份的特殊户籍',
        intros: [
            '乞讨许可证年审比科举还严格数倍',
            '县衙免费包吃包住体验卡，使用',
            '牢饭盲盒开出蟋蟀腿概率高达87%',
            '刑徒的健身日常：搬砖马拉松',
            '成就‘流放地图全部解锁’即将达成'
        ]
    }
];
		
export function rank(name) {
    const hash = deterministicHash(name);
    const rand = createSeededRandom(hash);
    const africaIndex = Math.floor(rand() * africaLevels.length),
        africa = africaLevels[africaIndex];
        africaIntro = africa.intros[Math.floor(rand() * africa.intros.length)],
        indiaIndex = Math.floor(rand() * indiaLevels.length),
        india = indiaLevels[indiaIndex],
        indiaIntro = india.intros[Math.floor(rand() * india.intros.length)],
        japanIndex = Math.floor(rand() * japanLevels.length),
        japan = japanLevels[japanIndex],
        japanIntro = japan.intros[Math.floor(rand() * japan.intros.length)],
        chinaIndex = Math.floor(rand() * chinaLevels.length),
        china = chinaLevels[chinaIndex],
        chinaIntro = china.intros[Math.floor(rand() * china.intros.length)];
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
      "cIntr":`${chinaIntro}`
    };
}
