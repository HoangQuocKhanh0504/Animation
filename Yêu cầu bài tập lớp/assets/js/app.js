// CHUYỂN TAB
const tabs = document.querySelectorAll(".tab");
const links = document.querySelectorAll("nav a");

links.forEach(link=>{
  link.onclick=()=>{
    tabs.forEach(t=>t.classList.remove("active"));
    links.forEach(a=>a.classList.remove("active"));
    document.getElementById(link.dataset.tab).classList.add("active");
    link.classList.add("active");
    window.scrollTo(0,0);
  }
});

// POPUP VIDEO
const popup=document.getElementById("popup");
const video=popup.querySelector("video");

document.querySelectorAll("[data-video]").forEach(btn=>{
  btn.onclick=()=>{
    popup.classList.add("active");
    video.play();
  }
});

document.getElementById("close").onclick=()=>{
  popup.classList.remove("active");
  video.pause();
  video.currentTime=0;
};
