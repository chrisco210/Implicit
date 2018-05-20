var baselineWords = ["rose", "daffodil", "sunflower", "daisy", "tulip", "fly", "mosquito", "moth", "gnat", "roach", "teriffic", "love", "happy", "joy", "good", "vomit", "poison", "hatred", "evil", "bad"];
var testWords = ["John", "Paul", "Mike", "Kevin", "Steve", "Amy", "Joan", "Lisa", "Sarah", "Diana", "Executive", "Management", "salary", "office", "business", "Home", "Parents", "Children", "family", "marriage"];

var baselineCount = 0;
var testCount = 0;

var currentState = 0;

var fQ = false;
var jQ = false;

var tickCount = 0;

var count = 0;

var tickC;

var genderInstance;
var ageInstance;

$(document).ready(function() {
        $(window).keypress(function(e)
        {
            console.log("detected keypress " + e.which);
            if(e.which == 102)
            {
                console.log("f pressed");
                fQ = true;
            }
            else if(e.which == 106)
            {
                console.log("j pressed");
                jQ = true;
            }
        });
    
    var elems = document.querySelectorAll("select");
    M.FormSelect.init(elems);  
    
    genderInstance = M.FormSelect.getInstance($("#genderSelect")[0]);
    ageInstance = M.FormSelect.getInstance($("#ageSelect")[0]);
        
});


function getBaselineWord()
{
    return baselineWords[Math.floor(Math.random() * baselineWords.length)];
}

function getTestWord()
{
    return testWords[Math.floor(Math.random() * testWords.length)];
}

function updateText(text)
{
    $("#word").text(text);
}

function nextWord()
{
    count++;
    if(currentState == 0)
    {
        updateText(getBaselineWord());   
    }
    else
    {
        updateText(getTestWord());
    }
}

function tick()
{
    tickCount++;
    console.log(tickCount);
    if(fQ)
    {
        nextWord();
        fQ = false;    
    }
    else if(jQ)
    {
        nextWord();
        jQ = false;
    }
    
    if(tickCount >= 800)
    {
        endTest();
    }
}

function endTest()
{
    $("#test").addClass("hide");
    
    window.clearInterval(tickC);
    tickCount = 0;
    if(currentState == 0)
    {
        currentState++;
        baselineCount = count;
        $("#instruct").removeClass("hide");
        
        $("#section1").addClass("hide");
        $("#section2").removeClass("hide");
    }
    else if(currentState == 1)
    {
        testCount = count;
        $("#post").removeClass("hide");
        $("#instruct").addClass("hide");
    }
    
    count = 0;
}

function generateResults()
{
    $("#post").addClass("hide");
    $("#results").removeClass("hide");
    $("#resdisplay").text(baselineCount + ", " + testCount + ", " + genderInstance.getSelectedValues() + ", " + ageInstance.getSelectedValues());
}

function startTest()
{
    $("#instruct").addClass("hide");
    $("#test").removeClass("hide");
    tickC = window.setInterval(function() {
        tick();
    }, 25);
}

