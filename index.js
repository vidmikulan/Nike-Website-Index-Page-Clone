window.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");
  //   AFTER DOM FULLY LOADED

  console.log("Window size: " + document.documentElement.clientWidth);
  let mediaBreakpointSize = 940;
  if (document.documentElement.clientWidth > mediaBreakpointSize) {
    // HEADER SECTION
    // ---------------------------------------------------------
    var header = document.querySelector(".header");
    var hiddenDivs = document.querySelectorAll(".hidden-header-div");
    var headerLinks = document.querySelectorAll("#header-main-link-li");

    window.onload = function () {
      header.style.position = "sticky";
      header.style.transition = "0.3s";

      header.style.top = "-60px";
      var time = setTimeout(function () {
        header.style.top = "0px";
        header.style.transition = "0.3s";
      }, 50);
    };

    window.onscroll = function (e) {
      // print "false" if direction is down and "true" if up
      if (!(this.oldScroll > this.scrollY)) {
        console.log("down");
        if (header.style.top == "0px") {
          header.style.top = "0px";
          var time = setTimeout(function () {
            header.style.top = "-100px";
            header.style.transition = "0.3s";
          }, 50);
          var time1 = setTimeout(function () {
            header.style.position = "static";
          }, 300);
        }

        // header.style.transition = "0.3s";
        // header.style.top = "-100px";
      } else if (this.oldScroll > this.scrollY) {
        console.log("up");
        if (header.style.top != "0px") {
          header.style.position = "sticky";
          header.style.transition = "0.3s";

          header.style.top = "-60px";
          var time = setTimeout(function () {
            header.style.top = "0px";
            header.style.transition = "0.3s";
          }, 50);
        }
      }
      this.oldScroll = this.scrollY;
    };

    for (let x = 0; x < headerLinks.length; x++) {
      headerLinks[x].addEventListener("mouseover", function () {
        if (header.style.position == "sticky") {
          headerLinks[x].children[1].style.top = "60px";
          headerLinks[x].children[1].style.transition = "0.3s";
        }
      });
      headerLinks[x].addEventListener("mouseleave", function () {
        headerLinks[x].children[1].style.top = "-500px";
        headerLinks[x].children[1].style.transition = "0.3s";
      });
    }
    // -------------------------------------------------------------------------------
    // END OF HEADER SECTION

    // REKLAMA SECTION
    // ---------------------------------------------------------------------------
    var reklama1 = document.querySelector(".rek-reklama1");
    var reklama2 = document.querySelector(".rek-reklama2");
    var reklamaInterval = setInterval(function () {
      if (reklama1.classList.contains("active")) {
        reklama1.style.left = "-200vw";
        reklama1.classList.remove("active");
        // reklama1.style.removeProperty("left");
        // reklama1.style.removeProperty("margin");
        reklama1.style.transition = "0.6s";

        reklama2.style.right = "0";
        reklama2.style.left = "0";
        reklama2.style.margin = "0 auto";
        reklama2.style.transition = "0.6s";
      } else {
        reklama1.classList.add("active");
        reklama1.style.left = "0";
        reklama2.style.right = "-200vw";
      }
    }, 6000);

    // ---------------------------------------------------------------------------
    // END OF REKLAMA SECTION
    // SLIDE UNDER MAIN
    var firstSLiderCells = document.querySelectorAll(".carousel-cell");

    console.log(firstSLiderCells[0].children[2]);
    var firstSLiderCellsInterval = setInterval(function () {
      for (let x = 0; x < firstSLiderCells.length; x++) {
        firstSLiderCells[x].children[1].style.opacity = "0";
        firstSLiderCells[x].children[1].style.transition = "0.4s";
        firstSLiderCells[x].children[2].style.opacity = "0";
        firstSLiderCells[x].children[2].style.transition = "0.4s";
      }
      for (let x = 0; x < firstSLiderCells.length; x++) {
        if (firstSLiderCells[x].classList.contains("is-selected")) {
          firstSLiderCells[x].children[1].style.opacity = "1";
          firstSLiderCells[x].children[1].style.transition = "0.4s";
          firstSLiderCells[x].children[2].style.opacity = "1";
          firstSLiderCells[x].children[2].style.transition = "0.4s";
        }
      }
    }, 50);

    // SLIDE 2 SECTION
    var slide2cont = 0;
    var slide2main = document.querySelector(".ss-main-slide");
    var left;
    var z;
    var rightClick = 0;
    var leftClick = 0;
    document
      .querySelector(".ss-first-row-button-right")
      .addEventListener("click", function () {
        document.querySelector(".ss-first-row-button-left").disabled = false;
        if (slide2cont == 0) {
          slide2main.style.left = "-32.8%";
          slide2main.style.transition = "0.5s ease";
          slide2cont++;

          rightClick++;
          console.log(rightClick);
        } else {
          z = slide2main.style.left;
          z = z.split("");
          z.pop();
          z = z.join("");
          z = z - 32.8;

          slide2main.style.left = z + "%";

          rightClick++;
          console.log(rightClick);

          if (rightClick == 4) {
            document.querySelector(
              ".ss-first-row-button-right"
            ).disabled = true;
          }
        }
      });

    document
      .querySelector(".ss-first-row-button-left")
      .addEventListener("click", function () {
        document.querySelector(".ss-first-row-button-right").disabled = false;
        rightClick--;
        z = slide2main.style.left;
        console.log(z);
        z = z.split("");
        z.pop();
        z = z.join("");
        z = Number(z) + Number(32.8);
        console.log(z);
        if (z == 0) {
          document.querySelector(".ss-first-row-button-left").disabled = true;
        }
        slide2main.style.left = z + "%";
      });

    // ?END OF SLIDE 2 SECTION

    // FIRST FOOTER
    var ffcontainer = document.querySelector(".first-footer-container");
    var ffcontainerDisableds = document.querySelectorAll(".ff-div-disabled");

    ffcontainer.addEventListener("mouseover", function () {
      for (let x = 0; x < ffcontainerDisableds.length; x++) {
        ffcontainerDisableds[x].style.opacity = "1";
        ffcontainerDisableds[x].style.transition = "0.4s";
        ffcontainer.style.height = "620px";
        ffcontainer.style.transition = "0.5s";
      }
    });
    ffcontainer.addEventListener("mouseleave", function () {
      for (let x = 0; x < ffcontainerDisableds.length; x++) {
        ffcontainerDisableds[x].style.opacity = "0";
        ffcontainerDisableds[x].style.transition = "0.4s";
        ffcontainer.style.height = "250px";
        ffcontainer.style.transition = "0.4s";
      }
    });
    // FIRST FOOTER
    // -----------------------------------------------------------------

    // BUGS
  } else {
    // MOBILE JS -------------------------------------------------------------------
    // ------------------------------------------------------------------------------
    // HEADER SECTION
    // ---------------------------------------------------------
    var header = document.querySelector(".header");
    var hiddenDivs = document.querySelectorAll(".hidden-header-div");
    var headerLinks = document.querySelectorAll("#header-main-link-li");

    window.onload = function () {
      header.style.position = "sticky";
      header.style.transition = "0.3s";

      header.style.top = "-60px";
      var time = setTimeout(function () {
        header.style.top = "0px";
        header.style.transition = "0.3s";
      }, 50);
    };

    window.onscroll = function (e) {
      // print "false" if direction is down and "true" if up
      if (!(this.oldScroll > this.scrollY)) {
        console.log("down");
        if (header.style.top == "0px") {
          header.style.top = "0px";
          var time = setTimeout(function () {
            header.style.top = "-100px";
            header.style.transition = "0.3s";
          }, 50);
          var time1 = setTimeout(function () {
            header.style.position = "static";
          }, 300);
        }

        // header.style.transition = "0.3s";
        // header.style.top = "-100px";
      } else if (this.oldScroll > this.scrollY) {
        console.log("up");
        if (header.style.top != "0px") {
          header.style.position = "sticky";
          header.style.transition = "0.3s";

          header.style.top = "-60px";
          var time = setTimeout(function () {
            header.style.top = "0px";
            header.style.transition = "0.3s";
          }, 50);
        }
      }
      this.oldScroll = this.scrollY;
    };

    for (let x = 0; x < headerLinks.length; x++) {
      headerLinks[x].addEventListener("mouseover", function () {
        if (header.style.position == "sticky") {
          headerLinks[x].children[1].style.top = "60px";
          headerLinks[x].children[1].style.transition = "0.3s";
        }
      });
      headerLinks[x].addEventListener("mouseleave", function () {
        headerLinks[x].children[1].style.top = "-500px";
        headerLinks[x].children[1].style.transition = "0.3s";
      });
    }

    // HEADER BUTTONS MOBILE
    var mobileSearchDiv = document.querySelector("#main-search-div-div");
    var hiddenSearch = document.querySelector(".mobile-hidden-search-div");
    var htmlBody = document.querySelector("body");
    var htmlBodyhtml = document.querySelector("html");
    var mobileSearchCancel = document.querySelector(".mobile-search-cancel");
    var mobileSearchUlHeader = document.querySelector("#mhs-links-header");
    var mobileSearchInputTExt = document.querySelector(".mobile-hsit");
    var hiddenSearchQuickLinks = document.querySelector("#mhs-hidden-ul");
    hiddenSearchQuickLinks = hiddenSearchQuickLinks.children;
    var mobileBarsMenuDiv = document.querySelector(
      ".mobile-hidden-bars-menu-div"
    );
    var mobileBarsButton = document.querySelector("#haeder-b-button");

    mobileSearchDiv.addEventListener("click", function () {
      document.querySelector(".header").style.zIndex = "-1";

      // -----
      htmlBody.style.height = "100%";
      htmlBody.style.overflowY = "hidden";

      htmlBodyhtml.style.height = "100%";
      htmlBodyhtml.style.overflowY = "hidden";
      // hidden search div
      hiddenSearch.style.display = "block";
      var t = setTimeout(function () {
        hiddenSearch.style.left = "0px";
        hiddenSearch.style.transition = "0.4s";
      }, 10);

      var t = setTimeout(function () {
        mobileSearchCancel.style.transform = "scale(1)";
        mobileSearchCancel.style.transition = "transform 0.4s";
      }, 300);

      // list
      var t = setTimeout(function () {
        mobileSearchUlHeader.style.opacity = "1";
        mobileSearchUlHeader.style.transition = "opacity 0.5s";
      }, 300);

      var cv = 400;
      for (let x = 0; x < hiddenSearchQuickLinks.length; x++) {
        var t = setTimeout(function () {
          hiddenSearchQuickLinks[x].style.opacity = "1";
          hiddenSearchQuickLinks[x].style.transition = "1s";
        }, cv);
        cv += 30;
      }

      // searchbar
      mobileSearchInputTExt.style.width = "100%";
      var t = setTimeout(function () {
        mobileSearchInputTExt.focus();
      }, 300);
    });

    mobileSearchCancel.addEventListener("click", function () {
      var ttt = setTimeout(function () {
        document.querySelector(".header").style.zIndex = "999";
      }, 200);

      // --
      htmlBody.style.removeProperty("height");
      htmlBody.style.overflowY = "visible";

      htmlBodyhtml.style.removeProperty("height");
      htmlBodyhtml.style.overflowY = "visible";
      // hidden search div
      hiddenSearch.style.left = "100%";
      hiddenSearch.style.transition = "0.4s";
      var t = setTimeout(function () {
        hiddenSearch.style.display = "none";
      }, 300);

      mobileSearchCancel.style.transform = "scale(0.2)";
      mobileSearchCancel.style.transition = "transform 0.4s";
      // close links
      for (let x = 0; x < hiddenSearchQuickLinks.length; x++) {
        var t = setTimeout(function () {
          hiddenSearchQuickLinks[x].style.opacity = "0";
          hiddenSearchQuickLinks[x].style.transition = "1s";
        }, 30);
      }
      mobileSearchUlHeader.style.opacity = "0";
      mobileSearchUlHeader.style.transition = "opacity 0.5s";
    });

    // BARS BUTTON
    // ====================================================
    var overlapDIv = document.querySelector(".hidden-overlap-div");
    console.log(overlapDIv);
    mobileBarsButton.addEventListener("click", function () {
      htmlBody.style.height = "100%";
      htmlBody.style.overflowY = "hidden";

      htmlBodyhtml.style.height = "100%";
      htmlBodyhtml.style.overflowY = "hidden";
      mobileBarsMenuDiv.style.display = "block";
      var t = setTimeout(function () {
        mobileBarsMenuDiv.style.right = "0px";
        mobileBarsMenuDiv.style.transition = "right 0.3s";
      }, 10);
      var t = setTimeout(function () {
        overlapDIv.style.opacity = "1";
        overlapDIv.style.transition = "opacity 0.3s";
      }, 150);
    });

    var barsHiddenCloseButtonMenu = document.querySelector("#hidden-bars-x");
    barsHiddenCloseButtonMenu.addEventListener("click", function () {
      // ---
      overlapDIv.style.opacity = "0";
      overlapDIv.style.transition = "opacity 0.3s";
      htmlBody.style.removeProperty("height");
      htmlBody.style.overflowY = "visible";

      htmlBodyhtml.style.removeProperty("height");
      htmlBodyhtml.style.overflowY = "visible";
      mobileBarsMenuDiv.style.right = "-300px";
      mobileBarsMenuDiv.style.transition = "right 0.3s";
      var t = setTimeout(function () {
        mobileBarsMenuDiv.style.display = "none";
      }, 300);
    });

    overlapDIv.addEventListener("click", function () {
      // --
      overlapDIv.style.opacity = "0";
      overlapDIv.style.transition = "opacity 0.3s";
      htmlBody.style.removeProperty("height");
      htmlBody.style.overflowY = "visible";

      htmlBodyhtml.style.removeProperty("height");
      htmlBodyhtml.style.overflowY = "visible";
      mobileBarsMenuDiv.style.right = "-300px";
      mobileBarsMenuDiv.style.transition = "right 0.3s";
      var t = setTimeout(function () {
        mobileBarsMenuDiv.style.display = "none";
      }, 300);
    });
    // -------------------------------------------------------------------------------
    // END OF HEADER SECTION

    // REKLAMA SECTION
    // ---------------------------------------------------------------------------
    var reklama1 = document.querySelector(".rek-reklama1");
    var reklama2 = document.querySelector(".rek-reklama2");
    var reklamaInterval = setInterval(function () {
      if (reklama1.classList.contains("active")) {
        reklama1.style.left = "-200vw";
        reklama1.classList.remove("active");
        // reklama1.style.removeProperty("left");
        // reklama1.style.removeProperty("margin");
        reklama1.style.transition = "0.6s";

        reklama2.style.right = "0";
        reklama2.style.left = "0";
        reklama2.style.margin = "0 auto";
        reklama2.style.transition = "0.6s";
      } else {
        reklama1.classList.add("active");
        reklama1.style.left = "0";
        reklama2.style.right = "-200vw";
      }
    }, 6000);
    // ---------------------------------------------------------------------------
    // END OF REKLAMA SECTION

    // SLIDE UNDER MAIN
    var firstSLiderCells = document.querySelectorAll(".carousel-cell");

    console.log(firstSLiderCells[0].children[2]);
    var firstSLiderCellsInterval = setInterval(function () {
      for (let x = 0; x < firstSLiderCells.length; x++) {
        firstSLiderCells[x].children[1].style.opacity = "0";
        firstSLiderCells[x].children[1].style.transition = "0.4s";
        firstSLiderCells[x].children[2].style.opacity = "0";
        firstSLiderCells[x].children[2].style.transition = "0.4s";
      }
      for (let x = 0; x < firstSLiderCells.length; x++) {
        if (firstSLiderCells[x].classList.contains("is-selected")) {
          firstSLiderCells[x].children[1].style.opacity = "1";
          firstSLiderCells[x].children[1].style.transition = "0.4s";
          firstSLiderCells[x].children[2].style.opacity = "1";
          firstSLiderCells[x].children[2].style.transition = "0.4s";
        }
      }
    }, 50);
    // -----------------------------------------------------------------

    // slide1 section
    var slider1 = document.querySelector(".slider1");
    var hiddenUnderMainSliderDiv = document.querySelector(
      ".hidden-slideshow-under-main"
    );

    slider1.oninput = function () {
      if (slider1.value == 0) {
        hiddenUnderMainSliderDiv.style.marginLeft = "0";
        hiddenUnderMainSliderDiv.style.transition = "0.1s";
      } else {
        hiddenUnderMainSliderDiv.style.marginLeft = "-" + slider1.value + "px";
        hiddenUnderMainSliderDiv.style.transition = "0.1s";
      }
    };

    // slide1 drag to scroll

    // SWIPE DETECTOR
    // ---------------------------------------------------------------------
    let touchstartX = 0;
    let touchendX = 0;

    function checkDirection() {
      if (touchendX < touchstartX) {
        slider1.style.opacity = 0;
        slider1.style.transition = "0.5s";
        hiddenUnderMainSliderDiv.style.removeProperty("margin-left");
      }
      if (touchendX > touchstartX) {
        slider1.style.opacity = 0;
        slider1.style.transition = "0.5s";
        hiddenUnderMainSliderDiv.style.removeProperty("margin-left");
      }
    }

    hiddenUnderMainSliderDiv.addEventListener("touchstart", (e) => {
      touchstartX = e.changedTouches[0].screenX;
    });

    hiddenUnderMainSliderDiv.addEventListener("touchend", (e) => {
      touchendX = e.changedTouches[0].screenX;
      checkDirection();
    });
    // SWIPE DETECTOR
    // ---------------------------------------------------------------------

    // SLIDE 2 SECTION
    var slide2cont = 0;
    var slide2main = document.querySelector(".ss-main-slide");
    var left;
    var z;
    var rightClick = 0;
    var leftClick = 0;
    document
      .querySelector(".ss-first-row-button-right")
      .addEventListener("click", function () {
        document.querySelector(".ss-first-row-button-left").disabled = false;
        if (slide2cont == 0) {
          slide2main.style.left = "-71.4%";
          slide2main.style.transition = "0.5s ease";
          slide2cont++;

          rightClick++;
          console.log(rightClick);
        } else {
          z = slide2main.style.left;
          z = z.split("");
          z.pop();
          z = z.join("");
          z = z - 71.4;

          slide2main.style.left = z + "%";

          rightClick++;
          console.log(rightClick);

          if (rightClick == 6) {
            document.querySelector(
              ".ss-first-row-button-right"
            ).disabled = true;
          }
        }
      });

    document
      .querySelector(".ss-first-row-button-left")
      .addEventListener("click", function () {
        document.querySelector(".ss-first-row-button-right").disabled = false;
        rightClick--;
        z = slide2main.style.left;
        console.log(z);
        z = z.split("");
        z.pop();
        z = z.join("");
        z = Number(z) + Number(71.4);
        console.log(z);
        if (z == 0) {
          document.querySelector(".ss-first-row-button-left").disabled = true;
        }
        slide2main.style.left = z + "%";
      });
    // ?END OF SLIDE 2 SECTION

    // FIRST FOOTER
    var ffcontainer = document.querySelector(".first-footer-container");
    var ffcontainerDisableds = document.querySelectorAll(".ff-div-disabled");

    ffcontainer.addEventListener("mouseover", function () {
      for (let x = 0; x < ffcontainerDisableds.length; x++) {
        ffcontainerDisableds[x].style.opacity = "1";
        ffcontainerDisableds[x].style.transition = "0.4s";
        ffcontainer.style.height = "690px";
        ffcontainer.style.transition = "0.5s";
      }
    });
    ffcontainer.addEventListener("mouseleave", function () {
      for (let x = 0; x < ffcontainerDisableds.length; x++) {
        ffcontainerDisableds[x].style.opacity = "0";
        ffcontainerDisableds[x].style.transition = "0.4s";
        ffcontainer.style.height = "250px";
        ffcontainer.style.transition = "0.4s";
      }
    });
    // FIRST FOOTER
    // First footer moblie
    var ffAccItems = document.querySelectorAll(".ff-accordion-item");
    for (let x = 0; x < ffAccItems.length; x++) {
      ffAccItems[x].addEventListener("click", function () {
        if (!ffAccItems[x].classList.contains("active")) {
          for (let y = 0; y < ffAccItems.length; y++) {
            ffAccItems[y].classList.remove("active");
            ffAccItems[y].nextElementSibling.style.height = "0";
            ffAccItems[y].nextElementSibling.style.transition = "0.5s";
          }

          var h = ffAccItems[x].nextElementSibling.dataset.h;
          ffAccItems[x].nextElementSibling.style.height = h;

          console.log(h);
          ffAccItems[x].classList.add("active");
        } else {
          for (let y = 0; y < ffAccItems.length; y++) {
            ffAccItems[y].classList.remove("active");
            ffAccItems[y].nextElementSibling.style.height = "0";
          }
          // ffAccItems[x].nextElementSibling.style.height = "0";
          // ffAccItems[x].classList.remove("active");
        }
      });
    }
    // First footer moblie

    // FOOTER MOBILE
    var footerItems = document.querySelectorAll(".fc-hidden-item");
    for (let x = 0; x < footerItems.length; x++) {
      footerItems[x].addEventListener("click", function () {
        if (!footerItems[x].classList.contains("active")) {
          for (let y = 0; y < footerItems.length; y++) {
            footerItems[y].classList.remove("active");
            footerItems[y].nextElementSibling.style.height = 0;
            footerItems[y].children[1].classList.remove("fa-minus");
            footerItems[y].children[1].classList.add("fa-plus");
            footerItems[y].nextElementSibling.style.borderBottom =
              "1px solid rgba(121, 121, 121, 0.0)";
          }
          footerItems[x].classList.add("active");
          var nexElHeight = footerItems[x].nextElementSibling.dataset.h;
          footerItems[x].nextElementSibling.style.height = nexElHeight;
          footerItems[x].nextElementSibling.style.borderBottom =
            "1px solid rgba(121, 121, 121, 0.3)";
          footerItems[x].children[1].classList.remove("fa-plus");
          footerItems[x].children[1].classList.add("fa-minus");
        } else {
          for (let y = 0; y < footerItems.length; y++) {
            footerItems[y].classList.remove("active");
          }
          footerItems[x].nextElementSibling.style.height = 0;
          footerItems[x].children[1].classList.remove("fa-minus");
          footerItems[x].children[1].classList.add("fa-plus");
          footerItems[x].nextElementSibling.style.borderBottom =
            "1px solid rgba(121, 121, 121, 0.0)";
        }
      });
    }

    // FOOTER MOBILE
  }
});
