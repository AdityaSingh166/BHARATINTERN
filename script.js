$(document).ready(function () {
    $("#menu").click(function () {
      $(this).toggleClass("fa-times");
      $(".navbar").toggleClass("nav-toggle");
    });
  
    $(window).on("scroll load", function () {
      $("#menu").removeClass("fa-times");
      $(".navbar").removeClass("nav-toggle");
  
      if (window.scrollY > 60) {
        document.querySelector("#scroll-top").classList.add("active");
      } else {
        document.querySelector("#scroll-top").classList.remove("active");
      }
  
      // scroll spy
      $("section").each(function () {
        let height = $(this).height();
        let offset = $(this).offset().top - 200;
        let top = $(window).scrollTop();
        let id = $(this).attr("id");
  
        if (top > offset && top < offset + height) {
          $(".navbar ul li a").removeClass("active");
          $(".navbar").find(`[href="#${id}"]`).addClass("active");
        }
      });
    });
  
    // smooth scrolling
    $('a[href*="#"]').on("click", function (e) {
      e.preventDefault();
      $("html, body").animate(
        {
          scrollTop: $($(this).attr("href")).offset().top,
        },
        500,
        "linear"
      );
    });
  
    // <!-- emailjs to mail contact form data -->
    function sendEmail() {
      Email.send({
        SecureToken: "8df540e0-7cff-41fe-bff5-4026d8b93ea0",
        To: "akshaysgupta2003@gmail.com",
        From: document.getElementsById("email").value,
        Subject: "New contact form enquiry",
        Body:
          "Name: " +
          document.getElementsById("name").value +
          "<br>Email: " +
          document.getElementsById("email").value +
          "<br>Phone No.: " +
          document.getElementsById("phone").value +
          "<br>Message: " +
          document.getElementsById("message").value,
      }).then((message) => alert("Message sent successfully"));
    }
    // <!-- emailjs to mail contact form data -->
  });
  
  // <!-- typed js effect starts -->
  var typed = new Typed(".typing-text", {
    strings: [
      "frontend development",
      "backend development",
      "web designing",
      "android development",
      "web development",
      "cyber security",
      "block chain",
      "deep learning",
    ],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
  });
  // <!-- typed js effect ends -->
  
  function showProjects(projects) {
    let projectsContainer = document.querySelector("#work .box-container");
    let projectHTML = "";
    projects
      .slice(0, 10)
      .filter((project) => project.category != "android")
      .forEach((project) => {
        projectHTML += `
          <div class="box tilt">
        <img draggable="false" src="/images/${project.image}.jpeg" alt="project">
        <div class="content">
          <div class="tag">
          <h3>${project.name}</h3>
          </div>
          <div class="desc">
            <p>${project.desc}</p>
            <div class="btns">
              <a href="${project.links.view}" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a>
              <a href="${project.links.code}" class="btn" target="_blank">Code <i class="fas fa-code"></i></a>
            </div>
          </div>
        </div>
      </div>`;
      });
    projectsContainer.innerHTML = projectHTML;
  
    // <!-- tilt js effect starts -->
    VanillaTilt.init(document.querySelectorAll(".tilt"), {
      max: 15,
    });
    // <!-- tilt js effect ends -->
  
    /* ===== SCROLL REVEAL ANIMATION ===== */
    const srtop = ScrollReveal({
      origin: "top",
      distance: "80px",
      duration: 1000,
      reset: true,
    });
  
    /* SCROLL PROJECTS */
    srtop.reveal(".work .box", { interval: 200 });
  }
  
  fetchData("projects").then((data) => {
    showProjects(data);
  });
  
  // <!-- tilt js effect starts -->
  VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 15,
  });
  // <!-- tilt js effect ends -->
  
  // disable developer mode
  document.onkeydown = function (e) {
    if (e.keyCode == 123) {
      return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
      return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == "C".charCodeAt(0)) {
      return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) {
      return false;
    }
    if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)) {
      return false;
    }
  };
  
  // Start of Tawk.to Live Chat
  var Tawk_API = Tawk_API || {},
    Tawk_LoadStart = new Date();
  (function () {
    var s1 = document.createElement("script"),
      s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = "https://embed.tawk.to/60df10bf7f4b000ac03ab6a8/1f9jlirg6";
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");
    s0.parentNode.insertBefore(s1, s0);
  })();
  // End of Tawk.to Live Chat
  
  /* ===== SCROLL REVEAL ANIMATION ===== */
  const srtop = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 1000,
    reset: true,
  });
  
  /* SCROLL HOME */
  srtop.reveal(".home .content h3", { delay: 200 });
  srtop.reveal(".home .content p", { delay: 200 });
  srtop.reveal(".home .content .btn", { delay: 200 });
  
  srtop.reveal(".home .image", { delay: 400 });
  srtop.reveal(".home .linkedin", { interval: 600 });
  srtop.reveal(".home .github", { interval: 800 });
  srtop.reveal(".home .twitter", { interval: 1000 });
  srtop.reveal(".home .telegram", { interval: 600 });
  srtop.reveal(".home .instagram", { interval: 600 });
  srtop.reveal(".home .hackerrank", { interval: 600 });
  
  /* SCROLL ABOUT */
  srtop.reveal(".about .content h3", { delay: 200 });
  srtop.reveal(".about .content .tag", { delay: 200 });
  srtop.reveal(".about .content p", { delay: 200 });
  srtop.reveal(".about .content hr", { delay: 200 });
  srtop.reveal(".about .content .resumebtn", { delay: 200 });
  
  /* SCROLL EDUCATION */
  srtop.reveal(".education .box", { interval: 200 });
  
  /* SCROLL PROJECTS */
  srtop.reveal(".work .box", { interval: 200 });
  
  /* SCROLL EXPERIENCE */
  srtop.reveal(".experience .timeline", { delay: 400 });
  srtop.reveal(".experience .timeline .container", { interval: 400 });
  
  /* SCROLL CONTACT */
  srtop.reveal(".contact .container", { delay: 400 });
  srtop.reveal(".contact .container .form-group", { delay: 400 });