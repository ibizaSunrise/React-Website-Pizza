import React from 'react'
import { FooterContainer, FooterWrapp, SocialMedia, SocialMediaWrapp, SocialLogo, SocialIcons, SocialIconLink } from './FooterElements'
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin, FaTwitter } from 'react-icons/fa'

 const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrapp>
                <SocialMedia>
                    <SocialMediaWrapp>
                        <SocialLogo to="/">Pizza</SocialLogo>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook" rel="noopener noreferrer">
                                <FaFacebook/>
                            </SocialIconLink>
                    
                            <SocialIconLink href="/" target="_blank" aria-label="Instagram" rel="noopener noreferrer">
                                <FaInstagram/>
                            </SocialIconLink>
                   
                            <SocialIconLink href="/" target="_blank" aria-label="Youtube"
                            rel="noopener noreferrer">
                                <FaYoutube/>
                            </SocialIconLink>
                           
                            <SocialIconLink href="/" target="_blank" aria-label="Twitter" rel="noopener noreferrer">
                                <FaTwitter/>
                            </SocialIconLink>

                            <SocialIconLink href="/" target="_blank" aria-label="Linkedin" rel="noopener noreferrer">
                                <FaLinkedin/>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrapp>
                </SocialMedia>
            </FooterWrapp>
        </FooterContainer>
    )
}

export default Footer;