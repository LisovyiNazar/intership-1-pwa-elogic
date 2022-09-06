import React from 'react';
import Image from '@magento/venia-ui/lib/components/Image';
import { useStyle } from '@magento/venia-ui/lib/classify';
import defaultClasses from '@magento/venia-ui/lib/components/Header/header.module.css';
import { resourceUrl } from '../../drivers';
import useLogo  from "./useLogo";    

const Logo = props => {
    const classes = useStyle(defaultClasses, props.classes);
    const talonProps = useLogo();
    const { data } = talonProps;

    const url = data ? "logo/" + data.storeConfig.header_logo_src : 'https://blueskytechmage.com/drexel/pub/media/logo/stores/2/logo.png';
    const alt = data ? data.storeConfig.logo_alt : null;
    const height = data ? data.storeConfig.logo_height : 25;
    const width = data ? data.storeConfig.logo_width : 120;

    return (
        <Image 
            className={classes.logo}
            src={
                resourceUrl( 
                    url, 
                    {
                        type: 'image-header-logo',
                        width: width
                    }
                )
            }
            height={height}
            alt={alt}
        />
    );
};

export default Logo;