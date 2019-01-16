    function showThumbnail(imgs) {
        $("#first-image").hide();

        $("#first-caption").hide();


        var expandThumbnail = document.getElementById("expandedThumbnail");

        var addText = document.getElementById("itemCaption");

        expandThumbnail.src = imgs.src;

        addText.innerHTML = imgs.alt;

        expandThumbnail.parentElement.style.display = "block";
    }