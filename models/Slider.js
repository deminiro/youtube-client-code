export default function Slider() {
  async function markUpSlider() {
    document.body.innerHTML += '<div id="slider"></div>';
    const slider = document.getElementById('slider');
    // for swipe per page
    let numForPage = 0;

    slider.style.display = 'flex';
    slider.style.justifyContent = 'center';
    slider.style.marginTop = '10px';
    slider.innerHTML += '<button id="button-prev-twice" class="slider-button"><i class="fas fa-angle-double-left" style="color: white"></i><p id="tooltip-prev-twice" style="position:fixed; display: none; background: yellow;"></p></button>';
    slider.innerHTML += '<button id="button-prev" class="slider-button"><i class="fas fa-chevron-left" style="color: white"></i><p id="tooltip-prev" style="position:fixed; display: none; background: yellow;"></p></button>';
    slider.innerHTML += '<button id="button-current" class="slider-button" style="font-size: 12px"></button>';
    slider.innerHTML += '<button id="button-next" class="slider-button"><i class="fas fa-chevron-right" style="color: white"></i><p id="tooltip-next" style="position:fixed; display: none; background: yellow;"></p></button>';

    const sliderButton = Array.from(document.getElementsByClassName('slider-button'));
    sliderButton.forEach((e) => {
      e.style.borderRadius = '100%';
      e.style.width = '20px';
      e.style.border = '1px solid black';
      e.style.height = '20px';
      e.style.background = '#D50606';
      e.style.display = 'none';
      e.style.padding = '0';
      e.style.WebkitUserSelect = 'none';
      e.style.MskitUserSelect = 'none';
      e.style.MozUserSelect = 'none';
      e.style.marginRight = '5px';
    });

    // clicks with buttons
    (function clickButtons() {
      const buttonPrevTwice = document.getElementById('button-prev-twice');
      const buttonPrev = document.getElementById('button-prev');
      const buttonCurrent = document.getElementById('button-current');
      const buttonNext = document.getElementById('button-next');
      const submit = document.getElementById('submit');
      const toolTipNext = document.getElementById('tooltip-next');
      const toolTipPrev = document.getElementById('tooltip-prev');
      const toolTipPrevTwice = document.getElementById('tooltip-prev-twice');
      const components = document.getElementById('components');
      let gridGapOnPage = 0;
      let currentPage = 1;

      const userWidth = window.document.scrollingElement.clientWidth;

      setInterval(() => {
        (function widthOfScreenForGridGapOnPage() {
          if (userWidth > 2100) {
            gridGapOnPage = 12.5;
          } else if (userWidth <= 1920 || userWidth > 1368) {
            gridGapOnPage = 5.3;
          } else if (userWidth <= 1368 || userWidth >= 1000) {
            gridGapOnPage = 8;
          } else if (userWidth <= 600) {
            gridGapOnPage = 100;
          } else if (userWidth <= 400) {
            gridGapOnPage = 3.8;
          }
        }());
      }, 500);

      function visibleButtons() {
        buttonCurrent.style.display = '';
        buttonNext.style.display = '';
        buttonPrev.style.display = 'none';
        buttonPrevTwice.style.display = 'none';
        currentPage = 1;

        buttonCurrent.style.color = 'white';
        buttonCurrent.innerText = currentPage;
      }

      function useButtonNext() {
        buttonCurrent.innerText = '';
        currentPage += 1;
        buttonCurrent.innerText = currentPage;
        toolTipNext.style.display = 'none';

        components.style.scrollBehavior = 'smooth';
        // eslint-disable-next-line no-unused-vars
        let scrollLeft;
        numForPage += userWidth;
        // eslint-disable-next-line max-len
        components.scrollLeft = numForPage + (Math.ceil(userWidth * gridGapOnPage / 100) * (currentPage - 1));

        if (currentPage === 2) {
          buttonPrev.style.display = '';
        }

        if (currentPage === 3) {
          buttonPrevTwice.style.display = '';
        }
      }

      function prevButton() {
        buttonCurrent.innerText = '';
        currentPage -= 1;
        buttonCurrent.innerText = currentPage;
        toolTipPrev.style.display = 'none';
        // eslint-disable-next-line no-unused-vars
        let scrollLeft;
        numForPage -= userWidth;
        // eslint-disable-next-line max-len
        components.scrollLeft = numForPage + (Math.ceil(userWidth * gridGapOnPage / 100) * (currentPage - 1));
        if (currentPage === 1) {
          buttonPrev.style.display = 'none';
          buttonPrevTwice.style.display = 'none';
        }
        if (currentPage === 2) buttonPrevTwice.style.display = 'none';
      }

      function prevTwiceButton() {
        buttonCurrent.innerText = '';
        currentPage -= 2;
        buttonCurrent.innerText = currentPage;
        toolTipPrevTwice.style.display = 'none';

        // eslint-disable-next-line no-unused-vars
        let scrollLeft;
        numForPage -= userWidth * 2;
        // eslint-disable-next-line max-len
        components.scrollLeft = numForPage + (Math.ceil(userWidth * gridGapOnPage / 100) * (currentPage - 1));
        if (currentPage === 1) {
          buttonPrev.style.display = 'none';
          buttonPrevTwice.style.display = 'none';
        }
        if (currentPage === 2) buttonPrevTwice.style.display = 'none';
      }

      function toolTipNextButton() {
        toolTipNext.innerText = currentPage + 1;
        toolTipNext.style.display = '';
        toolTipNext.style.height = '15px';
        toolTipNext.style.width = '15px';
        toolTipNext.style.marginLeft = '3px';
        toolTipNext.style.marginTop = '-46px';
      }
      function toolTipPrevButton() {
        toolTipPrev.innerText = currentPage - 1;
        toolTipPrev.style.display = '';
        toolTipPrev.style.height = '15px';
        toolTipPrev.style.width = '15px';
        toolTipPrev.style.marginLeft = '3px';
        toolTipPrev.style.marginTop = '-46px';
      }
      function toolTipPrevTwiceButton() {
        toolTipPrevTwice.innerText = currentPage - 2;
        toolTipPrevTwice.style.display = '';
        toolTipPrevTwice.style.height = '15px';
        toolTipPrevTwice.style.width = '15px';
        toolTipPrevTwice.style.marginLeft = '3px';
        toolTipPrevTwice.style.marginTop = '-46px';
      }
      (function clickEvents() {
        submit.addEventListener('click', visibleButtons);
        buttonNext.addEventListener('mouseup', useButtonNext);
        buttonPrev.addEventListener('mouseup', prevButton);
        buttonPrevTwice.addEventListener('mouseup', prevTwiceButton);
        buttonNext.addEventListener('mousedown', toolTipNextButton);
        buttonPrev.addEventListener('mousedown', toolTipPrevButton);
        buttonPrevTwice.addEventListener('mousedown', toolTipPrevTwiceButton);
      }());
    }());
  }

  markUpSlider();
}
