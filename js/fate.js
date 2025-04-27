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
        seed = (seed * 9797 + 100193) % 233280;
        return seed / 233280;
    };
}
export function fate(namea, nameb){
	var hash;
	if(namea > nameb) hash = polynomialHash(nameb + namea);
	else hash = polynomialHash(namea + nameb);
	const rand = rdSeed(hash),
		  categories = [
	            { name: "夫妻", bcolor: "bg-rose-700", tcolor: "text-rose-700" },
	            { name: "闺蜜", bcolor: "bg-pink-400", tcolor: "text-pink-400" },
				{ name: "炮友", bcolor: "bg-purple-400", tcolor: "text-purple-400" },
	            { name: "死对头", bcolor: "bg-orange-600", tcolor: "text-orange-600" },
	            { name: "陌生人", bcolor: "bg-gray-400", tcolor: "text-gray-400" }
		];
	const results = categories.map(category => ({
	        ...category,
	        value: Math.floor(rand() * 101) 
	    }));
	// @ts-ignore
	return results;
}
