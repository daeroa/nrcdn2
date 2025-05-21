// 中二病代号前缀
const code_prefix = [
    "暗夜", "漆黑", "绯红", "深蓝", "白银", "黄金", 
    "虚空", "混沌", "永恒", "无限", "绝对", "终末",
    "暴风", "雷霆", "烈焰", "寒冰", "大地", "天空",
    "幻影", "幽灵", "恶魔", "天使", "龙", "凤凰",
    "血月", "暗影", "星辰", "银河", "宇宙", "次元",
	"量子", "幻奏", "永劫", "神罚", "天启", "灾厄"
];

// 中二病代号后缀
const code_suffix = [
    "的使徒", "的继承者", "的化身", "的支配者", "的守护者",
    "的战士", "的魔导师", "的剑士", "的勇者", "的魔王",
    "的猎手", "的审判者", "的毁灭者", "的创造者", "的观测者",
    "的流浪者", "的孤独者", "的复仇者", "的救世主", "的叛逆者",
	"的放逐者", "的守望者", "的调律者", "的编织者", "的殉道者",
    "之翼", "之眼", "之牙", "之爪", "之魂", "之魇",
    "之泪", "之血", "之影", "之光", "之暗", "之烬"
];

// 武器类型
const weapon = [
    "剑", "刀", "枪", "斧", "弓", "镜子", "锤子", "镰刀", "匕首", 
    "竖琴", "塔罗牌", "鞭子", "锁链", "红伞", "法杖", "魔导书", "符咒",
    "水晶", "沙漏", "戒指", "齿轮", "手套", "傀儡线", "音叉"
];

// 武器前缀
const weapon_prefix = [
    "灭世", "创世", "永恒", "无限", "终焉", "混沌", "虚空", 
    "暗黑", "光明", "星辰", "银河", "时空", "命运", "灵魂",
    "血之", "暗之", "光之", "风之", "火之", "水之", "雷之",
    "圣", "魔", "邪", "神", "龙", "恶魔", "天使",
	"冥", "狱", "时劫", "心灭", "星蚀", "狂想"
];

// 武器后缀
const weapon_suffix = [
    "毁灭者", "创造者", "终结者", "守护者", "审判者",
    "撕裂者", "吞噬者", "燃烧者", "冻结者", "粉碎者",
    "·改", "·极", "·真", "·幻", "·绝", "·零式", "·终型"
];

// 宿敌身份
const enemy = [
	"体内封印的另一个灵魂","失散多年的双胞胎",
	"内心黑暗的那一面", "陷入黑化的救赎对象",
	"来自未来的追杀者", "童年时那不可描述的噩梦",
	"分裂出的另一个实体化人格", "深渊那古老的存在",
	"组织内的叛徒", "所杀之人的复仇之灵",
	"卷土重来的宿敌", "已经堕入黑暗的导师",
];

// 出场语录
const quote = [
    "这世界，由我来守护！", "我的右手在渴求着鲜血...", 
	"黑暗啊，吞噬一切吧！", "这份痛楚...就是我活着的证明！",
    "这就是...我的全力全开！", "吾之名为...",
	"你无法理解我的痛苦！", "共鸣吧...与我灵魂的频率！",
    "这份力量，这份代价...", "为什么要逼我使用这禁忌的力量？",
    "我的眼泪早已流干...", "在绝望的深渊中，我看到了光...",
    "这份契约，我签下了！", "封印解除！",
	"觉醒吧，沉睡的力量！", "让世界聆听我的咆哮吧！",
    "你以为这样就能打败我吗？", "我的战斗...还没有结束！",
    "即使与全世界为敌...", "这就是...我的答案！",
	"为什么...为什么就是不明白！", "你以为这就是我的极限吗？太天真了！",
    "我早已...无法回头了...", "让我们一起...坠入地狱吧！"
];

// 战斗风格
const battlestyle = [
    "优雅地挥舞", "狂暴地劈砍", "精准地刺击", "快速地连击", "沉重地砸下",
    "华丽地旋转", "冷酷地射击", "神秘地吟唱", "愤怒地咆哮", "绝望地挣扎"
];

// 必杀技
const spattack = [
    "暗黑爆破", "星辰坠落", "终焉之剑", "无限连锁", "混沌漩涡",
    "虚空斩击", "永恒冰封", "烈焰风暴", "雷霆万钧", "大地碎裂",
    "天使之泪", "恶魔之吻", "龙之吐息", "凤凰涅槃", "灵魂收割",
    "命运之轮", "时空断裂", "银河冲击", "宇宙爆炸", "次元切割",
	"诸神黄昏","天地乖离","永劫轮回","超新星爆发", "量子坍缩",
	"冥府之门","天魔降伏","神怒之日","时空归零", "因果逆转",
	"终焉默示录","万物寂灭","创世纪","虚空吞噬", "维度跌落"
];

