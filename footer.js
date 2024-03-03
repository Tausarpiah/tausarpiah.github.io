const template = document.createElement('template')
template.innerHTML = `
    <!-- META info -->
    <META charset="UTF-8">
    <META lang="en-GB">
    <META name="viewport" content="width=device-width, initial-scale=1">
    <LINK rel="stylesheet" href="/main.css">
    <LINK rel="icon" rel="images/x-icon" href="/favicon.ico">
    <STYLE>
        DIV.IMPT { width: 100% }
    </STYLE>
    <!-- Actual stuff -->
    <FOOTER>
        <a href="#top">Back to top</a>
        <a href="/index.html">Main Page</a>
        <div class="impt">
            <p>No cookies/biscuits/scones/waffles collected. I'm not MrBeast.</p>
        </div>
    </FOOTER>
`
document.body.appendChild(template.content);