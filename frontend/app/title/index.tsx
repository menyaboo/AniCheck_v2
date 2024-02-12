import {useSelector} from "react-redux";
import {router} from "expo-router";
import {WebView} from 'react-native-webview';

import {ScreenView} from "../../src/styles/global";
import {colors} from "../../src/styles/variables";
import {TitleItem} from '../../src/components/home-screen/title-item';
import {RootState} from "../../src/store";

const TitlePage = () => {
  const title = useSelector((state: RootState) => state.title.title);

  if (!title)
    return router.push('/not-found')

  const {player} = title

  const htmlContent = `
    <!doctype html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
                   <meta http-equiv="X-UA-Compatible" content="ie=edge">
       <title>Document</title>
    </head>
    <style>
      * {
        margin: 0;
        padding: 0;
        height: 100vh;
        background-color: ${colors.background};
      }
    </style>
    <body>
      <iframe
        src="https:${title.player.alternative_player}&amp;token=fac0bd7232ff0009ea14c8bf3df165"
        frameborder="0" scrolling="no"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        AllowFullScreen allow="autoplay *; fullscreen *"
        width="100%" height="100%"
        >
      </iframe>
    </body>
    </html>
  `;

  return (
    <ScreenView>
      <TitleItem title={title}/>
      <WebView
        style={{ marginBottom: 100, height: 300, width: '100%'}}
        source={{html: htmlContent}}
      />
    </ScreenView>
  );


};

export default TitlePage