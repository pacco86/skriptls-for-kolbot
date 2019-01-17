/**
*	@filename	IPHunter.js
*	@author		kolton improved by pacco 01/17/19
*	@desc		search for a "hot" IP and stop if the correct server is found
*	@changes	stops after exact game time is reached, improved idle routine
*/

function IPHunter() {
	var ip = Number(me.gameserverip.split(".")[3]);

	if (Config.IPHunter.IPList.indexOf(ip) > -1) {
		D2Bot.printToConsole("IP " + ip + " found!", 7);
		me.maxgametime = 0;

		while (true) {
			me.overhead("IP found!");
			Town.move("waypoint");
			Town.move("stash");
			Town.move("portalspot");
			delay((rand(50e3, 70e3)));
		}
	}
	
	while (((Config.IPHunter.GameLength * 6e4) - (getTickCount() - me.gamestarttime) > 70e3)) {
				me.overhead("IP not found. Waiting " + (((Config.IPHunter.GameLength * 6e4) - (getTickCount() - me.gamestarttime)) /1000) + " sec.");
				Town.move("waypoint");
				Town.move("stash");
				Town.move("portalspot");
				delay((rand(50e3, 70e3)));
			}
	//debug delay > 0		
	if 	(((Config.IPHunter.GameLength * 6e4) - (getTickCount() - me.gamestarttime)) > 50) {
		delay(((Config.IPHunter.GameLength * 6e4) - (getTickCount() - me.gamestarttime)));
	}	
	return true;
}