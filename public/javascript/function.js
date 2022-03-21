var ajaxLoading = false;

$(document).ready(
  function(){
    $(".initialPicture").each(function(index){
      var data=$(this).attr('main-media');
      var mainList = $(this).attr('media-list');
      var  initalPicture = JSON.parse(data);
      if(initalPicture.isVid){
        renderVideo(`https://drive.google.com/file/d/${initalPicture.driveID}/preview`,`project-${index}`);
      }
      else{
        renderImage(`https://drive.google.com/uc?id=${initalPicture.driveID}`,`project-${index}`,mainList,initalPicture.driveID);
      }
    });
    $(".requiredField").each(function (){
    this.value = $.trim(this.value);
    });

    $(window).on("resize",function(){
      if($(window).width() > 999){
        if($(".mobileNavScreen").is(".active")){
          $(".mobileNavScreen").removeClass("active").addClass("inactive");
        }
      }
    });

    var image = $(".projectBox");
    var smallNav= $(".smallNav");
    var smallNavVisible = false;
    $(smallNav[0]).click(function(){
      if($(".mobileNavScreen").is(".inactive")){
        $(".mobileNavScreen").removeClass("inactive").addClass("active");
        $(".mobileNav").addClass("mobileNavSlideIn");
      }
      else if($(".mobileNavScreen").is(".active")){
        $(".mobileNavScreen").removeClass("active").addClass("inactive");
        $(".mobileNav").removeClass("mobileNavSlideIn");
      }
    });

    $(".imagePreviewBox").each(function(){
      $(this).hover(function(){
        $(this).find('.hoverGlow').removeClass('glowOpacityNone').addClass('glowOpacityFull');
        $(this).find('.expandIndicator').removeClass('inactive').addClass('active');
      },function(){
        $(this).find('.hoverGlow').removeClass('glowOpacityFull').addClass('glowOpacityNone');
        $(this).find('.expandIndicator').removeClass('active').addClass('inactive');
      });
    });
    grecaptcha.ready(function() {
        grecaptcha.execute('6LfKyM0eAAAAAPh2PMaD6Il3ii43TGWbHeFpBRWX', {action: 'submit'})
            .then(function(token) {
              $(".requiredField").on("keyup",function(){
                var empty = false;
                $(".requiredField").each(function() {
                    if ($(this).val().trim() == '') {
                        empty = true;
                    }
                });
                if(empty){
                  $("#submitFormButton").removeClass("flavorColor");
                  $("#submitFormButton").removeClass("g-recaptcha");
                  $("#submitFormButton").removeAttr("data-sitekey").removeAttr("data-callback").removeAttr("data-action");
                  $("#submitFormButton").removeClass("disabled");
                  $("#submitFormButton").addClass("disabled");
                  $("#submitFormButton").off('click');

                }
                else{
                  $("#submitFormButton").removeClass("disabled");
                  $("#submitFormButton").addClass("flavorColor");
                  $("#submitFormButton").on('click',function(){
                    onSubmit(token);
                  });
                  $("#submitFormButton").attr("data-sitekey","6LfKyM0eAAAAAPh2PMaD6Il3ii43TGWbHeFpBRWX").attr("data-callback","onSubmit").attr("data-action","submit");
                }
              });
            });
    });
  }
);
//ReCaptcha code
function onSubmit(token) {
  if(!ajaxLoading){
    ajaxLoading = true;
    $("#userInputFormBox").fadeOut(700,function(){
      ajaxLoading = false;
      $("#userInputFormBox").removeClass("active").addClass("inactive")
      $(` <div id="loadingWheel" class="loadingWheel">
          <svg class="dimensionFit" id="Component_22_1" data-name="Component 22 – 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 552 552">
      <path id="Exclusion_3" data-name="Exclusion 3" d="M276,552a278.046,278.046,0,0,1-55.624-5.607,274.488,274.488,0,0,1-98.691-41.529,276.807,276.807,0,0,1-100-121.432A274.614,274.614,0,0,1,5.607,331.624a278.692,278.692,0,0,1,0-111.247,274.486,274.486,0,0,1,41.529-98.691,276.806,276.806,0,0,1,121.432-100A274.611,274.611,0,0,1,220.377,5.607a278.692,278.692,0,0,1,111.247,0,274.484,274.484,0,0,1,98.69,41.529,276.806,276.806,0,0,1,100,121.432,274.612,274.612,0,0,1,16.082,51.808,278.693,278.693,0,0,1,0,111.247,274.486,274.486,0,0,1-41.529,98.69,276.806,276.806,0,0,1-121.432,100,274.613,274.613,0,0,1-51.808,16.082A278.043,278.043,0,0,1,276,552Zm0-530C135.944,22,22,135.944,22,276S135.944,530,276,530,530,416.056,530,276,416.056,22,276,22Z" transform="translate(0)" fill="#1e8f35"/>
      <path id="Intersection_1" data-name="Intersection 1" d="M208,36.441q6.159-1.562,12.377-2.834a278.707,278.707,0,0,1,111.247,0Q336.83,34.672,342,35.942V58.694a254.806,254.806,0,0,0-134,.548Z" transform="translate(0.5 -28)"/>
      </svg>
        </div>`).appendTo($(".confirmationPage")[0]).hide().fadeIn(700,function(){
          $("#userInputFormBox").addClass("glowOpacityNone").removeClass("active").addClass("inactive");
          $.ajax({
            type:"POST",
            url:"/verify",
            data:{
              token:token
            }
          }).done(function(response){
            ajaxLoading = false;
            var googleResponse = response.google_response;
            if(googleResponse.action == 'submit' && googleResponse.success == true && googleResponse.score > 0.5){
              sendForm();
            }
            else{
              renderEmailSentResponse(false);
            }
          });
        });

    });
  }
}
function renderEmailSentResponse(sent){
  $("#loadingWheel").fadeOut(700,function(){
    $($(".confirmationPage")[0]).empty();
    $( sent ? `  <p class ="bodyLarge1">Thank you!</p>
      <p class="bodyLarge3">Your response has been sent!</p>
      <p class="bodyLarge5">You will get a response from me soon!</p>`:`<p class="bodyLarge5">A problem was encountered when sending your email. Please refresh the page to try again.</p>`).appendTo($(".confirmationPage")[0]).hide().fadeIn(700);
  });
}
//End of ReCaptcha Code
function scrollScreen(id,mobile){
  var offset = 30; //Offset of 20px

$('html, body').animate({
    scrollTop: $(`#${id}`).offset().top + offset
}, 2000);
if(mobile){
  $(".mobileNavScreen").removeClass("active").addClass("inactive");
}
}
function sendForm(){
  if(!ajaxLoading){
    ajaxLoading = true;
    $.ajax({
      type:"POST",
      url:"/send",
      data:$("#requestForm").serializeArray()
    }).done(function(response){
      ajaxLoading = false;
      renderEmailSentResponse(true);
    });
  }
}
function renderImage(image,id,list){
  var divID = "#"+id;
  $(divID)[0].innerHTML="";
  $(divID)[0].innerHTML += `<div class="hoverGlow roundedBox glowOpacityNone"> </div>`;
  $(divID)[0].innerHTML += `<div class ="skillIconContainer expandIndicator inactive">
                            <svg id="_3994367_expand_full_fullscreen_maximize_screen_icon" data-name="3994367_expand_full_fullscreen_maximize_screen_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96">
    <path id="Path_107" data-name="Path 107" d="M30,0H6A6,6,0,0,0,0,6V30a6,6,0,1,0,12,0V12H30A6,6,0,0,0,30,0Z"/>
    <path id="Path_108" data-name="Path 108" d="M90,0H66a6,6,0,1,0,0,12H84V30a6,6,0,0,0,12,0V6a6,6,0,0,0-6-6Z"/>
    <path id="Path_109" data-name="Path 109" d="M30,84H12V66A6,6,0,1,0,0,66V90a6,6,0,0,0,6,6H30a6,6,0,0,0,0-12Z"/>
    <path id="Path_110" data-name="Path 110" d="M90,60a6,6,0,0,0-6,6V84H66a6,6,0,0,0,0,12H90a6,6,0,0,0,6-6V66a6,6,0,0,0-6-6Z"/>
  </svg>
  </div>`;
  // onclick="window.enlargeMedia('${image}')"
  $(divID)[0].innerHTML +=  `<img src="${image}" class ="dimensionFit clickableElementShadow roundedBox bigScreenImage buttonHover"></img>`
  $(divID)[0].innerHTML += `<img src="${image}"  class =" dimensionFit clickableElementShadow roundedBox smallScreenImage buttonHover"></img>`
  $('body').off('click',`${divID}`);
  $('body').on('click',`${divID}`,function(){
    enlargeMedia(image,list);
  });
}
function renderVideo(video,id){
  var divID = "#"+id;
  $(divID)[0].innerHTML="";
  $(divID)[0].innerHTML += `<iframe src="${video}" width="640" height="480" class="bigScreenImage dimensionFit"></iframe>`
  $(divID)[0].innerHTML += `<iframe src="${video}" width="640" height="480" class="smallScreenImage dimensionFit"></iframe>`
}

