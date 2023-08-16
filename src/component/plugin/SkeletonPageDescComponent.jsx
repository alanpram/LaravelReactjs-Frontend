import React from "react";
import Skeleton from "react-loading-skeleton";

const SkeletonPageDescComponent = () => {
    return(
        <div className='skeleton-card'>
            <Skeleton className='skeleton-page-desc'/>
        </div>
    );
}

export default SkeletonPageDescComponent;