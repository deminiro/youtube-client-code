export default function Adaptive() {
  async function adaptiveScreens() {
    const { head } = document;
    head.innerHTML
      += '<meta name="viewport" content="width=device-width,initial-scale=1">';
    head.innerHTML += `<style> 
    .items.active {
      background: rgba(255,255,255,0.3);
      cursor: grabbing;
      cursor: -webkit-grabbing;
      transform: scale(1);
      }

      .items {
        transition: all 0.1s;
        transform: scale(0.96);
        cursor: pointer;
        scroll-padding: 0px 0 0 100px;
        grid-gap: 12.5%;
      }
      ::-webkit-scrollbar{
        width: 0px;
        height: 0px;
      }
    @media screen and (max-width: 1920px) {
      .items {
        grid-gap: 5.5%;
      }
    }
    @media screen and (max-width: 1368px) {
      .items {
        grid-gap: 6%;
      }
    }
    @media screen and (max-width: 600px) {
      .items {
        margin-left: 19%;
        grid-gap: 48%;
      }
    }
    @media screen and (max-width: 500px) {
      .items {
        margin-left: 19%;
        grid-gap: 48%;
      }
    }
    @media screen and (max-width: 400px) {
      .items {
        margin-left: 0;
        grid-gap: 4%;
      }
    }
    </style>`;
  }
  adaptiveScreens();
}
