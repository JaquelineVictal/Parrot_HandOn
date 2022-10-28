import { Link } from "react-router-dom";
import styled from "styled-components";

type CustomLinkProps = {
  fontSize:number;
  color:string;
}

export const CustomLink = styled(Link)<CustomLinkProps> `
  font-weight: bolder;
  font-size: ${(props) => props.fontSize}px;
  line-height: 19px;
  color: ${(props) => props.color};
  text-decoration: none;
  margin: 40px 0 10px;
`