// 职业
const combat = {
	phy: ["狂战士","剑圣","暗杀者","枪神","格斗家","龙骑士","机甲驾驶员","狂猎骑士","修罗"],
	mag: ["大魔导师","死灵术士","元素使","预言家","结界师","星律者","虚空咏唱者","混沌术士","终焉魔女"],
	hyb: ["魔剑士","圣骑士","咒刃使","炼金术士","神谕者","时空旅者","深渊行者","禁忌融合体"]
};

// 角色定位
const role = [
	{type: "进攻", icon: "⚔️", traits: ["暴击率+35%", "攻速+25%", "破甲+40%", "斩杀特效"]},
	{type: "防御", icon: "🛡️", traits: ["格挡率+40%", "反伤+20%", "护盾强化", "仇恨吸引"]},
	{type: "治疗", icon: "💊", traits: ["治疗量+50%", "范围+30%", "持续恢复", "净化效果"]},
	{type: "控制", icon: "🌀", traits: ["效果时长+45%", "范围+35%", "连锁禁锢", "心智侵蚀"]},
	{type: "召唤", icon: "👻", traits: ["召唤物+2", "持续时间+60%", "协同攻击", "献祭强化"]},
	{type: "辅助", icon: "🎭", traits: ["增益延长+50%", "减抗+30%", "能量回复", "战术指挥"]}
];

// 元素弱点（原神启动）
const element = ["风", "雷", "岩", "草", "水", "冰", "火"];

// 被动技能库
const passive = [
	"血之狂暴：HP<30%时ATK翻倍",
	"亲元素：对应属性伤害+40%",
	"逆鳞：受暴击后DEF+100%",
	"时空扭曲：CD-20%",
	"灵魂虹吸：15%伤害转HP",
	"绝对领域：免疫控制",
	"弑神者：对BOSS伤害+50%",
	"无尽怒火：HP越低攻速越快",
	"虚空行走：闪避率+35%",
	"终焉：战斗时间越长ATK越高"
];

// 势力阵营
const faction = [
	"深渊教团·执行官序列","圣光教会·异端审判庭","虚空议会·星界观测者",
	"炼金协会·禁忌研究所","暗影兄弟会·无名者","永恒帝国·皇家骑士团",
	"绯红魔女结社","机神教·改造人部队","古龙一族·鳞之长老",
	"时空管理局·特勤科","终焉教派·灭世使徒","自由佣兵·血狼团"
];

// 出场语录部分
const bteffect = [
	{ 
		env: ["血色残阳下", "暴雨滂沱中", "星辰坠落时", "时空裂隙间", "终焉钟声响彻"], 
		action: ["挥出斩断因果的一击", "展开逆光羽翼", "撕裂次元障壁", "召唤上古英灵", "释放被封印的神力"]
	},
	{
		env: ["炼狱火海翻腾", "虚空风暴肆虐", "永恒冰晶绽放", "量子领域震荡", "亡灵哀嚎回荡"],
		action: ["凝聚混沌之力", "构筑绝对防御", "编织命运丝线", "启动灭世协议", "吟诵禁忌咒文"]
	}
], btbody = [
	{ 
		glow: ["瞳孔迸发血红光芒", "纹章在胸口灼烧", "右臂浮现龙鳞", "发丝化作能量流", "背后展开光翼"],
		change: ["皮肤龟裂渗出暗能", "血管中流淌熔岩", "骨骼发出机械运转声", "周围重力开始扭曲", "时间流速骤然改变"]
	}
], climax = [
	"天地为之失色",
	"法则在此刻崩坏",
	"万千平行世界产生共鸣",
	"因果律武器完全解放",
	"创世权限被强行改写"
], consequences = [
	"空间像玻璃般破碎",
	"时间轴出现不可逆的裂痕",
	"现实被撕开虚无的缺口",
	"所有元素陷入暴走",
	"生命形式开始量子化"
];

function polynomialHash(name) {
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
        hash = (hash << 5) - hash + name.charCodeAt(i);
        hash |= 0;
    }
    return Math.abs(hash);
}

function rdSeed(seed) {
    return function() {
        seed = (seed * 9797 + 908141) % 233280;
        return seed / 233280;
    };
}

// 从数组中随机选择一项
function rdC(arr, randomFunc) {
    return arr[Math.floor(randomFunc() * arr.length)];
}

// 生成中二病代号
function codename(name) {
    const hash = polynomialHash(name);
    const random = rdSeed(hash);
    return rdC(code_prefix, random) + rdC(code_suffix, random);
}

