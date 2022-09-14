import React, { useMemo } from 'react';
import { string, shape, array } from 'prop-types';

import { useStyle } from '@magento/venia-ui/lib/classify';
import GalleryItem from './item';
import GalleryItemShimmer from '@magento/venia-ui/lib/components/Gallery/item.shimmer';
import defaultClasses from '@magento/venia-ui/lib/components/Gallery/gallery.module.css';
import customStyles from './custom-item.module.css';
import { useGallery } from '@magento/peregrine/lib/talons/Gallery/useGallery';
import { VIEW_MODE } from '../../constants/categoryConstants';

/**
 * Renders a Gallery of items. If items is an array of nulls Gallery will render
 * a placeholder item for each.
 *
 * @params {Array} props.items an array of items to render
 */
const Gallery = props => {
    const { items, viewMode } = props;
    const classes = useStyle(defaultClasses, props.classes, customStyles);
    const talonProps = useGallery();
    const { storeConfig } = talonProps;
    const { GRID } = VIEW_MODE;

    const galleryItems = useMemo(
        () =>
            items.map((item, index) => {
                if (item === null) {
                    return <GalleryItemShimmer key={index} />;
                }
                return (
                    <GalleryItem
                        key={item.id}
                        item={item}
                        storeConfig={storeConfig}
                        viewMode={viewMode}
                    />
                );
            }),
        [items, storeConfig, viewMode]
    );

    return (
        <div
            data-cy="Gallery-root"
            className={classes.root}
            aria-live="polite"
            aria-busy="false"
        >
            <div className={viewMode === GRID ? classes.items : classes.list}>{galleryItems}</div>
        </div>
    );
};

Gallery.propTypes = {
    classes: shape({
        filters: string,
        items: string,
        pagination: string,
        root: string
    }),
    items: array.isRequired
};

export default Gallery;
