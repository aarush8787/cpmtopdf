let lessonsArray = [];
var specialElementHandlers = {
    '#editor': function (element, renderer) {
        return true;
    }
};

var chapters = document.getElementsByClassName("collapsible-accordion");
for(var i = 1; i<chapters.length; i++){
    chapters[i].click();
    
}
function save(lesson) {
    var doc = new JsPDF();
    doc.fromHTML($('#lesson').html(), 15, 15, {
        'width': 170,
            'elementHandlers': specialElementHandlers
    });
    doc.save(`lesson-${lesson}.pdf`);
    lessonsArray.push(doc);
};


//var script = document.body.appendChild(document.createElement("script")); script.src="https://cdn.jsdelivr.net/gh/ading2210/edpuzzle-answers@latest/script.js"
