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
    const url = "logo/" + data.storeConfig.header_logo_src;
    const alt = data.storeConfig.logo_alt != null ? data.storeConfig.logo_alt : 'none';

    return (
        <Image 
            className={classes.logo}
            src={
                resourceUrl( 
                    url, 
                    {
                        type: 'image-header-logo',
                        width: data.storeConfig.logo_width
                    }
                )
            }
            height={data.storeConfig.logo_height}
            alt={alt}
        />
    );
};

export default Logo;