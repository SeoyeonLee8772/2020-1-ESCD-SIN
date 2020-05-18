import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

function Footer(props) {
    return (
        <FooterWarapper className="container-fluid">
            <div className="row">
                <p className="text-white text-center display-5">
                    Developed By Dongguk University Students
                </p>
            </div>
        </FooterWarapper>
    )
}
const FooterWarapper = styled.div`
    background: var(--mainBlue);
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 0px;
    padding: 10px 0px;
    p{
        margin-bottom: 0px;
    }
`
Footer.propTypes = {
}

export default Footer

