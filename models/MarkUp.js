export default function MarkUp() {
  async function queryBox() {
    // title of webpage
    window.document.title = 'Youtube-client';
    document.body.style.overflowY = 'hidden';
    document.body.style.height = '100vh';
    document.body.style.margin = '0';
    document.body.style.paddingTop = '2%';
    document.body.style.backgroundImage = 'linear-gradient(to bottom, #e32a54, #ee6b9d, #eba3d3, #ebd4f3, #ffffff)';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.fontSize = 'larger';
    const header = document.createElement('header');
    const form = document.createElement('form');
    // icon
    document.head.innerHTML
      += '<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous"></link>';

    // Form
    header.className = 'header';
    document.body.appendChild(header);
    header.style.display = 'flex';
    header.style.width = '100%';
    header.style.height = '46px';
    header.style.justifyContent = 'center';
    header.appendChild(form);
    form.setAttribute('onsubmit', 'return false');
    form.setAttribute(
      'style',
      'width: 60%; justify-content: center; display: flex; border-radius: 2%',
    );

    form.innerHTML
      += '<button type="submit" id="submit"><i class="fas fa-search"></i></button>';
    form.innerHTML
      += '<input type="text" size="40" placeholder="Write your query" id="query">';

    const query = document.getElementById('query');
    const submit = document.getElementById('submit');

    // input with text
    query.style.width = '70%';
    query.style.fontSize = '20px';
    query.style.paddingLeft = '34px';
    query.style.borderRadius = '40px';

    // input with submit
    submit.style.background = 'none';
    submit.style.border = 'none';
    submit.style.position = 'relative';
    submit.style.left = '34px';
  }

  async function clipComponents() {
    const main = document.createElement('main');
    document.body.appendChild(main);

    main.style.display = 'none';
    main.style.marginTop = '0.5%';
    main.innerHTML += '<div id="components" class="items"></div>';
    main.style.height = '533px';

    const blocksOfClips = document.getElementById('components');
    blocksOfClips.setAttribute(
      'style',
      'position: relative; overflow-x: scroll; display: grid; grid-template-columns: repeat(15, 400px); height: 531px; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none;',
    );

    const clipBox = document.getElementsByClassName('clip-components');

    for (let i = 0; i < 15; i += 1) {
      blocksOfClips.innerHTML += '<div class="clip-components"></div>';
      (function leftComponent() {
        clipBox[i].setAttribute(
          'style',
          'height: 523px; position: relative; display: grid; padding-top: 3px; grid-template-rows: 41% 9% 9% 9% 10% 20%; background: white; border: 1px solid black; border-radius: 2%;',
        );
        clipBox[i].innerHTML
          += '<div id="left-box-preview" class="clip-components-preview" style="width: 398px; height: 268px"></div>';
        clipBox[i].innerHTML
          += '<div id="left-box-headline" class="clip-components-headline" style="margin-top: 1px; width: 398px;"></div>';
        clipBox[i].innerHTML
          += '<div id="left-box-title" class="clip-components-title" style="width: 397px"></div>';
        clipBox[i].innerHTML
          += '<div id="left-box-date" class="clip-components-date" style="width: 397px"></div>';
        clipBox[i].innerHTML
          += '<div id="left-box-viewers" class="clip-components-viewers" style="width: 397px"></div>';
        clipBox[i].innerHTML
          += '<div id="left-box-description" class="clip-components-description" style="width: 397px"></div>';
      }());
    }

    (function styleClipComponents() {
      const clipComponentsTitle = Array.from(
        document.getElementsByClassName('clip-components-title'),
      );
      const clipComponentsDate = Array.from(
        document.getElementsByClassName('clip-components-date'),
      );
      const clipComponentsViewers = Array.from(
        document.getElementsByClassName('clip-components-viewers'),
      );
      const clipComponentsDescription = Array.from(
        document.getElementsByClassName('clip-components-description'),
      );

      clipComponentsTitle.forEach((e) => {
        e.style.display = 'grid';
        e.style.gridTemplateColumns = '15% 80%';
        e.style.paddingTop = '7%';
        e.style.paddingLeft = '9%';
      });
      clipComponentsDate.forEach((e) => {
        e.style.display = 'grid';
        e.style.gridTemplateColumns = '15% 80%';
        e.style.paddingTop = '7%';
        e.style.paddingLeft = '7%';
      });
      clipComponentsViewers.forEach((e) => {
        e.style.display = 'grid';
        e.style.gridTemplateColumns = '15% 80%';
        e.style.paddingTop = '7%';
        e.style.paddingLeft = '6%';
      });
      clipComponentsDescription.forEach((e) => {
        e.style.background = '';
      });
    }());

    // function for create dom element for save nextPageToken
    (function nextPageToken() {
      const p = document.createElement('p');
      document.body.appendChild(p);
      p.setAttribute('id', 'next-page-token-info');
      p.style.display = 'none';
    }());
  }
  queryBox();
  clipComponents();
}