function getMediaIndex(link,mediaList){
  var currentIndex;
  if(link.includes("https://drive.google.com/uc?id=")){
  currentIndex = mediaList.findIndex(function(media,index){
      if(media.driveID == link.split("=").pop()){
        return true;
      }
    });
  }
  else{
    currentIndex = mediaList.findIndex(function(media,index){
        if(media.driveID == link.split("d/").pop().split("/preview").shift()){
          return true;
        }
      });
  }
  return currentIndex;
}

function cycleMedia(mediaList,direction){
  var src = $("#enlargedMediaContent").attr("src");
  var currentIndex = getMediaIndex(src,mediaList);
  var nextIndex = (currentIndex + direction)%mediaList.length;
  if(nextIndex < 0){
    nextIndex = 1;
  }
  $(".imageContainer").empty();
  if(mediaList[nextIndex].isVid){
    $(`<iframe src="https://drive.google.com/file/d/${mediaList[nextIndex].driveID}/preview" width="820" height="480" id="enlargedMediaContent"></iframe>`).appendTo(".imageContainer");
  }
  else{
    $(`<img src="https://drive.google.com/uc?id=${mediaList[nextIndex].driveID}" alt="Maynooth Wireframe" class ="expandedImage" id="enlargedMediaContent"></img>`).appendTo(".imageContainer");
  }
  $("#mediaTitle").text(`Media ${nextIndex+1}`);
}
function enlargeMedia(media,mediaList){
  var mediaListParse = typeof mediaList === 'string'? mediaList: JSON.stringify(mediaList);
  var currentIndex = getMediaIndex(media,JSON.parse(mediaListParse))+1;
  var htmlTemplate = $(`
  <div class="expandedImageView overlayOrder">
    <div class="backgroundBlur"></div>
    <div class="expandedContentContainer">
      <div class="exitContainer overlayOrder">
      <div class ="exitContainerButton">
      <div class="skillIconContainer buttonHover" onclick="removeOverlay('.expandedImageView')">
        <svg  id="_352270_close_icon" data-name="352270_close_icon" xmlns="http://www.w3.org/2000/svg" width="92" height="92" viewBox="0 0 92 92">
    <path id="Path_33" data-name="Path 33" d="M63.667,15.424,58.243,10,36.833,31.409,15.424,10,10,15.424,31.409,36.833,10,58.242l5.424,5.424L36.833,42.257,58.243,63.667l5.424-5.424L42.257,36.833Z" transform="translate(9.167 9.167)" fill="#fff"/>
    <path id="Path_34" data-name="Path 34" d="M0,0H92V92H0Z" fill="none"/>
  </svg>
      </div>
      </div>
      <div class="imageInfo">
      <div class="skillIconContainer buttonHover imageNavMenu mediaCycleHoverBackwards" onclick=cycleMedia(${mediaListParse},-1)>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.85 24.75" class="blackBackgroundIcon">
<path id="_211686_back_arrow_icon" data-name="211686_back_arrow_icon" d="M174.85,98.506,172.352,96,160,108.375h0l12.352,12.375,2.5-2.506L165,108.375Z" transform="translate(-160 -96)"/>
</svg>
      </div>
      <p class="imageNavMenu blackBackgroundText" id="mediaTitle">Media ${currentIndex}</p>
      <div class="skillIconContainer buttonHover imageNavMenu mediaCycleHoverForwards" onclick=cycleMedia(${mediaListParse},1)>
      <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 14.85 24.75" class="blackBackgroundIcon">
<path id="_211686_back_arrow_icon" data-name="211686_back_arrow_icon" d="M160,98.506,162.5,96l12.352,12.375h0L162.5,120.75l-2.5-2.506,9.846-9.869Z" transform="translate(-160 -96)"/>
</svg>
      </div>
      </div>
      </div>
      <div class="imageContainer overlayOrder">
        <img src="${media}" alt="Maynooth Wireframe" class ="expandedImage" id="enlargedMediaContent"></img>
      </div>
    </div>
  </div>`).prependTo("body");
  // var image = $('<img>').attr('src', "");
  // $("body")[0].prepend($('<div>').html());
}
function convertHTMLEntity(text){
const span = document.createElement('span');

return text
.replace(/&[#A-Za-z0-9]+;/gi, (entity,position,text)=> {
    span.innerHTML = entity;
    return span.innerText;
});
}
function renderLink(links){
  var linkList = JSON.parse(String.raw`${links}`);
  var linkBlocks = "";
  linkList.forEach(function(link){
    var convert = convertHTMLEntity(link.linkIcon)
    var icon = $(convert);
    icon.addClass('achievementIcon whiteBackgroundIcon dimensionFit');
    linkBlocks += `<li class="linkCell">
                        <div class="linkItemContainer">
                          <a href="${link.link}" class="noLinkDecoration" rel="noreferrer noopener" target="_blank">
                            <div class="linkFlexBox">
                              <div class="linkIcon centerDiv">
                              ${icon.get(0).outerHTML}
                              </div>
                              <div class="linkName">
                                <p class="whiteBackgroundText">${link.linkName}</p>
                              </div>
                              <div class="forward centerDiv">
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.85 24.75" class="achievementIcon whiteBackgroundIcon dimensionFit">
          <path id="_211686_back_arrow_icon" data-name="211686_back_arrow_icon" d="M160,98.506,162.5,96l12.352,12.375h0L162.5,120.75l-2.5-2.506,9.846-9.869Z" transform="translate(-160 -96)"/>
        </svg>
                              </div>
                            </div>
                          </a>
                        </div>
                    </li>`
  });
  var fullBlock = $(`<div class="expandedImageView overlayOrder">
    <div class="backgroundBlur"></div>
    <div class="expandedContentContainer">
      <div class="linkBoxConstraints overlayOrder">
        <div class="linksContainer infoBlock">
          <div class="linkHeader">
            <div class="linkExit centerDiv">
              <div class="skillIconContainer buttonHover" onclick="removeOverlay('.expandedImageView')">
                <svg  id="_352270_close_icon" data-name="352270_close_icon" xmlns="http://www.w3.org/2000/svg" width="92" height="92" viewBox="0 0 92 92">
            <path id="Path_33" data-name="Path 33" d="M63.667,15.424,58.243,10,36.833,31.409,15.424,10,10,15.424,31.409,36.833,10,58.242l5.424,5.424L36.833,42.257,58.243,63.667l5.424-5.424L42.257,36.833Z" transform="translate(9.167 9.167)" fill="#fff"/>
            <path id="Path_34" data-name="Path 34" d="M0,0H92V92H0Z" fill="none"/>
          </svg>
              </div>
            </div>
              <div class="linkBoxTitle centerDiv">
                <p class ="blackBackgroundText bodyLarge6">Related Links for Project...</p>
              </div>
          </div>
          <div class="linkList">
            <ul>` + linkBlocks + `</ul>
          </div>
        </div>
      </div>
    </div>
  </div>`).prependTo("body");
  // $("body")[0].innerHTML =
  //           fullBlock + $("body")[0].innerHTML;
}
function removeOverlay(element){
  $(element)[0].remove();
}
