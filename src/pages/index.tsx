import type { NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';

import { BackImageLeft } from '../components/backImageLeft';
import { BackImageRight } from '../components/backImageRight';
import { Logo } from '../components/logo';
import { Arrow } from '../components/arrow';
import { InputBox } from '../components/inputBox';
import { SelectBox } from '../components/selectBox';
import { Button } from '../components/button';
import { Checkbox } from '../components/checkbox';

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 604px;
  margin: auto 0;

  @media only screen and (max-width: 600px) {
    display: block;
    height: 100%;
  }

  `;

const LeftImage = styled.div`
  position: relative;
  right: 392.24px;
  display: flex;
  vertical-align: middle;
  z-index: 0;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const RightImage = styled.div`
  position: absolute;
  bottom: 60px;
  right: 0;
  display: flex;
  z-index: 0;
`;

const ImgFrame = styled.div`
  margin: auto 0;
`;

const CenterTexts = styled.div`
  position: relative;
  height: 345px;
  margin: auto 0;
  width: 570px;
  right: 377px;
  z-index:999;

  @media only screen and (max-width: 600px) {
    right: 0;
    margin: auto 16px;
    width: auto;
    height: 207px
  }
`;

const CenterTextsFrame1 = styled.div`
    height: 100px;
    vertical-align: middle;
    display: flex;

  span {
    align-self: center;
    color: #00484C;
    font-family: Open Sans, sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    line-height: 31px;

  }

  @media only screen and (max-width: 600px) {
    height: 70px
  }
`;

const FrameLogo = styled.div`
  display: flex;
  padding: 0 10px;
`;

const CenterTextsFrame2 = styled.div`
    height: 100px;
    vertical-align: middle;
    display: flex;

  span {
    align-self: center;
    color: #FFFFFF;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 900;
    font-size: 45px;
    line-height: 54px;
    /* or 112% */

    letter-spacing: -0.02em;
  }

  @media only screen and (max-width: 600px) {
    height: auto;
    span {
      font-style: normal;
      font-weight: 900;
      font-size: 24px;
      line-height: 28px;
    }
  }
`;

const CenterTextsFrame3 = styled.div`
    height: 25px;
    vertical-align: middle;
    display: flex;
    margin-top: 36px;

  span {
    align-self: center;
    color: #000000;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
  }

  @media only screen and (max-width: 600px) {
    height: 60px;
    width: 295px;
    margin: 0;

    span {
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
    }
  }
`;

const CenterTextsFrame4 = styled.div`
    height: 67px;
    vertical-align: middle;
    display: flex;
    justify-content: end;

    @media only screen and (max-width: 600px) {
      display: none;
    }
`;

const FrameArrow = styled.div`
  display: flex;
  position: relative;
  right: -10px;
`;

const ContainerForm = styled.div`
  background-color: #E9DAC1;
  padding: 32px;
  position: relative;
  height: 475px;
  width: 384px;
  margin: auto 0;
  right: 328px;
  z-index: 999;
  border-radius: 5px;
  box-shadow: 3px 6px 10px 0px #00000047;

  @media only screen and (max-width: 600px) {
    right: 0;
    width: auto;
    margin: 0 16px;
    padding: 16px;
    height: 400px;
  }
`;

const Space = styled.div`
  height: 20px;

  @media only screen and (max-width: 600px) {
    height: 10px;
  }
`;

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Loja Virtual - teste Front End</title>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Tenda - CHallenge" />
        <meta property="og:image" content="https://www.casasalea.com/img/capa-de-compartilhamento-home.jpg" />
        <meta property="og:site_name" content="tenda-challange.vercel.app/" />
        <meta property="og:url" content="https://tenda-challange.vercel.app/" />
        <meta property="og:description" content="Casa Alea - Tenda Challenge" />
        <meta name="description" content="Casa Alea - Tenda Challenge" />
        <link rel="shortcut icon" type="image/x-icon" href="/alea_favicon.png"></link>
        <link rel="icon" href="/alea_favicon.png" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" />
      </Head>

      <Container>

        <LeftImage>
          <ImgFrame>
            <BackImageLeft />
          </ImgFrame>
        </LeftImage>

        <CenterTexts>
          <CenterTextsFrame1>
            <span>Loja Virtual</span>
            <FrameLogo>
              <Logo />
            </FrameLogo>
          </CenterTextsFrame1>
          <CenterTextsFrame2>
            <span>
              A casa dos seus sonhos. Poss??vel. Acess??vel. Vi??vel.
            </span>
          </CenterTextsFrame2>
          <CenterTextsFrame3>
            <span>
              Saia do aluguel e conquiste a sua Alea. D?? o primeiro passo agora!
            </span>
          </CenterTextsFrame3>
          <CenterTextsFrame4>
            <FrameArrow>
              <Arrow />
            </FrameArrow>
          </CenterTextsFrame4>
        </CenterTexts>

        <ContainerForm>
          <form>
            <SelectBox owner="material" name="PinDrop" />
            <Space />
            <InputBox owner="material" name="PersonOutline" type="text" placeHolder="Digite seu nome" />
            <Space />
            <InputBox owner="remix-line" name="Whatsapp" type="tel" placeHolder="Digite seu WhatsApp" />
            <Space />
            <Button text="Quero uma Alea" />
            <Space />
            <Checkbox text="Concordo e estou ciente que ap??s o envio da minha documenta????o para an??lise de cr??dito de financiamento imobili??rio pela Caixa Econ??mica Federal, uma nova avalia????o de financiamento somente poder?? ocorrer ap??s 90 dias contados a partir do envio das documenta????es, seja pela pr??pria Tenda ou por outra construtora." />
            <Space />
            <Checkbox text="Quero receber promo????es exclusivas por e-mail e telefone." />
          </form>
        </ContainerForm>

        <RightImage>
          <ImgFrame>
            <BackImageRight />
          </ImgFrame>
        </RightImage>


      </Container>

    </>
  );
};

export default Home;
