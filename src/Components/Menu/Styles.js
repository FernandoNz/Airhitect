import styled from "styled-components"
import { Bars } from "@styled-icons/fa-solid/Bars"
import { Times } from "@styled-icons/fa-solid/Times"

const menuIsActive = ({ active }) =>
	active ? "translate(0, 0);" : "translate(0, -100%);"

const MenuContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	top: 0px;
	bottom: 0px;
	right: 0px;
	left: 0px;
	z-index: 998;
	width: 100%;
	background-color: black;
	color: white;
	transform: ${menuIsActive};
	transition: transform 0.3s ease;

	li {
		list-style: none;
		font-size: 24px;
		font-weight: 300;
		padding: 10px;
		transition: 0.2s;
	}

	li:hover {
		font-weight: 700;
		cursor: pointer;
	}
`

const IconBars = styled(Bars)`
	position: fixed;
	height: 30px;
	width: 30px;
	background: black;
	padding: 10px;
	top: 20px;
	right: 20px;
	z-index: 999;
	color: white;
`
const IconTimes = styled(Times)`
	position: fixed;
	height: 30px;
	width: 30px;
	top: 20px;
	right: 20px;
	z-index: 999;
	color: white;
`
export { MenuContainer, IconBars, IconTimes }
