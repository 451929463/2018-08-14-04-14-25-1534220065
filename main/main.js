module.exports = function main(num) {
		var pics = new Array();
		var new_pics = new Array();
		var len = num.length ;
		var str = "";
		//转化成LCD数组
		for(var i = 0 ; i < len ; i++){
			if(num.charAt(i)==0){
				pics.push("._.");
				pics.push("|.|");
				pics.push("|_|");
			}
			if(num.charAt(i)==1){
				pics.push("...");
				pics.push("..|");
				pics.push("..|");
			}
			if(num.charAt(i)==2){
				pics.push("._.");
				pics.push("._|");
				pics.push("|_.");
			}
			if(num.charAt(i)==3){
				pics.push("._.");
				pics.push("._|");
				pics.push("._|");
			}
			if(num.charAt(i)==4){
				pics.push("...");
				pics.push("|_|");
				pics.push("..|");
			}
			if(num.charAt(i)==5){
				pics.push("._.");
				pics.push("|_.");
				pics.push("._|");
			}
			if(num.charAt(i)==6){
				pics.push("._.");
				pics.push("|_.");
				pics.push("|_|");
			}
			if(num.charAt(i)==7){
				pics.push("._.");
				pics.push("..|");
				pics.push("..|");
			}
			if(num.charAt(i)==8){
				pics.push("._.");
				pics.push("|_|");
				pics.push("|_|");
			}
			if(num.charAt(i)==9){
				pics.push("._.");
				pics.push("|_|");
				pics.push("..|");
			}
		}
		//个位数
		if(len == 1 ){
			str += pics.join("\n")+"\n";
			console.log(str);
			return str;
		}
		//其他
		for(var j = 0 ; j < len ; j++){
			for(var z = j ; z < pics.length ; z += 3){
				new_pics.push(pics[z]);
			}
				str += new_pics.join(" ")+"\n";
				new_pics.length = 0;
		}
		console.log(str);
		return str;
};