import React, { useState, useRef } from 'react';
import { Page, ProfilePic, Company, Tagline, SocialIcons, Footer, ButtonLinks, IconLink, IconWrapper } from "../Styles/Page.style";
import { FaEnvelope, FaInstagramSquare, FaWhatsapp, FaPhone, FaHammer } from "react-icons/fa";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa6";
import { FiGlobe } from "react-icons/fi";



function PageContainer() {
    const [copySuccess, setCopySuccess] = useState('Copy');
    const textAreaRef = useRef(null);

    const CopyToClipboard = async () => {
        const text = textAreaRef.current.textContent;
        try {
            await navigator.clipboard.writeText(text);
            setCopySuccess('Copied');
        } catch (err) {
            console.error('Failed to copy: ', err);
            setCopySuccess('Failed to copy');
        }
    };

    return (
        <>
            <Page>
                <ProfilePic src="https://i.postimg.cc/YSpDp4tm/39344332-C175-4553-BC74-38-BD233-EC69-C-1-201-a.jpg" alt="Weard Company" />
                <Company>Weard Company</Company>
                <Tagline >Too hot to handle. Too cool to hold</Tagline>

                <SocialIcons>
                    <IconLink>
                        <FaPhone /> <span ref={textAreaRef}> 08028974347</span>
                    </IconLink>
                    <IconLink>
                        <div>
                            <button style={{borderRadius: '4px', border: 0 }} onClick={CopyToClipboard}>{copySuccess}</button>
                        </div>
                    </IconLink>
                </SocialIcons>
                <IconWrapper>
                    <ButtonLinks href="https://wa.me/message/ELTH2ZIT4UXGM1"><IconLink><FaWhatsapp /> WhatsApp</IconLink></ButtonLinks>

                    <ButtonLinks href="https://m.facebook.com/people/The-Weard-Company/61551226016408/"><IconLink><FaFacebook /> Facebook</IconLink></ButtonLinks>

                    <ButtonLinks href="https://www.instagram.com/weardcompany?igsh=dWxnN293cWJ3N2gy&utm_source=qr"><IconLink><FaInstagramSquare /> Instagram</IconLink></ButtonLinks>

                    <ButtonLinks href="https://x.com/theweardcompany?s=21">   
                    <IconLink><FaTwitter /> Twitter</IconLink></ButtonLinks>


                    <ButtonLinks href="mailto:inbox@weardcompany.com"><IconLink><FaEnvelope /> Email</IconLink></ButtonLinks>

                    <ButtonLinks href="https://ng.linkedin.com/in/jason-young-58553b280"><IconLink><FaLinkedin /> Linkedin</IconLink></ButtonLinks>

                    <ButtonLinks href="https://www.weardcompany.com"><IconLink><FiGlobe /> Visit Website</IconLink></ButtonLinks>

                </IconWrapper>

                <Footer><p><FaHammer />   
                    <a style={{ textDecoration: "none", color: "goldenrod", fontWeight: "500" }} href="https://github.com/michuyim"> Michuyim</a></p>
                </Footer>
            </Page>
        </>
    );
};

export default PageContainer;