function combatkind(name, wp) {
	const hash = polynomialHash(name + "stats");
	const rand = rdSeed(hash);
	const isPhysical = ["剑","刀","枪","斧","弓","锤","镰刀","匕首","拳套","爪"].includes(wp);
	return {
		CD: `${Math.floor(rand()*8+12)}-${Math.floor(rand()*4+4)}s`, // 12-20s -> 4-8s
		HP: Math.floor(rand()*50000 + 10000), // 10000-60000
		ATK: Math.floor(rand()*(isPhysical ? 3000 : 1500) + 1000),
		DEF: Math.floor(rand()*2000 + 500),
		MP: isPhysical ? 0 : Math.floor(rand()*3000 + 1000)
	};
}

function combatType(wp) {
	const mgwp = ["法杖","魔导书","符咒","水晶"];
	return mgwp.includes(wp) ? "mag" : 
         ["书","宝石","戒指"].includes(wp) ? "hyb" : "phy";
}

function weakness(rand) {
	const weaks = [], 
		  pool = element.filter(e => !["虚无"].includes(e));
	while(weaks.length < 3 && pool.length > 0) {
		const ele = rdC(pool, rand);
		if(!weaks.includes(ele)) weaks.push(ele);
	}
	return weaks;
}

// 生成武器名称
function weapoon(name) {
    const hash = polynomialHash(name + "weapon");
    const random = rdSeed(hash);
    return (rdC(weapon_prefix, random) + 
			rdC(weapon, random) + 
			rdC(weapon_suffix, random));
}

// 生成宿敌身份
function enemies(name) {
    const hash = polynomialHash(name + "enemy");
    const random = rdSeed(hash);
    return rdC(enemy, random);
}

// 生成出场语录
function quotes(name) {
    const hash = polynomialHash(name + "quote");
    const random = rdSeed(hash);
    return rdC(quote, random);
}

// 生成战斗独白
function bmonologue(name) {
	const hash = polynomialHash(name + "battle");
	const random = rdSeed(hash);
	const code = codename(name),
		  weapon = weapoon(name),
		  enemy = enemies(name),
		  style = rdC(battlestyle, random),
		  attack = rdC(spattack, random);
	return [
		`「${quotes(name)}」${code}厉声喝道，`,
		`${rdC(btbody[0].glow, random)}，`,
		`以${style}之势驱动${weapon}，`,
		`${rdC(bteffect[0].env, random)}${rdC(bteffect[0].action, random)}。`,
		`「${rdC(["永别了","见证真理吧","归于虚无吧"], random)}，${enemy}！」`,
		`${rdC(climax, random)}，`,
		`终极奥义「${attack}」引发${rdC(consequences, random)}，`,
		`${rdC(["致使","继而引发","连锁导致"], random)}${rdC([
			"时空结构彻底瓦解",
			"因果律陷入无限循环",
			"多元宇宙开始坍缩",
			"法则之网支离破碎"
		], random)}！`
	].join(' ');
}

function roleinfo(name) {
	const hash = polynomialHash(name + "role");
	const rand = rdSeed(hash);
	const wptype = rdC(weapon, rdSeed(polynomialHash(name+"weapon"))),
		  cbtype = combatType(wptype);
	return {
		title: rdC(combat[cbtype], rand),
		role: rdC(role, rand),
		weakness: weakness(rand),
		passive: rdC(passive, rand),
		faction: rdC(faction, rand),
		element: rdC(element.filter(e => !["虚无"].includes(e)), rand)
	};
}

// 主函数
export function zer(name) {
	const wpname = weapoon(name);
    const wptype = wpname.replace(/[^\u4e00-\u9fa5]/g, "").slice(-2);
    const rdtitle = rdSeed(polynomialHash(name+"title"));
    const rdsecret = rdSeed(polynomialHash(name+"secret"));
	return {
		codeName: codename(name),
		weapon: wpname,
		enemy: enemies(name),
		quote: quotes(name),
		monologue: bmonologue(name),
		stats: combatkind(name, wptype),
		roleInfo: roleinfo(name),
		lore: {
			title: rdC(["禁忌之子","旧日支配者","轮回转生者","人造神明","基因改造体","时空异常点"], rdtitle),
			secret: rdC([
				"无", "未知",
				"左眼封印灭世之力","心脏是魔导核心",
				"血液含龙族基因","记忆被多次篡改",
				"体内寄生上古魔神","大脑植入战斗芯片",
				"灵魂来自异世界","是克隆实验体",
				"携带末日病毒","拥有双重人格"
			], rdsecret).replace("无", "").replace("未知", "▮▮▮▮▮▮▮▮")
		}
	};
}
