import styled from "styled-components/native";
import { BACKGROUND_COLOR_PRIMARY,TITLE_SCREEN_TEXT_COLOR,BACKGROUND_COLOR_SECONDARY } from "assets/colors";

export const CenteredView = styled.View`
  margin-top: 50px;
position: absolute;
height: 100%;
width: 100%;
justify-content: center;
align-items: center;
`;

export const ModalView = styled.View`
    background-color: ${BACKGROUND_COLOR_PRIMARY};
    border-radius: 20px;
    padding: 15px;
    align-items: center;
    width: 290px;
    height: 157px;
`;


export const HeaderView = styled.View`
width: 100%;
height: 30px;
justify-content: center;
align-items: center;
`;

export const MessageText = styled.Text`
color: ${TITLE_SCREEN_TEXT_COLOR};
font-size: 16px;
`;


export const BodyView = styled.View`
margin-top:10px
width: 100%;
height: 30px;
align-items: center;
height: 60px;
`;

export const FooterView = styled.View`
width: 100%;
height: 30px;
justify-content: center;
align-items: center;
`;


export const ModalButton = styled.TouchableOpacity`
background-color: ${BACKGROUND_COLOR_SECONDARY};
width: 120px
height: 30px;
justify-content: center;
align-items: center;
border-radius:30px;
`;


export const ButtomText = styled.Text`
font-size: 16px;
font-weight: bold;
`;
