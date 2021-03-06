import React from "react"

import Menu from "./menu"
import Hamburger from "./hamburger"
import styled from "styled-components"
import { bp } from "../utils/breakpoints"


const NavButton = styled.button`
  display: flex;
  background: #AF4B5A;
  align-items: center;
  border-radius: 24px;
  box-sizing: border-box;
  justify-content: center;
  color: #fff;
  outline:none;
  border: none;
  min-height: 48px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  text-transform: uppercase;
  letter-spacing:0.01em;
  font-size: 14px;
  font-weight: bold;
  line-height:1;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  white-space: nowrap;
  padding: 0 2rem;
  &:hover {
    background: #cb5b6c;
  }
  ${bp.mobile} {
      padding: 0 1rem;
  }
`
const SizedBurger = styled.div`
   width: 20px;
   height: 20px;
   overflow: hidden;
   display:block;
`

const ButtonLabel = styled.span`
margin-right: 1em;
  ${bp.mobile} {
      display: none;
      margin: 0
  }
`


class Navigation extends React.Component {

    render(props) {
        return (
            <>

                <NavButton onClick={() => this.toggleMenu()}>
                    <ButtonLabel>All Chapters</ButtonLabel>
                    <SizedBurger>
                        <Hamburger color="#fff" />
                    </SizedBurger>
                </NavButton>

                <Menu menuLinks={this.props.menuLinks} ref={el => (this.childMenu = el)} />
            </>
        )
    }

    toggleMenu() {
        this.childMenu.open()
    }
}

export default Navigation