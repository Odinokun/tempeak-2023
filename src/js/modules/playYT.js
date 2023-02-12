module.exports = function () {

  function findVideos() {
    let videos = document.querySelectorAll('.index-about__video-imac');

    if (videos) {
      for (let i = 0; i < videos.length; i++) {
        setupVideo(videos[i]);
      }
    }
  }

  function setupVideo(video) {
    let link = video.querySelector('.index-about__video-bg');
    let media = video.querySelector('.index-about__video-media');
    let button = video.querySelector('.index-about__video-btn');
    let id = parseMediaURL(media);

    video.addEventListener('click', () => {
      let iframe = createIframe(id);

      link.remove();
      button.remove();
      video.appendChild(iframe);
    });

    link.removeAttribute('href');
    video.classList.add('video--enabled');
  }

  function parseMediaURL(media) {
    let regexp = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/maxresdefault\.jpg/i;
    let url = media.src;
    let match = url.match(regexp);

    return match[1];
  }

  function createIframe(id) {
    let iframe = document.createElement('iframe');

    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('src', generateURL(id));
    iframe.classList.add('video__media');

    return iframe;
  }

  function generateURL(id) {
    let query = '?rel=0&showinfo=0&autoplay=1';

    return 'https://www.youtube.com/embed/' + id + query;
  }

  findVideos();

};