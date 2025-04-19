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
	        seed = (seed * 9797 + 49999) % 233280;
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
	    
	    // 数值生成器
	    const gen = (min, max, precision=1) => 
	        Number((min + rand()*(max-min)).toFixed(precision));
	    
	    // 分类选择
	    const category = categoryData[Math.floor(rand()*8)];
	    
	    // 三围生成（符合人体工学比例）
	    const bust = gen(75, 115);
	    const waist = gen(bust*0.6, bust*0.75);
	    const hip = gen(bust*0.8, bust*1.1);
	    const cup = String.fromCharCode(65 + Math.min(13, Math.floor((bust-75)/3.5)));
	    const s = gen(1,100);

	    // @ts-ignore
	    return {
	        姓名: name,
	        性别: genderList[Math.floor(rand()*5)],
	        分类: `${category.type}${category.emoji}`,
          	上围: `${bust.toFixed(1)}cm`,
          	下围: `${waist.toFixed(1)}cm`,
          	屁围: `${hip.toFixed(1)}cm`,
          	罩杯: `${cup}`,
	        身高: `${gen(105, 245).toFixed(1)}cm`,
	        发色: hairColors[Math.floor(rand()*10)],
	        经验人数: Math.floor(110 + rand()*991),
	        性欲值: Math.floor(110 + rand()*991),
	        性癖: ['口交', '足交', '乳交', '自慰', '捆绑', '肛交', 'SM'][Math.floor(rand()*7)],
	        特殊能力: ['接受任意尺寸插入', '随时发情', '体液可催淫', '随时释放荷尔蒙', '精神控制', '化身榨精能人', '记忆修改'][Math.floor(rand()*7)],
	        评价: `${gen(0,5).toFixed(1)}`,
          	S度: `${s}`,
          	M度: `${100-s}`
	    };
	}
