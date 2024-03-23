const template = document.createElement('template');

template.innerHTML = `
    <!-- META info -->
    <META charset="UTF-8">
    <META lang="en-GB">
    <META name="viewport" content="width=device-width, initial-scale=1">
    <META name="author" content="Gary">
    <LINK rel="stylesheet" href="/main.css">
    <LINK rel="icon" rel="images/x-icon" href="/favicon.ico">
    <!-- Actual stuff -->
    <HEADER>
        <table>
            <tr>
            <td rowspan="2" style="height: 100PX;">
                <img src="/images/logo.jpeg" width="125PX">
            </td>
            <td id="title"><h0>The Holy Tau Sar Piah Realm</h0></td>
            </tr>
            <tr>
            <td class="sub-vlog">Gary's Vlog</td>
            </tr>
        </table>
        <div class="topnav">
            <a href="/index.html" class="a:active" target="_parent">Home</a>
            <div class="dropdown">
                <button class="dropbtn">Academica</button>
                <div class="dropdown-content">
                    <a target="_parent"href="/sch/math/e-maths.html">E Maths</a>
                    <a target="_parent"href="/sch/math/a-maths.html">A Maths</a>
                    <a target="_parent"href="/sch/chem/index.html" class="complete">Chemistry</a>
                    <a target="_parent"href="/sch/bio/index.html" class="complete">Biology</a>
                    <a target="_parent"href="/sch/hist/index.html" class="complete">History</a>
                    <a target="_parent"href="/sch/geog/index.html">Geography</a>
                    <a target="_parent"href="/sch/poa/index.html" class="complete">P.O.A.</a>
                </div>
            </div>
            <div class="dropdown">
                <button class="dropbtn">Miscellany</button>
                <div class="dropdown-content">
                    <a target="_parent" href="/wiki/index.html">Wiki</a>
                    <a target="_parent" href="/vlog/index.html">Gary's Vlog</a>
                    <a target="_parent" href="/maps/index.html">Maps</a>
                    <a target="_parent" href="https://www.fairprice.com.sg/product/fairprice-premium-fine-salt-box-500g-11150178" class="salt">Free salt!</a>
                </div>
            </div>
        </div>
    </HEADER>
    <!-- End of 'Actual stuff' -->
`;

document.body.appendChild(template.content);
