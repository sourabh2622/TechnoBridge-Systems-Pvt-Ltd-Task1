
let menuItems = document.querySelectorAll(".left-sidebar ul li");

menuItems.forEach(item => {
    item.addEventListener("click", function () {
        menuItems.forEach(li => li.classList.remove("active"));
        this.classList.add("active");
    });
});



$(document).ready(function () {
    $(window).on("scroll", function () {
        var scrollPos = $(window).scrollTop();

        $(".left-sidebar a").each(function () {
            var section = $($(this).attr("href"));
            if (section.length) {
                var sectionTop = section.offset().top - 250;
                var sectionBottom = sectionTop + section.outerHeight();

                if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
                    $(".left-sidebar li").removeClass("active");
                    $(this).find("li").addClass("active");
                }
            }
        });


    });
});




// =================== Mobile select dropdown sidebar ======================

document.getElementById("mobileDropdown").addEventListener("change", function () {
    var selectedValue = this.value;
    var targetSection = document.querySelector(selectedValue);

    if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
    }
});
