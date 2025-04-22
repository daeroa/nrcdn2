
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
	  seed = (seed * 9797 + 908141) % 233280;
	  return seed / 233280;
	};
}
	
const genderList = ['男', '女', '双性', '无性', '随意切换'];
const categoryData = [
	{type: '宅家系', emoji: '(￣﹏￣)'},
	{type: '魔王系', emoji: 'ψ(｀∇´)ψ'},
	{type: '性感系', emoji: 'ღ(´･ᴗ･`)'},
	{type: '冷淡系', emoji: '_(:3 」∠)_'},
	{type: '神秘系', emoji: '◔_◔'},
	{type: '活泼系', emoji: '٩(◕‿◕)۶'},
	{type: '可爱系', emoji: '(≧ω≦)/'},
	{type: '憨憨系', emoji: '(•ิ_•ิ)?'}
];
const hairColors = ['玄黑色','银白色','酒红色','珊瑚粉','翡翠绿','琉璃蓝','琥珀金','薄藤紫','砂金色','墨玉灰'];
	
export function divine(name) {
	const seed = deterministicHash(name);
	const rand = createSeededRandom(seed);
	const gen = (min, max, precision=1) => 
	  Number((min + rand()*(max-min)).toFixed(precision));
	const category = categoryData[Math.floor(rand()*8)];
	// 才发现有问题啊啊啊
        const underbust = gen(65, 95); // 下胸围一般在这个范围
        const bust = gen(underbust + 10, underbust + 25); // 上胸围总比下胸围大
        const waist = gen(underbust * 0.6, underbust * 0.75);
        const hip = gen(bust * 0.8, bust * 1.1);
        const cupTable = [
            { diff: 10, cup: 'A' },
            { diff: 12.5, cup: 'B' },
            { diff: 15, cup: 'C' },
            { diff: 17.5, cup: 'D' },
            { diff: 20, cup: 'E' },
            { diff: 22.5, cup: 'F' },
            { diff: 25, cup: 'G' },
            { diff: 27.5, cup: 'H' },
            { diff: 30, cup: 'I' },
            { diff: 32.5, cup: 'J' },
            { diff: 35, cup: 'K' },
            { diff: 37.5, cup: 'L' },
            { diff: 40, cup: 'M' },
            { diff: 42.5, cup: 'N' },
        ];
        let cup = 'A';
        for (let i = cupTable.length - 1; i >= 0; i--) {
            if (bust - underbust >= cupTable[i].diff) {
                cup = cupTable[i].cup;
                break;
            }
        }
	const s = gen(1,100);
  	const height = gen(105, 245);
  	const hairColor = hairColors[Math.floor(rand()*10)];
  	const experiencePeople = Math.floor(110 + rand()*991), sexDesire = Math.floor(110 + rand()*991);
  	const hobby = ['口交', '足交', '乳交', '自慰', '捆绑', '肛交', 'SM'][Math.floor(rand()*7)];
  	const ability = ['接受任意尺寸插入', '随时发情', '体液可催淫', '随时释放荷尔蒙', '精神控制', '化身榨精能人', '记忆修改'][Math.floor(rand()*7)];
  	const rating = gen(0,5);

	// @ts-ignore
	return {
	  姓名: name,
	  性别: genderList[Math.floor(rand()*5)],
	  分类: `${category.type}${category.emoji}`,
      	  上围: `${bust.toFixed(1)}cm`,
      	  下围: `${waist.toFixed(1)}cm`,
          屁围: `${hip.toFixed(1)}cm`,
          罩杯: `${cup}`,
	  身高: `${height.toFixed(1)}cm`,
	  发色: `${hairColor}`,
	  经验人数: `${experiencePeople}`,
	  性欲值: `${sexDesire}`,
	  性癖: `${hobby}`,
	  特殊能力: ability,
	  评价: `${rating.toFixed(1)}`,
          S度: `${s.toFixed(1)}`,
          M度: `${(100-s).toFixed(1)}`
	};
}
