import { gql, useQuery } from '@apollo/client';

const getLogoQuery = gql`
    {
        storeConfig {
            header_logo_src 
            id
            logo_alt
            logo_height
            logo_width
            store_code
        }
}`;

const useLogo = () => {
    return useQuery(getLogoQuery);
}

export default useLogo;