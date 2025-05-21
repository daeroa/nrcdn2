const dkDish = [
	"可乐拌芥末炒西瓜籽",
	"土豆炖马铃薯炒牛奶",
	"榴莲臭豆腐冰淇淋",
	"酱油泡棉花糖",
	"老干妈拌酸奶",
	"香蕉皮炒鸡蛋",
	"牙膏薄荷炒饭",
	"洗衣液风味果冻",
	"过期酸奶炖袜子",
	"蟑螂造型巧克力",
	"鼻屎味棒棒糖",
	"脚气风味薯片",
	"臭袜子煮咖啡",
	"马桶刷造型饼干",
	"巧克力锅巴拌过期牛奶",
	"山楂拌火腿炒螺蛳",
	"咖啡炖泡椒鸡爪",
	"生锈铁钉泡茶",
	"电池液鸡尾酒",
	"塑料花炒肉片",
	"橡胶轮胎炖牛肉",
	"报纸碎片寿司",
	"蜡烛煮面条",
	"肥皂泡沫奶茶",
	"黑白油漆蛋糕",
	"混凝土制馒头",
	"玻璃渣沙拉",
	"钉子螺蛳粉",
	"果冻炒皮蛋蘸芝麻酱",
	"502胶水汤圆",
	"柴油咖啡",
	"机油拌面",
	"番茄酱淋话梅白粥",
	"石棉瓦板蓝根披萨",
	"板蓝根味腊肠",
	"硫酸铜蓝莓派",
	"辣条炖红豆沙",
	"铅球炖老干爹",
	"羊肉味跳跳糖炒意大利面",
	"草莓酱炒韭菜",
	"榴莲芹菜拌泡面",
	"鱼香草莓炒辣条",
	"香皂味小米粥",
	"糖精煮牛奶加芹菜汁"
];

const nrDish = [
	"番茄炒蛋",
	"蒜香酱油炒年糕",
	"红烧肉",
	"蛋炒饭",
	"紫薯拌蛋黄酱",
	"红糖土豆羹"
];

const coms = [
	{ min: 90, text: "连雷电将军见到了都得敬你七分", emoji: "⚡" },
	{ min: 80, text: "营业期间0差评，吃过的人都没了", emoji: "💀" },
	{ min: 70, text: "米其林-5星大厨转世", emoji: "👨‍🍳" },
	{ min: 60, text: "厨房毁灭者，食材克星", emoji: "🔥" },
	{ min: 50, text: "灵感来自噩梦，味觉也将如此", emoji: "🤯" },
	{ min: 40, text: "太强了，你的锅里有生命", emoji: "🍽" },
	{ min: 30, text: "在黑暗与光明之间徘徊", emoji: "😵" },
	{ min: 20, text: "勉强算是个正常厨师", emoji: "👨‍🍳" },
	{ min: 10, text: "你的料理居然能吃", emoji: "😲" },
	{ min: 0,  text: "你确定进过厨房吗？", emoji: "❓" }
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

export function cuisine(name) {
	const hash = polynomialHash(name);
	const random = rdSeed(hash);
	const perc = Math.floor(50 + random() * 50), dicount = Math.floor(4), dishes = [];
	const comobj = coms.find(c => perc >= c.min) || coms[coms.length - 1];
	const comment = `${comobj.emoji} ${comobj.text}`;
	const dish = perc > 70 ? dkDish : 
          perc > 30 ? [...dkDish, ...nrDish] : 
          nrDish;
	for (let i = 0; i < dicount; i++) {
		const index = Math.floor(random() * dish.length);
		dishes.push(dish[index]);
		dish.splice(index, 1);
	}
	return { perc, comment, dishes };
}