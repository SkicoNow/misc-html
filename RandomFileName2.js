const VIDSTRINGS = ["CIMG", "DSC0", "DSCF", "GEDC", "IMG_", "MAH", "MOV0", "MVI_", "PICT", "THRS"]; // GEDC and MOV might have a 0 at the end
const VIDSTRINGSUL = document.querySelector("#vidstringsUL");
const URLS = [
    "https://www.dailymotion.com/search/",
    "https://www.facebook.com/watch/search/?q=",
    "https://www.flickr.com/search/?text=",
    "https://www.google.com/search?q=",
    "https://vimeo.com/search?q=",
    "https://commons.wikimedia.org/w/index.php?search=",
    "https://www.youtube.com/results?search_query="];
function main()
{
    document.querySelector("#android").innerText = zero("android");
    document.querySelector("#video").innerText = zero("video");
    document.querySelector("#vlc").innerText = zero("vlc");
    for (let i = 3; i < VIDSTRINGSUL.children.length; i++)
    {
        let rand = Math.floor(Math.random() * 10000);
        VIDSTRINGSUL.children[i].children[0].innerText = "";
        if (rand < 10)
        {
            VIDSTRINGSUL.children[i].children[0].innerText = VIDSTRINGS[i - 3] + "000" + rand;
            console.log(VIDSTRINGS[i - 3] + " is less than 10")
        }
        else if (rand < 100)
        {
            VIDSTRINGSUL.children[i].children[0].innerText = VIDSTRINGS[i - 3] + "00" + rand;
            console.log(VIDSTRINGS[i - 3] + " is less than 100")
        }
        else if (rand < 1000)
        {
            VIDSTRINGSUL.children[i].children[0].innerText = VIDSTRINGS[i - 3] + "0" + rand;
            console.log(VIDSTRINGS[i - 3] + " is less than 1000")
        }
        else if (rand >= 1000)
        {
            VIDSTRINGSUL.children[i].children[0].innerText = VIDSTRINGS[i - 3] + rand;
        }
    }
}

function hrefs()
{
    let sites = document.forms[0];
    for (let i = 0; i < sites.length; i++)
    {
        if (sites[i].checked)
        {
            for (let i2 = 0; i2 < VIDSTRINGSUL.children.length; i2++)
            {
                VIDSTRINGSUL.children[i2].children[0].href = URLS[i] + VIDSTRINGSUL.children[i2].children[0].innerText;
            }
        }
    }
}

function zero(mode)
{
    let yyyy = Math.floor(Math.random() * (2022 - 2000 + 1)) + 2000;
    let mm = Math.floor(Math.random() * 12) + 1;
    let dd = Math.floor(Math.random() * 31) + 1;
    let hr = Math.floor(Math.random() * 24);
    let min = Math.floor(Math.random() * 60);
    let sec = Math.floor(Math.random() * 60);
    const VARS = [yyyy, mm, dd, hr, min, sec];
    let filename = "";
    for (let i = 0; i < VARS.length; i++)
    {
        console.log(`VARS[i]:${yyyy}`);
        if (VARS[i] < 10)
        {
            VARS[i] = "0" + VARS[i];
            console.log(VARS[i]);
        }
        if (mode === "android")
        {
            filename += VARS[i];
            if (filename.length === 8)
            {
                filename += "_";
            }
        }
    }
    if (mode === "video")
    {
        document.querySelector("#video").innerText = "";
        filename = `video-${VARS[0]}-${VARS[1]}-${VARS[2]}-${VARS[3]}-${VARS[4]}-${VARS[5]}`;
    }
    else if (mode === "vlc")
    {
        document.querySelector("#vlc").innerText = "";
        filename = `vlc-record-${VARS[0]}-${VARS[1]}-${VARS[2]}-${VARS[3]}h${VARS[4]}m${VARS[5]}s`;
    }
    console.log(filename);
    return filename;
}

document.querySelector("#dailymotion").addEventListener("click", hrefs);
document.querySelector("#flickr").addEventListener("click", hrefs);
document.querySelector("#facebook").addEventListener("click", hrefs);
document.querySelector("#google").addEventListener("click", hrefs);
document.querySelector("#vimeo").addEventListener("click", hrefs);
document.querySelector("#wikimedia").addEventListener("click", hrefs);
document.querySelector("#youtube").addEventListener("click", hrefs);
document.querySelector("#generatebutton").addEventListener("click", main);
document.querySelector("#generatebutton").addEventListener("click", hrefs);
