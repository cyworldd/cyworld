import styled from 'styled-components';
import flex from '../GlobalStyled/flex';


export const StWrap = styled.div`
  width : 100%;
  height : 100vh;
  background-color: ${props => props.theme.bgColor};
  z-index: -5;
`;

export const MainWrap = styled.div`
  ${flex({direction : 'column', justify : 'center'})}
  width : calc(100vh - 53vh);
  /* background-color : ${props => props.main ? 'var(--input-grey)' : 'white'}; */
  background-color: ${props => props.theme.bgColor2};
`
export const MenuBox = styled.div`
  height : 76px;
  width : calc(100vh - 53vh);
  /* position : fixed; */
  /* top : 87px; */
  background-color: ${props => props.theme.bgColor};
  border-bottom: 5px solid;
  border-color: ${props => props.theme.bgColor};;
  ${flex({justify : 'center'})};
`

export const Menus = styled.div`
  height : 100%;
  width : calc(100vh - 77vh);
  ${flex({justify : 'center', align : 'flex-end'})};
  font-size: 20px;
  box-sizing: border-box;
  padding-bottom: 15px;
  border-bottom : 5px solid var(--orange);
  cursor : pointer;
  color : ${props => props.active? 'var(--orange)' : 'var(--black)'};
`

export const MenuTitle = styled.span`
  color : ${props => props.active? 'var(--orange)' : 'var(--black)'};
`

export const MenuBar = styled.div`
  /* height : 5px;
  width : calc(100vh - 78vh);
  background-color: var(--orange);
  border-radius: 10px;
  position : absolute;
  top : 76px;
  left : 4px;
  z-index: 5;
  left : ${props => props.active? '4px' : null }; */
`

export const Followers = styled.div`
  height : 77px;
  width : calc(100vh - 53vh);
  background-color: ${props => props.theme.bgColor};
  color : var(--black);
  font-size: 19px;
  font-weight : 700;
  padding : 0 0 15px 15px;
  box-sizing: border-box;
  /* position : fixed; */
  top : 168px;
  ${flex({align : 'flex-end', justify : 'space-between'})};
`


export const FollowersWrap = styled.div`
  width : 100%;
  height : 100%;
`

export const FollowerList = styled.div`
  width : 100%;
  height: 378px;
  padding-top : 10px;
  overflow: scroll;
  ${flex({align : 'center', justify : 'flex-start' , direction : 'column'})}
  & > .blank {
    height : 220px;
    width : 100%;
  };
`

export const FriendsImg = styled.img`
  width : 80px;
  height: 80px;
  background-color: #C2E8F6;
  border-radius: 30px;
  /* margin-left: 18px;
  margin-right: 18px; */
  margin : ${props => props.official? '0' : '0 18px 0 18px'}; 
`

export const MainMsg = styled.div`
  min-height : 80px;
  width : calc(100vh - 60vh);
  ${flex({ justify : 'center', align : 'center'})};
  & > .main__message {
    font-family: 'DungGeunMo';
    color: ${props => props.theme.textColor};
  }
`
export const OfficialBox = styled.div`
  ${flex({ direction : 'column'})}
  height : 136px;
  width : calc(100vh - 53vh);
  /* position : fixed; */
  /* bottom : 74px; */
  background-color: ${props => props.theme.bgColor};
`

export const OfficialTitle = styled.div`
  width : calc(100vh - 55vh);
  height : 30%;
  color : var(--black);
  ${flex({align : 'flex-end', justify : 'flex-start'})};
  padding : 15px 0 0 15px;
  box-sizing: border-box;
  font-size: 19px;
  font-weight : 700;
`