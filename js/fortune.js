const luckData = {
    fortunes: [
      "紫气东来，福星高照",
      "波澜不惊，稳步前行", 
      "机遇暗藏，伺机而动",
      "贵人相助，事半功倍",
      "小心谨慎，防微杜渐",
      "桃花朵朵，人际和谐",
      "财源广进，投资有利",
      "专注事业，晋升有望",
      "健康为本，劳逸结合",
      "出行顺利，远方有喜",
      "学习进步，考试顺利",
      "家庭和睦，其乐融融",
      "左右逢源，游刃有余",
      "塞翁失马，焉知非福",
      "云开月明，豁然开朗",
      "时运不济，韬光养晦"
    ],
    shouldDo: [
      "签约合作", "投资理财", "表白求婚",
      "出差旅行", "健身运动", "学习充电",
      "购置新衣", "拜访贵人", "装修房屋",
      "项目启动", "团队建设", "慈善捐赠",
      "探望长辈", "艺术创作", "探望长辈"
    ],
    avoidDo: [
      "冲动消费", "熬夜加班", "与人争执",
      "危险运动", "重大决策", "搬家迁居",
      "投资借贷", "暴饮暴食", "远行出海",
      "购置大件", "美容整形", "法律诉讼",
      "攀比炫耀", "孤注一掷", "代人担保"
    ],
  	lunar: [
      '农历正月','农历二月','农历三月','农历四月','农历五月','农历六月',
      '农历七月','农历八月','农历九月','农历十月','农历冬月','农历腊月'
    ],
    directions: [
      '正东','东南','正南','西南',
      '正西','西北','正北','东北'
    ]
};
function hashCode(str) {
    return str.split('').reduce((a,b)=>{a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);
}
  
function rdSeed(seed) {
    let x = Math.sin(seed++) * 10000;
    return () => (x - Math.floor(x));
}
  
function shuffle(arr, rand) {
    const r = [...arr];
    for (let i = r.length - 1; i > 0; i--) {
      	const j = Math.floor(rand() * (i + 1));
      	[r[i], r[j]] = [r[j], r[i]];
    }
    return r;
}

function nameHash(name) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 7) - hash);
    hash &= hash; 
  }
  return hash.toString(36).toUpperCase().padEnd(16, '0').slice(0, 16);
}

/* Abandoned
function getProg(value) {
    const filled = '█'.repeat(Math.round(value/10));
    return filled.padEnd(10, '░') + ` ${value}%`;
}
*/
export function getluck(username) {
    const today = new Date();
    const base = hashCode(username + today.toISOString().slice(0,10));
	const hash = nameHash(username);
	const colors = ["bg-red-500", "bg-blue-500", "bg-green-500", "bg-purple-500", "bg-pink-500", "bg-yellow-500"];
  	function getLunar() {
        const lunarMap = [
            [1,29], [2,27], [3,28], [4,27], [5,26], [6,24],
            [7,23], [8,21], [9,19], [10,18], [11,17], [12,16]
        ];
        const currentMonth = today.getMonth() + 1;
        const currentDate = today.getDate();
        for(let i=0; i<lunarMap.length; i++) {
            const [m, d] = lunarMap[i];
            if(currentMonth < m || (currentMonth === m && currentDate < d)) {
                return i === 0 ? 11 : i - 1;
            }
        }
        return 11;
    }
    const luck = {
      	date: `${today.getFullYear()} ${String(today.getMonth()+1).padStart(2,'0')} ${String(today.getDate()).padStart(2,'0')}`,
      	wealth: Math.floor(rdSeed(base + 1)() * 100),
      	love: Math.floor(rdSeed(base + 2)() * 100),
      	career: Math.floor(rdSeed(base + 3)() * 100),
      	fortune: luckData.fortunes[Math.floor(rdSeed(base + 4)() * luckData.fortunes.length)],
      	should: shuffle(luckData.shouldDo, rdSeed(base + 5)).slice(0,3),
      	avoid: shuffle(luckData.avoidDo, rdSeed(base + 6)).slice(0,3),
      	lunar: luckData.lunar[getLunar()],
      	direction: luckData.directions[Math.floor(rdSeed(base+10)()*8)],
		color: colors[Math.floor(rdSeed(base + 6)() * colors.length)]
    };
    const total = luck.wealth + luck.love + luck.career;
    luck.rating = '★'.repeat(Math.round(total / 60)).padEnd(5, '☆');
   
    return {
		name: `${username}`,
		color: `${luck.color}`,
		hash: `${hash}`,
		date: `${luck.date}`,
		lunar: `${luck.lunar}`,
		fortune: `${luck.fortune}`,
		wealth: `${luck.wealth}`,
		love: `${luck.love}`,
		career: `${luck.career}`,
		should: `${luck.should}`,
		avoid: `${luck.avoid}`,
		direction: `${luck.direction}`,
		total: `${Math.round(total / 60)}`,
		stars: luck.rating
	};
}
