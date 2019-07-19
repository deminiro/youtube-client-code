/* eslint-disable max-len */
export default class AppModel {
  constructor(state) {
    this.state = state;
  }

  static extractClipNames(data, dataStat, identifier) {
    const title = data.items.map(clip => clip.snippet.title);
    const channelTitle = data.items.map(clip => clip.snippet.channelTitle);
    const time = data.items.map(clip => clip.snippet.publishedAt);
    const description = data.items.map(clip => clip.snippet.description);
    const image = data.items.map(clip => clip.snippet.thumbnails.medium.url);
    const viewers = dataStat.items.map(clip => clip.statistics.viewCount);
    const amountOfResults = data.pageInfo.totalResults;
    const { nextPageToken } = data;
    const arr = [];

    for (let i = 0; i < data.pageInfo.resultsPerPage && i < amountOfResults; i += 1) {
      const img = image[i];
      const ttl = title[i];
      const chTtl = channelTitle[i];
      const dateUpload = time[i];
      const amountOfViewers = viewers[i];
      const descr = description[i];
      const ids = identifier[i];
      arr.push({
        img, ttl, chTtl, dateUpload, amountOfViewers, descr, ids,
      });
    }

    const p = document.getElementById('next-page-token-info');
    p.innerText = nextPageToken;
    const channelHeadline = document.getElementsByClassName('clip-components-headline');
    const channelName = document.getElementsByClassName('clip-components-title');
    const clipDate = document.getElementsByClassName('clip-components-date');
    const preview = document.getElementsByClassName('clip-components-preview');
    const amountOfViewers = document.getElementsByClassName('clip-components-viewers');
    const clipDescription = document.getElementsByClassName('clip-components-description');

    // LOOP TO FILL CLIP COMPONENTS WITH INFORMATION //
    for (let j = 0; j < data.pageInfo.resultsPerPage && j < amountOfResults; j += 1) {
      (function infoForComponents() {
        channelHeadline[j].innerHTML = `<a class="anchor" href="https://www.youtube.com/watch?v=${arr[j].ids}" target="_blanket">${arr[j].ttl}</a>`;
        channelHeadline[j].style.background = 'darkgreen';
        channelHeadline[j].style.textAlign = 'center';
        const anchor = document.getElementsByClassName('anchor')[j];
        anchor.style.color = 'white';

        preview[j].style.background = `url('${arr[j].img}') no-repeat`;
        preview[j].style.backgroundSize = '100%';

        channelName[j].innerHTML = `<i class="fas fa-male"></i><div>${arr[j].chTtl}</div>`;

        const timeOfUpload = new Date(arr[j].dateUpload);
        const fullYear = timeOfUpload.getFullYear();
        const month = timeOfUpload.getMonth();
        const correctMonth = Number(month);
        const day = timeOfUpload.getDate();
        clipDate[j].innerHTML = `<i class="fas fa-calendar-alt"></i>${fullYear}-${day}-${correctMonth + 1}`;

        amountOfViewers[j].innerHTML = `<i class="fas fa-eye"></i>${arr[j].amountOfViewers}`;

        clipDescription[j].innerHTML = arr[j].descr;
      }());
    }

    if (arr.length < 15) {
      for (let j = 14; j >= arr.length; j -= 1) {
        const blocksOfClips = document.getElementById('components');
        blocksOfClips.children[j].style.display = 'none';
      }
    }
  }

  async getClipNames() {
    // eslint-disable-next-line prefer-const
    let { url, urlStatistics } = this.state;

    // correct url
    const response = await fetch(url);
    const data = await response.json();
    // Statistics for block 'viewers'

    const identifier = data.items.map(clip => clip.id.videoId);
    const idsFromUrl = data.items.map(clip => clip.id.videoId).toString();
    const idx = urlStatistics.indexOf('&part');
    const sliceEnd = urlStatistics.slice(idx);
    const slice = urlStatistics.slice(0, idx);
    const correctIds = slice.concat(idsFromUrl).concat(sliceEnd);

    // result
    const responseStat = await fetch(correctIds);
    const dataStat = await responseStat.json();

    return AppModel.extractClipNames(data, dataStat, identifier);
  }

