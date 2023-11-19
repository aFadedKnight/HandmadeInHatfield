class SiteHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = '<header><a href="../index.html"><img src="../Images/SVG/HandmadeInHatfield.svg" alt="HandmadeInHatfield Primary Logo" class="Home"></a><nav class="Links"><ul class="nav__links"><a href="../Pages/C-Fall.html"><button class="Fall">Fall</button></a><a href="../Pages/C-Winter.html"><button class="Winter">Winter</button></a><a href="../Pages/C-All.html"><button class="All">All Crafts</button></a><a href="../Pages/C-Spring.html"><button class="Spring">Spring</button></a><a href="../Pages/C-Summer.html"><button class="Summer">Summer</button></a></ul></nav><a href="Pages/C-Winter.html"><button class="about">About</button></a></header>'
    };
};

customElements.define('site-header',SiteHeader)