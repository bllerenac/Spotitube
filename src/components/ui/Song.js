/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Icons from "./Icons";
import X_Y from '../../assets/logo/X&Y.png'
//import Colors from "./Colors";
import {AiOutlineHeart} from 'react-icons/ai'
import {PlayPause, ChangeColorHeart} from '../../utils/SongEvents'


export default function Song({name, img_url, artist_name, album_name, date, time}) {
  return (
    <SongListStyled>
      <SongId>
        <p id="song_id">1</p>
        <img alt="equal.img" css={css`width: 14px; height: 14px;`} id="song_equal" src="https://open.scdn.co/cdn/images/equaliser-animated-green.73b73928.gif" className="hide"/>
        <StyledPlay id="controls_song" onClick={PlayPause}>
          <img alt="play_filled.svg" src={Icons.play_filled} className="play"/>
          <img alt="play_filled.svg" className="pause hide" src={Icons.stop}/>
        </StyledPlay>
      </SongId>
      <SongInfo>
        <img alt="album.img" src={img_url ? img_url:X_Y} css={css`width:40px; height: 40px;`}/>
        <div>
          <p id="song_name">{name ? name:"NameSong"}</p>
          <p id="artist">{artist_name ? artist_name:"ArtisSong"}</p>
        </div>
      </SongInfo>
      <p id="album">{album_name ? album_name:"NameAlbum"}</p>
      <p>{date ? date:"29 de Mazdo del 2021"}</p>
      <SongTime>
        <svg id="heart" onClick={ChangeColorHeart} role="img" height="16" width="16" viewBox="0 0 16 16" className="Svg-ulyrgf-0 hJgLcF">
          <path className="heart" d="M13.764 2.727a4.057 4.057 0 00-5.488-.253.558.558 0 01-.31.112.531.531 0 01-.311-.112 4.054 4.054 0 00-5.487.253A4.05 4.05 0 00.974 5.61c0 1.089.424 2.113 1.168 2.855l4.462 5.223a1.791 1.791 0 002.726 0l4.435-5.195A4.052 4.052 0 0014.96 5.61a4.057 4.057 0 00-1.196-2.883zm-.722 5.098L8.58 13.048c-.307.36-.921.36-1.228 0L2.864 7.797a3.072 3.072 0 01-.905-2.187c0-.826.321-1.603.905-2.187a3.091 3.091 0 012.191-.913 3.05 3.05 0 011.957.709c.041.036.408.351.954.351.531 0 .906-.31.94-.34a3.075 3.075 0 014.161.192 3.1 3.1 0 01-.025 4.403z" fill="currentColor" />
          <path className="fill_heart hide" d="M13.797 2.727a4.057 4.057 0 00-5.488-.253.558.558 0 01-.31.112.531.531 0 01-.311-.112 4.054 4.054 0 00-5.487.253c-.77.77-1.194 1.794-1.194 2.883s.424 2.113 1.168 2.855l4.462 5.223a1.791 1.791 0 002.726 0l4.435-5.195a4.052 4.052 0 001.195-2.883 4.057 4.057 0 00-1.196-2.883z" fill="currentColor" />
        </svg>
        <p>{time ? time:"3:00"}</p>
        <svg role="img" height="16" width="16" viewBox="0 0 16 16" className="Svg-ulyrgf-0 hJgLcF">
          <path d="M2 6.5a1.5 1.5 0 10-.001 2.999A1.5 1.5 0 002 6.5zm6 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm6 0a1.5 1.5 0 10-.001 2.999A1.5 1.5 0 0014 6.5z" fill="currentColor">
          </path>
        </svg>
      </SongTime>
    </SongListStyled>
  )
}

const SongListStyled = styled.div`
  display:grid;
  height: 56px;
  padding: 0 16px;
  grid-gap: 16px;
  grid-template-columns: [index] 16px [first] 6fr [var1] 4fr [var2] 3fr [last] minmax(120px,1fr);
  border: 1px solid transparent;
  border-radius: 4px;
  align-items: center;
  & p{
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: normal;
    text-transform: none;
    color: #b3b3b3;
  }
  &:hover{
    cursor: pointer;
    background-color: hsla(0,0%, 40%,.3);
    &:hover{
      & #song_id, #song_equal{
        display: none;
        
      }
      & #controls_song, #heart{
        display: flex;
        opacity: 1;
      }
      & #artist,#album{
        color: #FFFFFF;
      }
    }
  }
`;

const SongId = styled.div`
  & #song_id{
    text-align: center;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: normal;
    text-transform: none;
  }
`;

const StyledPlay = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  box-sizing: border-box;
  & img {
    width: 16px;
    height: 16px;
  }
`;

const SongInfo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  & #song_name{
    font-family: 'Milliard Book';
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: normal;
    text-transform: none;
    color: #FFFFFF;
  }
`;

const SongTime = styled.div`
    display: flex;
    justify-self: end;
    -webkit-box-align: center;
    align-items: center;
    grid-column: last;
    gap: 16px;
    & #heart{
      opacity: 0;
    }
`;