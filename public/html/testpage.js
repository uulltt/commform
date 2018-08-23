var qcount = 0;
var choicecount = [0];
var jform = {
		currency: "USD",
		questions:[]
	};

function addQuestion(){
	var form = document.getElementById("myForm");
	form.innerHTML = form.innerHTML.replace(/<label>[^<>]*<\/label>/gm, "").replace(/<br><br>/gm, "<br>");
	var title = document.createElement("label");
	title.setAttribute("id", "t" + qcount.toString());
	title.appendChild(document.createTextNode(document.getElementById("qname").value))
	form.appendChild(title);
	form.appendChild(document.createElement("br"));
	var qtype = document.getElementById("qtype").value;
	if(qtype == "textarea"){
	var desc = document.createElement("textarea");
	desc.setAttribute("name", "q" + qcount.toString());
	form.appendChild(desc);
	form.appendChild(document.createElement("br"));
	jform.questions[qcount] = {
		title: document.getElementById("qname").value,
		type: "textarea",
		choices: [ {
			cost: 0,
			label: ""
		}]
	};
	console.log(jform);
	} else {
		/*var	options = Array.prototype.map.call(document.getElementsByName("q" + q), function(item){
			return {
				cost: item.value,
				label: item.getAttribute("data-name")
			};
		});*/
		let question = {
			title: document.getElementById("qname").value,
			type: qtype,
			choices: []
		};
		jform.questions[qcount] = question;
	var option = document.createElement("input");
	var desc = document.createElement("input");
	var cost = document.createElement("input");
	option.setAttribute("type", qtype);
	option.setAttribute("id", "o" + qcount.toString());
	desc.setAttribute("id", "d" + qcount.toString());
	desc.setAttribute("type", "text");
	cost.setAttribute("id", "c" + qcount.toString());
	cost.setAttribute("type", "number");
	cost.setAttribute("step", "0.01");
	form.appendChild(option);
	form.appendChild(desc);
	form.appendChild(cost);
	var add = document.createElement("button");
		add.setAttribute("type", "button");
		add.innerHTML = "Add Option";
		add.setAttribute("id", "a" + qcount.toString());
		add.setAttribute("onclick", "addOption(\"" + qcount.toString() + "\")");
		form.appendChild(add);
		
		
	}
	var remove = document.createElement("button");
	remove.setAttribute("type", "button");
		remove.innerHTML = "Delete Question";
		remove.setAttribute("id", "r" + qcount.toString());
		remove.setAttribute("onclick", "removeQuestion(\"" + qcount.toString() + "\")");
		form.appendChild(remove);
	qcount++;
	form.appendChild(document.createElement("br"));
	form.appendChild(document.createElement("br"));
}

function removeQuestion(q){
jform.questions.splice(q, 1);
console.log(jform);
 $("textarea[name='q"+q+"']").remove();
 $("#a" + q).remove();
 $("#c" + q).remove();
 $("#d" + q).remove();
$("#o" + q).remove();
$("#r" + q).remove();
$("#t" + q).remove();
var num = parseInt(q);
for(var i = num + 1; i < qcount; i++){	
var qs = document.getElementsByName("q" + i.toString());
var len = qs.length
console.log(qs.length);
	for(var j = 0; j < len; j++){
		console.log(qs.length);
		qs[0].setAttribute("name", "q" + (i-1).toString());
	}
if (document.getElementById("a" + i.toString())){
document.getElementById("a" + i.toString()).setAttribute("id", "a" + (i-1).toString());
document.getElementById("a" + (i-1).toString()).setAttribute("onclick", "addOption(\"" + (i-1).toString() + "\")");
document.getElementById("c" + i.toString()).setAttribute("id", "c" + (i-1).toString());
document.getElementById("d" + i.toString()).setAttribute("id", "d" + (i-1).toString());
document.getElementById("o" + i.toString()).setAttribute("id", "o" + (i-1).toString());

}
document.getElementById("r" + i.toString()).setAttribute("id", "r" + (i-1).toString());
document.getElementById("r" + (i-1).toString()).setAttribute("onclick", "removeQuestion(\"" + (i-1).toString() + "\")");
document.getElementById("t" + i.toString()).setAttribute("id", "t" + (i-1).toString());
}
qcount--;
reloadForm();
}

function removeChoice(q, c){
	jform.questions[q].choices.splice(c, 1);
	reloadForm();
}

function addOption(q){
	let option = {
			cost: document.getElementById("c" + q).value,
			label: document.getElementById("d" + q).value
		};
		jform.questions[q].choices[jform.questions[q].choices.length] = option;
		
		
	reloadForm();
}

function reloadForm(){
	var form = document.getElementById("myForm");
	
	form.innerHTML = form.innerHTML.replace(/<label>[^<>]*<\/label>/gm, "");
	form.innerHTML = form.innerHTML.replace(/l><br>((<br>)+)/gm, "l><br>");
	form.innerHTML = form.innerHTML.replace(/<br>((<br>)+)<l/gm, "<br><l");
	$("input[name^='q']").remove();
	$("button[id^='q']").remove();
	var q;
	var form = document.getElementById("myForm");
	for (var i = 0; i < jform.questions.length; i++){
		var insertpoint = document.getElementById("o" + i);
		var q = jform.questions[i];
		if (q.type != "textarea"){
		for(var j = 0; j < q.choices.length; j++){
		var c = q.choices[j];
	var label = document.createElement("label");
	var option = document.createElement("input");
	option.setAttribute("type", q.type);
	option.setAttribute("name", "q" + i);
	option.setAttribute("data-name", c.label);
	label.appendChild(option);
	label.appendChild(document.createTextNode(c.label + " (" + c.cost + ")"));
	form.insertBefore(label, insertpoint);
	var remove = document.createElement("button");
	remove.setAttribute("type", "button");
		remove.innerHTML = "Remove Choice";
		remove.setAttribute("id", "q" + q + "c" + c);
		remove.setAttribute("onclick", "removeChoice(\"" + i + "\",\"" + j + "\")");
	form.insertBefore(remove, insertpoint);
	form.insertBefore(document.createElement("br"), insertpoint);
		}
		}
	}
	form.innerHTML = form.innerHTML.replace(/<label>[^<>]*<\/label>/gm, "");
	form.innerHTML = form.innerHTML.replace(/l><br>((<br>)+)/gm, "l><br>");
	form.innerHTML = form.innerHTML.replace(/<br>((<br>)+)<l/gm, "<br><l");
	form.innerHTML = form.innerHTML.replace(/<br><br>((<br>)+)/gm, "<br><br>");
	console.log(jform);
}

