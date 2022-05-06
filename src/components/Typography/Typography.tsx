import React from 'react';
import TypographyContainer, { TypographyProps } from './TypographyConfig';

/** 
* TYPOGRAPHY COMPONENT 
*/

const Typography = (props: TypographyProps) => {
    return <TypographyContainer role={props.role} fontWeight={props.fontWeight} size={props.size} sx={props.sx}>
        {props.children}
    </TypographyContainer>;
};

export default Typography;