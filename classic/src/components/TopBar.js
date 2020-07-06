import * as React from 'react'
import { useState } from 'react'
import { Tooltip } from 'antd'
import { Dialog, toaster, SideSheet, Pane, Heading, Paragraph, Card, Position } from 'evergreen-ui'
import { AwesomeButtonSocial, AwesomeButton } from 'react-awesome-button'
import 'react-awesome-button/dist/styles.css'
import 'antd/dist/antd.css'

import './AwsomeButtonExtension.css'
import "./TopBar.css"

import donate from "../icons/donate.svg"
import share from "../icons/share.svg"
import menu from "../icons/menu.svg"

import whatsapp from "../icons/whatsapp.js"
import copyLink from "../icons/link.js"
import fb from "../icons/fb.js"
import linkedin from "../icons/linkedin.js"
import insta from "../icons/insta.js"

const shareLink = "https://gvh.sg/"

const TopBar = () => {

    const [isDialogShown, setDialogShown] = useState(false)
    const [isSidePaneShown, setSidePaneShown] = useState(false)

    return (
        <div className="top-bar">
            <img className="menu-icon" src={menu} onClick={ () => setSidePaneShown(true) }/>

            <Tooltip placement="bottom" title="Donate">
                <img className="donate-icon" src={donate} onClick={() => window.open("https://gvh.sg/contribute-funds/", '_blank') }/>
            </Tooltip>

            <Tooltip placement="bottom" title="Share">
                <img className="share-icon" src={ share } onClick={() => setDialogShown(true) } />
            </Tooltip>

            <SideSheet
                isShown={ isSidePaneShown }
                onCloseComplete={ () => setSidePaneShown(false) }
                containerProps={{
                    display: 'flex',
                    flex: '1',
                    flexDirection: 'column',
                }}
                position={ Position.RIGHT }
            >
                <Pane zIndex={1} flexShrink={0} elevation={0} backgroundColor="white">
                    <Pane padding={16}>
                        <Heading size={600}>Project Costs</Heading>
                        <Paragraph size={400}>
                            See what your money goes into!
                        </Paragraph>
                    </Pane>
                </Pane>
                <Pane flex="1" overflowY="scroll" background="tint1" padding={16}>
                    <Card
                        backgroundColor="white"
                        elevation={0}
                        height={240}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Heading></Heading>
                    </Card>
                </Pane>
            </SideSheet>

            <Dialog
                isShown={ isDialogShown }
                title="Share and Follow"
                onCloseComplete={ () => setDialogShown(false) }
                hasFooter={ false }
            >

                <h1 className="evergreen-header">Share</h1>
                <div className="buttons-row">
                    <AwesomeButtonSocial
                        type="facebook"
                        url={ shareLink }
                    >
                        Share
                    </AwesomeButtonSocial>

                    <AwesomeButtonSocial
                        type="twitter"
                        url={ shareLink }
                    >
                        Share
                    </AwesomeButtonSocial> 


                    <AwesomeButton
                        type="secondary"
                        href={ whatsappLink(shareLink) }
                        target="_blank"
                    >
                        { whatsapp }{' '}
                        Share
                    </AwesomeButton>    

                    <AwesomeButton
                        type="primary"
                        onPress={ () => {
                            navigator.clipboard.writeText(shareLink).then(function () {
                                toaster.success("Link successfully copied")
                            }, function () {
                                toaster.danger("Something went wrong, please copy the link from the url bar")
                            })
                        }}>
                            { copyLink }{' '}
                            Copy Link
                    </AwesomeButton>
                </div>

                <h1 className="evergreen-header">Follow</h1>
                <div className="buttons-row">

                    {/* CSS styling for the Awesome Buttons are in AwesomeButtonExtension.css */}
                    <AwesomeButton
                        type="primary"
                        href="https://www.facebook.com/globalvillageforhope"
                        target="_blank"
                        className="fb-self"
                    >
                        { fb }{' '}
                        Follow
                    </AwesomeButton> 

                    <AwesomeButton
                        type="primary"
                        href="https://www.instagram.com/globalvillageforhope/"
                        target="_blank"
                        className="insta-self"
                    >
                        {insta}{' '}
                        Follow
                    </AwesomeButton> 
                    
                    <AwesomeButton
                        type="primary"
                        href="https://www.linkedin.com/company/global-village-for-hope/"
                        target="_blank"
                        className="linkedin-self"
                    >
                        { linkedin }{' '}
                        Follow
                    </AwesomeButton> 
                </div>
            </Dialog>
        </div>
    )
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function isMobileOrTablet() {
    return /(android|iphone|ipad|mobile)/i.test(navigator.userAgent)
}

function whatsappLink(text) {
    return (
        'https://' +
        (isMobileOrTablet() ? 'api' : 'web') +
        '.whatsapp.com/send' +
        '?text=' +
        text
    )
}

export default TopBar