  // NEW CHUNK WITH 15 ELEMENTS
  static extractNewClipNames(data, dataStat, identifier) {
    const title = data.items.map(clip => clip.snippet.title);
    const channelTitle = data.items.map(clip => clip.snippet.channelTitle);
    const time = data.items.map(clip => clip.snippet.publishedAt);
    const description = data.items.map(clip => clip.snippet.description);
    const image = data.items.map(clip => clip.snippet.thumbnails.medium.url);
    const viewers = dataStat.items.map(clip => clip.statistics.viewCount);
    const amountOfResults = data.pageInfo.totalResults;
    const { nextPageToken } = data;
    const arr = [];

    for (let i = 0; i < data.pageInfo.resultsPerPage && i < amountOfResults; i += 1) {
      const img = image[i];
      const ttl = title[i];
      const chTtl = channelTitle[i];
      const dateUpload = time[i];
      const amountOfViewers = viewers[i];
      const descr = description[i];
      const ids = identifier[i];
      arr.push({
        img, ttl, chTtl, dateUpload, amountOfViewers, descr, ids,
      });
    }


    const p = document.getElementById('next-page-token-info');
    p.innerText = nextPageToken;
    const channelHeadline = Array.from(document.getElementsByClassName('clip-components-headline'));
    const channelName = Array.from(document.getElementsByClassName('clip-components-title'));
    const clipDate = Array.from(document.getElementsByClassName('clip-components-date'));
    const preview = Array.from(document.getElementsByClassName('clip-components-preview'));
    const amountOfViewers = Array.from(document.getElementsByClassName('clip-components-viewers'));
    const clipDescription = Array.from(document.getElementsByClassName('clip-components-description'));
    global.console.log(clipDate);
    const newChannelHeadline = channelHeadline.slice(channelHeadline.length - 15, channelHeadline.length);
    const newChannelName = channelName.slice(channelName.length - 15, channelName.length);
    const newClipDate = clipDate.slice(clipDate.length - 15, clipDate.length);
    const newPreview = preview.slice(preview.length - 15, preview.length);
    const newAmountOfViewers = amountOfViewers.slice(amountOfViewers.length - 15, amountOfViewers.length);
    const newClipDescription = clipDescription.slice(clipDescription.length - 15, clipDescription.length);
    global.console.log(newClipDate);
    // LOOP TO FILL CLIP COMPONENTS WITH INFORMATION //
    for (let j = 0; j < data.pageInfo.resultsPerPage && j < amountOfResults; j += 1) {
      (function infoForComponents() {
        newChannelHeadline[j].innerHTML = `<a class="anchor" href="https://www.youtube.com/watch?v=${arr[j].ids}" target="_blanket">${arr[j].ttl}</a>`;
        newChannelHeadline[j].style.background = 'darkgreen';
        newChannelHeadline[j].style.textAlign = 'center';

        newPreview[j].style.background = `url('${arr[j].img}') no-repeat`;
        newPreview[j].style.backgroundSize = '100%';

        newChannelName[j].innerHTML = `<i class="fas fa-male"></i><div>${arr[j].chTtl}</div>`;

        const timeOfUpload = new Date(arr[j].dateUpload);
        const fullYear = timeOfUpload.getFullYear();
        const month = timeOfUpload.getMonth();
        const correctMonth = Number(month);
        const day = timeOfUpload.getDate();
        newClipDate[j].innerHTML = `<i class="fas fa-calendar-alt"></i>${fullYear}-${day}-${correctMonth + 1}`;

        newAmountOfViewers[j].innerHTML = `<i class="fas fa-eye"></i>${arr[j].amountOfViewers}`;

        newClipDescription[j].innerHTML = arr[j].descr;
      }());

      const anchor = Array.from(document.getElementsByClassName('anchor'));
      anchor.forEach((e) => { e.style.color = 'white'; });
    }

    if (arr.length < 15) {
      for (let j = 14; j >= arr.length; j -= 1) {
        const blocksOfClips = document.getElementById('components');
        blocksOfClips.children[j].style.display = 'none';
      }
    }
  }

  async getNewClipNames() {
    // eslint-disable-next-line prefer-const
    let { url, urlStatistics } = this.state;
    const p = document.getElementById('next-page-token-info');
    // pageToken

    const nextPageToken = p.innerText;
    const indexOfPageToken = url.indexOf('&pag');
    const copyUrlWithoutPageToken = url.slice(0, indexOfPageToken);
    url = url.concat(`&pageToken=${nextPageToken}`);
    const response = await fetch(url);
    const data = await response.json();
    global.console.log(copyUrlWithoutPageToken, url);
    // correct url
    // Statistics for block 'viewers'

    const identifier = data.items.map(clip => clip.id.videoId);
    const idsFromUrl = data.items.map(clip => clip.id.videoId).toString();
    const idx = urlStatistics.indexOf('&part');
    const sliceEnd = urlStatistics.slice(idx);
    const slice = urlStatistics.slice(0, idx);
    const correctIds = slice.concat(idsFromUrl).concat(sliceEnd);

    // result
    const responseStat = await fetch(correctIds);
    const dataStat = await responseStat.json();

    return AppModel.extractNewClipNames(data, dataStat, identifier);
  }
}
