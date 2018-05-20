var baselineWords = ["rose", "daffodil", "sunflower", "daisy", "tulip", "fly", "mosquito", "moth", "gnat", "roach", "teriffic", "love", "happy", "joy", "good", "vomit", "poison", "hatred", "evil", "bad"];
var testWords = ["John", "Paul", "Mike", "Kevin", "Steve", "Amy", "Joan", "Lisa", "Sarah", "Diana", "Executive", "Management", "salary", "office", "business", "Home", "Parents", "Children", "family", "marriage"];

var baselineCount = 0;
var testCount = 0;

var currentState = 0;

var fQ = false;
var jQ = false;

var tickCount = 0;

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
});


function getBaselineWord()
{
    return baselineWords[Math.floor(Math.random() * baselineWords.length)];
}

function getTestWord()
{
    return baselineWords[Math.floor(Math.random() * testWords.length)];
}

function updateText(text)
{
    $("#word").text(text);
}

function nextWord()
{
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
    $("#test").hide();
    if(currentState == 0)
    {
        currentState++;
        
    }
    else if(currentState == 1)
    {
        
    }
}




function startTest()
{
    $("#test").show();
    window.setInterval(function() {
        tick();
    }, 25);
    nextWord();
}