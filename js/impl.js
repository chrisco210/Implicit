var baselineWords = ["rose", "daffodil", "sunflower", "daisy", "tulip", "fly", "mosquito", "moth", "gnat", "roach", "teriffic", "love", "happy", "joy", "good", "vomit", "poison", "hatred", "evil", "bad"];
var testWords = ["John", "Paul", "Mike", "Kevin", "Steve", "Amy", "Joan", "Lisa", "Sarah",. "Diana", "Executive", "Management", "salary", "office", "business", "Home", "Parents", "Children", "family", "marriage"];

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
    $("#word").text = text;
}

