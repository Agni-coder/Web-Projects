/*Typing Animation*/
var typed = new Typed(".typing",{
    strings:["","Software Developer","Web Developer","Web Designer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})
/*Aside*/
const nav = document.querySelector(".nav"),
      navlist = nav.querySelectorAll("li"),
      totalNavList = navlist.length;
      for(let i=0; i<totalNavList; i++)
      {
        const a = navlist[i].querySelector("a");
        a.addEventListener("click",function()
        {
            for(let j=0; j<totalNavList; j++)
            {
                navlist[j].querySelector("a").classList.remove("active");
            }
            this.classList.add("active")
            showSection(this)
        })
      }
      function showSection(element)
      {
        const href=element.getAttribute("href").split("#");
        target = href[1];
        console.log(target)
      }