var backColor = 244;
var distance = 65;				//Width of the middle element
var ColorSpacing = 51;		//color in the middle of the middle element

var TextSize = 25;				//TextSize
var TextColor = 0;				//TextColor


var Sites = [];						//All sites
var Anschläge = 780;			//chars per site

var ReadingSites = 1;

var TheStory = "Einst als Himmel und Hölle noch im war Krieg, gab es ein kleinen Dämon der einen Spaziergang durch den Wald machte. Er war zwar alleine doch er hatte keine Angst auch wenn er wusste dass der Wald das Territorium des Himmels war. Er sprang von Stein zu Stein bis er plötzlich von einem Engel entdeckt worden war, er rannte vor Schreck denn er wusste das es ein Soldat war. Der Dämon war so erschrocken das er nicht dran dachte den Weg zurück Nachhause zu nehmen. Und ganz plötzlich fiel er eine Klippe hinunter. Bei dem Sturz brach er sich ein Bein er versuchte nicht vor Schmerz zu schrein doch er konnte nicht anders, nachdem der Schmerz für ihn ertragbar wurde suchte er sich ein Versteck vor dem Soldat. Der verletzte Dämon kriechte eine sehr lange strecke bis er eine Höhle zum verstecken fand, er betretete die Höhle und machte ein Nickerchen. Als er aufwachte lag er im Schoß eines kleinen Engelchens, er wollte schnell weg aber sein Bein tat zu sehr weh um schnell zu Fliehen. Das Engelchen flüsterte: mach dir keine Sorgen ich werde dir nichts antun. Der Dämon fragte leise: wieso ich bin einer der Feinde und ich bin gerade schwach es wäre sehr einfach mich jetzt zu töten. Das Engelchen sagte: ich möchte einfach nicht, ich hasse den Krieg ich hasse dass so viele Leute sterben müssen ich möchte einfach das der Krieg aufhört. Eine Träne lief dem Engel das Gesicht herunter. Der Dämon sagt: mein Name ist Leviatan aber bitte nenne mich bei meinen spitznamen Levi. Das kleine Engelchen antwortete aufgemunter: Mein Name ist Levaniel, ich bin ein Engel der reinen Liebe. Levaniel sagt: ich gehe und hole dir etwas für dein Bein ich werde nur ein paar Minuten brauche. Levi nickte und schlief ein, Levi hatte einen Traum wo er sich in ein Monster verwandelt, ein Monster wo selbst die stärksten Engel sich vor Fürchten, er wachte vor Angst auf. Als er aufwachte stand Levaniel mit einer Flasche neben ihm sie sagte: Trink es wird dir helfen. Levi nahm die Flasche und schaute die Flüssigkeit darin an, er hatte angst das die Flüssigkeit gesegnet war und er sich danach zu Staub verwandelt wenn er es trinkt aber was hätte er anderes tun können. Er setzte die Flasche an den Lippen an doch er zögerte es zu trinken, plötzlich drückte Levaniel ihm die Flasche in den Mund. Er fühlte einen enormen Schmerz in jeder seiner Zellen der Schmerz war so schlimm das er ES nicht mehr zurückhalten konnte. Er wurde zu dem MONSTER wovor er sich am meisten fürchtet sein wares ICH. Levaniel küsste Ihm und er verwandelte sich sofort zurück in den kleinen Dämon. Levi lag auf dem Boden und sagte weinend:Ich bin ein Monster. Er wiederholte diesen Satz mehrere male bis Levaniel ihn unterbrichte und sagte: Du bist kein Monster eher ein süßer Junge. Levi beruhigte sich danach irgendwie er fand ihre Stimme so beruhigend. Er fragte mit einer Träne im Gesicht: Was hast du mit mir gemacht. Sie wischte ihm die Träne vom Gesicht und antwortete: Ich habe dir geholfen. Levi schaute nach ihren Worten sein Bein an, es war geheilt er konnte wieder stehen. Er wohlte sofort zurück Nachhause doch er sah das Soldaten beim Höhlen eingang vorbei gehen. Levaniel flüsterte: wir werden leider hier übernachten müssen denn ich habe diese Flasche von denn Soldaten geklaut und sie suchen mich gerade. Levi fragte leise: was war eigentlich in der Flasche? Levaniel antworted leise: Ich sag es dir irgendwan, wir sollten lieber jetzt schauen dass sie uns nicht finden gehen wir tiefer in die Höhle und schlafen es ist schon fast mitternacht. Sie gingen tiefer in die Höhle und suchten sich schnell eine Stelle zum Schlafen legten sich hin und schliefen ein. Früh am morgen wachte Levi auf und Levaniel war verschwunden es lag nur ein stück Papyrus auf dem stand das sie sich wieder morgen hier treffen sollen. Levi hinterfragte dies nicht er ging einfach aus der Höhle schaute wo der weg Nachhause ist und ging. Er kamm Zuhause an und dachte sich: Hoffentlich ist mein Vater nicht da. Sein Vater ist Mortifer es bedeutet Todbringer früher hieß er aber anders Luzifer es bedeutet Lichtbringer und Ja, sein Vater war der erste Erzengel der sich Satan anschloss er ist einer der mächtigsten Dämonen."

function setup() {
	createCanvas(1200, 800);


	var Chars = split(TheStory,"");
	for (var i = 0; i < TheStory.length/Anschläge; i++) {
		var CurrentSite = "";
		for (var j = i*Anschläge; j < i*Anschläge+Anschläge && j < TheStory.length; j++) {
			CurrentSite += Chars[j];
		}
		Sites.push(CurrentSite);
	}

}

function draw() {

	background(backColor);
	drawTransition();

	noStroke();
	fill(TextColor);
	textSize(TextSize);
	textAlign(LEFT, TOP);

	leftSite(Sites[ReadingSites-1]);
	rightSite(Sites[ReadingSites]);

}


function leftSite(Stringin){
	text(Stringin,50,50, 450,height-100);

}



function rightSite(Stringin){
	text(Stringin,width/2+distance+50,50, 450,height-100);

}


function drawTransition(){
	for (var i = width/2-distance; i < width/2+distance; i++) {
		stroke(abs(map(i-width/2,-distance,distance,-backColor+ColorSpacing,backColor-ColorSpacing))+ColorSpacing);
		line(i,0,i,height);
	}
}



function mousePressed(){
	if(mouseX < width/2-distance){
		if (ReadingSites >= 2) {
			ReadingSites -= 2;
		}

	}
	if(mouseX > width/2+distance){
		if (ReadingSites < Sites.length-2) {
			ReadingSites += 2;
		}
	}
}
