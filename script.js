function save(lesson) {
    var doc = new JsPDF();
    doc.fromHTML($('#lesson').html(), 15, 15, {
        'width': 170,
            'elementHandlers': specialElementHandlers
    });
    doc.save(`lesson ${lesson}.pdf`);
    //lessonsArray.push(doc);
};

//let lessonsArray = [];
var specialElementHandlers = {
    '#editor': function (element, renderer) {
        return true;
    }
};

var chapters = document.getElementsByClassName("collapsible-accordion");
for(var i = 1; i<chapters.length; i++){
    chapters[i].click();
    var lessons = document.getElementsByClassName("drop-body");
    for(var j = 1; j<lessons.length; j++){
        lessons[j].click();
        save(`${i}-${j}`);
    }
}



//javascript: var script = document.body.appendChild(document.createElement("script")); script.src="https://cdn.jsdelivr.net/gh/aarush8787/cpmtopdf@latest/script.js";
