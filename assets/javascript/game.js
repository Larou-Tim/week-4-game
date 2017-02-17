$(document).ready(function() {
	

	var kyloRen = {
		name: 'kylo-ren',
		pic: $("#kylo-ren").html(),
		npc: true,
		addEnemy: function() {
			$("#enemy-spot").append(this.pic);
			// $("#kylo-ren").addClass("well");
		}
	} 

	var lukeSkywalker = {
		name: 'luke-skywalker',
		pic: $("#luke-skywalker").html(),
		npc: true,
		addEnemy: function() {
			$("#enemy-spot").append(this.pic);
		}
	} 
	
	var maceWindu = {
		name: 'mace-windu',
		pic: $("#mace-windu").html(),
		npc: true,
		addEnemy: function() {
			$("#enemy-spot").append(this.pic);
		}
	} 
	

	var darthVader = {
		name: 'darth-vader',
		pic: $("#darth-vader").html(),
		npc: true,
		addEnemy: function() {
			$("#enemy-spot").append(this.pic);
		}
	} 
	

	$(".char-pick").on("click",function(){
		var playerChacter = $(this).attr('id');

		if (kyloRen.name == playerChacter) {
			kyloRen.npc = false;
		}
		else if (lukeSkywalker.name == playerChacter) {
			lukeSkywalker.npc = false;
		}

		else if (maceWindu.name == playerChacter) {
			maceWindu.npc = false;
		}

		else if (darthVader.name == playerChacter) {
			darthVader.npc = false;
		}


		// console.log(playerChacter);

		$("#player-chacter-spot").append($("#"+playerChacter).html());
		addBaddies();

	});

function addBaddies() {
	var spot = 0;

	if (kyloRen.npc) {
		kyloRen.addEnemy();
	}
	if (lukeSkywalker.npc) {
		lukeSkywalker.addEnemy();
	}
	if (maceWindu.npc) {
		maceWindu.addEnemy();
	}
	if (darthVader.npc) {
		darthVader.addEnemy();
	}

console.log(darthVader.pic)
	$("#choose-player").empty();

}


});
