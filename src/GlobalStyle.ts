import { css } from '@emotion/react'
import { sky040, sky050 } from './lib/styles/colors'

const fontStyle = css`
  @font-face {
    font-family: 'Spoqa Han Sans Neo';
    font-style: normal;
    font-weight: 100;
    font-display: swap;
    src: url('/fonts/SpoqaHanSansNeo-Thin.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Spoqa Han Sans Neo';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: url('/fonts/SpoqaHanSansNeo-Light.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Spoqa Han Sans Neo';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url('/fonts/SpoqaHanSansNeo-Regular.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Spoqa Han Sans Neo';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url('/fonts/SpoqaHanSansNeo-Medium.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Spoqa Han Sans Neo';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url('/fonts/SpoqaHanSansNeo-Bold.woff2') format('woff2');
  }
`

const globalStyle = css`
  ${fontStyle}

  html {
    font-size: 62.5%;
  }

  html * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    a {
      color: ${sky040};
      text-decoration: none;
      :link {
        text-decoration: none;
      }
      :visited {
        text-decoration: none;
      }
      :hover {
        color: ${sky050};
      }
    }

    h1 {
      font-size: 48px;
      font-weight: bold;
    }
    input {
      padding-bottom: 5px;
    }
    input:-webkit-autofill {
      -webkit-box-shadow: 0 0 0px 1000px #ffffff inset;
      box-shadow: 0 0 0px 1000px #ffffff inset;
    }
  }
  body {
    margin: 0;
    padding: 0;
    font-family: 'Spoqa Han Sans Neo', -apple-system, BlinkMacSystemFont,
      'Helvetica Neue', 'Apple SD Gothic Neo', 'Malgun Gothic', '맑은 고딕',
      나눔고딕, 'Nanum Gothic', 'Noto Sans KR', 'Noto Sans CJK KR', arial, 돋움,
      Dotum, Tahoma, Geneva, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

export default globalStyle
