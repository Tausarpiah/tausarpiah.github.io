const template = document.createElement('template')
template.innerHTML = `
    <!-- META info -->
    <META charset="UTF-8">
    <META lang="en-GB">
    <META name="viewport" content="width=device-width, initial-scale=1">
    <LINK rel="stylesheet" href="/main.css">
    <LINK rel="icon" rel="images/x-icon" href="/favicon.ico">
    <!-- Actual stuff -->
    <FOOTER>
        <a href="#top">Back to top</a>
        <a href="/index.html">Main Page</a>
        <div class="impt">
            <h1>Rechliches Impressum!!!</h1>
            <p>JZ 2024. The vast majority of images are made by me. Credit is given where necessary.</p>
            <p>No cookies/biscuits/scones/waffles collected. I'm not MrBeast.</p>
        </div>
    </FOOTER>
`
document.body.appendChild(template.content);